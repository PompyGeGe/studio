
import type { Course } from '@/lib/mock-data';

export function filterCourses(
  courses: Course[],
  activeFilter: string,
  searchTerm: string
): Course[] {
  let results = courses;
  const term = searchTerm.toLowerCase().trim();

  if (activeFilter !== '全部' && ['已开课', '未开课'].includes(activeFilter)) {
    results = results.filter(course => course.status === activeFilter);
  }

  if (term) {
    if (term.length >= 2) {
      const bigrams = [];
      for (let i = 0; i <= term.length - 2; i++) {
        bigrams.push(term.slice(i, i + 2));
      }
      
      results = results.filter(course => {
        const title = course.title.toLowerCase();
        return bigrams.some(bigram => title.includes(bigram));
      });
    } else if (term.length === 1) {
      results = results.filter(course => course.title.toLowerCase().includes(term));
    }
  }

  return results;
}
