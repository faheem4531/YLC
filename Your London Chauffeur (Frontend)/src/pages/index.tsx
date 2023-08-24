import styles from "@/styles/Home.module.css";
import HeroSectionForm from "@/components/heroSectionForm";
import GetAQuoteCard from "@/components/getAQuoteCard";
import OurRidesSection from "@/components/ourRidesSection";
import ExpertChauffeurSection from "@/components/expertChauffeurSection";
import GenericButton from "@/components/genericButton";

import Image from "next/image";
import limoImage from "../images/jpgs/airport-Limo-img4.png";
import ourMissionImage from "../images/jpgs/our-mission-img.jpg";
import Link from "next/link";
import Head from "next/head";
import { NextSeo } from "next-seo";

const Home = () => {
  return (
    <div>
      <Head>
        <title>London Chauffeur Service | Your London Chauffeur</title>
        {/* Open Grapg tags  */}
        <meta
          property="og:title"
          content="London Chauffeur Service | Your London Chauffeur"
        />
        <meta
          property="og:description"
          content="Experience the finest London chauffeur service with Your London Chauffeur. Hire a private chauffeur for luxury transfers and professional chauffeur services near you."
        />
        <meta
          property="og:image"
          content="https://yourlondonchauffeur.co.uk/images/og-image.jpg"
        />
        <meta property="og:url" content="https://yourlondonchauffeur.co.uk/" />
        <meta name="robots" content="index, follow" />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="https://yourlondonchauffeur.co.uk/" />
        <NextSeo
          title="London Chauffeur Service | Your London Chauffeur"
          description="Experience the finest London chauffeur service with Your London Chauffeur. Hire a private chauffeur for luxury transfers and professional chauffeur services near you."
          canonical="https://yourlondonchauffeur.co.uk/"
        />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org/",
            "@type": "WebSite",
            "name": "Your London Chauffeur",
            "url": "https://yourlondonchauffeur.co.uk/",
            "potentialAction": {
              "@type": "SearchAction",
              "target": "{search_term_string}",
              "query-input": "required name=search_term_string"
            }
          })}
        </script>
      </Head>
      <div className={styles.Container}>
        {/* Section # 1 */}
        <div className={styles.heroSection}>
          <div className="container">
            <div className="row">
              <div className="col-lg-6">
                <div
                  data-aos="fade-right"
                  data-aos-duration="500"
                  data-aos-once="false"
                  className={styles.heroHeading}>
                  Exceptional journeys on time, every time.
                </div>
                <div
                  data-aos="fade-right"
                  data-aos-duration="500"
                  data-aos-once="false"
                  className={styles.heroParagraph}>
                  We provide reliable, luxurious journeys from those who know
                  London best to the people who value comfort and convenience.
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
        <div className={styles.whoWeAreWrapper}>
          <div className={`${styles.whoWeAreSection} container`}>
            <div className="row d-flex align-items-center g-5">
              <div
                className="col-lg-6"
                data-aos="fade-up"
                data-aos-duration="500"
                data-aos-once="false">
                <Image
                  className={styles.limoCarImage}
                  src={limoImage}
                  alt="img"
                />
              </div>
              <div className="col-lg-6">
                <div
                  className={styles.whoWeAre}
                  data-aos="fade-left"
                  data-aos-duration="500"
                  data-aos-once="false">
                  Who Are we
                </div>
                <div
                  className={styles.whoWeAreHeading}
                  data-aos="fade-left"
                  data-aos-duration="500"
                  data-aos-once="false"
                >
                  Luxurious journeys from those who know London best
                  <h1
                    className={`d-inline ${styles.whoWeAreHeading}`}
                  > - London Chauffeur Service</h1>
                </div>
                <div
                  className={styles.whoWeArePara}
                  data-aos="fade-left"
                  data-aos-duration="500"
                  data-aos-once="false">
                  Established since 2008, we pride ourselves on providing our
                  clients with the highest level of professional service. Our
                  uniformed chauffeurs are extensively trained and experienced,
                  and they consistently exhibit a professional, reliable and
                  friendly manner.
                </div>
                <div
                  className={styles.contactusBtnWrapper}
                  data-aos="fade-up"
                  data-aos-duration="400"
                  data-aos-once="false">
                  <Link href="/contact-us">
                    <GenericButton title="Contact Us" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Section # 2 */}

        {/* Section # 3 */}
        <OurRidesSection
          heading="Price Guide for Central London"
          paragraph="Our department is here to ensure personalised guidance. Our smart team takes care of everything. The entire team has been great to work with from start to finish."
        />
        {/* Section # 3 */}

        {/* Section # 4 */}
        <div className={styles.ourMissionContainer}>
          <div className={`${styles.ourMissionWrapper} container`}>
            <div className="row d-flex align-items-center g-5">
              <div className="col-lg-6">
                <div
                  data-aos="fade-left"
                  data-aos-duration="500"
                  data-aos-once="false"
                  className={styles.ourMissionPara}>
                  We started our chauffeur service with a simple idea: to
                  provide reliable, luxurious transportation from those who know
                  London best. Since then, we have had:
                </div>
                <div className="row mb-3 mb-lg-0">
                  <div
                    data-aos="fade-left"
                    data-aos-duration="500"
                    data-aos-once="false"
                    className="col-6 col-lg-5 col-sm-4 d-flex flex-column align-items-center ">
                    <div className={styles.ourTraget}>25000</div>
                    <div className={styles.ourRides}>Succesful Rides</div>
                  </div>
                  <div
                    data-aos="fade-left"
                    data-aos-duration="500"
                    data-aos-once="false"
                    className="col-6 col-lg-6 col-sm-4 d-flex flex-column align-items-center ">
                    <div className={styles.ourTraget}>13</div>
                    <div className={styles.ourRides}>Years of Experience</div>
                  </div>
                  <div
                    data-aos="fade-left"
                    data-aos-duration="500"
                    data-aos-once="false"
                    className="col-12 col-sm-4 col-lg-10 d-flex flex-column align-items-center mt-lg-4">
                    <div className={styles.ourTraget}>300</div>
                    <div className={styles.ourRides}>
                      Satisfied Partners & Clients
                    </div>
                  </div>
                </div>
              </div>
              <div
                data-aos="fade-up"
                data-aos-duration="500"
                data-aos-once="false"
                className="col-lg-6">
                <Image
                  className={styles.ourMissionImage}
                  src={ourMissionImage}
                  alt="img"
                />
              </div>
            </div>
          </div>
        </div>

        <GetAQuoteCard />
      </div>
    </div>
  );
};

export default Home;
