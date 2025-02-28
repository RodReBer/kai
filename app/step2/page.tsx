"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { motion } from "framer-motion"

export default function Step2() {
  const [sunClicked, setSunClicked] = useState(false)

  return (
    <main className="min-h-screen bg-gradient-to-b from-blue-100 to-purple-100 flex flex-col items-center justify-center p-4">
      <Card className="w-full max-w-md bg-white shadow-lg rounded-xl overflow-hidden">
        <CardContent className="p-6">
          <div className="text-center space-y-4">
            <h1 className="text-2xl font-bold text-purple-700">Paso 2: El Sol Radiante</h1>

            {!sunClicked ? (
              <div className="py-8 flex flex-col items-center">
                <p className="text-gray-600 mb-6">Busca el sol radiante y haz clic en él para continuar...</p>
                <div className="relative h-40 w-full">
                  <motion.div
                    className="absolute right-4 top-0 cursor-pointer"
                    whileHover={{ scale: 1.1, rotate: 20 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={() => setSunClicked(true)}
                  >
                    <div className="w-20 h-20 bg-yellow-400 rounded-full flex items-center justify-center shadow-lg">
                      <div className="w-24 h-24 absolute">
                        {Array.from({ length: 12 }).map((_, i) => (
                          <div
                            key={i}
                            className="absolute w-1 h-4 bg-yellow-500"
                            style={{
                              left: "50%",
                              top: "50%",
                              transformOrigin: "0 0",
                              transform: `rotate(${i * 30}deg) translate(-50%, -100%)`,
                            }}
                          />
                        ))}
                      </div>
                    </div>
                  </motion.div>
                </div>
              </div>
            ) : (
              <div className="py-8 space-y-4">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  <p className="text-green-600 font-medium">¡Excelente! Encontraste el sol.</p>
                  <p className="text-gray-600 mt-2">
                    Como los perros que disfrutan de un día soleado en el parque, a veces las cosas más simples nos
                    traen la mayor felicidad.
                  </p>
                  <div className="my-4">
                    <Image
                      src="/k1.jpeg"
                      alt="Perro feliz en el sol"
                      width={300}
                      height={150}
                      className="mx-auto rounded-lg shadow-md"
                    />
                  </div>
                  <p className="text-purple-600 font-medium mt-4">Tercera pista:</p>
                  <p className="italic mt-2">
                    "Busca la huella de un amigo fiel, esa marca única que deja en nuestros corazones."
                  </p>
                </motion.div>
                <Link href="/step3">
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

