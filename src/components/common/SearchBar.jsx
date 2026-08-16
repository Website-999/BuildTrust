import { Search } from 'lucide-react';

export default function SearchBar({ value, onChange, placeholder = 'Search…' }) {
  return (
    <div className="search-bar">
      <Search size={16} color="var(--text-muted)" />
      <input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        aria-label={placeholder}
      />
    </div>
  );
}
