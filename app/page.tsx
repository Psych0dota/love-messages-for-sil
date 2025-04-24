"use client"

import { useState, useEffect } from "react"
import { Heart, Stars } from "lucide-react"
import { motion } from "framer-motion"

export default function LoveMessagesPage() {
  const [message, setMessage] = useState("")
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Get today's date to determine which message to show
    const today = new Date()
    const dayOfYear = getDayOfYear(today)

    // Get message based on the day of the year (cycling through the array)
    const todaysMessage = loveMessages[dayOfYear % loveMessages.length]

    // Simulate loading for a smoother experience
    setTimeout(() => {
      setMessage(todaysMessage)
      setIsLoading(false)
    }, 1000)
  }, [])

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-100 via-purple-50 to-pink-100 flex flex-col">
      <header className="p-4 flex justify-center items-center">
        <div className="flex items-center gap-2">
          <Heart className="h-6 w-6 text-pink-500" fill="#ec4899" />
          <h1 className="text-xl font-semibold text-pink-700">Dagelijkse Liefdesboodschapjes</h1>
        </div>
      </header>

      <main className="flex-1 flex items-center justify-center p-4">
        <div className="relative max-w-2xl w-full">
          {/* Decorative elements */}
          <div className="absolute -top-10 -left-10 text-pink-200">
            <Stars className="h-20 w-20" />
          </div>
          <div className="absolute -bottom-10 -right-10 text-pink-200">
            <Stars className="h-20 w-20" />
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="bg-white bg-opacity-80 backdrop-blur-sm p-8 md:p-12 rounded-2xl shadow-xl border border-pink-200"
          >
            <div className="flex justify-center mb-6">
              <div className="relative">
                <Heart className="h-12 w-12 text-pink-500" fill="#ec4899" />
                <motion.div
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ repeat: Number.POSITIVE_INFINITY, duration: 2 }}
                  className="absolute inset-0 flex items-center justify-center"
                >
                  <Heart className="h-8 w-8 text-pink-300" fill="#f9a8d4" />
                </motion.div>
              </div>
            </div>

            <h2 className="text-xl md:text-2xl text-center text-gray-600 mb-6">Waarom ik vandaag van je hou</h2>

            {isLoading ? (
              <div className="flex justify-center py-8">
                <div className="animate-pulse flex space-x-4">
                  <div className="h-4 bg-pink-200 rounded w-full"></div>
                </div>
              </div>
            ) : (
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5, duration: 1 }}
                className="text-2xl md:text-3xl text-center font-medium text-pink-800 italic leading-relaxed"
              >
                "{message}"
              </motion.p>
            )}

            <div className="mt-10 text-center text-sm text-gray-500">
              <p>Morgen verschijnt er een nieuw boodschapje ❤️</p>
            </div>
          </motion.div>
        </div>
      </main>

      <footer className="p-6 text-center text-pink-700">
        <p>Gemaakt met liefde voor mijn Sil, de meest geweldige bbi in mijn wereld</p>
      </footer>
    </div>
  )
}

// Helper function to get the day of the year (0-365)
function getDayOfYear(date: Date): number {
  const start = new Date(date.getFullYear(), 0, 0)
  const diff = date.getTime() - start.getTime()
  const oneDay = 1000 * 60 * 60 * 24
  return Math.floor(diff / oneDay)
}

// Collection of love messages in Dutch
const loveMessages = [
  // Original messages translated to Dutch
  "Je glimlach verlicht zelfs mijn donkerste dagen",
  "De manier waarop je lacht laat mijn hart elke keer een slag overslaan",
  "Je vriendelijkheid naar anderen toont de schoonheid van je ziel",
  "Je inspireert me elke dag om een beter persoon te zijn",
  "De manier waarop je de wereld ziet brengt kleur in mijn leven",
  "Je kracht tijdens moeilijke tijden verbaast me",
  "De kleine dingen die je doet laten zien hoe attent je werkelijk bent",
  "Je passie voor de dingen waar je van houdt is aanstekelijk",
  "De manier waarop je voor anderen zorgt toont je prachtige hart",
  "Je intelligentie en nieuwsgierigheid imponeren me voortdurend",
  "Het comfort dat ik voel als ik gewoon bij je ben is onbeschrijflijk",
  "Je creativiteit en verbeelding brengen vreugde in alles",
  "De manier waarop je luistert laat me voelen dat ik echt begrepen word",
  "Je vastberadenheid om je doelen te bereiken inspireert me",
  "De manier waarop je ogen oplichten als je enthousiast bent doet mijn hart smelten",
  "Je geduld met mij toont je ongelooflijke karakter",
  "De manier waarop je kleine details over mij onthoudt laat me speciaal voelen",
  "Je eerlijkheid en integriteit zijn eigenschappen die ik diep bewonder",
  "De rust die ik voel als ik bij je ben is als niets anders",
  "Je unieke perspectief helpt me dingen anders te zien",
  "De manier waarop je danst alsof niemand kijkt brengt me vreugde",
  "Je stem is mijn favoriete geluid in de wereld",
  "De manier waarop je mijn dromen steunt betekent alles voor me",
  "Je vermogen om vreugde te vinden in eenvoudige dingen herinnert me aan wat belangrijk is",
  "De manier waarop je zelfs gewone dagen bijzonder maakt",
  "Je medeleven voor anderen toont je prachtige ziel",
  "De manier waarop je precies weet wat je moet zeggen als ik het nodig heb om te horen",
  "Je moed om jezelf te zijn inspireert me elke dag",
  "De manier waarop je me veilig en geliefd laat voelen is ongelooflijk",
  "Je attentie in kleine gebaren raakt mijn hart",
  "De manier waarop je me hebt geholpen als persoon te groeien",
  "Je vermogen om me aan het lachen te maken als ik wil huilen",
  "De manier waarop je in me gelooft, zelfs als ik niet in mezelf geloof",
  "Je aanwezigheid in mijn leven is het grootste geschenk dat ik ooit heb ontvangen",
  "De manier waarop je me begrijpt zonder woorden",
  "Je zachte geest kalmeert de chaos in mijn hoofd",

  // Personalized messages translated to Dutch
  "Ik zal nooit vergeten hoe schattig enthousiast je was over die pins bij het Dota-toernooi in Duitsland. Je oprechte enthousiasme voor de kleine dingen in het leven is een van de talloze redenen waarom ik van je hou.",

  "Dat moment toen we Brooklyn 99 keken en Jake Amy ten huwelijk vroeg en ik tranen in je ogen zag - dat is wanneer ik wist hoe diep ik van je hou. Er klikte iets, en ik realiseerde me dat jij degene bent die ik naast me wil hebben voor elke aflevering van het leven.",

  "Wandelen door de straten van Milaan met jou in het avondlicht is een van mijn favoriete herinneringen. Ik wil ontelbaar meer van zulke momenten met je creëren - nieuwe steden verkennen, in mooie hotels verblijven, en simpelweg van elkaars gezelschap genieten.",

  "De kracht en steun die je hebt getoond sinds mijn vader overleed is onmetelijk. Je bent mijn absolute steunpilaar geweest tijdens de moeilijkste tijd van mijn leven, en ik weet niet hoe ik het zonder jou had kunnen doorstaan.",

  "Je vermogen tot liefde en medeleven verbaast me dagelijks. Ik heb nog nooit iemand ontmoet die zo diep luistert en geeft om anderen zoals jij dat doet. De wereld is helderder omdat jij erin bent.",

  "Ik geloof met heel mijn hart dat je een van de grootste therapeuten zult worden die Europa ooit heeft voortgebracht. Je inzicht, empathie en wijsheid zijn buitengewone gaven die veel mensen zullen helpen genezen.",

  "Elke dag die ik met je doorbreng maakt me het gelukkigste kleine clowntje op de planeet. Je brengt zoveel vreugde en geluk in mijn leven dat ik niet anders kan dan slagen in alles wat ik doe.",

  "De manier waarop je naar me kijkt met die grote mooie ogen en die licht ondeugende blik wanneer ik iets doe wat je leuk vindt... het laat mijn hersenen compleet smelten en maakt dat ik me weer voel als een tiener die verliefd wordt.",

  "Onze gedeelde 'UH OH' momenten laten me elke keer weer lachen. Deze kleine inside jokes en gewoontes die we samen hebben gecreëerd zijn de draden die onze relatie zo uniek maken.",

  "Bij jou heb ik nooit moeten doen alsof ik iemand anders ben. Vanaf het begin kon ik eerlijk zijn over mijn fouten en worstelingen, en je hebt me volledig liefgehad. Die gift van acceptatie is onbetaalbaar.",

  "Je hebt me een beter persoon gemaakt op manieren die ik me niet had kunnen voorstellen. Je verdient de absolute beste partner in het leven, en dat maakt dat ik elke dag wil blijven groeien en verbeteren.",

  "Je emotionele veerkracht beneemt me de adem. Je bent zo sterk, krachtig, wijs en mooi - een combinatie die me in ontzag achterlaat voor de vrouw die je bent.",

  "Tegen je aan kruipen maakt me zo gelukkig als een klein eendje - volledig tevreden en blij. In jouw armen vind ik mijn vrede.",

  "Je humor, liefdevolle aard en openheid naar de wereld zijn eigenschappen die me elke dag naar je toe trekken. Je maakt het leven helderder gewoon door precies te zijn wie je bent.",

  "Ik hou ervan hoe we de wens delen om de wereld een betere plek te maken en om het beste koppel te zijn dat we kunnen zijn. Je waarden en visie inspireren me voortdurend.",

  "Er is een overweldigend gevoel van kalmte dat over me heen komt wanneer ik bij je ben. Je bent mijn veilige haven in deze soms stormachtige wereld.",

  "Ik droom ervan om je mee te nemen naar Rome, te backpacken door Griekenland en hand in hand door Parijs te wandelen. Elke nieuwe plek die ik ontdek, wil ik ervaren met jou aan mijn zijde.",

  "Ons toekomstige huis met twee honden en een vredige tuin is de droom die me gaande houdt. Dat leven met jou opbouwen is alles wat ik wil.",

  "De ochtenden dat ik wakker word en ontdek dat je iets voor me hebt klaargemaakt vullen me met zo'n diepe dankbaarheid. Deze kleine liefdesgebaren betekenen meer voor me dan je ooit zou kunnen weten.",

  "Mijn liefde voor jou is gegroeid tot dieptes waarvan ik niet wist dat ze mogelijk waren. Hoe cliché het ook klinkt, ik begreep echt niet wat liefde was totdat ik jou vond. Elke dag wordt die liefde nog dieper.",

  "Het geduld dat je toont wanneer je luistert naar mijn willekeurige tirades over compleet irrelevante dingen verbaast me. Je geeft je volledige aandacht zelfs wanneer ik gewoon mijn gekke zelf ben.",

  "Je hebt me geleerd om op een manier naar andere perspectieven te kijken zoals ik dat nooit eerder deed. Je empathie heeft mijn begrip van de wereld en de mensen erin vergroot.",

  "Ik heb me nooit zo begrepen gevoeld als bij jou. Je laat me voelen alsof er niets mis is met mij - dat ik geweldig ben zoals ik ben - wat paradoxaal genoeg me de vrijheid geeft om nog beter te worden.",

  "Die kleine geluidjes die je maakt als je bezig bent, je zingen onder de douche, de manier waarop je mijn handen vasthoudt, zelfs hoe je je eten eet - elk klein detail van jou is vertederend op manieren die ik niet kan uitleggen.",

  "Toen je je baan in de gezondheidszorg kreeg, ben ik nog nooit zo trots geweest op iemand. Je succes brengt me oprechte vreugde omdat ik weet hoezeer je elk goed ding verdient dat op je pad komt.",

  "Soms overweldigt mijn liefde voor jou me - zoals toen je me op die speciale manier begroette op mijn verjaardag en ik bijna kortsluiting kreeg omdat ik niet wist hoe ik moest omgaan met het gevoel zo gewenst en gewaardeerd te worden. Je laat me dingen voelen waarvan ik nooit wist dat ik ze kon voelen.",

  "We hebben al zoveel samen doorstaan, en ik wil aan je zijde staan voor alles wat het leven ons brengt. Door elke uitdaging ben jij mijn rots geweest, en ik beloof dat ik de jouwe zal zijn.",

  "Het simpele moment waarop je thuiskomt en ik je een kus en knuffel kan geven is vaak het hoogtepunt van mijn hele dag. Jouw aanwezigheid maakt ons huis een thuis.",

  "De manier waarop je voor anderen zorgt toont de ongelooflijke diepte van je hart. Ik word elke keer meer verliefd op je als ik je medeleven in actie zie.",

  "Je vastberadenheid om te groeien en te verbeteren inspireert me dagelijks. Je dromen met zoveel passie na zien jagen maakt me ongelooflijk trots om je partner te zijn.",
]
