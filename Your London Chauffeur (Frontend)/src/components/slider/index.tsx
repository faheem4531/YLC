import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

import styles from './Slider.module.css';
import mercedesImage from '../../images/pngs/mercedes-img.png';
import api from '@/services/api';

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

const Slider = () => {
  const [cars, setCars] = useState([]);

  const getCars = async () => {
    const res = await api.get('car/getall');
    setCars(res.data);
  };

  useEffect(() => {
    getCars();
  }, []);

  return (
    <div>
      <div
        id='carouselExampleIndicators'
        className='carousel slide'
        data-bs-ride='carousel'
      >
        <div className='carousel-indicators'>
          {cars.map((car: Car, index) => (
            <button
              type='button'
              key={car._id}
              data-bs-target='#carouselExampleIndicators'
              data-bs-slide-to={index.toString()}
              className={`${styles.carouselIndicator} ${
                index === 0 && 'active'
              }`}
              aria-current='true'
              aria-label={`Slide ${index + 1}`}
            ></button>
          ))}
        </div>
        <div className='carousel-inner'>
          {cars.map((car: Car, index) => (
            <div
              className={`carousel-item ${index === 0 && 'active'}`}
              key={car._id}
            >
              <div className={styles.imageWrappeer}>
                <Image
                  src={car.image || mercedesImage}
                  className={styles.carouselImage}
                  alt='any'
                  width={500}
                  height={300}
                />
              </div>
              <div className={styles.mercedesPricingWrapper}>
                <div className={styles.carName}>{car.class}</div>
                <div className={styles.carPriceRatingWrapper}>
                  <div className={styles.carHourlyRate}>Hourly Rate</div>
                  <div className={styles.carPrice}>
                    &pound; {car.rates.perHour}
                  </div>
                </div>
                <div className={styles.carPriceRatingWrapper}>
                  <div className={styles.carHourlyRate}>
                    Day Rate (minimum 8hrs)
                  </div>
                  <div className={styles.carPrice}>
                    &pound; {car.rates.perHour * 8}
                  </div>
                </div>
                {/* <div className={styles.carPriceRatingWrapper}>
                  <div className={styles.carHourlyRate}>Per Mile Rate</div>
                  <div className={styles.carPrice}>
                    &pound; {car.rates.perMile}
                  </div>
                </div> */}
                <div className={styles.carPriceRatingWrapper}>
                  <div className={styles.carHourlyRate}>
                    Heathrow to Central London
                  </div>
                  <div className={styles.carPrice}>
                    &pound; {car.class === 'Business Class' ? 100 : 150}
                  </div>
                </div>
                <Link href='/book-now'>
                  <div
                    data-aos='fade-up'
                    data-aos-duration='500'
                    data-aos-once='false'
                    className={styles.buttonWarpper}
                  >
                    <button className={styles.sliderButton}>
                      Book This Ride
                    </button>
                  </div>
                </Link>
              </div>
            </div>
          ))}
        </div>
        <button
          className={`${styles.previousButton} carousel-control-prev`}
          type='button'
          data-bs-target='#carouselExampleIndicators'
          data-bs-slide='prev'
        >
          <div className={styles.previousIconContainer}>
            <span
              className={`${styles.previousIcon} carousel-control-prev-icon`}
              aria-hidden='true'
            ></span>
            <span className='visually-hidden'>Previous</span>
          </div>
        </button>
        <button
          className={`${styles.nextButton} carousel-control-next`}
          type='button'
          data-bs-target='#carouselExampleIndicators'
          data-bs-slide='next'
        >
          <div className={styles.nextIconContainer}>
            <span
              className={`${styles.nextIcon} carousel-control-next-icon`}
              aria-hidden='true'
            ></span>
            <span className='visually-hidden'>Next</span>
          </div>
        </button>
      </div>
    </div>
  );
};

export default Slider;
