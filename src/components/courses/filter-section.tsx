import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Search } from 'lucide-react';

type FilterSectionProps = {
  filters: Record<string, string[]>;
  activeFilter: string;
  setActiveFilter: (filter: string) => void;
  searchTerm: string;
  setSearchTerm: (term: string) => void;
  handleSearch: () => void;
};

export default function FilterSection({
  filters,
  activeFilter,
  setActiveFilter,
  searchTerm,
  setSearchTerm,
  handleSearch,
}: FilterSectionProps) {
  const onSearchClick = () => {
    setActiveFilter('全部'); // Reset tag filter when performing a text search
    handleSearch();
  };
  
  const onTagClick = (tag: string) => {
    setSearchTerm(''); // Reset text search when clicking a tag
    setActiveFilter(tag);
  };

  return (
    <div className="mb-8 space-y-6 rounded-lg bg-card p-4 shadow-sm sm:p-6">
      <div className="flex w-full max-w-2xl items-center space-x-2">
        <Input
          type="text"
          placeholder="输入关键词"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          onKeyDown={(e) => e.key === 'Enter' && onSearchClick()}
          className="h-10 text-base md:text-sm"
        />
        <Button type="submit" onClick={onSearchClick} className="h-10">
          <Search className="mr-2 h-4 w-4" />
          查询
        </Button>
      </div>

      {Object.entries(filters).map(([category, tags]) => (
        <div key={category} className="flex flex-col gap-2 sm:flex-row sm:items-center sm:gap-x-4">
          <span className="w-24 shrink-0 text-sm font-semibold text-muted-foreground">{category}:</span>
          <div className="flex flex-wrap gap-2">
            {tags.map(tag => (
              <Button
                key={tag}
                variant={activeFilter === tag ? 'default' : 'outline'}
                size="sm"
                className="rounded-full px-4"
                onClick={() => onTagClick(tag)}
              >
                {tag}
              </Button>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
