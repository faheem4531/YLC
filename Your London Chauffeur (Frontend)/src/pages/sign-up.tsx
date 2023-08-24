import React, { useState, useEffect } from "react";
import { toast } from "react-toastify";
import { useRouter } from "next/router";
import { signIn, useSession } from "next-auth/react";
import Link from "next/link";
import { useFormik } from "formik";
import * as Yup from "yup";

import styles from "@/styles/Signup.module.css";
import AuthenticationInput from "@/components/authenticationInput";
import GenericButton from "@/components/genericButton";
import SocialButton from "@/components/socialButton";
import api from "../services/api";

import googleIcon from "../images/svgs/google-icon.svg";

const Signup = () => {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const { data: session, status } = useSession(); // if status === 'authenciated'. that means email has been varified from the google

  useEffect(() => {
    const googleLogin = async () => {
      if (status === "authenticated") {
        setLoading(true);
        const res = await api.post("users/googleLogin", {
          email: session?.user?.email,
          name: session?.user?.name,
        });
        toast("Logged in successfully", { type: "success" });
        localStorage.setItem("token", res.data.accessToken);
        localStorage.setItem("user_id", res.data.data._id);
        api.defaults.headers.Authorization = `Bearer ${res.data.accessToken}`;
        router.push("/");
        setLoading(false);
      }
    };
    googleLogin();
  }, [status]);

  const phoneRegExp = /^(\+[0-9]{1,3}[- ]?)?([0-9]{3,4}[- ]?){2}[0-9]{3,4}$/;

  const formik = useFormik({
    initialValues: {
      first_name: "",
      last_name: "",
      email: "",
      phone: "",
      password: "",
      confirm_password: "",
    },
    onSubmit: async (data) => {
      setLoading(true);
      const { email, first_name, last_name, phone, password } = data;
      try {
        const res = await api.post("users/signup", {
          name: first_name + " " + last_name,
          email,
          phone,
          password,
          adderss: "ofc kasur",
          role: "USER",
        });
        toast("Registered successfully", { type: "success" });

        localStorage.setItem("token", res.data.accessToken);
        localStorage.setItem("user_id", res.data.data._id);
        api.defaults.headers.Authorization = `Bearer ${res.data.accessToken}`;
        router.push("/book-chauffeur-now");

        setLoading(false);
      } catch (err: any) {
        setLoading(false);
        toast(err?.response?.data?.message, { type: "error" });
      }
    },
    validationSchema: Yup.object({
      first_name: Yup.string().required("First Name is required"),
      last_name: Yup.string().required("Last Name is required"),
      email: Yup.string().required("Email is required"),
      phone: Yup.string()
        .matches(phoneRegExp, "Phone number is not valid")
        .required("Phone is required"),
      password: Yup.string().required("Password is required"),
      confirm_password: Yup.string()
        .required("Confirm password is required")
        .oneOf([Yup.ref("password"), ""], "Passwords must match"),
    }),
  });

  const handleSignIn = async () => {
    await signIn("google");
  };

  return (
    <div>
      <div className={styles.heroSection}>
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div
                data-aos="fade-right"
                data-aos-duration="500"
                data-aos-once="false"
                className={styles.heroHeading}>
                Enter Your Login Details
              </div>
              <div
                data-aos="fade-right"
                data-aos-duration="500"
                data-aos-once="false"
                className={styles.heroParagraph}>
                To get access to our chauffeurs details. Please enter your login
                details.
              </div>
            </div>
            <div className="col-lg-6 d-flex justify-content-center flex-column">
              <div
                data-aos="fade-left"
                data-aos-duration="500"
                data-aos-once="false"
                className={styles.authenticationForm}>
                <div className={styles.signupHeading}>Sign Up</div>
                <div className={styles.signupDescription}>
                  Enter your login details.
                </div>
                <div className={styles.nameInputContainer}>
                  <div className={styles.inputWrapper}>
                    <AuthenticationInput
                      placeholder="Enter First Name"
                      type="text"
                      name="first_name"
                      formik={formik}
                    />
                  </div>
                  <div className={styles.inputWrapper}>
                    <AuthenticationInput
                      placeholder="Enter Last Name"
                      type="text"
                      name="last_name"
                      formik={formik}
                    />
                  </div>
                </div>
                <AuthenticationInput
                  placeholder="Enter Your Email"
                  type="email"
                  name="email"
                  formik={formik}
                />
                <AuthenticationInput
                  placeholder="Enter Your Phone"
                  type="tel"
                  name="phone"
                  formik={formik}
                />
                <AuthenticationInput
                  placeholder="Enter Password"
                  type="password"
                  name="password"
                  formik={formik}
                />
                <AuthenticationInput
                  placeholder="Confirm Password"
                  type="password"
                  name="confirm_password"
                  formik={formik}
                />
                <GenericButton
                  title="Sign Up"
                  onClick={formik.handleSubmit}
                  loading={loading}
                />
              </div>
              <div
                data-aos="fade-up"
                data-aos-duration="500"
                data-aos-once="false"
                className={styles.alreadyRegister}>
                Already Registered?{" "}
                <Link href="/sign-in" className={styles.login}>
                  Log In
                </Link>
              </div>
              <div
                data-aos="fade-up"
                data-aos-duration="500"
                data-aos-once="false"
                className={styles.continueContainer}>
                <div className={styles.horizontalBorder} />
                <div className={styles.continueText}>Or continue with</div>
                <div className={styles.horizontalBorder} />
              </div>
              <div
                data-aos="fade-up"
                data-aos-duration="500"
                data-aos-once="false"
                className={styles.socialBtnWrapper}>
                <SocialButton
                  title="Google"
                  icon={googleIcon}
                  onClick={handleSignIn}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
