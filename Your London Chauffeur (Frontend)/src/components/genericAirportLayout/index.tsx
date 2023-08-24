import React from "react";
import styles from "./GenericAirportLayout.module.css";
import Image from "next/image";
import Link from "next/link";
import GenericButton from "../genericButton";

interface Props {
  heroHeading: string;
  heroDescription: string;
  heroImg: any;
  secion2Img: any;
  section2Heading: string;
  section2Description: string;
}
const GenericAirportLayout = ({
  heroHeading,
  heroDescription,
  heroImg,
  secion2Img,
  section2Heading,
  section2Description,
}: Props) => {
  return (
    <div className={styles.genericAirportLayoutMain}>
      <div className={styles.genericAirportHeroImg}>
        <Image className={styles.HeroImg} src={heroImg} alt="" />
      </div>
      <div className={styles.heroSection}>
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div
                data-aos="fade-right"
                data-aos-duration="500"
                data-aos-once="false"
                className={styles.heroHeading}
              >
                {heroHeading}
              </div>
              <div
                data-aos="fade-right"
                data-aos-duration="500"
                data-aos-once="false"
                className={styles.heroParagraph}
              >
                {heroDescription}
                <Link href="/book-now">
                  <div
                    data-aos="fade-up"
                    data-aos-duration="500"
                    data-aos-once="false"
                    className={styles.contactusBtnWrapper}
                  >
                    <GenericButton title="Book Now" />
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.yourSafetySectionWrapper}>
        <div className={`${styles.safetySection} container`}>
          <div className="row d-flex align-items-center g-5">
            <div className="col-lg-6">
              <div
                data-aos="fade-left"
                data-aos-duration="500"
                data-aos-once="false"
                className={styles.yourSafetyHeading}
              >
                {section2Heading}
              </div>
              <div
                data-aos="fade-left"
                data-aos-duration="500"
                data-aos-once="false"
                className={styles.yourSafetyPara}
              >
                {section2Description}
              </div>

            </div>
            <div
              data-aos="fade-right"
              data-aos-duration="500"
              data-aos-once="false"
              className="col-lg-6"
            >
              <Image
                className={styles.youDriverImg}
                src={secion2Img}
                alt="img"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GenericAirportLayout;
