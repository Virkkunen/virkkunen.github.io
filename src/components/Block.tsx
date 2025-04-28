import { m } from "framer-motion";
import { ReactNode } from "react";

interface Block {
  children: ReactNode;
  title?: string;
  buttonGroup?: boolean;
}

const animList = {
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      ease: "circInOut",
      duration: 0.56,
      type: "spring",
    },
  },
  hidden: { opacity: 0, x: 2000 },
};

const animItem = {
  visible: {
    opacity: 1,
    x: 0,
    y: 0,
    transition: { ease: "easeInOut", duration: 0.86, type: "spring" },
  },
  hidden: { opacity: 0, y: 1000 },
};

const Block: React.FC<Block> = ({ children, title, buttonGroup }) => {
  return (
    <m.div
      className={`flex flex-col justify-between p-6 bg-base rounded-2xl xl:col-start-4 xl:col-span-6 2xl:col-start-5 2xl:col-span-4 shadow-md`}
      initial="hidden"
      animate="visible"
      variants={animList}
    >
      {title && <span className="font-bold text-2xl mb-6">{title}</span>}
      {buttonGroup ? (
        <m.div
          className="flex max-lg:flex-col max-lg:justify-center flex-wrap gap-x-2 gap-y-4 xl:gap-4"
          variants={animItem}
        >
          {children}
        </m.div>
      ) : (
        <>{children}</>
      )}
    </m.div>
  );
};

export default Block;
