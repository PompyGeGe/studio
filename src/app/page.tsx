'use client';

import { useState, useMemo, useCallback } from 'react';
import Header from '@/components/layout/header';
import FilterSection from '@/components/courses/filter-section';
import CourseGrid from '@/components/courses/course-grid';
import { courses, filters } from '@/lib/mock-data';

export default function Home() {
  const [activeFilter, setActiveFilter] = useState('全部');
  const [searchTerm, setSearchTerm] = useState('');
  const [finalSearchTerm, setFinalSearchTerm] = useState('');

  const handleSearch = useCallback(() => {
    setFinalSearchTerm(searchTerm);
    setActiveFilter('全部'); // Reset tag filter when a new search is performed
  }, [searchTerm]);

  const setActiveAndClearSearch = useCallback((filter: string) => {
    setSearchTerm('');
    setFinalSearchTerm('');
    setActiveFilter(filter);
  }, []);

  const filteredCourses = useMemo(() => {
    let results = courses;

    // First, apply text search if a search term is present
    if (finalSearchTerm) {
      const lowercasedTerm = finalSearchTerm.toLowerCase();
      results = results.filter(course =>
        course.title.toLowerCase().includes(lowercasedTerm) ||
        course.teacher.toLowerCase().includes(lowercasedTerm) ||
        course.category.toLowerCase().includes(lowercasedTerm) ||
        course.platform.toLowerCase().includes(lowercasedTerm)
      );
    } 
    // If no text search, apply the active filter tag
    else if (activeFilter !== '全部') {
       // Handle status filter
      if (['已开课', '未开课'].includes(activeFilter)) {
        results = results.filter(course => course.status === activeFilter);
      } else {
        // Handle keyword search from tags
        const lowercasedFilter = activeFilter.toLowerCase();
        results = results.filter(course =>
          course.title.toLowerCase().includes(lowercasedFilter) ||
          course.teacher.toLowerCase().includes(lowercasedFilter) ||
          course.category.toLowerCase().includes(lowercasedFilter) ||
          course.platform.toLowerCase().includes(lowercasedFilter)
        );
      }
    }

    return results;
  }, [activeFilter, finalSearchTerm]);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <main className="container mx-auto px-4 py-8 md:px-6 lg:px-8">
        <FilterSection
          filters={filters}
          activeFilter={activeFilter}
          setActiveFilter={setActiveAndClearSearch}
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
          handleSearch={handleSearch}
        />
        <CourseGrid courses={filteredCourses} />
      </main>
    </div>
  );
}