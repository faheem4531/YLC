import styles from "@/styles/Airports.module.css";

import Link from "next/link";
import HeroSectionForm from "@/components/heroSectionForm";
import OurRidesSection from "@/components/ourRidesSection";
import ChooseUsCard from "@/components/chooseUsCard";
import AirportSlider from "@/components/airportSlider";
import ExpertChauffeurSection from "@/components/expertChauffeurSection";
import GetAQuoteCard from "@/components/getAQuoteCard";
import GenericButton from "@/components/genericButton";
import Head from "next/head";
import { NextSeo } from "next-seo";

import Image from "next/image";
import yourDriver from "../images/jpgs/event-team-img.jpg";
import flightInactiveIcon from "../images/svgs/flight-inactive-icon.svg";
import flightActiveIcon from "../images/svgs/flight-active-icon.svg";
import timeCarActiveIcon from "../images/svgs/timecar-active-icon.svg";
import timecarInactiveIcon from "../images/svgs/timecar-inactive-icon.svg";
import assistanceActiveIcon from "../images/svgs/assistance-active-icon.svg";
import assistanceInactiveIcon from "../images/svgs/assistance-inactive-icon.svg";
import destinationActiveIcon from "../images/svgs/destination-active-icon.svg";
import destinationInactiveIcon from "../images/svgs/destination-inactive-icon.svg";

const Airports = () => {
  return (
    <div className={styles.Container}>
      <Head>
        <title>Luxury London Airport Transfers | Your London Chauffeur</title>
        {/* Open Grapg tags  */}
        <meta
          property="og:title"
          content="Luxury London Airport Transfers | Your London Chauffeur"
        />
        <meta
          property="og:description"
          content="Enjoy luxury London airport transfers with Your London Chauffeur. Book our professional airport chauffeur service for a comfortable and stress-free airport pickup."
        />
        <meta
          property="og:image"
          content="https://yourlondonchauffeur.co.uk/airports-tranfers/images/og-image.jpg"
        />
        <meta
          property="og:url"
          content="https://yourlondonchauffeur.co.uk/airports-tranfers"
        />
        <meta name="robots" content="index, follow" />
        <meta property="og:type" content="website" />
        <link
          rel="canonical"
          href="https://yourlondonchauffeur.co.uk/airports-tranfers"
        />
        <NextSeo
          title="Luxury London Airport Transfers | Your London Chauffeur"
          description="Enjoy luxury London airport transfers with Your London Chauffeur. Book our professional airport chauffeur service for a comfortable and stress-free airport pickup."
          canonical="https://yourlondonchauffeur.co.uk/airports-tranfers"
        />
      </Head>
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
                Airport Transfers
              </div>
              <div
                data-aos="fade-right"
                data-aos-duration="500"
                data-aos-once="false"
                className={styles.heroParagraph}>
                Booking an Airport Transfer with Your London Chauffeur is a
                great option for those who need to go to and from the Airport in
                a stress-free, comfortable, and relaxing manner. As always, our
                chauffeurs will be holding your nameboard and help with any
                luggage you may have. With your flight tracked by our team based
                in London, you can always rely on our chauffeurs to arrive on
                time, every time.
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
      <div className={styles.yourSafetySectionWrapper}>
        <div className={`${styles.safetySection} container`}>
          <div className="row d-flex align-items-center g-5">
            <div
              data-aos="fade-right"
              data-aos-duration="500"
              data-aos-once="false"
              className="col-lg-6">
              <Image
                className={styles.youDriverImg}
                src={yourDriver}
                alt="Luxury London Airport Transfers"
              />
            </div>
            <div className="col-lg-6">
              <div
                data-aos="fade-left"
                data-aos-duration="500"
                data-aos-once="false"
                className={styles.yourSafetyHeading}>
                Meet and Greet

                <h1 className={`d-inline ${styles.yourSafetyHeading}`}> - Luxury London Airport Transfers</h1>
              </div>
              <div
                data-aos="fade-left"
                data-aos-duration="500"
                data-aos-once="false"
                className={styles.yourSafetyPara}>
                You will be met by one of our uniformed professional chauffeurs
                who will be waiting to welcome you and holding your nameboard
                when you step out of the arrival’s hall. You can expect us to be
                always discreet. If you prefer, we can arrange a meeting point
                and phone or text you when you are in the baggage hall.
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
        paragraph="All of our vehicles are equipped with WiFi,
        chargers for your smartphones and tablets as well as 
        complimentary water bottles for every journey with us."
      />
      {/* Section # 3 */}

      {/* Section # 4*/}
      <div className={styles.yourSafetySectionWrapper}>
        <div className={`${styles.chooseUsSection} container`}>
          <div className="row">
            <div className="col-12">
              <div
                data-aos="fade-up"
                data-aos-duration="500"
                data-aos-once="false"
                className={styles.chooseUsHeading}>
                Wy Choose Us Over Others?
              </div>
              <div
                data-aos="fade-up"
                data-aos-duration="500"
                data-aos-once="false"
                className={styles.borderBottom}
              />
              <div
                data-aos="fade-up"
                data-aos-duration="500"
                data-aos-once="false"
                className={styles.chooseUsParagraph}>
                We provide a meet and greet service on all arrivals. It
                includes the following:
              </div>
              <div className="row">
                <div className="col-lg-12 d-flex justify-content-center flex-wrap">
                  <div className="me-lg-5">
                    <div
                      data-aos="fade-right"
                      data-aos-duration="500"
                      data-aos-once="false">
                      <ChooseUsCard
                        activeIcon={flightActiveIcon}
                        inActiveIcon={flightInactiveIcon}
                        heading="Flight Tracking"
                        description="Each booking has the relevant flight tracked to ensure you do not have any extra waiting or parking charges caused by delayed flights"
                      />
                    </div>
                    <div
                      data-aos="fade-right"
                      data-aos-duration="500"
                      data-aos-once="false">
                      <ChooseUsCard
                        activeIcon={assistanceActiveIcon}
                        inActiveIcon={assistanceInactiveIcon}
                        heading="Assistance"
                        description="We welcome you on your arrival and provide assistance with your language"
                      />
                    </div>
                  </div>
                  <div className="">
                    <div
                      data-aos="fade-left"
                      data-aos-duration="500"
                      data-aos-once="false">
                      <ChooseUsCard
                        activeIcon={timeCarActiveIcon}
                        inActiveIcon={timecarInactiveIcon}
                        heading="Waiting Time"
                        description="​Up to 45 minutes free waiting time from when the aircraft lands is included in your quote"
                      />
                    </div>
                    <div
                      data-aos="fade-left"
                      data-aos-duration="500"
                      data-aos-once="false">
                      <ChooseUsCard
                        activeIcon={destinationActiveIcon}
                        inActiveIcon={destinationInactiveIcon}
                        heading="Destination"
                        description="We transfer our customers to their destination​ with care and guaranteed safety to their luggage"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Section # 4 */}

      <div className={styles.airportSection}>
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div>
                <AirportSlider />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Section # 5 */}
      {/* <ExpertChauffeurSection /> */}
      {/* Section # 5 */}

      {/* Section # 6 */}
      <GetAQuoteCard />
      {/* Section # 6 */}
    </div>
  );
};

export default Airports;
