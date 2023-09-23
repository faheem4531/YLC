import React from "react";
import GenericEventsLayout from "@/components/genericEventsLayout";
import heroImg from "../../images/events/Introducing-Goodwood-hero.png";
import sectionImg from "../../images/events/Introducing-Goodwood.png";

const IntroducingGoodwoodEvent = () => {
  const sections = [
    {
      sectionsHeading:
        "Goodwood: Where Thrills, Luxury, and Elegance Converge",
      sectionsDescription:
        ["You will be met by one of our uniformed professional chauffeurs who will be waiting to welcome you and holding your nameboard when you step out of the arrival’s hall. You can expect us to be always discreet. If you prefer, we can arrange a meeting point and phone or text you when you are in the baggage hall.", "Every year, Goodwood's lush expanses come alive with engines' roar during the Festival of Speed. Meanwhile, the historic Goodwood Circuit transports motorsport enthusiasts back in time with the annual Goodwood Revival. But the thrills don't stop on the ground; the estate's airfield offers soaring adventures with its esteemed Flying School.", "Goodwood Racecourse gallops into the spotlight for equestrian enthusiasts, most notably with the “Glorious Goodwood” races, among other spectacular race meetings. Golf enthusiasts can tee off at one of the two pristine golf courses, while cricket lovers will find their sanctuary at the Goodwood Cricket Club's pitch.", "But Goodwood is more than just adrenaline; it's a haven of luxury. From the sumptuous hotel to the organic farm offering nature's best bounty, every corner whispers indulgence. And crowning the estate is the prestigious headquarters of Rolls-Royce Motor Cars.", "With YLC, journey into the heart of Goodwood's grandeur, ensuring every moment is as remarkable as your destination."]
    },
    {
      secionsImage: sectionImg,
      sectionsHeading:
        "GOODWOOD HISTORY",
      sectionsDescription:
        ["Steeped in a rich tapestry of history, the Hillclimb course at Goodwood House first came to life in 1936. The adjacent racing circuit, which we now celebrate, has wartime origins as the perimeter track of RAF Westhampnett airfield, built during the tumultuous days of World War II. The roar of engines and the thrill of speed debuted on this track on 18 September 1948, courtesy of the Junior Car Club and under the approving gaze of the Duke of Richmond and Gordon.", "This iconic circuit witnessed the racing genesis of legends like Mike Hawthorn and Graham Hill. Its hallowed grounds hold the bittersweet memory of where Stirling Moss's illustrious international career met an untimely end after a fateful accident during the Glover Trophy on 23 April.", "Embark on a nostalgic journey to this racing shrine with YLC, and relive the moments that shaped motorsport history."]
    },
  ]
  return (
    <div>
      <GenericEventsLayout
        heroHeading={"Introducing Goodwood"}
        heroDescription={
          "Nestled within the enchanting grounds of Goodwood House lies an epicentre of exhilarating events and luxury experiences."
        }
        heroImg={heroImg}
        sections={sections}
      />
    </div>
  );
};

export default IntroducingGoodwoodEvent;
