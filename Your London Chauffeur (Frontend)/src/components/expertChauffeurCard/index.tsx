import styles from "./ExpertChauffeurCard.module.css";
import Image from "next/image";
import twitterIcon from "../../images/svgs/twitter-icon.svg";
import instagramIcon from "../../images/svgs/instagram-icon.svg";
import facebookIcon from "../../images/svgs/facebook-icon.svg";
import linkedinIcon from "../../images/svgs/linkedin-icon.svg";

const ExprtChaufffeurCard = ({image,chauffeurName}:{image: any,chauffeurName: string}) => {
  return (
    <div className={styles.cardContainer}>
      <div className={styles.imageWrapper}>
        <Image src={image} className={styles.chauffeurImage} alt="img" />
        <div className={styles.socialIcons}>
          <div className={styles.iconsWrapper}>
            <a href="#">
              <Image src={twitterIcon} alt="icon" />
            </a>
            <a href="#">
              <Image src={linkedinIcon} alt="icon" />
            </a>
            <a href="#">
              <Image src={instagramIcon} alt="icon" />
            </a>
            <a href="#">
              <Image src={facebookIcon} alt="icon" />
            </a>
          </div>
        </div>
      </div>
      <div className={styles.chauffeurName}>{chauffeurName}</div>
      <div className={styles.chauffeur}>Chauffeur</div>
    </div>
  );
};

export default ExprtChaufffeurCard;
