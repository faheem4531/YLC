import { useState } from "react";
import styles from "./Footer.module.css";

import GenericButton from "../../components/genericButton";
import Link from "next/link";
import Image from "next/image";
import facebookIcon from "../../images/svgs/facebook-icon.svg";
import twitterIcon from "../../images/svgs/twitter-icon.svg";
import linkedinIcon from "../../images/svgs/linkedin-icon.svg";
import instgramIcon from "../../images/svgs/instagram-icon.svg";
import chauffeurLogo from "../../images/svgs/chauffeur-footer-logo.svg";
import FooterWhite from "../../images/svgs/footer-white-logo.svg";
import chauffeurBlackLogo from "../../images/svgs/chauffeur-black-logo.svg";
import squareCard from "../../images/svgs/square-card.svg";
import americanExpressCard from "../../images/svgs/american-express-card.svg";
import visaCard from "../../images/svgs/visa-card.svg";
import masterCard from "../../images/svgs/master-card.svg";
import api from "@/services/api";
import { toast } from "react-toastify";

import americanExpresModren from "../../images/svgs/american-express-modren.svg";
import masterCardModren from "../../images/svgs/master-card-modren.svg";
import squareCardModren from "../../images/pngs/square-card-modren.png";

const Footer = () => {
  const [email, setEmail] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);

  const subscribeUser = async () => {
    setLoading(true);
    try {
      await api.post("/subscriber/create", { email });
      toast("Subscribed successfully", { type: "success" });
      setLoading(false);
    } catch (error: any) {
      toast(error.response?.data?.message || "Failed to subscribe", {
        type: "error",
      });
      setLoading(false);
    }
  };

  return (
    <div className={styles.container}>
      <div className="container">
        <div className={styles.footerLogosWrapper}>
          <Image
            data-aos="fade-right"
            data-aos-duration="500"
            data-aos-once="false"
            className={styles.chauffeurLogo}
            src={chauffeurBlackLogo}
            alt="icon"
          />
          <div
            data-aos="fade-left"
            data-aos-duration="500"
            data-aos-once="false"
            className={styles.cardsWrapper}>
            <Image
              className={styles.cardIcon}
              src={americanExpresModren}
              alt="icon"
            />
            <Image className={styles.cardIcon} src={visaCard} alt="icon" />
            <Image
              className={styles.cardIcon}
              src={masterCardModren}
              alt="icon"
            />
            <div className={styles.squareCardWrapper}>
              <Image
                className={styles.cardIcon}
                src={squareCardModren}
                alt="icon"
              />
            </div>
          </div>
        </div>
        <div className="row d-flex flex-wrap">
          <div className="col-md-3 col-sm-6">
            <div
              data-aos="fade-up"
              data-aos-duration="500"
              data-aos-once="false"
              className={styles.footerHeading}>
              Our Cars
            </div>
            <Link href="/cars">
              <div
                data-aos="fade-up"
                data-aos-duration="500"
                data-aos-once="false"
                className={styles.footerDescription}>
                Mercedes S-Class
              </div>
            </Link>
            <Link href="/cars">
              <div
                data-aos="fade-up"
                data-aos-duration="500"
                data-aos-once="false"
                className={styles.footerDescription}>
                Mercedes V-Class & EQV
              </div>
            </Link>
            <Link href="/cars">
              <div
                data-aos="fade-up"
                data-aos-duration="500"
                data-aos-once="false"
                className={styles.footerDescription}>
                Mercedes E-Class
              </div>
            </Link>

            {/* <Link href="/cars">
              <div className={styles.footerDescription}>Range Rover Hybrid</div>
            </Link> */}
            {/* <Link href="/cars">
              <div className={styles.footerDescription}>BMW i7</div>
            </Link>
            <Link href="/cars">
              <div className={styles.footerDescription}>Bentley Mulsanne</div>
            </Link>
            <Link href="/cars">
              <div className={styles.footerDescription}>
                Rolls-Royce Phantom
              </div>
            </Link> */}
          </div>
          <div className="col-md-2 col-sm-6">
            <div
              data-aos="fade-up"
              data-aos-duration="500"
              data-aos-once="false"
              className={styles.footerHeading}>
              Services
            </div>
            <Link href="/">
              <div
                data-aos="fade-up"
                data-aos-duration="500"
                data-aos-once="false"
                className={styles.footerDescription}>
                By The Hour
              </div>
            </Link>
            <Link href="/">
              <div
                data-aos="fade-up"
                data-aos-duration="500"
                data-aos-once="false"
                className={styles.footerDescription}>
                One way
              </div>
            </Link>
            <Link href="/airports">
              <div
                data-aos="fade-up"
                data-aos-duration="500"
                data-aos-once="false"
                className={styles.footerDescription}>
                Airport
              </div>
            </Link>
            <Link href="/business">
              <div
                data-aos="fade-up"
                data-aos-duration="500"
                data-aos-once="false"
                className={styles.footerDescription}>
                Business
              </div>
            </Link>
            <Link href="/events">
              <div
                data-aos="fade-up"
                data-aos-duration="500"
                data-aos-once="false"
                className={styles.footerDescription}>
                Events
              </div>
            </Link>
            <Link href="/business">
              <div
                data-aos="fade-up"
                data-aos-duration="500"
                data-aos-once="false"
                className={styles.footerDescription}>
                Tours
              </div>
            </Link>
            <Link href="/events">
              <div
                data-aos="fade-up"
                data-aos-duration="500"
                data-aos-once="false"
                className={styles.footerDescription}>
                Weddings
              </div>
            </Link>
          </div>
          <div className="col-md-3 col-sm-6">
            <div
              data-aos="fade-up"
              data-aos-duration="500"
              data-aos-once="false"
              className={styles.footerHeading}>
              Our Company
            </div>
            <Link href="/">
              <div
                data-aos="fade-up"
                data-aos-duration="500"
                data-aos-once="false"
                className={styles.footerDescription}>
                Home
              </div>
            </Link>
            <Link href="/cars">
              <div
                data-aos="fade-up"
                data-aos-duration="500"
                data-aos-once="false"
                className={styles.footerDescription}>
                Cars
              </div>
            </Link>
            <Link href="/airports">
              <div
                data-aos="fade-up"
                data-aos-duration="500"
                data-aos-once="false"
                className={styles.footerDescription}>
                Airport Transfers
              </div>
            </Link>
            <Link href="/business">
              <div
                data-aos="fade-up"
                data-aos-duration="500"
                data-aos-once="false"
                className={styles.footerDescription}>
                Business
              </div>
            </Link>
            <Link href="/events">
              <div
                data-aos="fade-up"
                data-aos-duration="500"
                data-aos-once="false"
                className={styles.footerDescription}>
                Events
              </div>
            </Link>
            <Link href="/about-us">
              <div
                data-aos="fade-up"
                data-aos-duration="500"
                data-aos-once="false"
                className={styles.footerDescription}>
                About Us
              </div>
            </Link>
            <Link href="/cars">
              <div
                data-aos="fade-up"
                data-aos-duration="500"
                data-aos-once="false"
                className={styles.footerDescription}>
                Prices
              </div>
            </Link>
            <Link href="/book-now">
              <div
                data-aos="fade-up"
                data-aos-duration="500"
                data-aos-once="false"
                className={styles.footerDescription}>
                Book Now
              </div>
            </Link>
          </div>
          <div className="col-md-4 col-sm-6">
            <div
              data-aos="fade-up"
              data-aos-duration="500"
              data-aos-once="false"
              className={styles.footerHeading}>
              Join Us Now!
            </div>
            <input
              data-aos="fade-up"
              data-aos-duration="500"
              data-aos-once="false"
              type="email"
              required
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              className={styles.footerInput}
              placeholder="Enter your email"
            />
            <div
              data-aos="fade-up"
              data-aos-duration="500"
              data-aos-once="false"
              className={styles.footerBtnWrapper}>
              <GenericButton
                title="Subscribe"
                onClick={subscribeUser}
                loading={loading}
              />
            </div>
            <div>
              {/* <Link href="#">
                <Image
                  className={styles.socialIcon}
                  src={facebookIcon}
                  alt="icon"
                />
              </Link> */}
              {/* <Link href="#">
                <Image
                  className={styles.socialIcon}
                  src={twitterIcon}
                  alt="icon"
                />
              </Link> */}
              <Link
                data-aos="fade-up"
                data-aos-duration="500"
                data-aos-once="false"
                href="https://www.instagram.com/yourlondonchauffeur/"
                target="_blank">
                <Image
                  className={styles.socialIcon}
                  src={instgramIcon}
                  alt="icon"
                />
              </Link>
              <Link
                data-aos="fade-up"
                data-aos-duration="500"
                data-aos-once="false"
                href="https://linkedin.com/company/yourlondonchauffeur"
                target="_blank">
                <Image
                  className={styles.socialIcon}
                  src={linkedinIcon}
                  alt="icon"
                />
              </Link>
            </div>
          </div>
      </div>
        </div>
        <div className={styles.footerBorder}/>
            <div className={styles.footerCopyright}>
              Copyright © 2023 Your London Chauffeur. All rights reserved.
            </div>
    </div>
  );
};

export default Footer;
