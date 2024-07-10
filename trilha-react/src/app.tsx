import { MapPin, Calendar, ArrowRight } from 'lucide-react'
import { useState } from 'react'

export function App() {
  const [isGuestsInputOpen, setIsGuestsInputOpen] = useState(false)

  function openGuestsInput(){
    setIsGuestsInputOpen(true)
  }

  return (
    <div className="h-screen flex items-center justify-center bg-mask bg-no-repeat bg-fixed bg-center">
      <main className="max-w-3xl w-full px-6 text-center space-y-10">
      <header className="space-y-2">
        <figure className="flex justify-center">
          <img src="/logo.svg" alt="Logo marca do Plann.er" />
        </figure>

        <p className="text-zinc-300 leading-relaxed tracking-tight text-lg">Convide seus amigos e planeje sua próxima viagem!</p>
      </header>

      <form action="" className="flex justify-between items-center pl-6 pr-4 py-2 bg-zinc-800 rounded-xl border border-zinc-700 shadow-shape">
        <div className='flex items-center gap-2'>
          <MapPin className="text-zinc-400" />
          <label htmlFor="destination" className="sr-only">Para onde você vai?</label>
          <input type="text" id="destination" name="destination" placeholder="Para onde você vai?" className="bg-transparent border-none outline-none flex-1 text-lg placeholder:text-zinc-400" />
        </div>
        <div className='flex items-center gap-2'>
          <Calendar className="text-zinc-400" />
          <label htmlFor="start_date" className="text-zinc-400">Quando?</label>
          <input type="date" id="start_date" name="start_date" className="hidden bg-transparent border-none outline-none text-lg placeholder:text-zinc-400" />
        </div>

        <div className="w-px h-6 bg-zinc-600" />
        <button onClick={openGuestsInput} className="bg-lime-300 hover:bg-lime-200 transition-all text-lime-950 py-2 px-5 flex items-center gap-2 rounded-lg font-medium">
          Continuar
          <ArrowRight />
        </button>
      </form>

      <footer>
        <p className="text-sm tracking-tighter text-zinc-500">
        Ao planejar sua viagem pela plann.er você automaticamente concorda <br />
        com nossos <a href="#" className="text-zinc-300 underline hover:text-zinc-200">termos de uso</a> e <a href="#" className="text-zinc-300 underline hover:text-zinc-200">políticas de privacidade</a>.
        </p>
      </footer>
    </main>
    </div>
  )
}