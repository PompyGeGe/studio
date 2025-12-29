'use client';

import { useState, useMemo } from 'react';
import Header from '@/components/layout/header';
import FilterSection from '@/components/courses/filter-section';
import CourseGrid from '@/components/courses/course-grid';
import { courses, filters } from '@/lib/mock-data';

export default function Home() {
  const [activeFilter, setActiveFilter] = useState('全部');

  const filteredCourses = useMemo(() => {
    if (activeFilter === '全部') {
      return courses;
    }
    // Filter by either category or status
    return courses.filter(course => course.category === activeFilter || course.status === activeFilter);
  }, [activeFilter]);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <main className="container mx-auto px-4 py-8 md:px-6 lg:px-8">
        <FilterSection
          filters={filters}
          activeFilter={activeFilter}
          setActiveFilter={setActiveFilter}
        />
        <CourseGrid courses={filteredCourses} />
      </main>
    </div>
  );
}
