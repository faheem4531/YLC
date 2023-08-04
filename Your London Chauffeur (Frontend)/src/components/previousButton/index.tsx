import styles from "./PreviousButton.module.css";

import Image from "next/image";
import backArrow from "../../images/svgs/back-arrow.svg";

const PreviousButton = ({ onClick }: { onClick?: () => {} }) => {
  return (
    <div className={styles.previousButtonContainer} onClick={onClick}>
      <Image src={backArrow} alt="icon"/>
      <div className={styles.buttonText}>Previous Step</div>
    </div>
  );
};

export default PreviousButton;