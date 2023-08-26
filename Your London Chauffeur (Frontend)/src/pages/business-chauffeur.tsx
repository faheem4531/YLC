import styles from "@/styles/Business.module.css";
import ExpertChauffeurSection from "@/components/expertChauffeurSection";
import GetAQuoteCard from "@/components/getAQuoteCard";
import GenericButton from "@/components/genericButton";
import PropertyToursSlider from "@/components/propertyToursSlider";
import Head from "next/head";
import { NextSeo } from "next-seo";

import Image from "next/image";
import comfortCarImg from "../images/pngs/comfort-car-img.png";
import Link from "next/link";

const Business = () => {
  return (
    <div className={styles.Container}>
      <Head>
        <title>
          Executive Chauffeur Service - Your London Business Partner
        </title>
        {/* Open Grapg tags  */}
        <meta
          property="og:title"
          content="Executive Chauffeur Service - Your London Business Partner"
        />
        <meta
          property="og:description"
          content="Experience luxury business chauffeur service with Your London Chauffeur. Our executive chauffeurs offer top-notch professionalism and comfort for your corporate needs."
        />
        <meta
          property="og:image"
          content="https://yourlondonchauffeur.co.uk/business-chauffeur/images/og-image.jpg"
        />
        <meta
          property="og:url"
          content="https://yourlondonchauffeur.co.uk/business-chauffeur"
        />
        <meta name="robots" content="index, follow" />
        <meta property="og:type" content="website" />
        <link
          rel="canonical"
          href="https://yourlondonchauffeur.co.uk/business-chauffeur"
        />
        <NextSeo
          title="Executive Chauffeur Service - Your London Business Partner"
          description="Experience luxury business chauffeur service with Your London Chauffeur. Our executive chauffeurs offer top-notch professionalism and comfort for your corporate needs."
          canonical="https://yourlondonchauffeur.co.uk/business-chauffeur"
        />
      </Head>
      {/* Section # 1 */}
      <div className={styles.heroSection}>
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div
                data-aos="fade-right"
                data-aos-duration="500"
                data-aos-once="false"
                className={styles.heroHeading}>
                Business Travel
              </div>
              <div
                data-aos="fade-right"
                data-aos-duration="500"
                data-aos-once="false"
                className={styles.heroParagraph}>
                Financial Roadshows, Business Meetings, Property Tours
                <h1 className={`d-inline ${styles.heroParagraph}`}>, Executive Chauffeur Service</h1>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Section # 1 */}

      {/* Section # 3 */}
      <div className={styles.propertySection}>
        <div className="container">
          <div className="row">
            <div className="col-12">
              <PropertyToursSlider />
            </div>
          </div>
        </div>
      </div>
      {/* Section # 3 */}

      {/* Section # 2 */}
      <div className={styles.safetySectionWrapper}>
        <div className={`${styles.safetySection} container`}>
          <div className="row d-flex align-items-center g-5">
            <div
              data-aos="fade-right"
              data-aos-duration="500"
              data-aos-once="false"
              className="col-lg-6">
              <Image
                className={styles.youDriverImg}
                src={comfortCarImg}
                alt="Executive Chauffeur Service"
              />
            </div>
            <div className="col-lg-6">
              <div
                data-aos="fade-left"
                data-aos-duration="500"
                data-aos-once="false"
                className={styles.yourSafetyHeading}>
                We Provide Comfort
              </div>
              <div
                data-aos="fade-left"
                data-aos-duration="500"
                data-aos-once="false"
                className={styles.yourSafetyPara}>
                Whether you have a series of meetings throughout thee day, a
                business lunch, or you need an important client to be met at one
                of London&rsquo;s Airports we can provide you with luxury
                chauffeur driven vehicles luxury people carrier. With all the
                pressures of business meetings it makes sense to leave the
                driving and parking to someone else, so you can concentrate on
                the business day ahead.
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

      {/* Section # 4 */}
      {/* <ExpertChauffeurSection /> */}
      {/* Section # 4 */}

      {/* Section # 5 */}
      <GetAQuoteCard />
      {/* Section # 5 */}
    </div>
  );
};

export default Business;
