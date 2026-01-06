
'use client';

import { useState } from 'react';
import Image from 'next/image';
import type { Course } from '@/lib/mock-data';
import imageManifest from '@/lib/placeholder-images.json';
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';
import { School, Clapperboard } from 'lucide-react';

type CourseCardProps = {
  course: Course;
};

export default function CourseCard({ course }: CourseCardProps) {
    const imageDetails = imageManifest[course.imageId];
    const [imageSrc, setImageSrc] = useState(imageDetails.src);

    const handleImageError = () => {
        if (imageSrc !== imageDetails.fallbackSrc) {
            setImageSrc(imageDetails.fallbackSrc);
        }
    };

    return (
        <Card className="group flex h-full flex-col overflow-hidden rounded-lg border bg-card shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:ring-2 hover:ring-primary">
            <CardHeader className="p-0">
                <div className="relative aspect-[16/10] w-full overflow-hidden">
                    <Image
                        src={imageSrc}
                        alt={course.title}
                        width={imageDetails.width}
                        height={imageDetails.height}
                        data-ai-hint={imageDetails.hint}
                        className="object-cover transition-transform duration-300 ease-in-out group-hover:scale-105"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        onError={handleImageError}
                    />
                </div>
            </CardHeader>
            <CardContent className="flex-grow p-3">
                <h3 className="mb-1 font-headline text-base font-bold leading-tight group-hover:text-primary">{course.title}</h3>
                <div className="flex items-center text-xs text-muted-foreground">
                    <School className="mr-1.5 h-3.5 w-3.5 shrink-0" />
                    <span className='text-xs'>{course.teacher}</span>
                </div>
            </CardContent>
            <CardFooter className="p-3 pt-0">
                <div className="flex items-center text-xs text-muted-foreground">
                    <Clapperboard className="mr-1.5 h-3.5 w-3.5 shrink-0" />
                    <span>来源: {course.platform}</span>
                </div>
            </CardFooter>
        </Card>
    );
}
