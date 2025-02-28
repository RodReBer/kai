"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { Heart } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { motion, AnimatePresence } from "framer-motion"
import confetti from "canvas-confetti"

export default function Final() {
  const [showMessage, setShowMessage] = useState(false)
  const [heartClicked, setHeartClicked] = useState(false)

  useEffect(() => {
    // Trigger confetti when the component mounts
    if (typeof window !== "undefined") {
      const duration = 3 * 1000
      const end = Date.now() + duration

      const frame = () => {
        confetti({
          particleCount: 2,
          angle: 60,
          spread: 55,
          origin: { x: 0 },
          colors: ["#ff0000", "#ff7777", "#ff9999"],
        })
        confetti({
          particleCount: 2,
          angle: 120,
          spread: 55,
          origin: { x: 1 },
          colors: ["#ff0000", "#ff7777", "#ff9999"],
        })

        if (Date.now() < end) {
          requestAnimationFrame(frame)
        }
      }

      frame()
    }
  }, [])

  const messages = [
    "¡Bueno, llegaste hasta el final! 🎉",
    <>
      Sé que estas mal por kaidito ultimamente, pero quiero que sepas que{" "}
      <strong className="uppercase font-bold">TODO</strong> tarde o temprano se acomoda
    </>,
    "Armé esta pavada para sacarte una sonrisa cuando andes no tan contenta.",
    "No decaigas que sos fuerte y una muy linda persona! 🐶",
    "Y recordá: Los perros son maestros del amor incondicional. En sus ojos, vemos un reflejo de la lealtad más pura y en su compañía, encontramos un hogar que va más allá de cualquier lugar físico. Tu perro no es solo una mascota, es un pedacito de alma que camina a tu lado, recordándote cada día lo hermosa que puede ser la vida cuando se vive con el corazón abierto.",
  ]

  return (
    <main className="min-h-screen bg-gradient-to-b from-pink-100 to-purple-200 flex flex-col items-center justify-center p-4">
      <Card className="w-full max-w-md bg-white shadow-lg rounded-xl overflow-hidden">
        <CardContent className="p-6">
          <div className="text-center space-y-4">
            <motion.h1
              className="text-2xl font-bold text-purple-700"
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              transition={{
                type: "spring",
                stiffness: 260,
                damping: 20,
              }}
            >
              ¡Lo lograste! Encontraste el tesoro
            </motion.h1>

            <div className="py-8 flex flex-col items-center">
              {!heartClicked ? (
                <>
                  <p className="text-gray-600 mb-6">Haz clic en el corazón para descubrir tu mensaje especial...</p>
                  <motion.div
                    whileHover={{ scale: 1.2 }}
                    whileTap={{ scale: 0.9 }}
                    className="cursor-pointer"
                    onClick={() => {
                      setHeartClicked(true)
                      setTimeout(() => setShowMessage(true), 500)
                    }}
                  >
                    <Heart size={100} className="text-red-500 filter drop-shadow-md" fill="red" />
                  </motion.div>
                </>
              ) : (
                <AnimatePresence>
                  {showMessage && (
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5 }}
                      className="space-y-6"
                    >
                      <div className="bg-pink-50 p-6 rounded-xl border border-pink-200 shadow-inner">
                        {messages.map((message, index) => (
                          <motion.p
                            key={index}
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.5 }}
                            className="text-gray-700 my-3"
                          >
                            {message}
                          </motion.p>
                        ))}
                      </div>

                      <div className="mt-6">
                        <Image
                          src="/k2.jpeg"
                          alt="Perro feliz"
                          width={300}
                          height={200}
                          className="mx-auto rounded-lg shadow-md"
                        />
                      </div>

                      <Link href="/">
                        <Button className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white font-medium py-2 px-6 rounded-full transition-all duration-300 transform hover:scale-105 mt-4">
                          Volver a empezar
                        </Button>
                      </Link>
                    </motion.div>
                  )}
                </AnimatePresence>
              )}
            </div>
          </div>
        </CardContent>
      </Card>
    </main>
  )
}

