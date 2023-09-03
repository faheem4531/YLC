import React from "react";
import GenericAirportLayout from "@/components/genericAirportLayout";
import heroImg from "../../images/airports/stansted-airport.png";
import yourDriver from "../../images/airports/stansted-airport-sec-2.png";

const stanstedAirport = () => {
  return (
    <div>
      <GenericAirportLayout
        heroHeading={"London Stansted Airport "}
        heroDescription={
          "When you opt for luxury chauffeured transfers from Stansted Airport, we understand your emphasis on timeliness. As you make your way out of the arrivals hall, one of our smartly dressed chauffeurs will be there to greet you, carrying a sign with your name"
        }
        heroImg={heroImg}
        secion2Img={yourDriver}
        section2Heading={"Your Privacy, Our Priority: Discreet Service Guaranteed"}
        section2Description={
          "We uphold the utmost discretion throughout the service. If it's more convenient for you, we'll set up a designated meeting area and notify you by call or message as you handle your luggage."
        }
      />
    </div>
  );
};

export default stanstedAirport;
