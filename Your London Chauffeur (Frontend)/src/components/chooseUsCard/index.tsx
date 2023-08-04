import styles from "./ChooseUsCard.module.css";
import Image from "next/image";

const ChooseUsCard = ({inActiveIcon,activeIcon,heading,description}: {inActiveIcon:any, activeIcon:any, heading:string, description:string}) => {
  return (
    <div className={styles.cardContainer}>
      {/* <Image className={styles.inActiveIcon} src={inActiveIcon} alt="icon" /> */}
      <Image className={styles.activeIcon} src={activeIcon} alt="icon"/>
      <div className={styles.cardHeading}>{heading}</div>
      <div className={styles.cardParagraph}>
       {description}
      </div>
    </div>
  );
};

export default ChooseUsCard;
