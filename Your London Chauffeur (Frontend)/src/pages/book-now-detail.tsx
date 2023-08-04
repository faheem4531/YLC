import React, { useState, useEffect } from "react";
import styles from "@/styles/BookNowDetail.module.css";
import { useRouter } from 'next/router';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { toast } from 'react-toastify';

import PreviousButton from "@/components/previousButton";
import AuthenticationInput from "@/components/authenticationInput";
import GenericButton from "@/components/genericButton";

import api from "../services/api"

interface User {
  name: string;
  email: string;
  phone: string;
}

const BookNowDetail = () => {
  const router = useRouter()
  const [loading, setLoading] = useState(false)
  const [token, setToken] = useState<string | null>(null)

  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    setToken(localStorage.getItem('token'))
  }, [])

  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      phone: '',
      passengers: '',
      additionDetails: ''
    },
    onSubmit: async (data) => {
      setLoading(true)
      const { phone, passengers, additionDetails, email, name, } = data
      const { car_id, from, where, price, time, date, hrs, selectedTab, distance } = router.query

      try {
        await api.post('booking/create', {
          car_id,
          email,
          name,
          from,
          where: selectedTab === 'one_way' ? where : null,
          price,
          phone,
          distance,
          date,
          time,
          hrs: selectedTab !== 'one_way' ? hrs : null,
          passengers,
          additionDetails,
          isRegistered: localStorage.getItem('user_id') ? true : false
        })
        toast("Booked successfully", { type: "success" })
        router.push({
          pathname: token ? "/profile" : "sign-in",
        },
          undefined,
          { shallow: true });
        setLoading(false)
      } catch (err) {
        setLoading(false)
        toast("Booking failed", { type: "error" })
      }
    },
    validationSchema: Yup.object({
      name: Yup.string().required('Name is required'),
      email: Yup.string().email('Please enter a valid email address').required('Email is required'),
      phone: Yup.string().required('Phone is required'),
      passengers: Yup.string().required('Number of Passengers is required'),
    })
  })

  const getUser = async () => {
    const userId = localStorage.getItem("user_id");
    if (!userId) return;
    const res = await api.get(`/users/getOne/${userId}`);
    const userData = res.data?.userData
    formik.setFieldValue("name", userData.name)
    formik.setFieldValue("email", userData.email)
    formik.setFieldValue("phone", userData.phone)
    setUser(userData);
  };

  useEffect(() => {
    getUser();
  }, []);

  return (
    <div className={styles.Container}>
      <div className={styles.heroSection}>
        <div className={`${styles.bookNowSection} container`}>
          <div className="row">
            <div className="col-lg-6">
              <div data-aos="fade-right"
                data-aos-duration="500"
                data-aos-once="false" className={styles.stepsText}>STEP 3 OF 3</div>
              <div data-aos="fade-right"
                data-aos-duration="500"
                data-aos-once="false" className={styles.heroHeading}>
                Enter Your Details
              </div>
              <div className={styles.stepsContainer}>
                <div data-aos="fade-up"
                  data-aos-duration="500"
                  data-aos-once="false" className={styles.steps}>
                  <div className={styles.stepsNum}>1</div>
                  <div className={styles.stepsDescription}>Locations</div>
                </div>
                <div data-aos="fade-up"
                  data-aos-duration="500"
                  data-aos-once="false" className={styles.horizontalBorder} />
                <div data-aos="fade-up"
                  data-aos-duration="500"
                  data-aos-once="false" className={styles.steps}>
                  <div className={styles.stepsNum}>2</div>
                  <div className={styles.stepsDescription}>Cars</div>
                </div>
                <div data-aos="fade-up"
                  data-aos-duration="500"
                  data-aos-once="false" className={styles.horizontalBorder} />
                <div data-aos="fade-up"
                  data-aos-duration="500"
                  data-aos-once="false" className={styles.steps}>
                  <div className={styles.activeStepsNum}>3</div>
                  <div className={styles.activeStepsDescription}>Your Details</div>
                </div>
              </div>
              <div data-aos="fade-up"
                data-aos-duration="500"
                data-aos-once="false">
                <PreviousButton onClick={() => router.push({ pathname: '/select-car', query: router.query })} />
              </div>
            </div>
            <div data-aos="fade-left"
              data-aos-duration="500"
              data-aos-once="false" className="col-lg-6 d-flex justify-content-center">
              <div className={styles.authenticationForm}>
                <AuthenticationInput placeholder="Enter Full Name" type="text" name="name" formik={formik} readOnly={!!user?.name} />
                <AuthenticationInput placeholder="Enter Your Email" type="email" name="email" formik={formik} readOnly={!!user?.email} />
                <AuthenticationInput placeholder="Enter Your Phone" type="phone" name="phone" formik={formik} readOnly={!!user?.phone} />
                <AuthenticationInput placeholder="Number Of Passengers" type="phone" name="passengers" formik={formik} />
                <textarea className={styles.textareaInput} name="additionDetails" placeholder="Additional Details" onChange={formik.handleChange} value={formik.values.additionDetails} />
                <div className={styles.buttonContainer}>
                  <GenericButton title="Book Chauffeur" onClick={formik.handleSubmit} loading={loading} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookNowDetail;
