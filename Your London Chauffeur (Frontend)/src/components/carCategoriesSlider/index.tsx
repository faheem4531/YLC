import Link from "next/link";
import Image from "next/image";
import styles from "./CarCategoriesSlider.module.css";
import carImage from "../../images/pngs/mercedes-img.png";
import checkIcon from "../../images/svgs/check-icon.svg";
import wifiIcon from "../../images/svgs/wifi-black-icon.svg";
import hybridIcon from "../../images/svgs/hybrid-black-icon.svg";
import suitcasesIcon from "../../images/svgs/suitcases-black-icon.svg";
import passengerIcon from "../../images/svgs/passenger-black-icon.svg";

interface CarFeatures {
  passengers: string;
  suitCase: number;
  electricOption: boolean;
  wifi: boolean;
}

interface Rates {
  perHour: number;
  perMile: number;
}

interface Car {
  class: string;
  description: string;
  image: string;
  features: CarFeatures;
  rates: Rates;
  _id: string;
}

const CarCategoriesSlider = ({ cars }: { cars: Car[] }) => {
  const carCategories: any = {
    BusinessClass: "Business Class",
    BusinessXL: "Business XL",
    FirstClass: "First Class",
  };
  const mapedCatageories: any = {};

  Object.keys(carCategories).forEach((categoryKey: string) => {
    mapedCatageories[categoryKey] = cars?.filter(
      (car) => car?.class === carCategories[categoryKey]
    );
  });

  return (
    <div className={styles.ourRidesWrapper}>
      <div
        id="carouselExampleIndicators"
        className="container carousel slide"
        data-bs-ride="carousel">
        <div className="carousel-indicators">
          {Object.keys(mapedCatageories).map((catageory: any, index) => {
            return (
              <button
                type="button"
                key={catageory[0]._id}
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide-to={`${index}`}
                className={`${styles.carouselIndicator} ${
                  index === 0 && "active"
                }`}
                aria-current="true"
                aria-label={`Slide ${index + 1}`}></button>
            );
          })}
        </div>

        <div className="carousel-inner">
          {Object.keys(mapedCatageories).map((item, index) => {
            const catageory = mapedCatageories[item];

            return (
              <div
                className={`carousel-item ${index === 0 && "active"}`}
                key={catageory[0]?._id}>
                <div className="container">
                  <div className="row">
                    <div className="col-12">
                      <div
                        data-aos="fade-up"
                        data-aos-duration="500"
                        data-aos-once="false"
                        className={styles.ourRideHeading}>
                        {catageory[0]?.class}
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
                        className={styles.ourRidePara}>
                        {catageory[0]?.description}
                      </div>
                    </div>
                    <div className="col-12">
                      <div className={styles.carWrapper}>
                        <Image
                          className={styles.carImage}
                          src={catageory[0]?.image || carImage}
                          alt="img"
                          width={500}
                          height={300}
                        />
                      </div>
                    </div>
                    <div className="col-12">
                      <div className={styles.eclassCarWrapper}>
                        <div className="d-flex align-items-center gap-4">
                          <div>
                            <div
                              data-aos="fade-up"
                              data-aos-duration="500"
                              data-aos-once="false"
                              className={styles.checkIconWrapper}>
                              <Image
                                className={styles.checkIcon}
                                src={checkIcon}
                                alt="icon"
                              />
                              <div className={styles.checkIconText}>
                                First class chauffeur
                              </div>
                            </div>
                            <div
                              data-aos="fade-up"
                              data-aos-duration="500"
                              data-aos-once="false"
                              className={styles.checkIconWrapper}>
                              <Image
                                className={styles.checkIcon}
                                src={checkIcon}
                                alt="icon"
                              />
                              <div className={styles.checkIconText}>
                                Free 60 mins airport parking
                              </div>
                            </div>
                            <div
                              data-aos="fade-up"
                              data-aos-duration="500"
                              data-aos-once="false"
                              className={styles.checkIconWrapper}>
                              <Image
                                className={styles.checkIcon}
                                src={checkIcon}
                                alt="icon"
                              />
                              <div className={styles.checkIconText}>
                                Free 60 mins waiting time for airport pickups,
                                15 mins for all others
                              </div>
                            </div>
                            <div
                              data-aos="fade-up"
                              data-aos-duration="500"
                              data-aos-once="false"
                              className={styles.checkIconWrapper}>
                              <Image
                                className={styles.checkIcon}
                                src={checkIcon}
                                alt="icon"
                              />
                              <div className={styles.checkIconText}>
                                Includes meet & greet
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className={styles.verticalBorder} />

                        <div className={styles.card}>
                          <div
                            data-aos="fade-up"
                            data-aos-duration="500"
                            data-aos-once="false"
                            className={styles.passengerIconWrapper}>
                            <Image
                              className={styles.passengerIcon}
                              src={passengerIcon}
                              alt="img"
                            />
                            <div className={styles.cardText}>
                              {catageory[0]?.features?.passengers} Passengers
                            </div>
                          </div>
                          <div
                            data-aos="fade-up"
                            data-aos-duration="500"
                            data-aos-once="false"
                            className={styles.passengerIconWrapper}>
                            <Image
                              className={styles.passengerIcon}
                              src={suitcasesIcon}
                              alt="img"
                            />
                            <div className={styles.cardText}>
                              {catageory[0]?.features?.suitCase} Suitcases
                            </div>
                          </div>
                          {catageory[0]?.features?.electricOption && (
                            <div
                              data-aos="fade-up"
                              data-aos-duration="500"
                              data-aos-once="false"
                              className={styles.passengerIconWrapper}>
                              <Image
                                className={styles.passengerIcon}
                                src={hybridIcon}
                                alt="img"
                              />
                              <div className={styles.cardText}>
                                Hybrid Available
                              </div>
                            </div>
                          )}
                          {catageory[0]?.features?.wifi && (
                            <div
                              data-aos="fade-up"
                              data-aos-duration="500"
                              data-aos-once="false"
                              className={styles.passengerIconWrapper}>
                              <Image
                                className={styles.passengerIcon}
                                src={wifiIcon}
                                alt="img"
                              />
                              <div className={styles.cardText}>
                                Onboard Wi-Fi
                              </div>
                            </div>
                          )}
                        </div>

                        <div className={styles.verticalBorder} />

                        <div className="w-100">
                          <div
                            data-aos="fade-up"
                            data-aos-duration="500"
                            data-aos-once="false"
                            className={styles.dollarWrapper}>
                            <div className={styles.dollarText}>Hourly rate</div>
                            <div className={styles.dollar}>
                              &pound; {catageory[0]?.rates?.perHour}
                            </div>
                          </div>
                          <div
                            data-aos="fade-up"
                            data-aos-duration="500"
                            data-aos-once="false"
                            className={styles.dollarWrapper}>
                            <div className={styles.dollarText}>
                              Day rate (minimum 8hrs)
                            </div>
                            <div className={styles.dollar}>
                              &pound; {catageory[0]?.rates?.perHour * 8}
                            </div>
                          </div>

                          <div
                            data-aos="fade-up"
                            data-aos-duration="500"
                            data-aos-once="false"
                            className={styles.dollarWrapper}>
                            <div className={styles.dollarText}>
                              Heathrow to Central London
                            </div>
                            <div className={styles.dollar}>
                              &pound;{" "}
                              {catageory[0]?.class === "Business Class"
                                ? 100
                                : 150}
                            </div>
                          </div>
                          <Link href="/book-chauffeur-now">
                            <div
                              data-aos="fade-up"
                              data-aos-duration="500"
                              data-aos-once="false"
                              className={styles.buttonWrapper}>
                              <button className={styles.bookRideButton}>
                                Book This Ride
                              </button>
                            </div>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        <button
          className={`${styles.previousButton} carousel-control-prev`}
          type="button"
          data-bs-target="#carouselExampleIndicators"
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
          data-bs-target="#carouselExampleIndicators"
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

export default CarCategoriesSlider;
