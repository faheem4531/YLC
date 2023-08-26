import styles from "@/styles/BookNow.module.css";

import HeroSectionForm from "@/components/heroSectionForm";
import Head from "next/head";
import { NextSeo } from "next-seo";

const BookNow = () => {
  return (
    <>
      {/* Section # 1 */}
      <Head>
        <title>Book Your London Chauffeur Online - Easy & Convenient</title>
        {/* Open Grapg tags  */}
        <meta
          property="og:title"
          content="Book Your London Chauffeur Online - Easy & Convenient"
        />
        <meta
          property="og:description"
          content="Book a chauffeur in London with ease and convenience. Reserve your chauffeur car online with Your London Chauffeur for a seamless and luxurious travel experience."
        />
        <meta
          property="og:image"
          content="https://yourlondonchauffeur.co.uk/book-chauffeur-now/images/og-image.jpg"
        />
        <meta
          property="og:url"
          content="https://yourlondonchauffeur.co.uk/book-chauffeur-now"
        />
        <meta name="robots" content="index, follow" />
        <meta property="og:type" content="website" />
        <link
          rel="canonical"
          href="https://yourlondonchauffeur.co.uk/book-chauffeur-now"
        />
        <NextSeo
          title="Book Your London Chauffeur Online - Easy & Convenient"
          description="Book a chauffeur in London with ease and convenience. Reserve your chauffeur car online with Your London Chauffeur for a seamless and luxurious travel experience."
          canonical="https://yourlondonchauffeur.co.uk/book-chauffeur-now"
        />
      </Head>
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
              <h1
                data-aos="fade-right"
                data-aos-duration="500"
                data-aos-once="false"
                className={styles.stepsText}>
                [Book Your London Chauffeur Online]
              </h1>
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
