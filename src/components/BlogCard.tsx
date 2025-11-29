import Image from 'next/image';
import { ArrowRight } from 'lucide-react';

interface BlogCardProps {
  category: string;
  title: string;
  description: string;
  imageUrl: string;
  imageAlt?: string;
}

export default function BlogCard({
  category,
  title,
  description,
  imageUrl,
  imageAlt = '',
}: BlogCardProps) {
  return (
    <div className="w-[340px] h-[504px] flex flex-col items-start p-0 bg-white rounded-lg shadow-[0px_1px_3px_rgba(0,0,0,0.1),0px_1px_2px_rgba(0,0,0,0.06)]">
      <div className="relative h-72 w-full self-stretch">
        <Image
          src={imageUrl}
          alt={imageAlt}
          fill
          className="object-cover"
          sizes="340px"
        />
      </div>
      <div className="flex flex-col items-start px-4 py-6 gap-3 w-[340px] h-[216px] self-stretch">
        <div className="flex flex-col items-start p-0 gap-2 w-[308px] h-[60px] self-stretch">
          <div className="flex items-center px-2 py-0.5 w-[67px] h-6 bg-[#F0FDF4] border border-[#BBF7D0] rounded-[9999px]">
            <span className="font-normal text-sm leading-5 text-center text-[#15803D]">
              {category}
            </span>
          </div>
          <h3 className="font-semibold text-lg leading-7 text-[#171717] w-[308px] h-7 self-stretch">{title}</h3>
        </div>
        <div className="flex flex-col items-start p-0 gap-6 w-[308px] h-24 self-stretch">
          <p className="font-medium text-base leading-6 text-[#525252] w-[308px] h-12 self-stretch">
            {description}
          </p>
          <button className="flex items-center justify-center p-0 gap-1.5 w-[114px] h-6 rounded bg-white focus:shadow-[0px_0px_0px_4px_rgba(68,76,231,0.12)] focus:outline-none transition-shadow group">
            <span className="flex justify-center items-center px-0.5 w-[88px] h-6 font-medium text-base leading-6 text-[#4338CA] group-hover:text-indigo-800 transition-colors">
              Read more
            </span>
            <ArrowRight className="w-5 h-5 text-[#4338CA] group-hover:text-indigo-800 transition-colors" />
          </button>
        </div>
      </div>
    </div>
  );
}
