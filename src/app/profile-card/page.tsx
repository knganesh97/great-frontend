import ProfileCard from "@/components/ProfileCard";

export default function ProfileCardPage() {
    return (
        <div 
            className="flex flex-col items-center py-[120px] px-0 relative min-h-screen mx-auto" 
            style={{ background: 'linear-gradient(147.52deg, #F9FAFB 8.89%, #D2D6DB 100.48%)' }}
        >
            <ProfileCard/>
        </div>
    );
}