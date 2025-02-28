"use client"

import { useState } from "react"
import Link from "next/link"
import { Star } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { motion } from "framer-motion"

export default function Step1() {
  const [starClicked, setStarClicked] = useState(false)

  return (
    <main className="min-h-screen bg-gradient-to-b from-blue-100 to-purple-100 flex flex-col items-center justify-center p-4">
      <Card className="w-full max-w-md bg-white shadow-lg rounded-xl overflow-hidden">
        <CardContent className="p-6">
          <div className="text-center space-y-4">
            <h1 className="text-2xl font-bold text-purple-700">Paso 1: La Estrella Dorada</h1>

            {!starClicked ? (
              <div className="py-8 flex flex-col items-center">
                <p className="text-gray-600 mb-6">Busca la estrella dorada y haz clic en ella para continuar...</p>
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="cursor-pointer"
                  onClick={() => setStarClicked(true)}
                >
                  <Star size={80} className="text-yellow-400 filter drop-shadow-md" />
                </motion.div>
              </div>
            ) : (
              <div className="py-8 space-y-4">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  <p className="text-green-600 font-medium">¡Muy bien! Encontraste la estrella.</p>
                  <p className="text-gray-600 mt-2">
                    Los perros también son como estrellas, iluminan nuestros días con su amor incondicional.
                  </p>
                  <p className="text-purple-600 font-medium mt-4">Segunda pista:</p>
                  <p className="italic mt-2">
                    "Busca el sol radiante que brilla en el horizonte, él te guiará al siguiente paso de tu aventura."
                  </p>
                </motion.div>
                <Link href="/step2">
                  <Button className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white font-medium py-2 px-6 rounded-full transition-all duration-300 transform hover:scale-105">
                    Continuar la aventura
                  </Button>
                </Link>
              </div>
            )}
          </div>
        </CardContent>
      </Card>
    </main>
  )
}

