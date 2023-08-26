import React from "react";
import GenericAirportLayout from "@/components/genericAirportLayout";
import heroImg from "../../images/airports/battersea-airport.png";
import yourDriver from "../../images/airports/battersea-airport.png";

const batterseaHeliport = () => {
  return (
    <div>
      <GenericAirportLayout
        heroHeading={"Battersea Heliport"}
        heroDescription={
          "Your London Chauffeur provides luxury chauffeur driven cars for stress-free heliport transfers. With experienced chauffeurs, you can be reassured that your chauffeur will be waiting for you on arrival, ready to assist you with luggage and any other needs you may have. "
        }
        heroImg={heroImg}
        secion2Img={yourDriver}
        section2Heading={"Battersea Heliport"}
        section2Description={
          "Your London Chauffeur provides luxury chauffeur driven cars for stress-free heliport transfers. With experienced chauffeurs, you can be reassured that your chauffeur will be waiting for you on arrival, ready to assist you with luggage and any other needs you may have. "
        }
      />
    </div>
  );
};

export default batterseaHeliport;
