import Link from 'next/link';
import type { Course } from '@/lib/mock-data';
import CourseCard from './course-card';

type CourseGridProps = {
  courses: Course[];
};

export default function CourseGrid({ courses }: CourseGridProps) {
  if (courses.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center rounded-lg border-2 border-dashed border-muted-foreground/30 bg-card p-12 text-center">
        <h3 className="text-xl font-semibold text-muted-foreground">没有找到相关课程</h3>
        <p className="mt-2 text-sm text-muted-foreground">请尝试选择其他筛选条件。</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {courses.map(course => (
        <Link key={course.id} href={course.videoUrl} className="block h-full">
          <CourseCard course={course} />
        </Link>
      ))}
    </div>
  );
}
