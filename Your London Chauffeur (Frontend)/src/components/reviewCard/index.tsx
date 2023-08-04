import styles from "./ReviewCard.module.css";
import Image from "next/image";
import starIcons from "../../images/pngs/5Star.png";
import reviwerImg from "../../images/pngs/profile-bg-img.png";
const ReviewCard = ({
  reviwerName,
  description,
}: {
  reviwerName: string;
  description: string;
}) => {
  return (
    <div data-aos="fade-left"
    data-aos-duration="500"
    data-aos-once="false" >
      <div   className={styles.reviewCard}>
        <div className={styles.userReview}>{description}</div>
        <Image className={styles.starIcons} src={starIcons} alt="icon" />
      </div>
      <div  className={styles.userRevewerContainer}>
        <div className={styles.reviewerImageWrapper}>
          <Image className={styles.reviewerImage} src={reviwerImg} alt="img" />
        </div>
        <div>
          <div className={styles.reviewerName}>{reviwerName}</div>
          {/* <div className={styles.reviewerdomain}>Recruiting Officer</div> */}
        </div>
      </div>
    </div>
  );
};

export default ReviewCard;
