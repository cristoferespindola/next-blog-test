import Image from 'next/image';

type TSize = 'sm' | 'md' | 'lg';
type TSizeObject<T> = {
  [key in TSize]: T;
};

const sizes: TSizeObject<number> = {
  sm: 32,
  md: 40,
  lg: 48,
};

const sizeClasses: TSizeObject<string> = {
  sm: 'w-6 h-6',
  md: 'w-8 h-8',
  lg: 'w-10 h-10',
};

const DefaultAvatar = () => {
  return (
    <span className="flex items-center justify-center rounded-full bg-gray-100 text-gray-400 w-full h-full overflow-hidden">
      <svg fill="currentColor" viewBox="0 0 24 24" className="w-full h-full text-[#d1d5dc]">
        <path d="M24 20.993V24H0v-2.996A14.977 14.977 0 0112.004 15c4.904 0 9.26 2.354 11.996 5.993zM16.002 8.999a4 4 0 11-8 0 4 4 0 018 0z"></path>
      </svg>
    </span>
  );
};

export const Avatar = ({ url, size = 'md' }: { url?: string; size?: TSize }) => {
  return (
    <div className={`flex items-center gap-2 ${sizeClasses[size]}`}>
      {url ? (
        <Image src={url} alt="avatar" width={sizes[size]} height={sizes[size]} />
      ) : (
        <DefaultAvatar />
      )}
    </div>
  );
};
