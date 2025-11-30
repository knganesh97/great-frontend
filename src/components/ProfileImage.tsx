import Image from 'next/image';

interface ProfileImageProps {
  imageUrl: string;
  name: string;
}

export default function ProfileImage({ imageUrl, name }: ProfileImageProps) {
  return (
    <div className="w-16 h-16 relative">
      <Image className="object-cover rounded-full" src={imageUrl} alt={name} fill sizes="64px" />
    </div>
  );
}