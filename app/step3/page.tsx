"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { motion } from "framer-motion"

export default function Step3() {
  const [pawClicked, setPawClicked] = useState(false)
  const [pawsVisible, setPawsVisible] = useState(Array(5).fill(false))

  const handlePawClick = (index) => {
    const newPawsVisible = [...pawsVisible]
    newPawsVisible[index] = true
    setPawsVisible(newPawsVisible)

    if (newPawsVisible.filter(Boolean).length >= 3) {
      setPawClicked(true)
    }
  }

  return (
    <main className="min-h-screen bg-gradient-to-b from-blue-100 to-purple-100 flex flex-col items-center justify-center p-4">
      <Card className="w-full max-w-md bg-white shadow-lg rounded-xl overflow-hidden">
        <CardContent className="p-6">
          <div className="text-center space-y-4">
            <h1 className="text-2xl font-bold text-purple-700">Paso 3: Las Huellas Fieles</h1>

            {!pawClicked ? (
              <div className="py-8 flex flex-col items-center">
                <p className="text-gray-600 mb-6">
                  Encuentra las huellas escondidas y haz clic en ellas (necesitas encontrar al menos 3)...
                </p>
                <div className="relative h-60 w-full">
                  {[
                    { top: "10%", left: "20%" },
                    { top: "30%", left: "70%" },
                    { top: "60%", left: "40%" },
                    { top: "80%", left: "15%" },
                    { top: "50%", left: "85%" },
                  ].map((position, index) => (
                    <motion.div
                      key={index}
                      className="absolute cursor-pointer"
                      style={{ top: position.top, left: position.left }}
                      whileHover={{ scale: 1.2 }}
                      whileTap={{ scale: 0.9 }}
                      onClick={() => handlePawClick(index)}
                    >
                      {pawsVisible[index] ? (
                        <motion.div
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          transition={{ type: "spring", stiffness: 260, damping: 20 }}
                        >
                          <svg width="30" height="30" viewBox="0 0 100 100" fill="brown">
                            <path d="M50,15 C55,5 65,5 70,15 C75,25 75,35 70,40 C65,45 55,45 50,40 C45,35 45,25 50,15 Z" />
                            <path d="M30,25 C35,15 45,15 50,25 C55,35 55,45 50,50 C45,55 35,55 30,50 C25,45 25,35 30,25 Z" />
                            <path d="M70,25 C75,15 85,15 90,25 C95,35 95,45 90,50 C85,55 75,55 70,50 C65,45 65,35 70,25 Z" />
                            <path d="M40,60 C45,50 55,50 60,60 C65,70 65,85 60,90 C55,95 45,95 40,90 C35,85 35,70 40,60 Z" />
                          </svg>
                        </motion.div>
                      ) : (
                        <div className="w-8 h-8 rounded-full bg-transparent border-2 border-dashed border-gray-300 flex items-center justify-center">
                          <span className="text-gray-300 text-xs">?</span>
                        </div>
                      )}
                    </motion.div>
                  ))}
                </div>
              </div>
            ) : (
              <div className="py-8 space-y-4">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  <p className="text-green-600 font-medium">¡Increíble! Encontraste las huellas.</p>
                  <p className="text-gray-600 mt-2">
                    Las huellas de un perro son como las marcas que dejan en nuestras vidas: únicas, especiales y llenas
                    de amor.
                  </p>
                  <p className="text-purple-600 font-medium mt-4">Última pista:</p>
                  <p className="italic mt-2">
                    "El tesoro final te espera donde el corazón late con fuerza, donde los recuerdos se guardan y donde
                    el amor nunca se olvida."
                  </p>
                </motion.div>
                <Link href="/final">
                  <Button className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white font-medium py-2 px-6 rounded-full transition-all duration-300 transform hover:scale-105">
                    Descubrir el tesoro final
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

