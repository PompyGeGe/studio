import Image from 'next/image';
import Link from 'next/link';
import type { Course } from '@/lib/mock-data';
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';
import { School, Clapperboard } from 'lucide-react';
import { PlaceHolderImages } from '@/lib/placeholder-images';

type CourseCardProps = {
  course: Course;
};

export default function CourseCard({ course }: CourseCardProps) {
    const placeholder = PlaceHolderImages.find(p => p.id === course.imageId);
    const imageUrl = placeholder?.imageUrl ?? "https://picsum.photos/seed/placeholder/400/250";
    const imageHint = placeholder?.imageHint ?? "";

    return (
        <Link href={course.videoUrl} className="block h-full">
            <Card className="group flex h-full flex-col overflow-hidden rounded-lg border-none bg-card shadow-sm transition-all duration-300 hover:shadow-xl hover:-translate-y-2">
                <CardHeader className="p-0">
                    <div className="relative aspect-[16/10] w-full overflow-hidden">
                        <Image
                            src={imageUrl}
                            alt={course.title}
                            fill
                            className="object-cover transition-transform duration-300 group-hover:scale-105"
                            data-ai-hint={imageHint}
                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        />
                    </div>
                </CardHeader>
                <CardContent className="flex-grow p-4">
                    <h3 className="mb-2 font-headline text-lg font-bold leading-tight">{course.title}</h3>
                    <div className="flex items-center text-sm text-muted-foreground">
                        <School className="mr-2 h-4 w-4 shrink-0" />
                        <span>{course.teacher}</span>
                    </div>
                </CardContent>
                <CardFooter className="p-4 pt-0">
                    <div className="flex items-center text-sm text-muted-foreground">
                        <Clapperboard className="mr-2 h-4 w-4 shrink-0" />
                        <span>来源: {course.platform}</span>
                    </div>
                </CardFooter>
            </Card>
        </Link>
    );
}
