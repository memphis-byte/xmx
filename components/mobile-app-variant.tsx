import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export default function MobileAppVariant() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-primary via-background to-card p-4">
      <div className="max-w-sm mx-auto space-y-6">
        {/* Header */}
        <div className="text-center pt-8 pb-4">
          <div className="text-2xl font-bold text-foreground mb-2">MAFIA</div>
          <div className="text-2xl font-bold text-foreground mb-1">CITY</div>
          <div className="text-lg text-accent font-semibold">ROLEPLAY</div>
          <p className="text-sm text-foreground/70 mt-2">
            Hus dis para comertea
            <br />
            tu meeunu, tecnsmit-
            <br />
            aso aurdo
          </p>
        </div>

        {/* Character Portrait */}
        <div className="flex justify-center mb-6">
          <div className="relative">
            <img src="/bearded-man-mafia.png" alt="Mafia Character" className="rounded-lg shadow-2xl" />
            <div className="absolute -top-2 -right-2 w-12 h-12 bg-primary rounded-full opacity-80"></div>
          </div>
        </div>

        {/* Main Action Button */}
        <Button className="w-full bg-accent hover:bg-accent/90 text-accent-foreground font-bold py-4 text-lg">
          CLICKA START
        </Button>

        {/* Main Question */}
        <div className="text-center mb-6">
          <h2 className="text-xl font-bold text-foreground">
            ¿PUEDES DESEMPEÑAR
            <br />
            ESTE PAPEL?
          </h2>
        </div>

        {/* Character Selection Grid */}
        <div className="grid grid-cols-2 gap-3 mb-6">
          <div className="bg-muted/20 rounded-lg p-2">
            <img src="/mafia-character-1.png" alt="Character 1" className="w-full rounded" />
          </div>
          <div className="bg-muted/20 rounded-lg p-2">
            <img src="/mafia-character-two.png" alt="Character 2" className="w-full rounded" />
          </div>
          <div className="bg-muted/20 rounded-lg p-2">
            <img src="/mafia-character-3.png" alt="Character 3" className="w-full rounded" />
          </div>
          <div className="bg-muted/20 rounded-lg p-2">
            <img src="/mafia-character-four.png" alt="Character 4" className="w-full rounded" />
          </div>
        </div>

        {/* Featured Functions */}
        <Card className="bg-card/90 backdrop-blur-sm border-border p-4">
          <h3 className="text-lg font-bold text-card-foreground mb-4">FUNCIONES DESTACADAS</h3>
          <p className="text-sm text-card-foreground/80 mb-4">
            Encepomia die ta ciudad
            <br />
            esura du tajloni der pnapo-
            <br />
            rele para dema ruroli.
          </p>
          <p className="text-sm text-card-foreground/80">
            La economia de la ciudad está
            <br />
            resingrie dim gurgnalob
            <br />
            para det fir fu sol.
          </p>
        </Card>

        {/* Social Media Icons */}
        <div className="flex justify-center space-x-6 pt-4">
          <div className="w-8 h-8 bg-accent rounded-full flex items-center justify-center">
            <span className="text-accent-foreground text-sm font-bold">T</span>
          </div>
          <div className="w-8 h-8 bg-accent rounded-full flex items-center justify-center">
            <span className="text-accent-foreground text-sm font-bold">Y</span>
          </div>
          <div className="w-8 h-8 bg-accent rounded-full flex items-center justify-center">
            <span className="text-accent-foreground text-sm font-bold">D</span>
          </div>
        </div>
      </div>
    </div>
  )
}
