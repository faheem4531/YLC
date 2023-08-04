import React, { useState } from "react";
import { useRouter } from "next/router";
import { useFormik } from "formik";
import * as Yup from "yup";
import { toast } from "react-toastify";

import GenericButton from "@/components/genericButton";
import AuthenticationInput from "@/components/authenticationInput";
import api from "../services/api";

import styles from "@/styles/NewPassword.module.css";

const Newpassword = () => {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  const formik = useFormik({
    initialValues: {
      newPassword: "",
      confirmPassword: "",
    },
    onSubmit: async (data) => {
      setLoading(true);
      const { newPassword, confirmPassword } = data;
      const { email, otp } = router.query
      try {
        await api.post(`users/setNewPassword/${otp}`, {
          email,
          newPassword,
          confirmPassword
        });
        toast("Password updated successfully", { type: "success" });
        router.push("/sign-in");
        setLoading(false);
      } catch (err: any) {
        setLoading(false);
        toast(err?.response?.data?.message, { type: "error" });
      }
    },
    validationSchema: Yup.object({
      newPassword: Yup.string().required("Number of Passengers is required"),
      confirmPassword: Yup.string()
        .required()
        .oneOf([Yup.ref("newPassword"), ""], "Passwords must match"),
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
               Enter your new password
                </div>
                <AuthenticationInput
                  placeholder="Enter Your New Passowrd"
                  type="password"
                  name="newPassword"
                  formik={formik}
                />
                <AuthenticationInput
                  placeholder="Confirm Password"
                  type="password"
                  name="confirmPassword"
                  formik={formik}
                />
                <GenericButton title="Confirm" loading={loading} onClick={formik.handleSubmit} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Newpassword;
