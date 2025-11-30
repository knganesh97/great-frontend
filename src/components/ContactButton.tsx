
interface ContactButtonProps {
  onClick?: () => void;
}

export default function ContactButton({ onClick }: ContactButtonProps) {
  return (
    <div className="flex justify-center items-center gap-1.5 self-stretch bg-indigo-700 px-4 py-2.5 rounded cursor-pointer" onClick={onClick}>
      <div className="flex justify-center items-center px-0.5">
        <span className="font-medium text-base text-white">Contact me</span>
      </div>
    </div>
  );
}