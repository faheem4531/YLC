import React from "react";
import GenericAirportLayout from "@/components/genericAirportLayout";
import heroImg from "../../images/airports/luton-airport.png";
import yourDriver from "../../images/airports/luton-airport-sec-2.png";

const lutonAirport = () => {
  return (
    <div>
      <GenericAirportLayout
        heroHeading={"London Luton Airport"}
        heroDescription={
          "When you choose chauffeured transfers from Luton Airport with us, we understand the essence of punctuality for our esteemed clients. As you emerge from the arrivals hall, a sharply dressed chauffeur from our team will greet you, displaying a sign bearing your name."
        }
        heroImg={heroImg}
        secion2Img={yourDriver}
        section2Heading={"Relax in Style: London's Discreet Chauffeur Service"}
        section2Description={
          "We're committed to providing discreet service at all times. If it suits you better, we can determine a designated rendezvous spot and contact you as you collect your baggage. Trust your chauffeur's impeccable presentation, discretion, and familiarity with London and its nearby regions. Just settle in and relish the comfort as we guide you to your destination."
        }
      />
    </div>
  );
};

export default lutonAirport;
