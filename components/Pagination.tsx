import { IconChevronLeft, IconChevronRight, IconChevronsLeft, IconChevronsRight } from "@tabler/icons-react";

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

export default function Pagination({ currentPage, totalPages, onPageChange }: PaginationProps) {
  // Generate page numbers to display
  const getPageNumbers = () => {
    const pages = [];
    const showPages = 5; // Number of page buttons to show
    
    // Calculate start and end of pages to show
    let startPage = Math.max(1, currentPage - Math.floor(showPages / 2));
    let endPage = startPage + showPages - 1;
    
    if (endPage > totalPages) {
      endPage = totalPages;
      startPage = Math.max(1, endPage - showPages + 1);
    }
    
    // Add pages
    for (let i = startPage; i <= endPage; i++) {
      pages.push(i);
    }
    
    return pages;
  };
  
  const pageNumbers = getPageNumbers();
  
  return (
    <div className="flex items-center justify-center gap-2 mt-8">
      {/* First page */}
      <button
        onClick={() => onPageChange(1)}
        disabled={currentPage === 1}
        className="p-2 rounded-lg bg-indigo-900/20 border border-indigo-900/40 text-gray-400 hover:text-white hover:border-violet-500/50 transition-colors disabled:opacity-50 disabled:pointer-events-none"
        aria-label="First page"
      >
        <IconChevronsLeft size={16} />
      </button>
      
      {/* Previous page */}
      <button
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className="p-2 rounded-lg bg-indigo-900/20 border border-indigo-900/40 text-gray-400 hover:text-white hover:border-violet-500/50 transition-colors disabled:opacity-50 disabled:pointer-events-none"
        aria-label="Previous page"
      >
        <IconChevronLeft size={16} />
      </button>
      
      {/* Page numbers */}
      {pageNumbers.map((page) => (
        <button
          key={page}
          onClick={() => onPageChange(page)}
          className={`h-10 w-10 rounded-lg font-medium text-sm flex items-center justify-center transition-colors ${
            currentPage === page
              ? 'bg-gradient-to-r from-indigo-600 via-purple-600 to-violet-600 text-white'
              : 'bg-indigo-900/20 border border-indigo-900/40 text-gray-400 hover:text-white hover:border-violet-500/50'
          }`}
        >
          {page}
        </button>
      ))}
      
      {/* Next page */}
      <button
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        className="p-2 rounded-lg bg-indigo-900/20 border border-indigo-900/40 text-gray-400 hover:text-white hover:border-violet-500/50 transition-colors disabled:opacity-50 disabled:pointer-events-none"
        aria-label="Next page"
      >
        <IconChevronRight size={16} />
      </button>
      
      {/* Last page */}
      <button
        onClick={() => onPageChange(totalPages)}
        disabled={currentPage === totalPages}
        className="p-2 rounded-lg bg-indigo-900/20 border border-indigo-900/40 text-gray-400 hover:text-white hover:border-violet-500/50 transition-colors disabled:opacity-50 disabled:pointer-events-none"
        aria-label="Last page"
      >
        <IconChevronsRight size={16} />
      </button>
    </div>
  );
} 