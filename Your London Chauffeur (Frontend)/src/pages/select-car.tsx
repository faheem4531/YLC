import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { RotatingLines } from "react-loader-spinner";

import styles from "@/styles/SelectCar.module.css";
import { useRouter } from "next/router";

import PreviousButton from "@/components/previousButton";
import CarsCollectionCard from "@/components/carsCollectionCard";

import api from "../services/api";

const SelectCar = () => {
  const router = useRouter();

  const [cars, setCars] = useState([]);
  const [loading, setLoading] = useState<boolean>(true);

  const getCars = async () => {
    setLoading(true);
    try {
      const res = await api.get("car/getall");
      setCars(res.data);
      setLoading(false);
    } catch (error: any) {
      toast(error.response?.data?.message || "Failed to get cars", {
        type: "error",
      });
      setLoading(false);
    }
  };

  useEffect(() => {
    getCars();
  }, []);

  const carCategories: any = {
    BusinessClass: "Business Class",
    BusinessXL: "Business XL",
    FirstClass: "First Class",
  };
  const mapedCatageories: any = {};

  Object.keys(carCategories).forEach((categoryKey: string) => {
    mapedCatageories[categoryKey] = cars?.filter(
      (car: any) => car?.class === carCategories[categoryKey]
    );
  });

  return (
    <div>
      <div className={styles.heroSection}>
        <div className={`${styles.bookNowSection} container`}>
          <div className="row">
            <div className="col-lg-6">
              <div
                data-aos="fade-right"
                data-aos-duration="500"
                data-aos-once="false"
                className={styles.stepsText}>
                STEP 2 OF 3
              </div>
              <div
                data-aos="fade-right"
                data-aos-duration="500"
                data-aos-once="false"
                className={styles.heroHeading}>
                Select Your Car
              </div>
              <div className={styles.stepsContainer}>
                <div
                  data-aos="fade-up"
                  data-aos-duration="500"
                  data-aos-once="false"
                  className={styles.steps}>
                  <div className={styles.stepsNum}>1</div>
                  <div className={styles.stepsDescription}>Locations</div>
                </div>
                <div
                  data-aos="fade-up"
                  data-aos-duration="500"
                  data-aos-once="false"
                  className={styles.horizontalBorder}
                />
                <div
                  data-aos="fade-up"
                  data-aos-duration="500"
                  data-aos-once="false"
                  className={styles.steps}>
                  <div className={styles.activeStepsNum}>2</div>
                  <div className={styles.activeStepsDescription}>Cars</div>
                </div>
                <div
                  data-aos="fade-up"
                  data-aos-duration="500"
                  data-aos-once="false"
                  className={styles.horizontalBorder}
                />
                <div
                  data-aos="fade-up"
                  data-aos-duration="500"
                  data-aos-once="false"
                  className={styles.steps}>
                  <div className={styles.stepsNum}>3</div>
                  <div className={styles.stepsDescription}>Your Details</div>
                </div>
              </div>
              <div
                data-aos="fade-up"
                data-aos-duration="500"
                data-aos-once="false">
                <PreviousButton onClick={() => router.push("/")} />
              </div>
            </div>
            <div className="col-lg-6"></div>
          </div>
        </div>
      </div>
      {loading ? (
        <div className={styles.loader}>
          <RotatingLines
            strokeColor="grey"
            strokeWidth="5"
            animationDuration="0.75"
            width="96"
            visible={true}
          />
        </div>
      ) : (
        Object.keys(mapedCatageories).map((item, index) => {
          const catageory = mapedCatageories[item];
          return (
            <CarsCollectionCard
              data={catageory}
              onClick={(price) =>
                router.push({
                  pathname: "/book-now-detail",
                  query: { ...router.query, car_id: catageory[0]._id, price },
                })
              }
              key={catageory[0]._id}
            />
          );
        })
      )}
    </div>
  );
};

export default SelectCar;
