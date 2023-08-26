import React from "react";
import GenericAirportLayout from "@/components/genericAirportLayout";
import heroImg from "../../images/airports/manchester-airport.png";
import yourDriver from "../../images/airports/manchester-airport-sec-2.png";

const manchesterAirport = () => {
  return (
    <div>
      <GenericAirportLayout
        heroHeading={"Manchester Airport Transfer"}
        heroDescription={
          "You will be met by one of our uniformed professional chauffeurs who is experienced in the protocol of VIP Private Jet transfers. After a long flight it is essential for you to travel in comfort. Why not take advantage of the complimentary mineral water and mints while you are transferred to your onward destination in comfort and safety. You can rest assured your chauffeur will be smart, discreet and have a good knowledge of London. Sit back relax and enjoy your journey."
        }
        heroImg={heroImg}
        secion2Img={yourDriver}
        section2Heading={"Manchester Airport Transfer"}
        section2Description={
          "You will be met by one of our uniformed professional chauffeurs who will be waiting to welcome you and holding your nameboard when you step out of the arrival’s hall. You can expect us to be always discreet. If you prefer, we can arrange a meeting point and phone or text you when you are in the baggage hall."
        }
      />
    </div>
  );
};

export default manchesterAirport;
