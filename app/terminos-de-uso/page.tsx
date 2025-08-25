import { Button } from "@/components/ui/button"
import { ArrowLeft } from "lucide-react"
import Link from "next/link"

export default function TerminosDeUso() {
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
          <h1 className="text-4xl font-bold mb-8 text-center">Términos de Uso</h1>

          <div className="bg-gray-800 rounded-lg p-8 space-y-6">
            <section>
              <h2 className="text-2xl font-semibold mb-4 text-purple-400">1. Aceptación de los Términos</h2>
              <p className="text-gray-300 leading-relaxed">
                Al acceder y utilizar Mafia City Roleplay, aceptas cumplir con estos términos de uso. Si no estás de
                acuerdo con alguno de estos términos, no debes utilizar nuestros servicios.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-purple-400">2. Reglas del Servidor</h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                Los jugadores deben seguir las siguientes reglas básicas:
              </p>
              <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
                <li>Mantener el roleplay en todo momento</li>
                <li>Respetar a otros jugadores y al staff</li>
                <li>No usar cheats, hacks o modificaciones no autorizadas</li>
                <li>No realizar metagaming o powergaming</li>
                <li>Seguir las reglas específicas de cada facción</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-purple-400">3. Conducta del Usuario</h2>
              <p className="text-gray-300 leading-relaxed">
                Los usuarios se comprometen a mantener un comportamiento respetuoso y apropiado. Cualquier forma de
                acoso, discriminación o comportamiento tóxico resultará en sanciones.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-purple-400">4. Sanciones</h2>
              <p className="text-gray-300 leading-relaxed">
                El incumplimiento de estas reglas puede resultar en advertencias, suspensiones temporales o baneos
                permanentes, dependiendo de la gravedad de la infracción.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-purple-400">5. Modificaciones</h2>
              <p className="text-gray-300 leading-relaxed">
                Nos reservamos el derecho de modificar estos términos en cualquier momento. Los cambios serán
                notificados a través de nuestros canales oficiales.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-purple-400">6. Contacto</h2>
              <p className="text-gray-300 leading-relaxed">
                Para cualquier consulta sobre estos términos, contacta con nosotros en:
                <span className="text-purple-400"> soporte@mafiacity-rp.com</span>
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  )
}
