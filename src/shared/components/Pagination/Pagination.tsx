import React, { useEffect, useState } from "react";
import styles from "./Pagination.module.scss";

type PaginationProps = {
  currentPage: number;
  total: number;
  limit: number;
  changePage: (pageNumber: number) => void;
};

const Pagination: React.FC<PaginationProps> = ({
  currentPage,
  total,
  limit,
  changePage,
}) => {
  const [pages, setPages] = useState<number[]>([]);

  useEffect(() => {
    const pagesCount = Math.ceil(total / limit);
    setPages(range(1, pagesCount));
  }, [total, limit]);

  const range = (start: number, end: number) => {
    return Array.from({ length: end - start + 1 }, (_, i) => start + i);
  };

  return (
    <ul className={styles.pagination}>
      {pages.map((page, i) => (
        <li
          key={i}
          className={`${currentPage === page ? `${styles.active}` : ""}`}
          onClick={() => changePage(page)}
        >
          <span>{page}</span>
        </li>
      ))}
    </ul>
  );
};

export default Pagination;
