import BlogCard from '@/components/BlogCard';

export default function BlogCardPage() {
    return (
        <div 
            className="flex flex-col items-center py-[120px] px-0 relative w-[375px] h-[812px] min-h-[812px] md:w-3xl md:h-[1024px] md:min-h-[1024px] lg:w-[1440px] lg:h-[768px] lg:min-h-[768px] mx-auto" 
            style={{ background: 'linear-gradient(147.52deg, #F9FAFB 8.89%, #D2D6DB 100.48%)' }}
        >
            <BlogCard
                category="Interior"
                title="Top 5 Living Room Inspirations"
                description="Curated vibrants colors for your living, make it pop & calm in the same time."
                imageUrl="/images/blog-image.png"
                imageAlt="Living room inspiration"
            />
        </div>
    );
}