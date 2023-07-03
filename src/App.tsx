import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Block from './components/Block';
import Button from './components/Button';
import { faCat } from '@fortawesome/free-solid-svg-icons';
import data from '../public/data';

function App() {
  return (
    <div className='flex flex-col xl:grid xl:grid-cols-12 xl:row-auto max-md:p-6 xl:h-full xl:place-content-center xl:my-auto xl:min-h-screen gap-y-8'>
      <Block>
        <div className='flex flex-row justify-between items-center'>
          <div className='flex flex-col gap-y-1 font-extrabold text-[48px]'>
            <div className='flex flex-row gap-x-2 items-baseline'>
              <span>Fred</span>
              <span className='text-subtext0 text-xl'>'Virkkunen'</span>
            </div>
            <span>Almeida</span>
          </div>
          <FontAwesomeIcon
            icon={faCat}
            color='#d20f39'
          />
        </div>
        <span className='text-subtext1 text-xl max-sm:text-sm font-medium mt-6'>
          🇧🇷🇮🇹Italian-Brazilian Web Developer based in 🇭🇺 Hungary
        </span>
      </Block>

      <Block
        title='Contact me:'
        buttonGroup
      >
        {data.contact.map((item) => (
          <Button
            title={item.title}
            icon={item.icon}
            color={item.color}
            link={item.link}
          />
        ))}
      </Block>
    </div>
  );
}

export default App;
