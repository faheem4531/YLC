import React from "react";
import { useRouter } from "next/router";
import ReactStars from "react-stars";

import styles from "./CarsCollectionCard.module.css";

import Image from "next/image";
import CarImage from "../../images/pngs/mercedes-img.png";
import checkIcon from "../../images/svgs/check-icon.svg";
import passengerIcon from "../../images/svgs/passenger-black-icon.svg";
import hybridIcon from "../../images/svgs/hybrid-black-icon.svg";
import suitcasesIcon from "../../images/svgs/suitcases-black-icon.svg";
import wifiIcon from "../../images/svgs/wifi-black-icon.svg";

const CarsCollectionCard = ({
  data = [],
  onClick,
  price,
}: {
  data: any;
  onClick?: (price: string) => void;
  price?: string;
}) => {
  const router = useRouter();

  if (data[0]) {
    var { name, rates, features, description } = data[0];
  } else {
    var { name, rates, features } = data;
  }
  const { distance, selectedTab, hrs } = router.query;
  const className = data?.length ? data[0]?.class : data.class;

  const baseRate = className === "Business Class" ? 60 : 90;

  const ridePrice = price
    ? price
    : (baseRate +
      Number(
        selectedTab === "one_way"
          ? (Number(distance) * rates?.perMile)
          : (Number(hrs) * rates?.perHour)
      )).toFixed(2);

  return (
    <div className={styles.carsCollectionSection}>
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div
              data-aos="fade-up"
              data-aos-duration="500"
              data-aos-once="false"
              className={styles.carName}
            >
              {className}
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
              className={styles.carDescription}
            >
              {description}
            </div>
            <div
              data-aos="fade-up"
              data-aos-duration="500"
              data-aos-once="false"
              className={styles.carStarWrapper}
            >
              <div></div>
              <Image
                className={styles.carImg}
                width={900}
                height={300}
                src={data?.length ? data[0]?.image : data?.image ?? CarImage}
                alt="img"
              />
              {price ? (
                <div className={styles.starIconsWrapper}>
                  <ReactStars
                    count={5}
                    size={35}
                    edit={false}
                    value={data.rating}
                    color2="#FDC65C"
                    color1="#D9D9D9"
                  />
                  <div className={styles.rateThisRide}>Rating</div>
                </div>
              ) : (
                <div></div>
              )}
            </div>
            <div className={styles.carSpecsContainer}>
              <div>
                <div
                  data-aos="fade-up"
                  data-aos-duration="500"
                  data-aos-once="false"
                  className={styles.checkIconWrapper}
                >
                  <Image src={checkIcon} alt="icon" />
                  <div className={styles.checkIconDescription}>
                    First class chauffeur
                  </div>
                </div>
                <div
                  data-aos="fade-up"
                  data-aos-duration="500"
                  data-aos-once="false"
                  className={styles.checkIconWrapper}
                >
                  <Image src={checkIcon} alt="icon" />
                  <div className={styles.checkIconDescription}>
                    Free 60 mins airport parking
                  </div>
                </div>
                <div
                  data-aos="fade-up"
                  data-aos-duration="500"
                  data-aos-once="false"
                  className={styles.checkIconWrapper}
                >
                  <Image src={checkIcon} alt="icon" />
                  <div className={styles.checkIconDescription}>
                    Free 60 mins waiting time for airport pickups, 15 mins for
                    all others
                  </div>
                </div>
                <div
                  data-aos="fade-up"
                  data-aos-duration="500"
                  data-aos-once="false"
                  className={styles.checkIconWrapper}
                >
                  <Image src={checkIcon} alt="icon" />
                  <div className={styles.checkIconDescription}>
                    Includes meet & greet
                  </div>
                </div>
              </div>
              <div className={styles.verticalBorder} />
              <div>
                <div
                  data-aos="fade-up"
                  data-aos-duration="500"
                  data-aos-once="false"
                  className={styles.carInteriorWrapper}
                >
                  <Image
                    className={styles.carInteriorIcon}
                    src={passengerIcon}
                    alt="icon"
                  />
                  <div className={styles.carInteriorDescription}>
                    {features?.passengers} Passengers
                  </div>
                </div>
                <div
                  data-aos="fade-up"
                  data-aos-duration="500"
                  data-aos-once="false"
                  className={styles.carInteriorWrapper}
                >
                  <Image
                    className={styles.carInteriorIcon}
                    src={suitcasesIcon}
                    alt="icon"
                  />
                  <div className={styles.carInteriorDescription}>
                    {features?.suitCase} Suitcases
                  </div>
                </div>
                {features?.electricOption && (
                  <div
                    data-aos="fade-up"
                    data-aos-duration="500"
                    data-aos-once="false"
                    className={styles.carInteriorWrapper}
                  >
                    <Image
                      className={styles.carInteriorIcon}
                      src={hybridIcon}
                      alt="icon"
                    />
                    <div className={styles.carInteriorDescription}>
                      Hybrid Available
                    </div>
                  </div>
                )}
                {features?.wifi && (
                  <div
                    data-aos="fade-up"
                    data-aos-duration="500"
                    data-aos-once="false"
                    className={styles.carInteriorWrapper}
                  >
                    <Image
                      className={styles.carInteriorIcon}
                      src={wifiIcon}
                      alt="icon"
                    />
                    <div className={styles.carInteriorDescription}>
                      Onboard Wi-Fi
                    </div>
                  </div>
                )}
              </div>
              <div className={styles.verticalBorder} />
              <div
                data-aos="fade-left"
                data-aos-duration="500"
                data-aos-once="false"
                className={styles.journeyPriceCard}
              >
                <div className={styles.yourJourneyPrice}>
                  Your Journey Price
                </div>
                <div className={styles.journeyTotalPrice}>
                  &pound;<span>{ridePrice}</span>
                </div>
                <button
                  className={styles.bookRideButton}
                  onClick={() => onClick && onClick(ridePrice.toString())}
                >
                  Book This Ride {price && "Again"}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default CarsCollectionCard;
