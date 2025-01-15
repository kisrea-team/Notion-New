/*
 * @Author: zitons
 * @Date: 2024-03-03 21:36:18
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2024-07-26 19:57:28
 * @Description: 简介
 */
import styles from "./ui.module.css";

const Pagination = ({
  api,
  pageNumber,
  currentPage,
  pageSize,
  onPageChange,
}) => {
  const pagesCount = Number(pageNumber[0]);
  //if (pagesCount === 1) return null;
  const pages = Array.from({ length: pagesCount }, (_, i) => i + 1);

  // const searchParams = useSearchParams();

  // const currentPage = Number(searchParams.get('page')) || 1;
  currentPage = Number(currentPage);
  return (
    <div className="flex  gap-3">
      <ul className={styles.line}>
        <a
          href={api + "" + String(currentPage - 1)}
          style={{ display: currentPage != 1 ? "block" : "none" }}
        >
          <svg
            width="20"
            height="20"
            viewBox="0 0 87 157"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={styles.icon}
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M73.3744 154.725C76.3033 157.654 81.052 157.654 83.981 154.725C86.9099 151.796 86.9099 147.047 83.981 144.118L18.5901 78.7272L84.014 13.3033C86.9429 10.3744 86.9429 5.62563 84.014 2.69671C81.0851 -0.232232 76.3363 -0.232232 73.4074 2.69671L3.1017 73.0024C2.9517 73.1305 2.80556 73.2655 2.66369 73.4074C-0.265246 76.3363 -0.265246 81.0851 2.66369 84.014L73.3744 154.725Z"
              fill="white"
            />
          </svg>
        </a>
      </ul>

      <ul className={styles.pagination}>
        {pages.map((page) => (
          <li
            key={page}
            className={
              page === currentPage ? styles.pageItemActive : styles.pageItem
            }
          >
            <a className={styles.pageLink} href={api + "/" + page}>
              {page}
            </a>
          </li>
        ))}
      </ul>
      <ul className={styles.line}>
        <a
          href={api + "" + String(currentPage + 1)}
          style={{ display: currentPage != pagesCount ? "block" : "none" }}
        >
          <svg
            width="20"
            height="20"
            viewBox="0 0 87 157"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={styles.icon}
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M13.3033 2.6967C10.3744 -0.232228 5.62563 -0.232228 2.6967 2.6967C-0.232232 5.62564 -0.232232 10.3744 2.6967 13.3033L68.0876 78.6942L2.66369 144.118C-0.265239 147.047 -0.265239 151.796 2.66369 154.725C5.59262 157.654 10.3414 157.654 13.2703 154.725L83.576 84.419C83.726 84.2909 83.8721 84.1559 84.014 84.014C86.9429 81.0851 86.9429 76.3363 84.014 73.4074L13.3033 2.6967Z"
              fill="white"
            />
          </svg>
        </a>
      </ul>
    </div>
  );
};

export default Pagination;
