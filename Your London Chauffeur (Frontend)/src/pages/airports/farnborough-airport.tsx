import React from "react";
import GenericAirportLayout from "@/components/genericAirportLayout";
import heroImg from "../../images/airports/farnborough- airport.png";
import yourDriver from "../../images/airports/farnborough-airport-sec-2.png";

const farnboroughAirport = () => {
  return (
    <div>
      <GenericAirportLayout
        heroHeading={"Farnborough Airport"}
        heroDescription={
          "When booking chauffeured transfers from Farnborough Airport, we recognize how crucial being on time is for you. One of our professionally attired chauffeurs, well-versed in VIP Private Jet transfer etiquette, will be there to greet you."
        }
        heroImg={heroImg}
        secion2Img={yourDriver}
        section2Heading={"Farnborough Airport"}
        section2Description={
          "After your journey, stepping into a comforting ride is paramount. So, enjoy the complimentary mineral water and mints as you cruise comfortably and securely to your next stop. Trust that your chauffeur embodies sophistication, discretion, and an intimate understanding of London. Lean back, unwind, and relish the ride."
        }
      />
    </div>
  );
};

export default farnboroughAirport;
