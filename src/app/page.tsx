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

  const handleSearch = useCallback((newSearchTerm: string) => {
    setSearchTerm(newSearchTerm);
    setActiveFilter(newSearchTerm); // Keep UI in sync
    setCurrentPage(1);
  }, []);

  const handleFilterChange = useCallback((newFilter: string) => {
    if (filters.热门搜索.includes(newFilter) || filters.其他搜索.includes(newFilter)) {
      setSearchTerm(newFilter);
      setActiveFilter(newFilter);
    } else {
      setSearchTerm('');
      setActiveFilter(newFilter);
    }
    setCurrentPage(1);
  }, []);

  const filteredCourses = useMemo(() => {
    let results = courses;
    const term = searchTerm.toLowerCase();

    // Handle status filter first
    if (activeFilter !== '全部' && ['已开课', '未开课'].includes(activeFilter)) {
      results = results.filter(course => course.status === activeFilter);
    }

    // Then handle search term, only on course title
    if (term) {
      results = results.filter(course =>
        course.title.toLowerCase().includes(term)
      );
    }

    return results;
  }, [activeFilter, searchTerm]);

  const totalPages = Math.ceil(filteredCourses.length / ITEMS_PER_PAGE);

  const paginatedCourses = useMemo(() => {
    const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
    return filteredCourses.slice(startIndex, startIndex + ITEMS_PER_PAGE);
  }, [filteredCourses, currentPage]);
  
  const handlePageChange = (newPage: number) => {
    if (newPage > 0 && newPage <= totalPages) {
        setCurrentPage(newPage);
    }
  };

  return (
    <div className="flex h-screen flex-col bg-background text-foreground">
      <Header />
      <main className="container mx-auto flex flex-1 flex-col px-4 py-2 md:px-6 lg:px-8">
        <FilterSection
          filters={filters}
          activeFilter={activeFilter}
          onFilterChange={handleFilterChange}
          onSearch={handleSearch}
          searchTerm={searchTerm}
        />
        <div className="flex-grow">
          <CourseGrid courses={paginatedCourses} />
        </div>
        
        {totalPages > 1 && (
          <div className="flex shrink-0 items-center justify-center gap-4 py-2">
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
