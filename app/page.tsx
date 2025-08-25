"use client"

import { Button } from "@/components/ui/button"
import { Play, Download, Smartphone, Menu, X } from "lucide-react"
import { useState, useEffect } from "react"

export default function MafiaCityRoleplayLanding() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isHeaderVisible, setIsHeaderVisible] = useState(true)
  const [lastScrollY, setLastScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY

      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        // Scrolling down
        setIsHeaderVisible(false)
      } else {
        // Scrolling up
        setIsHeaderVisible(true)
      }

      setLastScrollY(currentScrollY)
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [lastScrollY])

  const copyServerIP = async () => {
    try {
      await navigator.clipboard.writeText("samp.mafiacityrp.xyz")
      alert("IP del servidor copiada: samp.mafiacityrp.xyz")
    } catch (err) {
      console.error("Error copying to clipboard:", err)
      alert("IP del servidor: samp.mafiacityrp.xyz")
    }
  }

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <section
        className="relative min-h-screen flex items-center justify-center"
        style={{
          backgroundImage:
            "url('https://hebbkx1anhila5yf.public.blob.vercel-storage.com/2ea1849a-08c1-404a-8317-721414311711-oVwTk17YJGDpLdTGI4jAEcic3pFRMw.jpeg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="absolute inset-0 bg-black/60"></div>

        {/* Header */}
        <header
          className={`fixed top-0 left-0 right-0 z-50 py-4 transition-transform duration-300 ${
            isHeaderVisible ? "translate-y-0" : "-translate-y-full"
          }`}
        >
          <div className="container mx-auto px-4">
            <div className="bg-black/20 backdrop-blur-sm rounded-2xl px-6 py-3 flex items-center justify-between">
              <div className="flex items-center">
                <div className="w-12 h-12 rounded-lg flex items-center justify-center">
                  <img
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image_1755388965116-hFkc8MX4ZxkCpflqR1ceFlM0Spu87d.jpeg"
                    alt="Mafia City RP Logo"
                    className="w-12 h-12 object-contain"
                  />
                </div>
              </div>

              <Button
                onClick={copyServerIP}
                className="bg-red-500 hover:bg-red-600 text-white px-8 py-2 rounded-full flex items-center gap-2 font-semibold"
              >
                <Download className="w-4 h-4" />
                Comenzar Juego
              </Button>

              <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="text-white p-2">
                <Menu className="w-6 h-6" />
              </button>
            </div>
          </div>
        </header>

        {isMobileMenuOpen && (
          <div className="fixed inset-0 z-[60] bg-black/90 backdrop-blur-sm">
            <div className="container mx-auto px-4 py-4">
              <div className="bg-black/40 backdrop-blur-sm rounded-2xl px-6 py-3 flex items-center justify-between mb-8">
                <div className="flex items-center">
                  <div className="w-12 h-12 rounded-lg flex items-center justify-center">
                    <img
                      src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image_1755388965116-hFkc8MX4ZxkCpflqR1ceFlM0Spu87d.jpeg"
                      alt="Mafia City RP Logo"
                      className="w-12 h-12 object-contain"
                    />
                  </div>
                </div>

                <button onClick={() => setIsMobileMenuOpen(false)} className="text-white p-2">
                  <X className="w-6 h-6" />
                </button>
              </div>

              <div className="flex flex-col items-center justify-center space-y-8 text-center mt-20">
                <a href="#" className="text-white text-2xl font-semibold border-b-2 border-white pb-2">
                  Inicio
                </a>
                <a href="#" className="text-white text-2xl font-semibold">
                  Tienda
                </a>
                <a href="#" className="text-white text-2xl font-semibold">
                  Foro
                </a>

                <div className="flex flex-col gap-4 mt-12 w-full max-w-sm">
                  <a href="https://discord.gg/WdHyEQc5Da" target="_blank" rel="noopener noreferrer">
                    <Button className="w-full bg-black text-white border border-gray-600 hover:bg-gray-800 py-3 rounded-full text-lg font-semibold">
                      Comunidad →
                    </Button>
                  </a>
                  <Button
                    onClick={copyServerIP}
                    className="bg-red-500 hover:bg-red-600 text-white py-3 rounded-full text-lg font-semibold flex items-center justify-center gap-2"
                  >
                    <Download className="w-5 h-5" />
                    Comenzar Juego
                  </Button>
                </div>
              </div>
            </div>
          </div>
        )}

        <div className="relative z-10 text-center px-4">
          <h1 className="text-6xl md:text-8xl font-bold mb-6 text-white drop-shadow-2xl">
            MAFIA CITY
            <br />
            ROLE PLAY
          </h1>
          <p className="text-xl md:text-2xl text-white/90 mb-12 max-w-3xl mx-auto drop-shadow-lg">
            Servidor SA-MP con mundo abierto, facciones activas y economía viva. Vive tu historia criminal desde cero.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              onClick={copyServerIP}
              size="lg"
              className="bg-red-500 hover:bg-red-600 text-white px-12 py-4 rounded-full text-lg font-semibold shadow-2xl"
            >
              Comenzar Mi Historia
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="bg-white/10 backdrop-blur-sm border-white/30 text-white hover:bg-white/20 px-12 py-4 rounded-full text-lg font-semibold flex items-center gap-2 shadow-2xl"
            >
              <Play className="w-5 h-5" />
              Video del Juego
            </Button>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto space-y-8">
            {/* Social Media Stats */}
            <div className="space-y-6">
              <div className="bg-gray-800 rounded-2xl p-6 flex items-center gap-6">
                <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-xl">VK</span>
                </div>
                <div>
                  <div className="text-3xl font-bold text-white">484 mil</div>
                  <div className="text-gray-400">Suscriptores de @MafiaCity-RP</div>
                </div>
              </div>

              <div className="bg-gray-800 rounded-2xl p-6 flex items-center gap-6">
                <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-xl">T</span>
                </div>
                <div>
                  <div className="text-3xl font-bold text-white">240 mil</div>
                  <div className="text-gray-400">leer en @MafiaCity-RP</div>
                </div>
              </div>

              <div className="bg-gray-800 rounded-2xl p-6 flex items-center gap-6">
                <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-xl">▶</span>
                </div>
                <div>
                  <div className="text-3xl font-bold text-white">176 mil</div>
                  <div className="text-gray-400">mirando en @MafiaCity-RP</div>
                </div>
              </div>
            </div>

            {/* SAMP Section */}
            <div className="text-center">
              <h2 className="text-4xl font-bold text-white mb-8">¡Juega SAMP con Mafia City Roleplay!</h2>

              <div className="text-left space-y-6 text-gray-300">
                <p>
                  Sumérgete en el mundo abierto del juego y siéntete como cualquier personaje, persona real famosa o
                  elige tu propio camino especial: todos los escenarios de eventos están disponibles aquí.
                </p>

                <h3 className="text-2xl font-bold text-white">
                  Mafia City RP: el juego que inició la historia de SAMP
                </h3>

                <p>
                  La historia comenzó el 23 de agosto de 2014. Debido a su creciente popularidad, el proyecto evolucionó
                  y abarcó a un número cada vez mayor de jugadores. Para 2017, Mafia City Role Play se convirtió en el
                  proyecto líder en asistencia entre todos los proyectos SAMP conocidos y lo mantiene hasta la fecha,
                  convirtiéndose en un juego independiente completo: SAMP: Mafia City RP.
                </p>

                <p>
                  La jugabilidad única atrae con su máximo realismo y posibilidades ilimitadas, ya que cada jugador
                  adapta el curso de los acontecimientos a su manera y forma parte de un mundo común. Nuestro juego te
                  permite:
                </p>

                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Huele el dinero a lo grande y siente lo que es estar en la cima del mundo;</li>
                  <li>
                    Prueba coches geniales de los últimos modelos: haz una prueba de conducción personal, configúralos,
                    córtalos y repáralos, porque todo es posible en el juego;
                  </li>
                  <li>
                    elige el camino de un policía duro y estarás al borde de la muerte, persiguiendo constantemente a
                    criminales, o únete a un grupo criminal y asciende al rango de jefe de la mafia;
                  </li>
                  <li>
                    prueba el papel de un criminal malicioso e infunde terror en los corazones de los residentes, o
                    conviértete en una persona respetada y ayuda a otros a realizar sus sueños más preciados en una
                    atmósfera específica del mundo real virtual.
                  </li>
                </ul>

                <p>
                  Juega al multijugador de San Andreas como prefieras, incluso en tu móvil. Ahora estarás conectado con
                  tu juego favorito y tus amigos en cualquier momento y lugar. Valoramos la comodidad de nuestros
                  jugadores, por lo que ofrecemos sincronización completa entre la PC y la versión móvil del juego. SAMP
                  Mobile ha superado las pruebas con éxito y te permite disfrutar de todas las ventajas de este formato.
                  Para la instalación, necesitas un smartphone con sistema operativo Android 7.0 o superior.
                </p>

                <h3 className="text-2xl font-bold text-white">
                  SAMP Launcher: todos los beneficios en un solo programa
                </h3>

                <p>
                  El lanzador Samp te ayudará a iniciar el juego rápidamente desde cualquier dispositivo con solo un par
                  de clics. Tras la instalación y el lanzamiento, solo sigue las instrucciones en pantalla y en un par
                  de minutos estarás listo para jugar. Puedes descargar Samp para tu dispositivo móvil en Google Play.
                  ¡La aplicación Mafia City Mobile es gratuita y se actualiza automáticamente!
                </p>

                <p>
                  La versión móvil amplía significativamente tus posibilidades. Juega desde cualquier lugar: durante los
                  descansos entre estudios, en el transporte público, en la calle, de vacaciones, durante una larga
                  espera o en cualquier otra situación en la que no quieras ni puedas sentarte frente a una PC para
                  jugar.
                </p>

                <p>Para comenzar a jugar a Mafia City Online, deberás seguir estos sencillos pasos:</p>

                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Haga clic en el botón "Comenzar a jugar" en el sitio web e instale el Launcher;</li>
                  <li>
                    Para iniciar el juego en una PC, debes hacer clic en el acceso directo del iniciador, ingresar tu
                    apodo e iniciar el juego;
                  </li>
                  <li>En un dispositivo móvil, iniciar un juego usando un launcher especial.</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-800">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-white mb-12 text-center">Estado del Servidor</h2>

          <div className="max-w-4xl mx-auto">
            <div className="relative rounded-2xl overflow-hidden mb-8 bg-gradient-to-r from-orange-900 to-red-900 p-8">
              <div className="relative z-10 text-center">
                <h3 className="text-2xl font-bold text-white mb-2">Servidor en Mantenimiento</h3>
                <p className="text-gray-300 mb-1">Agosto 2025</p>
                <p className="text-gray-300">
                  Estamos trabajando en mejoras para ofrecerte la mejor experiencia de juego
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-900">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">Descargar SA-MP</h2>
          <p className="text-xl text-gray-400 mb-12">Descargar SAMP gratis para Windows y Android</p>

          <div className="max-w-2xl mx-auto mb-8 bg-gradient-to-r from-gray-800 to-gray-700 rounded-2xl p-8">
            <div className="text-center">
              <Smartphone className="w-16 h-16 text-purple-400 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-white mb-2">SA-MP Client</h3>
              <p className="text-gray-400">Cliente oficial de San Andreas Multiplayer</p>
            </div>
          </div>

          <h3 className="text-3xl font-bold text-white mb-8">Requisitos del Sistema</h3>

          <div className="bg-white rounded-2xl p-6 max-w-md mx-auto mb-12">
            <div className="flex items-center justify-center gap-3 mb-6">
              <Smartphone className="w-6 h-6 text-gray-800" />
              <span className="text-xl font-semibold text-gray-800">Android</span>
            </div>

            <div className="space-y-4 text-left">
              <div className="flex justify-between">
                <span className="text-gray-600">Sistema Operativo</span>
                <span className="text-gray-800 font-semibold">Android 5 y superior</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Procesador</span>
                <span className="text-gray-800 font-semibold">Con frecuencia de 1.2 GHz</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Memoria RAM</span>
                <span className="text-gray-800 font-semibold">2 GB</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Espacio en Disco</span>
                <span className="text-gray-800 font-semibold">8 GB</span>
              </div>
            </div>
          </div>

          <div className="space-y-4 max-w-md mx-auto mb-12">
            <a
              href="https://play.google.com/store/apps/details?id=ru.unisamp_mobile.launcher"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button className="w-full bg-red-500 hover:bg-red-600 text-white py-4 rounded-full text-lg font-semibold flex items-center justify-center gap-2">
                <Play className="w-5 h-5" />
                Play Store
              </Button>
            </a>

            <Button className="w-full bg-gray-700 hover:bg-gray-600 text-white py-4 rounded-full text-lg font-semibold border border-gray-600">
              Descarga Directa
            </Button>

            <Button className="w-full bg-gray-700 hover:bg-gray-600 text-white py-4 rounded-full text-lg font-semibold border border-gray-600">
              Launcher PC
            </Button>
          </div>

          <div className="text-center">
            <div className="text-6xl font-bold text-white mb-2">150</div>
            <div className="flex items-center justify-center gap-2">
              <div className="w-3 h-3 bg-green-500 rounded-full"></div>
              <span className="text-gray-400 text-lg">jugadores en línea</span>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-gray-900 py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div>
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 rounded-lg flex items-center justify-center mr-3">
                  <img
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image_1755388965116-hFkc8MX4ZxkCpflqR1ceFlM0Spu87d.jpeg"
                    alt="Mafia City RP Logo"
                    className="w-10 h-10 object-contain"
                  />
                </div>
              </div>
              <p className="text-gray-400">Mafia City RP © 2025</p>
            </div>

            <div>
              <h4 className="text-white font-semibold mb-4">Útiles</h4>
              <div className="space-y-2">
                <a href="#" className="text-gray-400 hover:text-white block">
                  Foro
                </a>
                <a href="/terminos-de-uso" className="text-gray-400 hover:text-white block">
                  Términos de Uso
                </a>
                <a href="/politica-de-privacidad" className="text-gray-400 hover:text-white block">
                  Política de Privacidad
                </a>
              </div>
            </div>

            <div>
              <div className="flex gap-4 mb-4">
                <div className="w-8 h-8 bg-gray-700 rounded"></div>
                <div className="w-8 h-8 bg-gray-700 rounded"></div>
                <div className="w-8 h-8 bg-gray-700 rounded"></div>
              </div>
              <div className="space-y-2">
                <div className="flex gap-2">
                  <span className="text-xs text-gray-500">Mastercard</span>
                  <span className="text-xs text-gray-500">Visa</span>
                </div>
                <p className="text-gray-400 text-sm">soporte@mafiacityrp.xyz</p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
