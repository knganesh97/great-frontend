import ProfileImage from './ProfileImage';
import ProfileInfo from './ProfileInfo';
import ContactButton from './ContactButton';
import SocialLinks from './SocialLinks';

interface ProfileCardProps {
  name?: string;
  title?: string;
  bio?: string;
  imageUrl?: string;
  githubUrl?: string;
  linkedinUrl?: string;
  instagramUrl?: string;
  twitterUrl?: string;
  onContactClick?: () => void;
}

export default function ProfileCard({ 
  name = "Sarah Dole",
  title = "Front End Engineer @ Microsoft",
  bio = "I turn coffee into bugs which are fixed by someone else. Certified Stack Overflow and ChatGPT developer.",
  imageUrl = "/images/profile-thumbnail.png",
  githubUrl,
  linkedinUrl,
  instagramUrl,
  twitterUrl,
  onContactClick
}: ProfileCardProps) {
  return (
    <div className="w-[340px] flex flex-col gap-10 bg-white px-4 py-6 rounded-lg shadow-[0px_1px_3px_rgba(0,0,0,0.1),0px_1px_2px_rgba(0,0,0,0.06)]">
      <div className="flex flex-col items-center gap-6 self-stretch">
        <ProfileImage imageUrl={imageUrl} name={name} />
        <ProfileInfo name={name} title={title} bio={bio} />
      </div>
      <div className="flex flex-col gap-6 self-stretch">
        <ContactButton onClick={onContactClick} />
        <SocialLinks 
          githubUrl={githubUrl}
          linkedinUrl={linkedinUrl}
          instagramUrl={instagramUrl}
          twitterUrl={twitterUrl}
        />
      </div>
    </div>
  );
}
