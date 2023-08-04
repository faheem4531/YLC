import styles from "./EventSlider.module.css";

import Image from "next/image";
import eventImg from "../../images/pngs/cover-event-img.png";
import footballImg from "../../images/pngs/football-img.png";
import ImageTextOverlay from "../imageTextOverlay/ImageTextOverlay";

import eventsCulturalTours from "../../images/pngs/events-cultural-tours.png";
import eventFrenchFashion from "../../images/pngs/event-french-fashion.png";
import globalEventsAgency from "../../images/pngs/global-events-agency.png";
import eventsBaftaFilmAwards from "../../images/pngs/events-bafta-film-awards.png";
import eventsCheltenhamFestival from "../../images/pngs/events-cheltenham-festival.png";
import eventsQuarterlyBoardMeetings from "../../images/pngs/events-quarterly-board-meetings.png";

const EventSlider = () => {
  return (
    <div>
      <div
        id="carouselExampleIndicators1"
        className="carousel slide"
        data-bs-ride="carousel">
        <div className="carousel-indicators ">
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators1"
            data-bs-slide-to="0"
            className={`${styles.carouselIndicator} active`}
            aria-current="true"
            aria-label="Slide 1"></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators1"
            data-bs-slide-to="1"
            className={styles.carouselIndicator}
            aria-label="Slide 2"></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators1"
            data-bs-slide-to="2"
            className={styles.carouselIndicator}
            aria-label="Slide 3"></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators1"
            data-bs-slide-to="3"
            className={styles.carouselIndicator}
            aria-label="Slide 4"></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <div
              data-aos="fade-up"
              data-aos-duration="500"
              data-aos-once="false"
              className={styles.imageWrappeer}>
              <ImageTextOverlay
                backgroundImage={eventImg}
                heading="Weddings"
                description=""
              />
              <ImageTextOverlay
                backgroundImage={footballImg}
                heading="Sports"
                description=""
              />
            </div>
          </div>
          <div className="carousel-item">
            <div
              data-aos="fade-up"
              data-aos-duration="500"
              data-aos-once="false"
              className={styles.imageWrappeer}>
              <ImageTextOverlay
                backgroundImage={eventsCulturalTours}
                heading="Fashion Show"
                description=""
              />
              <ImageTextOverlay
                backgroundImage={eventFrenchFashion}
                heading="Film Awards"
                description=""
              />
            </div>
          </div>
          <div className="carousel-item">
            <div
              data-aos="fade-up"
              data-aos-duration="500"
              data-aos-once="false"
              className={styles.imageWrappeer}>
              <ImageTextOverlay
                backgroundImage={globalEventsAgency}
                heading="Exhibitions"
                description=""
              />
              <ImageTextOverlay
                backgroundImage={eventsBaftaFilmAwards}
                heading="Bafta Film Awards"
                description=""
              />
            </div>
          </div>
          <div className="carousel-item">
            <div
              data-aos="fade-up"
              data-aos-duration="500"
              data-aos-once="false"
              className={styles.imageWrappeer}>
              <ImageTextOverlay
                backgroundImage={eventsCheltenhamFestival}
                heading="Cheltenham Festival"
                description=""
              />
              <ImageTextOverlay
                backgroundImage={eventsQuarterlyBoardMeetings}
                heading="Quarterly Board Meetings For Global Energy"
                description=""
              />
            </div>
          </div>
        </div>
        <button
          className={`${styles.previousButton} carousel-control-prev`}
          type="button"
          data-bs-target="#carouselExampleIndicators1"
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
          data-bs-target="#carouselExampleIndicators1"
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

export default EventSlider;
