import styles from "./ImageTextOverlay.module.css";
import Image from "next/image";
import Link from "next/link";

const ImageTextOverlay = ({
  backgroundImage,
  heading,
  description,
  linkPath,
}: {
  backgroundImage: any;
  heading: string;
  description: string;
  linkPath: string;
}) => {
  return (
    <div className={styles.imageContainer}>
      <Link href={linkPath}>
        <Image
          src={backgroundImage}
          className={styles.carouselImage}
          alt="any"
        />
        <div className={styles.textContainer}>
          <div className={styles.imageHeading}>{heading}</div>
          <div className={styles.imegeDescription}>{description}</div>
        </div>
      </Link>
    </div>
  );
};

export default ImageTextOverlay;
