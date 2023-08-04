import styles from "./PropertyToursSlider.module.css";

import GenericButton from "../genericButton";
import Link from "next/link";

const PropertyToursSlider = () => {
  return (
    <div>
      <div
        id="carouselExampleIndicators"
        className="carousel slide"
        data-bs-ride="carousel">
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="0"
            className={`${styles.carouselIndicator} active`}
            aria-current="true"
            aria-label="Slide 1"></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="1"
            className={styles.carouselIndicator}
            aria-label="Slide 2"></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <div className={styles.sliderContentWrapper}>
              <div
                data-aos="fade-up"
                data-aos-duration="500"
                data-aos-once="false"
                className={styles.sliderHeading}>
                Property Tours
              </div>
              <div
                data-aos="fade-up"
                data-aos-duration="500"
                data-aos-once="false"
                className={styles.sliderProperty}>
                ​We also provide services to the Home Counties of London for
                property viewing purposes. All of our vehicles are equipped with
                WiFi, chargers for your smartphones and tablets as well as
                complimentary water bottles for every journey with us.
              </div>
              <Link href="/book-now">
                <div
                  data-aos="fade-up"
                  data-aos-duration="500"
                  data-aos-once="false"
                  className={styles.bookNowButtonWrapper}>
                  <GenericButton title="Book Now" />
                </div>
              </Link>
            </div>
          </div>
          <div className="carousel-item">
            <div className={styles.sliderContentWrapper}>
              <div
                data-aos="fade-up"
                data-aos-duration="500"
                data-aos-once="false"
                className={styles.sliderHeading}>
                Financial Roadshows
              </div>
              <div
                data-aos="fade-up"
                data-aos-duration="500"
                data-aos-once="false"
                className={styles.sliderProperty}>
                All of our professional chauffeurs have vast experience when it
                comes to financial roadshows. Knowing where the financial
                institutions and hotels are is very important to make sure your
                roadshow runs smoothly around the City of London and Central
                London.
              </div>
              <Link href="/book-now">
                <div
                  data-aos="fade-up"
                  data-aos-duration="500"
                  data-aos-once="false"
                  className={styles.bookNowButtonWrapper}>
                  <GenericButton title="Book Now" />
                </div>
              </Link>
            </div>
          </div>
        </div>
        <button
          className={`${styles.previousButton} carousel-control-prev`}
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="prev">
          <div className={styles.previousIconContainer}>
            <span
              className={`${styles.previousIcon} carousel-control-prev-icon`}
              aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </div>
        </button>
        <button
          className={`${styles.nextButton} carousel-control-next`}
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="next">
          <div className={styles.nextIconContainer}>
            <span
              className={`${styles.nextIcon} carousel-control-next-icon`}
              aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </div>
        </button>
      </div>
    </div>
  );
};

export default PropertyToursSlider;
