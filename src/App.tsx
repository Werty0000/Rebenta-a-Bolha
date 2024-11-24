import { useState } from 'react'
import buzinaAsset from './assets/audio/buzina.mp3'

function App() {
  const [letter, setLetter] = useState<string>('A')

  function getRandomLetter(): string {
    const alphabet = 'ABCDEFGHIJLMNOPQRSTUVXZ';
    const randomIndex = Math.floor(Math.random() * alphabet.length);
    return alphabet[randomIndex];
  }

const audio = new Audio('https://www.soundjay.com/misc/sounds/bulb-horn-02.mp3');

const buzina = new Audio(buzinaAsset);

  return (
    <div className="flex flex-col w-[100vw] h-[100vh] justify-center items-center bg-black">
        <button className='absolute top-8 left-8 text-5xl' onClick={()=> {
          buzina.play().catch((error) => {
            console.error('Error playing sound:', error);
        });
        }}>
          🏁
        </button>
        <button className='absolute top-8 right-8 text-5xl' onClick={()=> {
          audio.play().catch((error) => {
            console.error('Error playing sound:', error);
        });
        }}>
          📢
        </button>
        <button className='aspect-square rounded-full text-6xl bg-black text-white hover:shadow-xl hover:shadow-purple-950'
          onClick={() => {
          const l: string = getRandomLetter();
          setLetter(l);
        }}>
          {letter}
        </button>
        <p className='absolute bottom-20 text-xl font-serif text-gray-400'>
        🫧 APP DO REBENTA A BOLHA 🫧
        </p>
    
    </div>

)
}

export default App
