import React from "react";
import GenericEventsLayout from "@/components/genericEventsLayout";
import heroImg from "../../images/events/henley-royal-regatta-hero.png";
import sectionImg from "../../images/events/the-royal-regatta.png";

const HenleyRoyalRegattaChauffeurTravel= () => {
  const sections = [
    {
      sectionsDescription:
        ["Our award-winning service isn't just about getting you there; it's about making every moment count. With our bespoke by-the-hour pricing, you'll enjoy unmatched flexibility, ensuring you savour every row, every cheer, and champagne at the Regatta.",
        "Every year, we meticulously curate transport for over 200 guests daily during the corporate hospitality events at Henley. From the heart of London to the banks of the Thames in Henley, our fleet of 2 ultra-luxurious executive coaches and 15 opulent VIP mini-coaches come alive, echoing the elegance of the Regatta itself.",
        "The YLC promise goes beyond the vehicles. Our handpicked elite chauffeurs seamlessly merge safety, comfort, and panache. They're not just drivers but custodians of an experience, steering the world’s premier chauffeur-driven vehicles, ensuring your journey to the Henley Royal Regatta is as memorable as the event itself. Experience the regal with YLC."],
    },
    {
      secionsImage: sectionImg,
      sectionsHeading:
        "The \"Royal\" Regatta",
      sectionsDescription:
        ["In 1851, the Henley Regatta received a touch of royalty with HRH Prince Albert's esteemed patronage, elevating its stature to the \"Henley Royal Regatta\". Nestled along Henley Reach, a mesmerizing mile-long naturally straight stretch of the River Thames, this regatta showcases intense head-to-head boat races, with each bout featuring just two competing vessels.",
        "From Wednesday to the first weekend of August, Henley transforms into the dazzling epicentre of the English social scene for five spectacular days. With the regatta's timeless elegance, attendees are gracefully transported to an era of tradition, evident in the dress codes meticulously upheld within its reserved enclosures.",
        "Mark your calendars, as the Henley Royal Regatta is a coveted jewel that follows the splendid 'Glorious' Goodwood and Cowes Week. Dive into this social spectacle with YLC and witness tradition at its finest."]
    },
  ]
  return (
    <div>
      <GenericEventsLayout
        heroHeading={"Henley Royal Regatta Chauffeur Travel"}
        heroDescription={
          "Step into the glamorous world of the Henley Royal Regatta, a radiant beacon in the summer sports and social calendars. Since 2005, YLC has been the go-to luxury travel companion, whisking guests to this iconic event in unparalleled style."
        }
        heroImg={heroImg}
        sections={sections}
      />
    </div>
  );
};

export default HenleyRoyalRegattaChauffeurTravel;
