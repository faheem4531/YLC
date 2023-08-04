import styles from "./AirportSlider.module.css";

import ImageTextOverlay from "../imageTextOverlay/ImageTextOverlay";
import manchesterAirport from "../../images/pngs/manchester-airport.png";
import jayClarkAirport from "../../images/pngs/jay-clark-airport.png";
import londonOxfordAirport from "../../images/pngs/london-oxford-airport.png";
import heathrowAirport from "../../images/pngs/heathrow-airport.png";
import lutonAirport from "../../images/pngs/luton-airport.png";
import stanstedAirport from "../../images/pngs/stansted-airport.png";
import gatwickAirport from "../../images/pngs/gatwick-airport.png";
import bigginHillAirport from "../../images/pngs/biggin-hill-airport.png";
import farnboroughAirport from "../../images/pngs/farnborough-airport.png";
import londonCityAirport from "../../images/pngs/london-city-airport.png";

const AirportSlider = () => {
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
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators1"
            data-bs-slide-to="4"
            className={styles.carouselIndicator}
            aria-label="Slide 5"></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <div
              data-aos="fade-up"
              data-aos-duration="500"
              data-aos-once="false"
              className={styles.imageWrappeer}>
              <ImageTextOverlay
                backgroundImage={manchesterAirport}
                heading="London Heathrow Airport"
                description="With all Heathrow Airport luxury chauffeur transfers punctuality is important to you as a client. You will 
                be met by one of our uniformed professional chauffeurs who will be waiting to welcome you when you 
                step out of the arrivals hall. He will be holding a board with your name on it. You will expect us to be discreet at all times. If you prefer we can arrange a meeting point and phone or text you when you are in the baggage hall."
              />
              <ImageTextOverlay
                backgroundImage={jayClarkAirport}
                heading=" London Gatwick Airport "
                description="Being only 6 miles from the centre of London, London City Airport offers convenience for business travellers into Canary Wharf and the City of London and Central London. With all London City Airport luxury chauffeur transfers punctuality is important to you as a client. You will be met by one of our uniformed professional chauffeurs who will be waiting to welcome for you when you step into the arrivals hall. He will be holding a board with your name on it. You will expect us to be discreet at all times. If you prefer we can arrange a meeting point and phone or text you when you are in the baggage hall. "
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
                backgroundImage={londonOxfordAirport}
                heading="London Luton Airport"
                description="With Luton Airport chauffeur driven transfers punctuality is important to you as a client. You will be met 
                by one of our uniformed professional chauffeurs who will be waiting for you when you step out of the arrivals hall He will be holding a board with your name on it. You will expect us to be discreet. If you prefer we can arrange a meeting point and phone or text you when you are in the baggage hall. 
                You can rest assured your chauffeur will be smart, discreet and have a good knowledge of London and the surrounding areas. Sit back relax and enjoy your journey in comfort to your destination."
              />
              <ImageTextOverlay
                backgroundImage={heathrowAirport}
                heading="London Stansted Aiport "
                description="With all Stansted Airport luxury chauffeur transfers punctuality is important to you as a client. You will 
                be met by one of our uniformed professional chauffeurs who will be waiting for you when you step out 
                of the arrivals hall. He will be holding a board with your name on it. You will expect us to be discreet at 
                all times. If you prefer we can arrange a meeting point and phone or text you when you are in the 
                baggage hall."
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
                backgroundImage={lutonAirport}
                heading="Farnborough Airport"
                description="With all Farnborough Airport chauffeur driven transfers punctuality is important to you as a client. You 
                will be met by one of our uniformed professional chauffeurs who is experienced in the protocol of VIP 
                Private Jet transfers. After a long flight it is essential for you to travel in comfort. Why not take 
                advantage of the complimentary mineral water and mints while you are transferred to your onward 
                destination in comfort and safety. You can rest assured your chauffeur will be smart, discreet and have a 
                good knowledge of London. Sit back relax and enjoy your journey."
              />
              <ImageTextOverlay
                backgroundImage={stanstedAirport}
                heading="Biggin Hill Airport "
                description="Your London Chauffeur provides luxury services, making your travel stress-free. With experienced, professional 
                chauffeurs, you can be reassured that your chauffeur will be waiting for you on arrival, ready to assist you with 
                luggage and nay other needs you may have."
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
                backgroundImage={gatwickAirport}
                heading="Gatwick Airport"
                description="With all Gatwick Airport chauffeur driven transfers punctuality is important to you as a client. You will 
                be met by one of our uniformed professional chauffeurs who will be waiting for you when you step out 
                of the arrivals hall. He will be holding a board with your name on it. You will expect us to be discreet at 
                all times. If you prefer we can arrange a meeting point and phone or text you when you are in the 
                baggage hall."
              />
              <ImageTextOverlay
                backgroundImage={bigginHillAirport}
                heading="Raf Northholt Transfers "
                description="With all RAF Northolt Airport luxury chauffeur driven transfers punctuality is important to you as a 
                client. You will be met by one of our uniformed professional chauffeurs who is experienced in the 
                protocol of Private Jet transfers. Why not take advantage of the complimentary mints newspaper and 
                mineral water while you are transferred to your onward destination in comfort and safety. 
                You can rest assured your chauffeur will be smart, discreet and have a good knowledge of London and 
                the surrounding areas. Sit back relax and enjoy your journey in comfort to your destination."
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
                backgroundImage={farnboroughAirport}
                heading="Manchester Airport Transfer "
                description="With all Manchester Airport luxury chauffeur transfers punctuality is important to you as a client. You 
                will be met by one of our uniformed professional chauffeurs who will be waiting for you when you step 
                out of the arrivals hall. He will be holding a board with your name on it. You will expect us to be discreet 
                at all times. If you prefer we can arrange a meeting point and phone or text you when you are in the 
                baggage hall. 
                "
              />
              <ImageTextOverlay
                backgroundImage={londonCityAirport}
                heading="Battersea Heliport"
                description="Your London Chauffeur provides luxury chauffeur driven cars for stress-free heliport transfers. With 
                experienced chauffeurs, you can be reassured that your chauffeur will be waiting for you on arrival, 
                ready to assist you with luggage and any other needs you may have. 
                "
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

export default AirportSlider;
