
import { useEffect, useState } from 'react';
import { useRouter } from "next/router";
import Link from 'next/link'
import { signIn, useSession } from 'next-auth/react';
import { useFormik } from "formik";
import * as Yup from "yup";
import { toast } from "react-toastify";

import styles from "@/styles/Signin.module.css";
import AuthenticationInput from "@/components/authenticationInput";
import GenericButton from "@/components/genericButton";
import SocialButton from "@/components/socialButton";
import api from "../services/api";

import googleIcon from "../images/svgs/google-icon.svg";
import appleIcon from "../images/svgs/apple-icon.svg";
import linkedinIcon from "../images/svgs/blue-linkedin-icon.svg";

const Signin = () => {

  const router = useRouter();
  const { data: session, status } = useSession(); // if status === 'authenciated'. that means email has been varified from the google
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const googleLogin = async () => {
      if (status === 'authenticated') {
        setLoading(true);
        const res = await api.post('users/googleLogin', { email: session?.user?.email, name: session?.user?.name })
        toast("Logged in successfully", { type: "success" });
        localStorage.setItem('token', res.data.accessToken)
        localStorage.setItem('user_id', res.data.data._id)
        api.defaults.headers.Authorization = `Bearer ${res.data.accessToken}`
        router.push('/')
        setLoading(false);
      }
    }
    googleLogin()
  }, [status])

  const formik = useFormik({
    initialValues: {
      email_or_Phone: "",
      password: "",
    },
    onSubmit: async (data) => {

      setLoading(true);
      const { email_or_Phone, password } = data;
      try {
        const res = await api.post("users/login", {
          email_or_Phone,
          password,
        });
        toast("Logged in successfully", { type: "success" });
        localStorage.setItem('token', res.data.accessToken)
        localStorage.setItem('user_id', res.data.data._id)
        api.defaults.headers.Authorization = `Bearer ${res.data.accessToken}`
        router.push('/')
        setLoading(false);
      } catch (err: any) {
        setLoading(false);
        toast(err?.response?.data?.message, { type: "error" });
      }
    },
    validationSchema: Yup.object({
      email_or_Phone: Yup.string().required("Email or Phone Number is required"),
      password: Yup.string().required("Password is required"),
    }),
  });

  const handleSignIn = async () => {
    await signIn("google");
  };

  return (
      <div className={styles.heroSection}>
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div data-aos="fade-right"
                  data-aos-duration="500"
                  data-aos-once="false" className={styles.heroHeading}>
                Enter Your Login Details
              </div>
              <div data-aos="fade-right"
                  data-aos-duration="500"
                  data-aos-once="false" className={styles.heroParagraph}>
                To get access to our chauffeurs details. Please enter your login details.
              </div>
            </div>
            <div  className="col-lg-6 d-flex justify-content-center flex-column">
              <div  data-aos="fade-left"
                  data-aos-duration="500"
                  data-aos-once="false" className={styles.authenticationForm}>
                <div className={styles.signupHeading}>Log In</div>
                <div className={styles.signupDescription}>
                  Enter your login details.
                </div>

                <AuthenticationInput
                  placeholder="Enter Your Email"
                  type="email"
                  name="email_or_Phone"
                  formik={formik}
                />
                <AuthenticationInput
                  placeholder="Password"
                  type="password"
                  name="password"
                  formik={formik}
                  forgot="Forgot Password"
                />
                <GenericButton title="Log In" onClick={formik.handleSubmit} loading={loading} />
              </div>
              <div  data-aos="fade-up"
                  data-aos-duration="500"
                  data-aos-once="false" className={styles.alreadyRegister}>
                Already Registered? <Link href="/sign-up" className={styles.login} >Sign Up</Link></div>
              <div  data-aos="fade-up"
                  data-aos-duration="500"
                  data-aos-once="false" className={styles.continueContainer}>
                <div className={styles.horizontalBorder} />
                <div className={styles.continueText}>Or continue with</div>
                <div className={styles.horizontalBorder} />
              </div>
              <div  data-aos="fade-up"
                  data-aos-duration="500"
                  data-aos-once="false" className={styles.socialBtnWrapper}>
                <SocialButton title="Google" icon={googleIcon} onClick={handleSignIn} />
                {/* <SocialButton title="Apple" icon={appleIcon} />
                <SocialButton title="LinkedIn" icon={linkedinIcon} /> */}
              </div>
            </div>
          </div>
        </div>
      </div>
  );
};

export default Signin;
