import React from "react";
import GenericAirportLayout from "@/components/genericAirportLayout";
import heroImg from "../../images/airports/biggin-hill- airport.png";
import yourDriver from "../../images/airports/biggin-hill- airport-sec-2.png";

const BigginHillAirport = () => {
  return (
    <div>
      <GenericAirportLayout
        heroHeading={"Biggin Hill Airport "}
        heroDescription={
          "Your London Chauffeur provides luxury services, making your travel stress-free. With experienced, professional chauffeurs, you can be reassured that your chauffeur will be waiting for you on arrival, ready to assist you with luggage and nay other needs you may have."
        }
        heroImg={heroImg}
        secion2Img={yourDriver}
        section2Heading={"Premium Travel Services for a Seamless Journey"}
        section2Description={
          "Your London Chauffeur offers premium travel services to ensure a hassle-free journey. Our seasoned and skilled chauffeurs will be there upon your arrival, eager to help with your bags and address any other requirements you might have."
        }
      />
    </div>
  );
};

export default BigginHillAirport;
