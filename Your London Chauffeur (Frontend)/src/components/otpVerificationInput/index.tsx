import React, { useState } from "react";
import OtpInput from "react-otp-input";
import styles from "./OtpVerificationInput.module.css";

const OtpVerificationInput = ({ handleChange, otp }: { handleChange: (code: string) => void, otp: string }) => {

  return (
      <OtpInput
        value={otp}
        onChange={handleChange}
        numInputs={4}
        inputStyle={styles.otpInput}
        focusStyle={styles.fousInput}
        containerStyle={styles.inputContainer}
      />
  );
};

export default OtpVerificationInput;
