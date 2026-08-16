import { ChevronLeft, ChevronRight } from 'lucide-react';
import Button from './Button';

export default function Pagination({ page, totalPages, onPageChange }) {
  if (totalPages <= 1) return null;

  return (
    <div className="pagination">
      <Button
        variant="outline"
        size="sm"
        icon={ChevronLeft}
        disabled={page <= 1}
        onClick={() => onPageChange(page - 1)}
        aria-label="Previous page"
      />
      <span className="text-muted" style={{ fontSize: 'var(--fs-sm)' }}>
        Page {page} of {totalPages}
      </span>
      <Button
        variant="outline"
        size="sm"
        icon={ChevronRight}
        disabled={page >= totalPages}
        onClick={() => onPageChange(page + 1)}
        aria-label="Next page"
      />
    </div>
  );
}
