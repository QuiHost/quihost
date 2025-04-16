import { NextResponse } from 'next/server'
import sharp from 'sharp'
import { writeFile, mkdir, unlink, readdir } from 'fs/promises'
import path from 'path'

// Limite di 5MB
const MAX_FILE_SIZE = 5 * 1024 * 1024
// Dimensione massima dell'immagine del profilo
const MAX_IMAGE_DIMENSION = 500

async function deleteOldProfilePhotos(userId: string) {
  const uploadDir = path.join(process.cwd(), 'public', 'uploads', 'profile-photos')
  try {
    const files = await readdir(uploadDir)
    // Cerca file che iniziano con l'ID utente
    const userFiles = files.filter(file => file.startsWith(`${userId}-`))
    // Elimina tutti i file trovati
    await Promise.all(userFiles.map(file => 
      unlink(path.join(uploadDir, file))
    ))
  } catch (error) {
    console.error('Errore durante l\'eliminazione delle vecchie foto:', error)
  }
}

async function saveImageLocally(buffer: Buffer, userId: string, originalFileName: string): Promise<string> {
  // Crea il percorso della directory se non esiste
  const uploadDir = path.join(process.cwd(), 'public', 'uploads', 'profile-photos')
  await mkdir(uploadDir, { recursive: true })

  // Elimina le vecchie foto dell'utente
  await deleteOldProfilePhotos(userId)

  // Estrai l'estensione dal file originale o usa .jpg di default
  const fileExt = path.extname(originalFileName) || '.jpg'
  
  // Genera un nome file con userId e timestamp
  const uniqueFileName = `${userId}-${Date.now()}${fileExt}`
  const filePath = path.join(uploadDir, uniqueFileName)

  // Salva il file
  await writeFile(filePath, buffer)

  // Restituisci l'URL relativo per accedere all'immagine
  return `/uploads/profile-photos/${uniqueFileName}`
}

export async function POST(request: Request) {
  try {
    const formData = await request.formData()
    const file = formData.get('file') as File
    const userId = formData.get('userId') as string

    if (!file || !userId) {
      return NextResponse.json(
        { error: 'File o userId mancante' },
        { status: 400 }
      )
    }

    // Verifica il tipo di file
    if (!file.type.startsWith('image/')) {
      return NextResponse.json(
        { error: 'Il file deve essere un\'immagine' },
        { status: 400 }
      )
    }

    // Verifica la dimensione del file
    if (file.size > MAX_FILE_SIZE) {
      return NextResponse.json(
        { error: 'L\'immagine non può superare i 5MB' },
        { status: 400 }
      )
    }

    // Converti il File in Buffer
    const buffer = Buffer.from(await file.arrayBuffer())

    // Ottimizza l'immagine
    const optimizedImageBuffer = await sharp(buffer)
      .resize(MAX_IMAGE_DIMENSION, MAX_IMAGE_DIMENSION, {
        fit: 'cover',
        position: 'center'
      })
      .jpeg({ quality: 80 })
      .toBuffer()

    // Salva l'immagine localmente (questo eliminerà anche le vecchie foto)
    const imageUrl = await saveImageLocally(optimizedImageBuffer, userId, file.name)

    return NextResponse.json({
      success: true,
      message: 'Immagine caricata con successo',
      url: imageUrl
    })

  } catch (error) {
    console.error('Errore durante l\'upload dell\'immagine:', error)
    return NextResponse.json(
      { error: 'Errore durante il caricamento dell\'immagine' },
      { status: 500 }
    )
  }
} 