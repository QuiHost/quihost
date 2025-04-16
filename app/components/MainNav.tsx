import Link from 'next/link'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"

export function MainNav() {
  return (
    <header className="border-b">
      <div className="flex h-16 items-center px-4 max-w-7xl mx-auto">
        <div className="flex items-center space-x-8">
          <Link href="/" className="flex items-center space-x-2">
            <Image
              src="/logo.svg"
              alt="Host Hero"
              width={40}
              height={40}
            />
            <span className="font-semibold text-xl">
              Host <span className="text-yellow-500">Hero</span>
            </span>
          </Link>
          
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <Link href="/per-host" className="text-gray-600 hover:text-gray-900 px-3 py-2">
                  Per Host
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link href="/per-addetti" className="text-gray-600 hover:text-gray-900 px-3 py-2">
                  Per Addetti
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuTrigger className="text-gray-600 hover:text-gray-900">
                  Funzionalità
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <div className="grid grid-cols-3 gap-4 p-6 w-[600px]">
                    <Link href="/funzionalita/gestione-calendario" className="group">
                      <div className="p-4 hover:bg-gray-50 rounded-lg transition-colors">
                        <h3 className="text-sm font-medium mb-1">Gestione Calendario</h3>
                        <p className="text-sm text-gray-500">Sincronizza e gestisci tutti i tuoi appuntamenti</p>
                      </div>
                    </Link>
                    <Link href="/funzionalita/pagamenti-automatici" className="group">
                      <div className="p-4 hover:bg-gray-50 rounded-lg transition-colors">
                        <h3 className="text-sm font-medium mb-1">Pagamenti Automatici</h3>
                        <p className="text-sm text-gray-500">Gestisci pagamenti e fatturazione in automatico</p>
                      </div>
                    </Link>
                    <Link href="/funzionalita/controllo-qualita" className="group">
                      <div className="p-4 hover:bg-gray-50 rounded-lg transition-colors">
                        <h3 className="text-sm font-medium mb-1">Controllo Qualità</h3>
                        <p className="text-sm text-gray-500">Monitora e mantieni alti standard di pulizia</p>
                      </div>
                    </Link>
                    <Link href="/funzionalita/gestione-team" className="group">
                      <div className="p-4 hover:bg-gray-50 rounded-lg transition-colors">
                        <h3 className="text-sm font-medium mb-1">Gestione Team</h3>
                        <p className="text-sm text-gray-500">Coordina il tuo team di pulizie</p>
                      </div>
                    </Link>
                    <Link href="/funzionalita/checklist" className="group">
                      <div className="p-4 hover:bg-gray-50 rounded-lg transition-colors">
                        <h3 className="text-sm font-medium mb-1">Checklist</h3>
                        <p className="text-sm text-gray-500">Crea e gestisci checklist personalizzate</p>
                      </div>
                    </Link>
                    <Link href="/funzionalita/reportistica" className="group">
                      <div className="p-4 hover:bg-gray-50 rounded-lg transition-colors">
                        <h3 className="text-sm font-medium mb-1">Reportistica</h3>
                        <p className="text-sm text-gray-500">Analizza le performance del tuo business</p>
                      </div>
                    </Link>
                    <Link href="/funzionalita/comunicazione" className="group">
                      <div className="p-4 hover:bg-gray-50 rounded-lg transition-colors">
                        <h3 className="text-sm font-medium mb-1">Comunicazione</h3>
                        <p className="text-sm text-gray-500">Gestisci la comunicazione con il team</p>
                      </div>
                    </Link>
                    <Link href="/funzionalita/materiali" className="group">
                      <div className="p-4 hover:bg-gray-50 rounded-lg transition-colors">
                        <h3 className="text-sm font-medium mb-1">Gestione Materiali</h3>
                        <p className="text-sm text-gray-500">Traccia l'inventario dei materiali di pulizia</p>
                      </div>
                    </Link>
                    <Link href="/funzionalita/supporto" className="group">
                      <div className="p-4 hover:bg-gray-50 rounded-lg transition-colors">
                        <h3 className="text-sm font-medium mb-1">Supporto 24/7</h3>
                        <p className="text-sm text-gray-500">Assistenza dedicata sempre disponibile</p>
                      </div>
                    </Link>
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link href="/prezzi" className="text-gray-600 hover:text-gray-900 px-3 py-2">
                  Prezzi
                </Link>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>

        <div className="ml-auto flex items-center space-x-4">
          <select className="text-sm text-gray-600 bg-transparent border-none">
            <option value="it">Italiano</option>
            <option value="en">English</option>
          </select>
          
          <Link href="/accedi">
            <Button variant="ghost">Accedi</Button>
          </Link>
          
          <Link href="/registrati">
            <Button>Registrati</Button>
          </Link>
        </div>
      </div>
    </header>
  )
} 