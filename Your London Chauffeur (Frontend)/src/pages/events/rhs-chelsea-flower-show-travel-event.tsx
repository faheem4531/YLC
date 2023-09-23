import React from "react";
import GenericEventsLayout from "@/components/genericEventsLayout";
import heroImg from "../../images/events/rhs-hero.png";
import sectionImg from "../../images/events/rhsImg.png";

const RhsChelseaFlowerShowTravelEvent = () => {
  const sections = [
    {
      secionsImage: sectionImg,
      sectionsHeading:
        "The Great Spring Show",
      sectionsDescription:
        ["Originally christened the Great Spring Show, this horticultural marvel, presented by the Royal Horticultural Society (RHS), has graced the verdant expanses of the Royal Hospital Chelsea since 1912. Today, situated in the heart of Chelsea, London SW3, it blooms as the world's most celebrated flower and landscape garden showcase. Beyond its botanical wonders, the show is a magnet for the British Royal Family and enthusiasts from every continent.", "The Chelsea Flower Show is a sensory spectacle, from the avant-garde gardens crafted by eminent designers to the resplendent Floral Marquee taking centre stage. Beyond these, the show unveils intimate wonders, including meticulously designed Artisan and Urban Gardens. With YLC, immerse yourself in this botanical ballet in unmatched style and comfort."]
    },
  ]
  return (
    <div>
      <GenericEventsLayout
        heroHeading={"Rhs Chelsea Flower Show Travel"}
        heroDescription={
          "In 2018, YLC had the honour of chauffeuring 50 lucky competition winners and their companions to the illustrious Chelsea Flower Show. These winners, jetting in from corners of the globe, were greeted with YLC's signature touch, ensuring seamless transfers from various London airports and a luxurious stay over their 3-day vacation in the posh Knightsbridge."
        }
        heroImg={heroImg}
        sections={sections}
      />
    </div>
  );
};

export default RhsChelseaFlowerShowTravelEvent;
