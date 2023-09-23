import React from "react";
import GenericEventsLayout from "@/components/genericEventsLayout";
import heroImg from "../../images/events/the-open-championship.png";

const TheOpenChampionship = () => {
  const sections = [
    {
         sectionsDescription:
        ["Watch in anticipation as the world's golfing elite vie for the coveted Claret Jug, a symbol of mastery and tradition.",
    "Delve deeper into the legacy of The Open Championship. Often simply called \"The Open\" or the \"British Open\", it stands as the world's most venerable golf tournament, steeped in history and prestige. Since its inception in 1860 at Prestwick Golf Club, Scotland, this illustrious event has journeyed through time, gracing the lush greens of select coastal golf courses across the United Kingdom. With YLC, arrive at this historic spectacle in comfort and unparalleled style."],
    },
  ]
  return (
    <div>
      <GenericEventsLayout
        heroHeading={"The Open Championship"}
        heroDescription={
          "Experience the grandeur of the Open Championship with YLC's luxurious fleet of chauffeur-driven vehicles. Elevate your journey with our award-winning service, pairing you with the pinnacle of chauffeuring excellence and a fleet that boasts the crème de la crème of automotive luxury—think Bentley, Mercedes, Range Rover, and Rolls-Royce."
        }
        heroImg={heroImg}
        sections={sections}
      />
    </div>
  );
};

export default TheOpenChampionship;
