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
  const [currentPage, setCurrentPage] = useState(1);

  const filteredCourses = useMemo(() => {
    let results = courses;

    // Apply filter
    if (activeFilter !== '全部') {
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

    // Apply search term on top of filtered results
    if (searchTerm) {
      const lowercasedTerm = searchTerm.toLowerCase();
      results = results.filter(course =>
        course.title.toLowerCase().includes(lowercasedTerm) ||
        course.teacher.toLowerCase().includes(lowercasedTerm) ||
        course.category.toLowerCase().includes(lowercasedTerm) ||
        course.platform.toLowerCase().includes(lowercasedTerm)
      );
    }
    
    return results;
  }, [activeFilter, searchTerm]);

  const totalPages = Math.ceil(filteredCourses.length / ITEMS_PER_PAGE);

  const paginatedCourses = useMemo(() => {
    const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
    return filteredCourses.slice(startIndex, startIndex + ITEMS_PER_PAGE);
  }, [filteredCourses, currentPage]);

  const handleSearch = useCallback((newSearchTerm: string) => {
    setSearchTerm(newSearchTerm);
    setActiveFilter('全部'); // Reset filter when searching
    setCurrentPage(1); // CRITICAL: Reset to page 1 for new search
  }, []);

  const handleFilterChange = useCallback((newFilter: string) => {
    setActiveFilter(newFilter);
    setSearchTerm(''); // Clear search term when a filter is applied
    setCurrentPage(1); // CRITICAL: Reset to page 1 for new filter
  }, []);
  
  const handlePageChange = (newPage: number) => {
    if (newPage > 0 && newPage <= totalPages) {
        setCurrentPage(newPage);
    }
  };

  return (
    <div className="flex flex-col h-screen bg-background text-foreground">
      <Header />
      <main className="container mx-auto flex flex-col px-4 py-4 md:px-6 lg:px-8">
        <FilterSection
          filters={filters}
          activeFilter={activeFilter}
          onFilterChange={handleFilterChange}
          onSearch={handleSearch}
        />
        <div className="flex-grow">
          <CourseGrid courses={paginatedCourses} />
        </div>
        
        {totalPages > 1 && (
          <div className="mt-4 flex justify-center items-center gap-4">
            <Button
              onClick={() => handlePageChange(currentPage - 1)}
              disabled={currentPage === 1}
              variant="outline"
            >
              上一页
            </Button>
            <span className="text-sm text-muted-foreground">
              第 {currentPage} 页 / 共 {totalPages} 页
            </span>
            <Button
              onClick={() => handlePageChange(currentPage + 1)}
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
