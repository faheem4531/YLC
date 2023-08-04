import styles from "./GenericButton.module.css";
import { ThreeDots } from "react-loader-spinner";

const GenericButton = ({
  title,
  loading,
  onClick
}: {
  title: string;
  loading?: boolean,
  onClick?: () => void;
}) => {
  return (
    <div className={styles.formButton} onClick={onClick}>
      {loading ? (
        <ThreeDots
          height="80"
          width="80"
          radius="9"
          color="#FFFFFF"
          ariaLabel="three-dots-loading"
          visible
        />
      ) : title}
    </div>
  );
};

export default GenericButton;
