import styles from "@/styles/AboutUs.module.css";
import GetAQuoteCard from "@/components/getAQuoteCard";

import Image from "next/image";
import chauffeurlogo from "../images/svgs/chauffeur-footer-logo.svg";
import dImage from "../images/svgs/art-partner.svg";
import funeralImage from "../images/svgs/funeral-img.svg";
import funeralBlackLogo from "../images/svgs/hips.svg";
import newMarketImage from "../images/svgs/Signa.svg";
import crownImage from "../images/svgs/Nomura.svg";
import aIntreeImage from "../images/svgs/goldMan.svg";
import epSonImage from "../images/svgs/wkw.svg";
import newBuryImage from "../images/svgs/42.svg";
import chauffeurBlackLogo from "../images/svgs/chauffeur-black-logo.svg";


const AboutUs = () => {
  return (
    <div className={styles.Container}>
      {/* Section # 1 */}
      <div className={styles.heroSection}>
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div data-aos="fade-right"
            data-aos-duration="500"
            data-aos-once="false" className={styles.heroHeading}>About Us</div>
              <div data-aos="fade-right"
            data-aos-duration="500"
            data-aos-once="false" className={styles.heroParagraph}>
                Located in East London, with easy access to Docklands, City of
                London, Canary Wharf, Central London, Greater London, Heathrow
                Airport, London City Airport and Stansted Airport, we strive to
                make your experience with us one to remember.
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Section # 1 */}

      {/* Section # 2 */}
      <div className={styles.ourStorySection}>
        <div className="container">
          <div className="row">
            <div className="col-12 d-flex flex-column align-items-center">
              <div data-aos="fade-up"
            data-aos-duration="500"
            data-aos-once="false" className={styles.ourStoryHeading}>Our Story</div>
              <div data-aos="fade-up"
            data-aos-duration="500"
            data-aos-once="false" className={styles.borderBottom} />
              <Image
              data-aos="fade-up"
              data-aos-duration="500"
              data-aos-once="false"
                className={styles.chauffeurImg}
                src={chauffeurBlackLogo}
                alt="img"
              />
              <div data-aos="fade-up"
            data-aos-duration="500"
            data-aos-once="false" className={styles.ourStoryDescription}>
                Established in 2008, our uniformed London chauffeurs are
                professional, reliable, friendly and discreet, with an excellent
                knowledge of London. Vehicles are always immaculate inside and
                out. In line with UK law a no smoking policy is maintained in all
                our vehicles. Private chauffeur driven car hire in Central London,
                City of London and Greater London is our business.
              </div>
              <div data-aos="fade-up"
            data-aos-duration="500"
            data-aos-once="false" className={styles.ourStoryDescription}>
                 Located in East
                London, with easy access to Docklands, City of London, Canary
                Wharf, Central London, Greater London, Heathrow Airport, London
                City Airport and Stansted Airport, we strive to make your
                experience with us one to remember.
              </div>
              <div data-aos="fade-up"
            data-aos-duration="500"
            data-aos-once="false" className={styles.ourStoryDescription}>
                Understanding clients want to relax or conduct private business,
                our chauffeurs will always try to gauge clients&apos; requirements. You
                can rest assured your privacy will be respected and discretion
                always be observed. We understand the level of service required
                for you and your clients&apos; is very important. Our chauffeurs
                understand the nature of work that is done within roadshow and we
                ensure that conversations are treated in strict confidence and
                rest assured what is mentioned within the journey remains
                confidential and private.
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Section # 2 */}

      {/* Section # 3 */}
      <div className={styles.ourClientSection}>
        <div className="container">
          <div className="row">
            <div className="col-12 d-flex flex-column align-items-center">
              <div data-aos="fade-up"
            data-aos-duration="500"
            data-aos-once="false" className={styles.ourStoryHeading}>Our Clients</div>
              <div data-aos="fade-up"
            data-aos-duration="500"
            data-aos-once="false" className={styles.borderBottom} />
              <div className={styles.ourClientsImages}>
                <Image data-aos="fade-left"
            data-aos-duration="500"
            data-aos-once="false" className={styles.clientsBrandLogo} src={dImage} alt="img" />
                <Image data-aos="fade-left"
            data-aos-duration="500"
            data-aos-once="false" className={styles.clientsBrandLogo} src={funeralBlackLogo} alt="img" />
                <Image data-aos="fade-left"
            data-aos-duration="500"
            data-aos-once="false" className={styles.clientsBrandLogo} src={newMarketImage} alt="img" />
                <Image data-aos="fade-left"
            data-aos-duration="500"
            data-aos-once="false" className={styles.clientsBrandLogo} src={crownImage} alt="img" />
                <Image data-aos="fade-left"
            data-aos-duration="500"
            data-aos-once="false" className={styles.clientsBrandLogo} src={aIntreeImage} alt="img" />
                <Image data-aos="fade-left"
            data-aos-duration="500"
            data-aos-once="false" className={styles.clientsBrandLogo} src={epSonImage} alt="img" />
                <Image data-aos="fade-left"
            data-aos-duration="500"
            data-aos-once="false" className={styles.clientsBrandLogo} src={newBuryImage} alt="img" />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Section # 3 */}

      {/* Section # 4 */}
      <GetAQuoteCard />
      {/* Section # 4 */}
    </div>
  );
};

export default AboutUs;
