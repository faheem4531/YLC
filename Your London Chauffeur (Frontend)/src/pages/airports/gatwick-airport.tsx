import React from "react";
import GenericAirportLayout from "@/components/genericAirportLayout";
import heroImg from "../../images/airports/gatwick-airport.png";
import yourDriver from "../../images/airports/gatwick-airport-sec-2.png";

const gatwickAirport = () => {
  return (
    <div>
      <GenericAirportLayout
        heroHeading={"London Gatwick Airport"}
        heroDescription={
          "Located just 6 miles from London's heart, London City Airport is ideal for business travellers heading to Canary Wharf, the City of London, and the central city area."
        }
        heroImg={heroImg}
        secion2Img={yourDriver}
        section2Heading={"Seamless Transfers: London City Airport's Luxury Chauffeur Services"}
        section2Description={
          "When you book a luxury chauffeur transfer from London City Airport with us, know that timeliness is our top priority for our valued clients. As you enter the arrivals hall, a professionally dressed chauffeur from our team will be ready to greet you, showcasing a sign with your name. We always ensure discretion in our services. Should it be more convenient for you, we can set a specific meet-up spot and notify you by call or message as you navigate the baggage claim."
        }
      />
    </div>
  );
};

export default gatwickAirport;
