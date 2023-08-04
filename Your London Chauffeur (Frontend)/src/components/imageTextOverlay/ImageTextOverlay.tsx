import styles from "./ImageTextOverlay.module.css";
import Image from "next/image";

const ImageTextOverlay = ({backgroundImage,heading,description} : {backgroundImage:any, heading: string, description:string}) => {
  return (
    <div className={styles.imageContainer}>
    <Image
      src={backgroundImage}
      className={styles.carouselImage}
      alt="any"
    />
    <div className={styles.textContainer}>
      <div className={styles.imageHeading}>{heading}</div>
      <div className={styles.imegeDescription}>
        {description}
      </div>
    </div>
  </div>
  );
};

export default ImageTextOverlay;
