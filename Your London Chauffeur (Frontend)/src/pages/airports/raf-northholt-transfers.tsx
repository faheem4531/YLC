import React from "react";
import GenericAirportLayout from "@/components/genericAirportLayout";
import heroImg from "../../images/airports/raf-northholt-airport.png";
import yourDriver from "../../images/airports/raf northholt- airpor-sec-2t.png";

const RafNorthholtTransfers = () => {
  return (
    <div>
      <GenericAirportLayout
        heroHeading={"Raf Northholt Transfers"}
        heroDescription={
          "We understand your emphasis on promptness for luxury chauffeured services from RAF Northolt Airport. As you disembark, one of our professionally attired chauffeurs, adept in the nuances of Private Jet transfers, will greet you."
        }
        heroImg={heroImg}
        secion2Img={yourDriver}
        section2Heading={"Relax and Ride: A Tailored Journey with Added Comforts"}
        section2Description={
          "Enhance your ride by enjoying our courtesy mints, newspaper, and bottled water. Be confident in knowing your chauffeur is stylish and discreet and well-informed about London and its environs. Just settle in, unwind, and savor the comfortable ride to your next stop."
        }
      />
    </div>
  );
};

export default RafNorthholtTransfers;
