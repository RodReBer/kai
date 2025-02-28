import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-blue-100 to-purple-100 flex flex-col items-center justify-center p-4">
      <Card className="w-full max-w-md bg-white shadow-lg rounded-xl overflow-hidden">
        <CardContent className="p-6">
          <div className="text-center space-y-4">
            <h1 className="text-2xl font-bold text-purple-700">Búsqueda del Tesoro Especial</h1>
            <p className="text-gray-600">
              Hola! He preparado una pequeña aventura para ti. Sigue las pistas y encuentra un mensaje especial.
            </p>
            <div className="py-4">
              <p className="text-purple-600 font-medium">Primera pista:</p>
              <p className="italic mt-2">
                "Para comenzar esta aventura, busca la estrella dorada que brilla con luz propia."
              </p>
            </div>
            <Link href="/step1" className="block">
              <Button className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white font-medium py-2 px-6 rounded-full transition-all duration-300 transform hover:scale-105">
                ¡Comenzar la aventura!
              </Button>
            </Link>
          </div>
        </CardContent>
      </Card>
    </main>
  )
}

