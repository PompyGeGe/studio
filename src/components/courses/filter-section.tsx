import { Button } from '@/components/ui/button';

type FilterSectionProps = {
  filters: Record<string, string[]>;
  activeFilter: string;
  setActiveFilter: (filter: string) => void;
};

export default function FilterSection({ filters, activeFilter, setActiveFilter }: FilterSectionProps) {
  return (
    <div className="mb-8 space-y-4 rounded-lg bg-card p-4 shadow-sm sm:p-6">
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
                onClick={() => setActiveFilter(tag)}
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
