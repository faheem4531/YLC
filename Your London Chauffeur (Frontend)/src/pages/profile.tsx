import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { RotatingLines } from "react-loader-spinner";
import { useRouter } from "next/router";
import Image from "next/image";

import CarsCollectionCard from "@/components/carsCollectionCard";
import styles from "@/styles/Profile.module.css";
import api from "@/services/api";

import profileImg from "../images/pngs/profile-bg-img.png";
import emailIcon from "../images/svgs/blue-email-icon.svg";
import phoneIcon from "../images/svgs/red-phone-icon.svg";
interface User {
  name: string;
  email: string;
  phone: string;
}

interface Ride {
  price: string;
  passengers: string;
  suitCases: string;
  wifi: boolean;
  car_id: string
}

interface  Car {
  _id: string
}

const Profile = () => {
  const router = useRouter();
  const [user, setUser] = useState<User>();
  const [ridesCompleted, setRidesCompleted] = useState<Ride[]>();
  const [loading, setLoading] = useState<boolean>(false);
  const [cars, setCars] = useState<Car[]>([])

  const getUser = async () => {
    setLoading(true)
    try{
    const userId = localStorage.getItem("user_id");
    const res = await api.get(`/users/getOne/${userId}`);
    setUser(res.data?.userData);
    setLoading(false)
    setRidesCompleted(res.data?.completedRides);
    }catch(error: any){
      toast(error.response?.data?.message || "Failed to get user details", {
        type: "error",
      });
      setLoading(false)
    }
  };

  const getCars = async () => {
    const res = await api.get('car/getall')
    setCars(res.data)
  }

  useEffect(() => {
    getUser();
    getCars();
  }, []);

  const getCarData = (carId: string) => {
    const carData: Car | undefined = cars.find((car: Car) => car._id === carId)
    return  carData  || {}
  }

  return loading ? (
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
    <div className={styles.Container}>
      <div className={styles.heroSection}>
        <div className="container">
          <div className={`${styles.profileSection} row`}>
            <div className="col-lg-7">
              <div className={styles.userSideContainer}>
                <Image
                data-aos="fade-right"
                data-aos-duration="500"
                data-aos-once="false"
                  className={styles.userImage}
                  src={profileImg}
                  alt="img"
                />
                <div>
                  <div data-aos="fade-up"
                  data-aos-duration="500"
                  data-aos-once="false" className={styles.userName}>{user?.name}</div>
                  <div data-aos="fade-up"
                  data-aos-duration="500"
                  data-aos-once="false" className={styles.emailWrapper}>
                    <Image
                      className={styles.emailIcon}
                      src={emailIcon}
                      alt="icon"
                    />
                    <div className={styles.emailText}>{user?.email}</div>
                  </div>
                  <div data-aos="fade-up"
                  data-aos-duration="500"
                  data-aos-once="false" className={styles.emailWrapper}>
                    <Image
                      className={styles.emailIcon}
                      src={phoneIcon}
                      alt="icon"
                    />
                    <div className={styles.emailText}>{user?.phone}</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-5">
              <div data-aos="fade-left"
                  data-aos-duration="500"
                  data-aos-once="false" className={styles.cardsWrapper}>
                <div className={styles.ridesCard}>
                  <div className={styles.ridesCompleted}>Rides Completed</div>
                  <div className={styles.totalRides}>
                    {ridesCompleted?.length}
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>
      {ridesCompleted?.map((ride: Ride, index) => (
        <CarsCollectionCard key={index} price={ride?.price} data={{...ride, ...getCarData(ride.car_id)}} onClick={()  => router.push("/")} />
      ))}
    </div>
  );
};

export default Profile;
