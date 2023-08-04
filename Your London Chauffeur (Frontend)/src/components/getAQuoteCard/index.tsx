import styles from "./GetAQuoteCard.module.css";
import GenericButton from "../genericButton";
import Link from "next/link";

const GetAQuoteCard = () => {
  return(
    <div className={styles.momentSection}>
    <div className="container">
      <div className="row">
        <div className="col-md-8">
          <div data-aos="fade-right" data-aos-duration="500" 
            data-aos-once="false" className={styles.momentHeading}>
            Make your trip an unforgettable moment.
          </div>
        </div>
        <div className="col-md-4">
          <Link href="/book-now">
          <div data-aos="fade-left" data-aos-duration="500" 
            data-aos-once="false" className={styles.quoteBtnWrapper}>
          <GenericButton title="Get A Quote"/>
          </div>
          </Link>
        </div>
      </div>
    </div>
  </div>
  );
};

export default GetAQuoteCard;