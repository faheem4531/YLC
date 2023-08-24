import styles from "./EventSlider.module.css";

import Image from "next/image";
import goodWood from "../../images/events/goodWoodMain.png";
import rhsMain from "../../images/events/rhsMain.png";
import ImageTextOverlay from "../imageTextOverlay/ImageTextOverlay";

import grandPrixCaseStudy from "../../images/events/grand-prix-case-study.png"
import britishMain from "../../images/events/britishMain.png";
import glydnBourne from "../../images/events/glyderbourneMain.png";
import HenleyRoyal from "../../images/events/henlyeRoyalMain.png";
import theOpen from "../../images/events/theOpenMain.png";
import eventsCheltenhamFestival from "../../images/pngs/events-cheltenham-festival.png";
import eventsQuarterlyBoardMeetings from "../../images/pngs/events-quarterly-board-meetings.png";
import HenleyRoyalRegattaChauffeurTravel from '@/pages/events/henley-royal-regatta-chauffeur-travel';

const EventSlider = () => {
  return (
    <div>
      <div
        id="carouselExampleIndicators1"
        className="carousel slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-indicators ">
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators1"
            data-bs-slide-to="0"
            className={`${styles.carouselIndicator} active`}
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators1"
            data-bs-slide-to="1"
            className={styles.carouselIndicator}
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators1"
            data-bs-slide-to="2"
            className={styles.carouselIndicator}
            aria-label="Slide 3"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators1"
            data-bs-slide-to="3"
            className={styles.carouselIndicator}
            aria-label="Slide 4"
          ></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <div
              data-aos="fade-up"
              data-aos-duration="500"
              data-aos-once="false"
              className={styles.imageWrappeer}
            >
              <ImageTextOverlay
                backgroundImage={goodWood}
                heading="Introducing Goodwood"
                description="Nestled within the enchanting grounds of Goodwood House lies an epicentre of exhilarating events and luxury experiences.Every year, Goodwood's lush expanses come alive with engines' roar during the Festival of Speed. Meanwhile, the historic Goodwood Circuit transports motorsport enthusiasts back in time with the annual Goodwood Revival. But the thrills don't stop on the ground; the estate's airfield offers soaring adventures with its esteemed Flying School."
                linkPath="/events/introducing-goodwood-event"
              />
              <ImageTextOverlay
                backgroundImage={rhsMain}
                heading="Rhs Chelsea Flower Show Travel"
                description="In 2018, YLC had the honour of chauffeuring 50 lucky competition winners and their companions to the illustrious Chelsea Flower Show. These winners, jetting in from corners of the globe, were greeted with YLC's signature touch, ensuring seamless transfers from various London airports and a luxurious stay over their 3-day vacation in the posh Knightsbridge."
                linkPath="/events/rhs-chelsea-flower-show-travel-event"
              />
            </div>
          </div>
          <div className="carousel-item">
            <div
              data-aos="fade-up"
              data-aos-duration="500"
              data-aos-once="false"
              className={styles.imageWrappeer}
            >
              <ImageTextOverlay
                backgroundImage={britishMain}
                heading="British Grand Prix Chauffeur Travel"
                description="Feel the exhilaration of 140,000 fans and the roar of powerful engines echo through Silverstone. Dive into the heart of the action at the 2023 British Grand Prix – in unmatched luxury with YLC."
                linkPath="/events/british-grand-prix-chauffeur-travel"
              />
              <ImageTextOverlay
                backgroundImage={glydnBourne}
                heading="Glyndebourne"
                description="Experience the enchantment of the Glyndebourne Opera House and Festival, a beloved treasure for opera aficionados. Draped in an aura of relaxation and punctuated with world-class performances, Glyndebourne never fails to captivate our clientele."
                linkPath="/events/glyndebourne"
              />
            </div>
          </div>
          <div className="carousel-item">
            <div
              data-aos="fade-up"
              data-aos-duration="500"
              data-aos-once="false"
              className={styles.imageWrappeer}
            >
              <ImageTextOverlay
                backgroundImage={HenleyRoyal}
                heading="Henley Royal Regatta Chauffeur Travel"
                description="Step into the glamorous world of the Henley Royal Regatta, a radiant beacon in the summer sports and social calendars. Since 2005, YLC has been the go-to luxury travel companion, whisking guests to this iconic event in unparalleled style."
                linkPath="/events/henley-royal-regatta-chauffeur-travel"
              />
              <ImageTextOverlay
                backgroundImage={theOpen}
                heading="The Open Championship"
                description="Experience the grandeur of the Open Championship with YLC's luxurious fleet of chauffeur-driven vehicles. Elevate your journey with our award-winning service, pairing you with the pinnacle of chauffeuring excellence and a fleet that boasts the crème de la crème of automotive luxury—think Bentley, Mercedes, Range Rover, and Rolls-Royce."
                linkPath="/events/the-open-championship"
              />
            </div>
          </div>
        </div>
        <button
          className={`${styles.previousButton} carousel-control-prev`}
          type="button"
          data-bs-target="#carouselExampleIndicators1"
          data-bs-slide="prev"
        >
          <div className={styles.previousIconContainer}>
            <span
              className={`${styles.previousIcon} carousel-control-prev-icon`}
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Previous</span>
          </div>
        </button>
        <button
          className={`${styles.nextButton} carousel-control-next`}
          type="button"
          data-bs-target="#carouselExampleIndicators1"
          data-bs-slide="next"
        >
          <div className={styles.nextIconContainer}>
            <span
              className={`${styles.nextIcon} carousel-control-next-icon`}
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Next</span>
          </div>
        </button>
      </div>
    </div>
  );
};

export default EventSlider;
