import styles from "./SocialButton.module.css";

import Image from "next/image";

const SocialButton = ({ title, icon, onClick = () => { } }: { title: string, icon: "img", onClick?: () => void }) => {
  return (
    <div className={styles.buttonContainer} onClick={onClick}>
      <Image className={styles.buttonIcon} src={icon} alt="icon" />
      <div className={styles.socialButtonText}>{title}</div>
    </div>
  );
};

export default SocialButton;
