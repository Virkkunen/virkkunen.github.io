import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Block from "./components/Block";
import Button from "./components/Button";
import { faCat, faCode } from "@fortawesome/free-solid-svg-icons";
import data from "./data";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { LazyMotion, MotionConfig, domAnimation, m } from "framer-motion";

function App() {
  return (
    <MotionConfig reducedMotion="user">
      <LazyMotion features={domAnimation}>
        <div className="flex flex-col xl:grid xl:grid-cols-12 xl:row-auto max-md:p-6 xl:h-full xl:place-content-center xl:my-auto xl:min-h-screen gap-y-8 xl:py-48">
          <Block>
            {/* I'll get around simplifying this eventually */}
            <div className="flex flex-row justify-between items-center">
              <div className="flex flex-col gap-y-1 font-extrabold text-[48px]">
                <div className="flex flex-row gap-x-2 items-baseline">
                  <span>Fred</span>
                  <span className="text-subtext0 text-xl">'Virkkunen'</span>
                </div>
                <span>Almeida</span>
              </div>
              <m.div
                whileHover={{
                  scale: 1.2,
                }}
              >
                <FontAwesomeIcon
                  className="transition-all ease-in-out duration-200 rounded-2xl hover:bg-clip-content hover:text-transparent hover:bg-gradient-to-b hover:from-[#5BCEFA] hover:via-[#F5A9B8] hover:to-white"
                  // className="transition-all ease-in-out duration-200 rounded-2xl"
                  icon={faCat}
                  color="#d20f39"
                  size="4x"
                />
              </m.div>
            </div>
            <span className="text-subtext1 text-xl max-sm:text-sm font-medium mt-6">
              🇧🇷 🇮🇹 Italian-Brazilian Web Developer based in 🇭🇺 Hungary
            </span>
          </Block>

          <Block title="Contact me" buttonGroup>
            {data.contact.map((item) => (
              <Button
                title={item.title}
                icon={item.icon}
                color={item.color}
                link={item.link}
                key={item.title}
                tooltipTarget={item.title.replace(/\s/g, "")}
                tooltip={item.tooltip}
              />
            ))}
          </Block>

          <Block title="Some projects" buttonGroup>
            {data.portfolio.map((item) => (
              <Button
                title={item.title}
                icon={item.icon}
                color={item.color}
                link={item.link}
                key={item.title}
                tooltipTarget={item.title.replace(/\s/g, "")}
                tooltip={item.tooltip}
              />
            ))}
          </Block>

          {/* <Block title='What I know:'>
        <span className='text-[10px]'>(this section will be updated soon™️)</span>
      </Block> */}

          {/* <Block
        title='Curriculum:'
        buttonGroup
      >
        <Button
          title='🇬🇧 In English'
          color='lavender'
          link='/cv_en.pdf'
          tooltipTarget='cv_en'
        />
        <Button
          title='🇧🇷 In Portuguese'
          color='green'
          link='/cv_br.pdf'
          tooltipTarget='cv_br'
        />
      </Block> */}

          <Block>
            <div className="flex flex-row justify-around xl:mx-auto xl:gap-24">
              <a
                className="flex flex-row items-center gap-x-1 transition-all ease-in-out duration-200 hover:text-blue active:text-lavender"
                target="_blank"
                rel="noreferrer noopener"
                href="https://github.com/Virkkunen"
              >
                <FontAwesomeIcon icon={faGithub} fixedWidth />
                <span>Virkkunen</span>
              </a>
              <span className="text-overlay2">•</span>
              <a
                className="flex flex-row items-center gap-x-1 transition-all ease-in-out duration-200 hover:text-blue active:text-lavender"
                target="_blank"
                rel="noreferrer noopener"
                href="https://github.com/Virkkunen/virkkunen.github.io"
              >
                <FontAwesomeIcon icon={faCode} fixedWidth />
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
