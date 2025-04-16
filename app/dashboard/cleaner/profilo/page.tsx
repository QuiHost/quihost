'use client'

import { useSession } from 'next-auth/react'
import { useState, useEffect, useRef } from 'react'
import { Loader } from '@googlemaps/js-api-loader'
import Image from 'next/image'

export default function ProfilePage() {
  const { data: session } = useSession()
  const [address, setAddress] = useState('')
  const [cantFindAddress, setCantFindAddress] = useState(false)
  const [showMap, setShowMap] = useState(false)
  const mapRef = useRef<HTMLDivElement>(null)
  const autocompleteInputRef = useRef<HTMLInputElement>(null)
  const [map, setMap] = useState<google.maps.Map | null>(null)
  const [marker, setMarker] = useState<google.maps.Marker | null>(null)
  const [imagePreview, setImagePreview] = useState<string | null>(null)
  const fileInputRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    if (!cantFindAddress) {
      initializeGoogleAutocomplete()
    }
  }, [cantFindAddress])

  async function initializeGoogleAutocomplete() {
    if (!autocompleteInputRef.current) return

    try {
      const loader = new Loader({
        apiKey: 'AIzaSyAVgPASFO6Kzj6sbLPHHtX-3DlGlwKu1Kg',
        version: 'weekly',
        libraries: ['places']
      })

      const google = await loader.load()

      const autocomplete = new google.maps.places.Autocomplete(autocompleteInputRef.current, {
        types: ['address'],
        componentRestrictions: { country: 'IT' },
        fields: ['formatted_address', 'geometry']
      })

      autocomplete.addListener('place_changed', async () => {
        const place = autocomplete.getPlace()
        if (place.geometry && place.geometry.location) {
          setAddress(place.formatted_address || '')
          setShowMap(true)
          
          // Initialize map after place is selected
          if (!map && mapRef.current) {
            const mapInstance = new google.maps.Map(mapRef.current, {
              center: place.geometry.location,
              zoom: 16,
              disableDefaultUI: true,
              zoomControl: true
            })
            setMap(mapInstance)

            const newMarker = new google.maps.Marker({
              map: mapInstance,
              position: place.geometry.location,
              animation: google.maps.Animation.DROP
            })
            setMarker(newMarker)
          } else if (map) {
            map.setCenter(place.geometry.location)
            map.setZoom(16)
            
            if (marker) {
              marker.setMap(null)
            }
            
            const newMarker = new google.maps.Marker({
              map: map,
              position: place.geometry.location,
              animation: google.maps.Animation.DROP
            })
            setMarker(newMarker)
          }
        }
      })

    } catch (error) {
      console.error('Errore nel caricamento di Google Maps:', error)
    }
  }

  // Reset map visibility when checkbox is checked
  useEffect(() => {
    if (cantFindAddress) {
      setShowMap(false)
      setAddress('')
    }
  }, [cantFindAddress])

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault()
    e.stopPropagation()
  }

  const handleDrop = async (e: React.DragEvent) => {
    e.preventDefault()
    e.stopPropagation()
    
    const file = e.dataTransfer.files[0]
    if (file && file.type.startsWith('image/')) {
      await handleImageUpload(file)
    }
  }

  const handleFileSelect = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) {
      await handleImageUpload(file)
    }
  }

  const handleImageUpload = async (file: File) => {
    // Create preview
    const reader = new FileReader()
    reader.onloadend = () => {
      setImagePreview(reader.result as string)
    }
    reader.readAsDataURL(file)

    // Prepare form data for upload
    const formData = new FormData()
    formData.append('file', file)
    formData.append('userId', session?.user?.id || '')

    try {
      const response = await fetch('/api/upload/profile-photo', {
        method: 'POST',
        body: formData
      })

      if (!response.ok) {
        throw new Error('Errore nel caricamento dell\'immagine')
      }

      const data = await response.json()
      if (data.success) {
        setImagePreview(data.url)
      } else {
        throw new Error(data.error)
      }
    } catch (error) {
      console.error('Errore nel caricamento dell\'immagine:', error)
      setImagePreview(null)
    }
  }

  return (
    <div className="max-w-7xl mx-auto">
      {/* Personal Information */}
      <div className="bg-white rounded-lg p-8 mb-8">
        <h2 className="text-xl font-semibold mb-6">Informazioni personali</h2>
        
        <div className="flex gap-8">
          {/* Profile Photo */}
          <div className="w-48">
            <div
              className="border-2 border-dashed border-gray-300 rounded-lg p-4 text-center cursor-pointer hover:border-[#00A5A5] transition-colors relative"
              onDragOver={handleDragOver}
              onDrop={handleDrop}
              onClick={() => fileInputRef.current?.click()}
            >
              {imagePreview ? (
                <div className="relative w-32 h-32 mx-auto">
                  <Image
                    src={imagePreview}
                    alt="Foto profilo"
                    fill
                    className="rounded-full object-cover"
                  />
                </div>
              ) : (
                <>
                  <div className="w-32 h-32 mx-auto mb-2 bg-gray-100 rounded-full flex items-center justify-center">
                    <svg className="w-12 h-12 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                  </div>
                  <div className="text-sm text-gray-600 mb-1">Foto del profilo</div>
                  <div className="text-sm text-gray-500">
                    Trascinare e rilasciare o fare clic per caricare un&apos;immagine
                  </div>
                </>
              )}
              <input
                ref={fileInputRef}
                type="file"
                className="hidden"
                accept="image/*"
                onChange={handleFileSelect}
              />
            </div>
          </div>

          {/* Name Fields */}
          <div className="flex-1 grid grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Nome</label>
              <input
                type="text"
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#00A5A5] focus:border-transparent"
                defaultValue={session?.user?.name?.split(' ')[0] || 'Ciccio'}
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Cognome</label>
              <input
                type="text"
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#00A5A5] focus:border-transparent"
                defaultValue={session?.user?.name?.split(' ')[1] || 'Trippa'}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Address */}
      <div className="bg-white rounded-lg p-8 mb-8">
        <h2 className="text-xl font-semibold mb-6">Address</h2>
        
        <div className="flex gap-6">
          <div className="flex-1">
            <label className="block text-sm font-medium text-gray-700 mb-1">Ubicazione</label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <svg className="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <input
                ref={autocompleteInputRef}
                type="text"
                className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#00A5A5] focus:border-transparent"
                placeholder="Cerca indirizzo..."
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                disabled={cantFindAddress}
              />
            </div>
            
            <div className="mt-4">
              <label className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  className="form-checkbox h-4 w-4 text-[#00A5A5] rounded border-gray-300 focus:ring-[#00A5A5]"
                  checked={cantFindAddress}
                  onChange={(e) => setCantFindAddress(e.target.checked)}
                />
                <span className="text-sm text-gray-700">Non posso trovare il mio indirizzo</span>
              </label>
            </div>
          </div>

          {/* Map - only shown after address is selected */}
          {showMap && !cantFindAddress && (
            <div className="w-96">
              <div ref={mapRef} className="h-[200px] w-full rounded-lg overflow-hidden border border-gray-200"></div>
            </div>
          )}
        </div>
      </div>

      {/* Save Button */}
      <div className="flex justify-end">
        <button className="px-6 py-2 bg-[#00A5A5] text-white rounded-lg hover:bg-[#008F8F] transition-colors">
          Salvare
        </button>
      </div>
    </div>
  )
} 