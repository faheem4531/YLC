import React, { useState } from "react";
import Image from "next/image";
import { toast } from "react-toastify";
import { useFormik } from "formik";
import * as Yup from "yup";

import styles from "@/styles/ContactUS.module.css";
import AuthenticationInput from "@/components/authenticationInput";
import Button from "@/components/genericButton";
import chauffeurlogo from "../images/svgs/chauffeur-footer-logo.svg";
import api from "@/services/api";

const ContactUS = () => {
  const [loading, setLoading] = useState<boolean>(false);

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      enquiry: "",
    },
    onSubmit: async (values) => {
      setLoading(true);
      try {
        await api.post("/subscriber/contactUs", values);
        toast("Report submitted successfully", { type: "success" });
        setLoading(false);
      } catch (error: any) {
        toast(error.response?.data?.message || "Failed to submit report", {
          type: "error",
        });
        setLoading(false);
      }
    },
    validationSchema: Yup.object({
      name: Yup.string().required("Name is required"),
      email: Yup.string().required("Email is required"),
      enquiry: Yup.string().required("Enquiry is required"),
    }),
  });

  return (
    <div className={styles.Container}>
      <div className={styles.ourStorySection}>
        <div className="container">
          <div className="row">
            <div className="col-12 d-flex flex-column align-items-center">
              <div  data-aos="fade-up"
            data-aos-duration="500"
            data-aos-once="false" className={styles.ourStoryHeading}>Contact Us</div>
              <div  data-aos="fade-up"
            data-aos-duration="500"
            data-aos-once="false" className={styles.borderBottom} />
              <Image
               data-aos="fade-left"
               data-aos-duration="500"
               data-aos-once="false"
                className={styles.chauffeurImg}
                src={chauffeurlogo}
                alt="img"
              />
              <form  data-aos="fade-right"
            data-aos-duration="500"
            data-aos-once="false" className={styles.contactUsForm}>
                <AuthenticationInput
                  placeholder="Name"
                  type="text"
                  name="name"
                  formik={formik}
                />
                <AuthenticationInput
                  placeholder="Enter Your Email"
                  type="email"
                  name="email"
                  formik={formik}
                />
                <textarea
                  placeholder="Enquiry"
                  className={styles.textareaInput}
                  name="enquiry"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.enquiry}
                />
                {formik.touched.enquiry && formik.errors.enquiry && (
                  <span className={styles.enquiryError}>
                    {formik.errors.enquiry}
                  </span>
                )}
                <div className={styles.btnWrapper}>
                  <Button
                    title="Submit"
                    onClick={formik.handleSubmit}
                    loading={loading}
                  />
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUS;
