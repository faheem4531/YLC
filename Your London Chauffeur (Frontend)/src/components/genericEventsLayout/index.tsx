import React from "react";
import styles from "./GenericEventLayout.module.css";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import GenericButton from "../genericButton";

interface Props {
  heroHeading: string;
  heroDescription: string;
  heroImg: any;
  sections: Sections[];
}

interface Sections {
  sectionsHeading?: string
  sectionsDescription: string[]
  secionsImage?: any
}

const GenericEventLayout = ({
  heroHeading,
  heroDescription,
  heroImg,
  sections,
}: Props) => {
  return (
    <div className={styles.genericEventLayoutMain}>
      <div className={styles.genericAirportHeroImg}>
        <Image className={styles.HeroImg} src={heroImg} alt="" />
      </div>
      <div className={styles.heroSection}>
        <div className="container">
          <div className="row">
            <div className="col-10">
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
                <Link href="/book-chauffeur-now">
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
      {sections.map(sec =>
        <div className={styles.yourSafetySection2Wrapper} key={sec.sectionsHeading}>
          <div className={`${styles.safetySection} container`}>
            <div className="row d-flex justify-content-center align-items-center g-5">
              <div className="col-lg-9">
                <div
                  data-aos="fade-left"
                  data-aos-duration="500"
                  data-aos-once="false"
                  className={styles.yourSafetyHeading}
                >
                  {sec.sectionsHeading}
                </div>
                {
                  sec.secionsImage && <div
                    data-aos="fade-right"
                    data-aos-duration="500"
                    data-aos-once="false"
                    className="col-lg-12"
                  >
                    <Image
                      className={styles.sectionImage}
                      src={sec.secionsImage}
                      alt="img"
                    />
                  </div>
                }

                {sec.sectionsDescription.map(desc =>
                  <div
                    data-aos="fade-left"
                    data-aos-duration="500"
                    data-aos-once="false"
                    className={styles.yourSafetyPara}
                    key={desc}
                  >
                    {desc}
                  </div>
                )}
                <div className="mt-5">

                  <Link href="/book-chauffeur-now">
                    <div
                      data-aos="fade-up"
                      data-aos-duration="500"
                      data-aos-once="false"
                      className={`m-auto ${styles.contactusBtnWrapper}`}
                    >
                      <GenericButton title="Book Now" />
                    </div>
                  </Link>
                </div>
              </div>

            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default GenericEventLayout;
