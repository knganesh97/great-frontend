
interface ProfileInfoProps {
  name: string;
  title: string;
  bio: string;
}

export default function ProfileInfo({ name, title, bio }: ProfileInfoProps) {
  return (
    <>
      <div className="flex flex-col justify-center items-center gap-1 self-stretch">
        <span className="font-medium text-xl text-center text-neutral-900">{name}</span>
        <span className="font-normal text-sm text-center text-neutral-600">{title}</span>
      </div>
      <span className="font-normal text-base text-center text-neutral-600">{bio}</span>
    </>
  );
}