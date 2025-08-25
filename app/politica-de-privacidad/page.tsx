import { Button } from "@/components/ui/button"
import { ArrowLeft } from "lucide-react"
import Link from "next/link"

export default function PoliticaDePrivacidad() {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <Link href="/">
            <Button variant="outline" className="border-gray-600 text-white hover:bg-gray-700 bg-transparent">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Volver al Inicio
            </Button>
          </Link>
        </div>

        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold mb-8 text-center">Política de Privacidad</h1>

          <div className="bg-gray-800 rounded-lg p-8 space-y-6">
            <section>
              <h2 className="text-2xl font-semibold mb-4 text-purple-400">1. Información que Recopilamos</h2>
              <p className="text-gray-300 leading-relaxed">
                Recopilamos información necesaria para el funcionamiento del servidor, incluyendo: nombre de usuario,
                dirección IP, estadísticas de juego y comunicaciones en el servidor.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-purple-400">2. Uso de la Información</h2>
              <p className="text-gray-300 leading-relaxed mb-4">Utilizamos tu información para:</p>
              <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
                <li>Proporcionar y mantener nuestros servicios</li>
                <li>Mejorar la experiencia de juego</li>
                <li>Comunicarnos contigo sobre actualizaciones</li>
                <li>Prevenir fraudes y mantener la seguridad</li>
                <li>Cumplir con obligaciones legales</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-purple-400">3. Compartir Información</h2>
              <p className="text-gray-300 leading-relaxed">
                No vendemos, intercambiamos ni transferimos tu información personal a terceros, excepto cuando sea
                necesario para operar el servidor o cuando lo requiera la ley.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-purple-400">4. Seguridad de Datos</h2>
              <p className="text-gray-300 leading-relaxed">
                Implementamos medidas de seguridad apropiadas para proteger tu información personal contra acceso no
                autorizado, alteración, divulgación o destrucción.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-purple-400">5. Cookies y Tecnologías Similares</h2>
              <p className="text-gray-300 leading-relaxed">
                Utilizamos cookies y tecnologías similares para mejorar tu experiencia, analizar el uso del sitio y
                personalizar el contenido.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-purple-400">6. Tus Derechos</h2>
              <p className="text-gray-300 leading-relaxed">
                Tienes derecho a acceder, actualizar o eliminar tu información personal. Para ejercer estos derechos,
                contacta con nosotros.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-purple-400">7. Cambios en la Política</h2>
              <p className="text-gray-300 leading-relaxed">
                Podemos actualizar esta política de privacidad ocasionalmente. Te notificaremos sobre cambios
                significativos a través de nuestros canales oficiales.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-purple-400">8. Contacto</h2>
              <p className="text-gray-300 leading-relaxed">
                Si tienes preguntas sobre esta política de privacidad, contacta con nosotros en:
                <span className="text-purple-400"> soporte@mafiacity-rp.com</span>
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  )
}
