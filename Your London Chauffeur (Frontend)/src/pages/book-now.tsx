import styles from "@/styles/BookNow.module.css";

import HeroSectionForm from "@/components/heroSectionForm";

const BookNow = () => {
  return (
    <>
      {/* Section # 1 */}
      <div className={styles.heroSection}>
        <div className={`${styles.bookNowSection} container`}>
          <div className="row">
            <div className="col-lg-6">
              <div
                data-aos="fade-right"
                data-aos-duration="500"
                data-aos-once="false"
                className={styles.stepsText}>
                STEP 1 OF 3
              </div>
              <div
                data-aos="fade-right"
                data-aos-duration="500"
                data-aos-once="false"
                className={styles.heroHeading}>
                Let’s Get Started
              </div>
              <div className={styles.stepsContainer}>
                <div
                  data-aos="fade-up"
                  data-aos-duration="500"
                  data-aos-once="false"
                  className={styles.steps}>
                  <div className={styles.activeStepsNum}>1</div>
                  <div className={styles.activeStepsDescription}>Locations</div>
                </div>
                <div
                  data-aos="fade-up"
                  data-aos-duration="500"
                  data-aos-once="false"
                  className={styles.horizontalBorder}
                />
                <div
                  data-aos="fade-up"
                  data-aos-duration="500"
                  data-aos-once="false"
                  className={styles.steps}>
                  <div className={styles.stepsNum}>2</div>
                  <div className={styles.stepsDescription}>Cars</div>
                </div>
                <div
                  data-aos="fade-up"
                  data-aos-duration="500"
                  data-aos-once="false"
                  className={styles.horizontalBorder}
                />
                <div
                  data-aos="fade-up"
                  data-aos-duration="500"
                  data-aos-once="false"
                  className={styles.steps}>
                  <div className={styles.stepsNum}>3</div>
                  <div className={styles.stepsDescription}>Your Details</div>
                </div>
              </div>
            </div>
            <div className="col-lg-6 d-flex justify-content-center">
              <div
                data-aos="fade-left"
                data-aos-duration="500"
                data-aos-once="false"
                className={styles.formWrapper}>
                <HeroSectionForm />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Section # 1 */}
    </>
  );
};

export default BookNow;
