import { ReactNode } from 'react';

interface Block {
  children: ReactNode;
  title?: string;
  buttonGroup?: boolean;
}

const Block: React.FC<Block> = ({ children, title, buttonGroup }) => {
  return (
    <div
      className={`flex flex-col justify-between p-6 bg-base rounded-2xl xl:col-start-4 xl:col-span-6 shadow-md`}
    >
      {title && <span className='font-bold text-2xl mb-6'>{title}</span>}
      {buttonGroup ? <div className='flex max-lg:flex-col max-lg:justify-between flex-wrap gap-x-2 gap-y-4 xl:gap-4'>{children}</div> : <>{children}</>}
    </div>
  );
};

export default Block;
