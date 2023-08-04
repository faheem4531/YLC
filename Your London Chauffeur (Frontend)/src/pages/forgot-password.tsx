import React, { useState } from "react";
import { useRouter } from "next/router";
import { useFormik } from "formik";
import * as Yup from "yup";
import { toast } from "react-toastify";

import styles from "@/styles/ForgotPassword.module.css";
import AuthenticationInput from "@/components/authenticationInput";
import GenericButton from "@/components/genericButton";
import api from "../services/api";

const ForgotPassword = () => {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  const formik = useFormik({
    initialValues: {
      email: "",
    },
    onSubmit: async (data) => {
      setLoading(true);
      const { email } = data;
      try {
        await api.post("users/forgetPassword", {
          email,
        });
        toast("OTP code sent successfully", { type: "success" });
        router.push({ pathname: '/otp-verification', query: { email }})
        setLoading(false);
      } catch (err: any) {
        setLoading(false);
        toast(err?.response?.data?.message, { type: "error" });
      }
    },
    validationSchema: Yup.object({
      email: Yup.string().required("Email is required"),
    }),
  });

  return (
    <div>
      <div className={styles.heroSection}>
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div data-aos="fade-right"
                  data-aos-duration="500"
                  data-aos-once="false" className={styles.heroHeading}>
              Don’t Worry, We Got You Cover
              </div>
              <div data-aos="fade-right"
                  data-aos-duration="500"
                  data-aos-once="false" className={styles.heroParagraph}>
              Insert your email. A verification code will be sent to you for the password recovery.
              </div>
            </div>
            <div data-aos="fade-left"
                  data-aos-duration="500"
                  data-aos-once="false" className="col-lg-6 d-flex justify-content-center flex-column">
              <div className={styles.authenticationForm}>
                <div className={styles.signupHeading}>Forgot Password</div>
                <div className={styles.signupDescription}>
                Enter your Email
                </div>
                <AuthenticationInput placeholder="Enter Your Email" type="email" name="email" formik={formik} />
                <GenericButton title="Continue" onClick={formik.handleSubmit} loading={loading} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;
