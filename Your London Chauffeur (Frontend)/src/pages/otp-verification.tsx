import React, { useState } from "react";
import { useRouter } from "next/router";
import { toast } from "react-toastify";

import GenericButton from "@/components/genericButton";
import OtpVerificationInput from "@/components/otpVerificationInput";
import styles from "@/styles/OtpVerification.module.css";
import api from "../services/api";

const OtpVerification = () => {
  const router = useRouter();

  const [otp, setOtp] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChangeOTP = (code: string) => {
    setOtp(code);
  };

  const verifyOTP = async () => {
    const { email } = router.query
    setLoading(true);
    try {
      await api.post(`users/validate/${otp}`, { email });
      toast("OTP code verified", { type: "success" });
      router.push({ pathname : "/new-password", query: { otp, email } });
      setLoading(false);
    } catch (err: any) {
      toast(err?.response?.data?.message, { type: "error" });
      setLoading(false);
    }
  };

  return (
    <div>
      <div className={styles.heroSection}>
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div  data-aos="fade-right"
                  data-aos-duration="500"
                  data-aos-once="false" className={styles.heroHeading}>
              Don’t Worry, We Got You Cover
              </div>
              <div  data-aos="fade-right"
                  data-aos-duration="500"
                  data-aos-once="false" className={styles.heroParagraph}>
              Insert your email. A verification code will be sent to you for the password recovery.
              </div>
            </div>
            <div  data-aos="fade-left"
                  data-aos-duration="500"
                  data-aos-once="false" className="col-lg-6 d-flex justify-content-center flex-column">
              <div className={styles.authenticationForm}>
                <div className={styles.signupHeading}>Forgot Password</div>
                <div className={styles.signupDescription}>
                Enter the verification code sent to your email
                </div>
                <OtpVerificationInput
                  handleChange={handleChangeOTP}
                  otp={otp}
                />
                <GenericButton
                  title="Verify"
                  loading={loading}
                  onClick={verifyOTP}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OtpVerification;
