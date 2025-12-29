'use client';

import { useState, useMemo, useCallback } from 'react';
import Header from '@/components/layout/header';
import FilterSection from '@/components/courses/filter-section';
import CourseGrid from '@/components/courses/course-grid';
import { courses, filters } from '@/lib/mock-data';
import { Button } from '@/components/ui/button';

const ITEMS_PER_PAGE = 8;

export default function Home() {
  const [activeFilter, setActiveFilter] = useState('全部');
  const [searchTerm, setSearchTerm] = useState('');
  const [finalSearchTerm, setFinalSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);

  const handleSearch = useCallback(() => {
    setFinalSearchTerm(searchTerm);
    setActiveFilter('全部');
    setCurrentPage(1);
  }, [searchTerm]);

  const setActiveAndClearSearch = useCallback((filter: string) => {
    setSearchTerm('');
    setFinalSearchTerm('');
    setActiveFilter(filter);
    setCurrentPage(1);
  }, []);

  const filteredCourses = useMemo(() => {
    let results = courses;

    if (finalSearchTerm) {
      const lowercasedTerm = finalSearchTerm.toLowerCase();
      results = results.filter(course =>
        course.title.toLowerCase().includes(lowercasedTerm) ||
        course.teacher.toLowerCase().includes(lowercasedTerm) ||
        course.category.toLowerCase().includes(lowercasedTerm) ||
        course.platform.toLowerCase().includes(lowercasedTerm)
      );
    } else if (activeFilter !== '全部') {
      if (['已开课', '未开课'].includes(activeFilter)) {
        results = results.filter(course => course.status === activeFilter);
      } else {
        const lowercasedFilter = activeFilter.toLowerCase();
        
        if (filters.热门搜索.includes(activeFilter)) {
          results = results.filter(course => {
            const courseText = `${course.title} ${course.teacher} ${course.category} ${course.platform}`.toLowerCase();
            let matchCount = 0;
            for (let i = 0; i < lowercasedFilter.length; i++) {
              if (courseText.includes(lowercasedFilter[i])) {
                matchCount++;
              }
            }
            return matchCount >= 2;
          });
        } else {
          results = results.filter(course =>
            course.title.toLowerCase().includes(lowercasedFilter) ||
            course.teacher.toLowerCase().includes(lowercasedFilter) ||
            course.category.toLowerCase().includes(lowercasedFilter) ||
            course.platform.toLowerCase().includes(lowercasedFilter)
          );
        }
      }
    }

    return results;
  }, [activeFilter, finalSearchTerm]);

  const totalPages = Math.ceil(filteredCourses.length / ITEMS_PER_PAGE);

  const paginatedCourses = useMemo(() => {
    const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
    const endIndex = startIndex + ITEMS_PER_PAGE;
    return filteredCourses.slice(startIndex, endIndex);
  }, [filteredCourses, currentPage]);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <main className="container mx-auto flex flex-col px-4 py-8 md:px-6 lg:px-8">
        <FilterSection
          filters={filters}
          activeFilter={activeFilter}
          setActiveFilter={setActiveAndClearSearch}
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
          handleSearch={handleSearch}
        />
        <div className="flex-grow">
          <CourseGrid courses={paginatedCourses} />
        </div>
        
        {totalPages > 1 && (
          <div className="mt-8 flex justify-center items-center gap-4">
            <Button
              onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
              disabled={currentPage === 1}
              variant="outline"
            >
              上一页
            </Button>
            <span className="text-sm text-muted-foreground">
              第 {currentPage} 页 / 共 {totalPages} 页
            </span>
            <Button
              onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
              disabled={currentPage === totalPages}
              variant="outline"
            >
              下一页
            </Button>
          </div>
        )}
      </main>
    </div>
  );
}
