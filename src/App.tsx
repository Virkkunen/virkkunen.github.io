import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Block from './components/Block';
import Button from './components/Button';
import { faCat, faCode } from '@fortawesome/free-solid-svg-icons';
import data from './data';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { LazyMotion, MotionConfig, domAnimation, m } from 'framer-motion';
import Ocho from './components/Ocho';

function App() {
  return (
    <MotionConfig reducedMotion='user'>
      <LazyMotion features={domAnimation}>
        <div className='flex flex-col xl:grid xl:grid-cols-12 xl:row-auto max-md:p-6 xl:h-full xl:place-content-center xl:my-auto xl:min-h-screen gap-y-8 xl:py-48'>
          <Block>
            {/* I'll get around simplifying this eventually */}
            <div className='flex flex-row justify-between items-center'>
              <div className='flex flex-col gap-y-1 font-extrabold text-[48px]'>
                <div className='flex flex-row gap-x-2 items-baseline'>
                  <span>Virkkunen</span>
                </div>
                <span className='text-overlay2 text-lg font-fira-condensed'>
                  "They said I could become anything, so I became a disappointment."
                </span>
              </div>
              <m.div
                whileHover={{
                  scale: 1.2,
                }}
              >
                <FontAwesomeIcon
                  className='transition-all ease-in-out duration-200 rounded-2xl hover:bg-clip-content hover:text-transparent hover:bg-gradient-to-b hover:from-[#FF218C] hover:via-[#FFD800] hover:to-[#21B1FF]'
                  icon={faCat}
                  color='#d20f39'
                  size='4x'
                />
              </m.div>
            </div>
            <span className='text-subtext1 text-lg max-sm:text-sm font-medium mt-6'>
              Hej, I'm Virkkunen! You can call me Vikki or V.{' '}
              <span className='text-subtext0 text-[0.9rem]'>
                vrkknn is Virkkunen without the vowels.
              </span>
            </span>
            <span className='text-subtext1 text-lg max-sm:text-sm font-medium mt-2'>
              I'm a web developer and film major currently based in Hungary. Also a tech enthusiast,
              FOSS supporter, hobbyist artist{' '}
              <span className='text-subtext0 text-[0.9rem]'>and I use arch btw</span>
            </span>
          </Block>

          <Block
            title='Some projects'
            buttonGroup
          >
            {data.portfolio.map((item) => (
              <Button
                title={item.title}
                icon={item.icon}
                color={item.color}
                link={item.link}
                key={item.title}
                tooltipTarget={item.title.replace(/\s/g, '')}
                tooltip={item.tooltip}
              />
            ))}
          </Block>

          <Block
            title='Services'
            buttonGroup
          >
            {data.services.map((item) => (
              <Button
                title={item.title}
                icon={item.icon}
                color={item.color}
                link={item.link}
                key={item.title}
                tooltipTarget={item.title.replace(/\s/g, '')}
                tooltip={item.tooltip}
              />
            ))}
          </Block>

          <Block
            title='Contact me'
            buttonGroup
          >
            {data.contact.map((item) => (
              <Button
                title={item.title}
                icon={item.icon}
                color={item.color}
                link={item.link}
                key={item.title}
                tooltipTarget={item.title.replace(/\s/g, '')}
                tooltip={item.tooltip}
              />
            ))}
          </Block>

          <Block
            title='88x31'
            retroGroup
          >
            {data.oitoOitoTresUm.map((item) => (
              <Ocho
                title={item.title}
                image={item.image}
                link={item.link}
                alt={item.alt ?? item.title}
                tooltipTarget={item.title}
                key={item.title}
              />
            ))}
          </Block>

          <Block>
            <div className='flex flex-row justify-around xl:mx-auto xl:gap-24'>
              <a
                className='flex flex-row items-center gap-x-1 transition-all ease-in-out duration-200 hover:text-blue active:text-lavender'
                target='_blank'
                rel='noreferrer noopener'
                href='https://github.com/Virkkunen'
              >
                <FontAwesomeIcon
                  icon={faGithub}
                  fixedWidth
                />
                <span>Virkkunen</span>
              </a>
              <span className='text-overlay2'>•</span>
              <a
                className='flex flex-row items-center gap-x-1 transition-all ease-in-out duration-200 hover:text-blue active:text-lavender'
                target='_blank'
                rel='noreferrer noopener'
                href='https://github.com/Virkkunen/virkkunen.github.io'
              >
                <FontAwesomeIcon
                  icon={faCode}
                  fixedWidth
                />
                <span>source</span>
              </a>
            </div>
          </Block>
        </div>
      </LazyMotion>
    </MotionConfig>
  );
}

export default App;
