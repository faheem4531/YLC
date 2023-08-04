import styles from "./ExpertChauffeurSection.module.css";
import ExprtChaufffeurCard from "../expertChauffeurCard";

import Image from "next/image";
import firstChauffeur from "../../images/pngs/first-chauffeur-img.png";
import secondChauffeur from "../../images/pngs/second-chauffeur-img.png";
import thirdChauffeur from "../../images/pngs/third-chauffeur-img.png";
import fourthChauffeur from "../../images/pngs/fourth-chauffeur-img.png";

const ExpertChauffeurSection = () => {
  return(
    <div className={styles.expertChauffeurContainer}>
    <div className="container">
      <div className="row">
        <div className="col-12">
          <div className={styles.expertChauffeurHeading}>Our Expert Chauffeurs</div>
          <div className={styles.borderBottom} />
          <div className={styles.expertChauffeurPara}>
            All of our chauffeurs are trained and experienced in this
            industry having been in it for at least 5 years. They seek to be
            on time, provide a luxury service and cater to all the needs of
            their clients.
          </div>
        </div>
      </div>
    </div>
    <div className={styles.chauffeurCardsContainer}>
      <ExprtChaufffeurCard
        image={firstChauffeur}
        chauffeurName="John Doe"
      />
      <ExprtChaufffeurCard
        image={secondChauffeur}
        chauffeurName="John Doe"
      />
      <ExprtChaufffeurCard
        image={thirdChauffeur}
        chauffeurName="John Doe"
      />
      <ExprtChaufffeurCard
        image={fourthChauffeur}
        chauffeurName="John Doe"
      />
      <ExprtChaufffeurCard
        image={firstChauffeur}
        chauffeurName="John Doe"
      />
    </div>
  </div>
  );
};

export default ExpertChauffeurSection;