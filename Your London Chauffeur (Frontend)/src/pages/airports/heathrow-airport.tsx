import React from "react";
import GenericAirportLayout from "@/components/genericAirportLayout";
import heroImg from "../../images/airports/hethro-Hero-Section.png";
import yourDriver from "../../images/airports/hethrowImg.png";

const heathrowAirport = () => {
  return (
    <div>
      <GenericAirportLayout
        heroHeading={"Heathrow Airport"}
        heroDescription={
          "For luxury chauffeur transfers from Heathrow Airport, we recognize punctuality is important to our clients. As you emerge from the arrivals hall, a professionally dressed chauffeur from our team will greet you, displaying a sign with your name."
        }
        heroImg={heroImg}
        secion2Img={yourDriver}
        section2Heading={"Private and Convenient: Your Arrival Refined"}
        section2Description={
          " Rest assured; we prioritize discretion in our services. If you'd like, we can establish a designated meet-up location and contact you via call or message while you're at the baggage claim."
        }
      />
    </div>
  );
};

export default heathrowAirport;
