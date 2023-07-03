import { FaCat } from 'react-icons/fa';

function App() {
  return (
    <div className='flex flex-col xl:grid xl:grid-cols-12 xl:row-auto max-md:p-6 xl:h-full xl:place-content-center xl:my-auto xl:min-h-screen'>
      <div className='flex flex-row justify-between p-6 bg-base rounded-2xl items-center xl:col-start-4 xl:col-span-6'>
        <div className='flex flex-col gap-y-1 font-extrabold text-[48px]'>
          <div className='flex flex-row gap-x-2 items-baseline'>
            <span>Fred</span>
            <span className='text-subtext0 text-xl'>'Virkkunen'</span>
          </div>
          <span>Almeida</span>
          <span className='text-subtext1 text-xl max-xl:text-lg font-medium mt-6'>🇧🇷🇮🇹 Italian-Brazilian Web Developer based in 🇭🇺 Hungary</span>
        </div>
        <FaCat size='4em' color='#d20f39'/>
      </div>
    </div>
  );
}

export default App;
