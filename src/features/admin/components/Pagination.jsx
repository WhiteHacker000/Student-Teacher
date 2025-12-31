"use client"

import "./Pagination.css"

export default function Pagination({
  currentPage,
  totalPages,
  onPageChange,
  itemsPerPage = 10,
  totalItems,
}) {
  const startItem = (currentPage - 1) * itemsPerPage + 1
  const endItem = Math.min(currentPage * itemsPerPage, totalItems || 0)

  const getPageNumbers = () => {
    const pages = []
    const maxVisible = 5

    if (totalPages <= maxVisible) {
      for (let i = 1; i <= totalPages; i++) {
        pages.push(i)
      }
    } else {
      pages.push(1)
      if (currentPage > 3) pages.push("...")
      for (let i = Math.max(2, currentPage - 1); i <= Math.min(totalPages - 1, currentPage + 1); i++) {
        if (!pages.includes(i)) pages.push(i)
      }
      if (currentPage < totalPages - 2) pages.push("...")
      if (!pages.includes(totalPages)) pages.push(totalPages)
    }
    return pages
  }

  return (
    <div className="pagination-container">
      <div className="pagination-container__info">
        {totalItems && (
          <p>
            Showing <span className="pagination-container__info-highlight">{startItem}</span> to{" "}
            <span className="pagination-container__info-highlight">{endItem}</span> of{" "}
            <span className="pagination-container__info-highlight">{totalItems}</span> results
          </p>
        )}
      </div>
      <nav className="pagination" aria-label="Pagination navigation">
        <button
          className="pagination__btn"
          onClick={() => onPageChange(currentPage - 1)}
          disabled={currentPage === 1}
          aria-label="Previous page"
        >
          ← Previous
        </button>

        <div className="pagination__pages">
          {getPageNumbers().map((page, index) =>
            page === "..." ? (
              <span key={`dots-${index}`} className="pagination__ellipsis">
                ...
              </span>
            ) : (
              <button
                key={page}
                className={`pagination__btn ${currentPage === page ? "pagination__btn--active" : ""}`}
                onClick={() => onPageChange(page)}
                aria-current={currentPage === page ? "page" : undefined}
              >
                {page}
              </button>
            ),
          )}
        </div>

        <button
          className="pagination__btn"
          onClick={() => onPageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
          aria-label="Next page"
        >
          Next →
        </button>
      </nav>
    </div>
  )
}
