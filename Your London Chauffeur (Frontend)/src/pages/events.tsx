import styles from "@/styles/Events.module.css";
import ExpertChauffeurSection from "@/components/expertChauffeurSection";
import HeroSectionForm from "@/components/heroSectionForm";
import GetAQuoteCard from "@/components/getAQuoteCard";
import GenericButton from "@/components/genericButton";
import OurRidesSection from "@/components/ourRidesSection";
import EventSlider from "@/components/eventSlider";

import Image from "next/image";
import eventTeamImg from "../images/pngs/event-team-img.png";
import Link from "next/link";

const Event = () => {
  return (
    <div className={styles.Container}>
      {/* Section # 1 */}
      {/* <div className={styles.heroSection}>
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div
                data-aos="fade-right"
                data-aos-duration="500"
                data-aos-once="false"
                className={styles.heroHeading}>
                Chauffeur For Events
              </div>
              <div
                data-aos="fade-right"
                data-aos-duration="500"
                data-aos-once="false"
                className={styles.heroParagraph}>
                Setting the standard for exceptional service and sustainability
              </div>
            </div>
          </div>
        </div>
      </div> */}
      <div className={styles.heroSection}>
          <div className="container">
            <div className="row">
              <div className="col-lg-6">
                <div
                  data-aos="fade-right"
                  data-aos-duration="500"
                  data-aos-once="false"
                  className={styles.heroHeading}>
                  Chauffeur For Events
                </div>
                <div
                  data-aos="fade-right"
                  data-aos-duration="500"
                  data-aos-once="false"
                  className={styles.heroParagraph}>
                  Setting the standard for exceptional service and sustainability.
                </div>
              </div>
              <div
                data-aos="fade-left"
                data-aos-duration="500"
                data-aos-once="false"
                className="col-lg-6 d-flex justify-content-center">
                <HeroSectionForm />
              </div>
            </div>
          </div>
        </div>
      {/* Section # 1 */}

      {/* Section # 2 */}
      <div className={styles.eventTeamWrapper}>
      <div className={`${styles.safetySection} container`}>
        <div className="row d-flex align-items-center g-5">
          <div
            data-aos="fade-right"
            data-aos-duration="500"
            data-aos-once="false"
            className="col-lg-6">
            <Image
              className={styles.youDriverImg}
              src={eventTeamImg}
              alt="img"
            />
          </div>
          <div className="col-lg-6">
            <div
              data-aos="fade-left"
              data-aos-duration="500"
              data-aos-once="false"
              className={styles.yourSafetyHeading}>
              Our Events Team
            </div>
            <div
              data-aos="fade-left"
              data-aos-duration="500"
              data-aos-once="false"
              className={styles.yourSafetyPara}>
              At Karij, our dedicated events team can provide a luxury 
              experience for any occasion, whether that be global or 
              local, big or small. Our London based chauffeurs are wellversed in the best routes to take, local areas, and traffic 
              patterns, ensuring that you experience a stress-free and 
              comfortable ride. 
            </div>
            <div
              data-aos="fade-up"
              data-aos-duration="500"
              data-aos-once="false"
              className={styles.dotContainer}>
              <div className={styles.dot} />
              <div className={styles.dotDescription}>
                Award ceremonies or gala dinners
              </div>
            </div>
            <div
              data-aos="fade-up"
              data-aos-duration="500"
              data-aos-once="false"
              className={styles.dotContainer}>
              <div className={styles.dot} />
              <div className={styles.dotDescription}>
                Meetings and conferences
              </div>
            </div>
            <div
              data-aos="fade-up"
              data-aos-duration="500"
              data-aos-once="false"
              className={styles.dotContainer}>
              <div className={styles.dot} />
              <div className={styles.dotDescription}>Roadshows</div>
            </div>
            <div
              data-aos="fade-up"
              data-aos-duration="500"
              data-aos-once="false"
              className={styles.dotContainer}>
              <div className={styles.dot} />
              <div className={styles.dotDescription}>Private events</div>
            </div>
            <div
              data-aos="fade-up"
              data-aos-duration="500"
              data-aos-once="false"
              className={styles.dotContainer}>
              <div className={styles.dot} />
              <div className={styles.dotDescription}>VIP services</div>
            </div>
            <div
              data-aos="fade-up"
              data-aos-duration="500"
              data-aos-once="false"
              className={styles.dotContainer}>
              <div className={styles.dot} />
              <div className={styles.dotDescription}>Sporting events</div>
            </div>
            <Link href="/contact-us">
              <div
                data-aos="fade-up"
                data-aos-duration="500"
                data-aos-once="false"
                className={styles.contactusBtnWrapper}>
                <GenericButton title="Contact Us" />
              </div>
            </Link>
          </div>
        </div>
      </div>
      </div>
      {/* Section # 2 */}

      {/* Section # 3 */}
      <OurRidesSection
        heading="Price Guide for Central London"
        paragraph="All of our vehicles are equipped with WiFi, chargers for your smartphones and tablets as well as complimentary water bottles for every journey with us."
      />
      {/* Section # 3 */}

      {/* Section # 4 */}
      <div className={styles.eventSection}>
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div>
                <EventSlider />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Section # 4 */}

      {/* Section # 5 */}
      {/* <ExpertChauffeurSection /> */}
      {/* Section # 5 */}

      {/* Section # 6 */}
      <GetAQuoteCard />
      {/* Section # 6 */}
    </div>
  );
};

export default Event;
