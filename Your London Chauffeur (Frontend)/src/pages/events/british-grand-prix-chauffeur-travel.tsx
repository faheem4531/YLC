import React from "react";
import GenericEventsLayout from "@/components/genericEventsLayout";
import heroImg from "../../images/events/British-Grand-Prix-Chauffeur-Travel.png";
import sectionImg1 from "../../images/events/grand-prix-case-study.png";
import sectionImg2 from "../../images/events/f1-chauffeur-travel.png";

const BritishGrandPrixChauffeurTravel = () => {
  const sections = [
    {
    secionsImage: sectionImg1,
      sectionsHeading:
        "Grand Prix Case Study",
      sectionsDescription:
        ["For three consecutive years, we’ve played an integral role in the British Grand Prix experience, curating exclusive chauffeur services for the VIPs of a leading F1 sponsor. Picture this: 40 elite passengers, whisked away from various London airports, smoothly transported to the lap of luxury in F1 paddock hospitality suites. YLC ensures seamless coordination – from an on-site manager at Silverstone overseeing every arrival and departure to pairing our esteemed guests with their dedicated Grand Prix chauffeur post-event. Our fleet of 30 Mercedes S-Class and 30 Mercedes V-Class vehicles each year elevate the event's luxury quotient."],
    },
    {
      secionsImage: sectionImg2,
      sectionsHeading:
        "F1 Chauffeur Travel",
      sectionsDescription:
        ["Award-Winning Luxury and Style","The British Grand Prix isn’t just a race; it's an institution with roots tracing back to the inaugural Formula One championship in 1950. Silverstone, the iconic British motorsport heartland in Towcester, has witnessed countless historic moments. And we at YLC take immense pride in being part of this legacy. From F1 champions and prodigious drivers to the luminaries behind the scenes, our unmatched chauffeur service has had the honour of serving the best in the sport. Expect nothing less than world-class service, sophistication, and discretion when you ride with YLC for the UK’s grandest and swiftest sporting event. Join us for an experience like no other."]
    },
  ]
  return (
    <div>
      <GenericEventsLayout
        heroHeading={"British Grand Prix Chauffeur Travel"}
        heroDescription={
          "Feel the exhilaration of 140,000 fans and the roar of powerful engines echo through Silverstone. Dive into the heart of the action at the 2023 British Grand Prix – in unmatched luxury with YLC."
        }
        heroImg={heroImg}
        sections={sections}
      />
    </div>
  );
};

export default BritishGrandPrixChauffeurTravel;
