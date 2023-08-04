import Link from "next/link";

import styles from "./AuthenticationInput.module.css";

const AuthenticationInput = ({
  placeholder,
  type,
  name,
  forgot,
  formik,
  readOnly
}: {
  placeholder: string;
  type: string;
  forgot?: string;
  name: string;
  formik: any;
  readOnly?: boolean
}) => {
  return (
    <div className={styles.inoutContainer}>
      <input
        className={styles.input}
        placeholder={placeholder}
        name={name}
        type={type}
        readOnly={readOnly}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values[name]}
      />
      {formik.touched[name] && formik.errors[name] && (
        <span className={styles.errorMessage}>{formik.errors[name]}</span>
      )}
      <div className={styles.forgotPassword}>
        <Link className={styles.link} href="/forgot-password">
          {forgot}
        </Link>
        </div>
    </div>
  );
};

export default AuthenticationInput;
