import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Search } from 'lucide-react';

type FilterSectionProps = {
  filters: Record<string, string[]>;
  activeFilter: string;
  onFilterChange: (filter: string) => void;
  onSearch: (term: string) => void;
};

export default function FilterSection({
  filters,
  activeFilter,
  onFilterChange,
  onSearch,
}: FilterSectionProps) {
  const [localSearchTerm, setLocalSearchTerm] = useState('');

  const handleSearchClick = () => {
    onSearch(localSearchTerm);
  };
  
  const handleTagClick = (tag: string) => {
    setLocalSearchTerm(''); 
    onFilterChange(tag);
  };

  return (
    <div className="mb-4 space-y-4 rounded-lg bg-card p-4 shadow-sm">
      <div className="flex w-full max-w-2xl items-center space-x-2">
        <Input
          type="text"
          placeholder="输入关键词"
          value={localSearchTerm}
          onChange={(e) => setLocalSearchTerm(e.target.value)}
          onKeyDown={(e) => e.key === 'Enter' && handleSearchClick()}
          className="h-10 text-base md:text-sm"
        />
        <Button type="submit" onClick={handleSearchClick} className="h-10">
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
                onClick={() => handleTagClick(tag)}
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
