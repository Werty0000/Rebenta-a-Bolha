import { useState } from 'react'
import buzinaAsset from './assets/audio/buzina.mp3'

function App() {
  const [letter, setLetter] = useState<string>('A');
  const [currentlySelectedProfession, setCurrentlySelectedProfession] = useState<number>(0);
  const NUMBER_OF_PROFESSIONS = 3;

  // Define a list of professions
  const professions: string[] = [
    'Acompanhante de Idosos',
    'Acrobata',
    'Advogado',
    'Afinador de Piano',
    'Polícia',
    'Agricultor',
    'Dentista',
    'Baby-Sitter',
    'Professor',
    'Árbitro',
    'Barbeiro',
    'Bombeiro',
    'Ciclista',
    'Cozinheiro',
    'Canalizador',
    'Cimenteiro',
    'Carteiro',
    'Caçador',
    'Coveiro',
    'Piloto de Avião',
    'Neurocirurgião',
    'Eletricista',
    'Médico',
    'Fotógrafo',
    'Jogador de Golfe',
    'Instrutor de Condução',
    'Instrutor de Xadrez',
    'Jogador de Futebol',
    'Lutador de Box',
    'Taxista',
    'Massagista',
    'Mecânico',
    'Padre',
    'Padeiro',
    'Peixeiro',
    'Surfista',
    'Tatuador',
    'Gerente de uma Loja',
    'Veterinário',
  ];

  // State to store the selected professions
  const [randomProfessions, setRandomProfessions] = useState<string[]>([]);

  // Function to get 3 random professions
  function generateRandomProfessions() {
    const selectedProfessions: string[] = []; // Array to hold 3 unique professions
    while (selectedProfessions.length < NUMBER_OF_PROFESSIONS) {
      const randomIndex = Math.floor(Math.random() * professions.length);
      const profession = professions[randomIndex];
      // Ensure no duplicates
      if (!selectedProfessions.includes(profession)) {
        selectedProfessions.push(profession);
      }
    }
    setRandomProfessions(selectedProfessions);
  }

  function generateRandomLetter() {
    const alphabet = 'ABCDEFGHIJLMNOPQRSTUVXZ';
    const randomIndex = Math.floor(Math.random() * alphabet.length);
    setLetter(alphabet[randomIndex]);
  }

  const audio = new Audio('https://www.soundjay.com/misc/sounds/bulb-horn-02.mp3');
  const buzina = new Audio(buzinaAsset);

  return (
    <div className="flex flex-col w-[100vw] h-[100vh] justify-center items-center bg-black">
      <button
        className='absolute top-8 left-8 md:text-5xl text-4xl'
        onClick={() => {
          buzina.play().catch((error) => {
            console.error('Error playing sound:', error);
          });
        }}>
        🏁
      </button>
      <button
        className='absolute top-8 right-8 md:text-5xl text-4xl'
        onClick={() => {
          const increment: number = (currentlySelectedProfession + 1) % 3;
          setCurrentlySelectedProfession(increment);
          audio.play().catch((error) => {
            console.error('Error playing sound:', error);
          });
        }}>
        📢
      </button>
      <div className='flex flex-row items-center justify-center'>
        <div className='flex flex-col'>
          <h1 className='font-bold leading-none -mr-0 mb-5 text-white text-lg'>Profissões</h1>
          <button
            className='mb-5 font-serif text-white bg-black text-lg'
            onClick={generateRandomProfessions}>
            Gerar 3 profissões
          </button>
          <div className='mb-5 text-white text-lg'>
            {randomProfessions.length > 0 && (
              <ul>
                {randomProfessions.map((profession, index) => (
                  <li className={'rounded-lg p-1 ' + (currentlySelectedProfession == index ? 'border border-purple-800 hover:shadow-md hover:shadow-purple-800' : '')} key={index}>• {profession}</li>
                ))}
              </ul>
            )}
          </div>
        </div>
        <div className='md:w-28 w-8'></div>
        <button className='aspect-square rounded-full text-6xl bg-black text-white hover:shadow-xl hover:shadow-purple-950'
          onClick={() => {
            generateRandomLetter();
          }}>
          {letter}
        </button>
      </div>
      <p className='absolute bottom-20 text-xl font-serif text-gray-400'>
        🫧 APP DO REBENTA A BOLHA 🫧
      </p>
    </div>
  )
}

export default App
