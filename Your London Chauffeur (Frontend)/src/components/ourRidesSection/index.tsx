import styles from "./OurRidesSection.module.css";
import Slider from "../slider";

const OurRidesSection = ({heading,paragraph}: {heading:string, paragraph:string}) => {
  return(
    <div className={styles.ourRidesWrapper}>
    <div className="container">
      <div className="row">
        <div className="col-12">
          <div  data-aos="fade-up" data-aos-duration="500" 
            data-aos-once="false" className={styles.ourRideHeading}>{heading}</div>
          <div  data-aos="fade-up" data-aos-duration="500" 
            data-aos-once="false" className={styles.borderBottom} />
          <div  data-aos="fade-up" data-aos-duration="500" 
            data-aos-once="false" className={styles.ourRidePara}>
          {paragraph}
          </div>
          <Slider />
        </div>
      </div>
    </div>
  </div>
  );
};

export default OurRidesSection;