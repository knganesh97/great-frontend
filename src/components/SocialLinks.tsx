import GitHubIcon from './icons/GitHubIcon';
import LinkedInIcon from './icons/LinkedInIcon';
import InstagramIcon from './icons/InstagramIcon';
import XIcon from './icons/XIcon';

interface SocialLinksProps {
  githubUrl?: string;
  linkedinUrl?: string;
  instagramUrl?: string;
  twitterUrl?: string;
}

export default function SocialLinks({ githubUrl, linkedinUrl, instagramUrl, twitterUrl }: SocialLinksProps) {
  const iconClass = "flex justify-center items-center gap-2 p-2 rounded";
  const linkClass = iconClass + " hover:bg-gray-100";
  
  return (
    <div className="flex justify-center gap-4 self-stretch">
      {githubUrl ? (
        <a href={githubUrl} target="_blank" rel="noopener noreferrer" className={linkClass}>
          <GitHubIcon className="w-[16.666683197021484px] h-[16.255502700805664px] text-indigo-700" />
        </a>
      ) : (
        <div className={iconClass}>
          <GitHubIcon className="w-[16.666683197021484px] h-[16.255502700805664px] text-indigo-700" />
        </div>
      )}
      {linkedinUrl ? (
        <a href={linkedinUrl} target="_blank" rel="noopener noreferrer" className={linkClass}>
          <LinkedInIcon className="w-[15.000016212463379px] h-[15px] text-indigo-700" />
        </a>
      ) : (
        <div className={iconClass}>
          <LinkedInIcon className="w-[15.000016212463379px] h-[15px] text-indigo-700" />
        </div>
      )}
      {instagramUrl ? (
        <a href={instagramUrl} target="_blank" rel="noopener noreferrer" className={linkClass}>
          <InstagramIcon className="w-[16.666099548339844px] h-[16.666099548339844px] text-indigo-700" />
        </a>
      ) : (
        <div className={iconClass}>
          <InstagramIcon className="w-[16.666099548339844px] h-[16.666099548339844px] text-indigo-700" />
        </div>
      )}
      {twitterUrl ? (
        <a href={twitterUrl} target="_blank" rel="noopener noreferrer" className={linkClass}>
          <XIcon className="w-[17.977466583251953px] h-[16.25px] text-indigo-700" />
        </a>
      ) : (
        <div className={iconClass}>
          <XIcon className="w-[17.977466583251953px] h-[16.25px] text-indigo-700" />
        </div>
      )}
    </div>
  );
}