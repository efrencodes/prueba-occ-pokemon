import Link from "next/link";
import { getQueryParams } from "../utils/utils";
import styles from "../styles/Pagination.module.css";

const Pagination = ({ previous, next }) => {
  return (
    <div className={styles.containerButton}>
      <Link href={getQueryParams(previous)}>
        <a className="nes-btn">Previous</a>
      </Link>
      <Link href={getQueryParams(next)}>
        <a className="nes-btn is-primary">Next</a>
      </Link>
    </div>
  );
};

export default Pagination;
