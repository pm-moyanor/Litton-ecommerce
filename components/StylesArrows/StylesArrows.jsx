import React from "react";
import styles from "./StylesArrows.module.css"
import { faChevronRight,faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const CustomPrevArrow = ({ onClick }) => (
  <button onClick={onClick} className={styles["custom-prev-arrow"]} >
    <FontAwesomeIcon icon={faChevronLeft} />
  </button>
);

const CustomNextArrow = ({ onClick }) => (
  <button onClick={onClick} className={styles["custom-next-arrow"]}>
      <FontAwesomeIcon icon={faChevronRight} />
  </button>
);

export { CustomPrevArrow, CustomNextArrow };
