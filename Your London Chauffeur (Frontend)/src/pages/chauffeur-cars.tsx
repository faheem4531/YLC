import React, { useRef, useEffect, useState } from "react";
import { toast } from "react-toastify";
import Image from "next/image";
import { useRouter } from "next/router";
import Head from "next/head";
import { NextSeo } from "next-seo";

import HeroSectionForm from "@/components/heroSectionForm";
import GetAQuoteCard from "@/components/getAQuoteCard";
import ReviewCard from "@/components/reviewCard";
import CarCategoriesSlider from "@/components/carCategoriesSlider";
import api from "../services/api";

import styles from "@/styles/Cars.module.css";
import arrowBlackIcon from "../images/svgs/arrow-black-icon.svg";

const Home = () => {
  const reviewCardWrapperRef = useRef<HTMLDivElement>(null);

  const handleLeftArrowClick = () => {
    if (reviewCardWrapperRef.current) {
      reviewCardWrapperRef.current.scrollLeft -= 750;
    }
  };

  const handleRightArrowClick = () => {
    if (reviewCardWrapperRef.current) {
      reviewCardWrapperRef.current.scrollLeft += 750;
    }
  };

  const [index, setIndex] = useState(0);
  const [text, setText] = useState("S-Class");
  const router = useRouter();

  const [cars, setCars] = useState([]);
  const [loading, setLoading] = useState<boolean>(true);

  const getCars = async () => {
    setLoading(true);
    try {
      const res = await api.get("car/getall");
      setCars(res.data);
      setLoading(false);
    } catch (error: any) {
      toast(error.response?.data?.message || "Failed to get cars", {
        type: "error",
      });
      setLoading(false);
    }
  };

  useEffect(() => {
    getCars();
  }, []);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setIndex((prevIndex) => {
        const nextIndex = (prevIndex + 1) % 3;
        setText(strings[nextIndex]);
        return nextIndex;
      });
    }, 1000);

    return () => clearInterval(intervalId);
  });

  const strings = ["S-Class", "E-Class", "V-Class"];

  return (
    <div className={styles.Container}>
      <Head>
        <title>
          Chauffeur Car Hire - Luxury Services | Your London Chauffeur
        </title>
        {/* Open Grapg tags  */}
        <meta
          property="og:title"
          content="Chauffeur Car Hire - Luxury Services | Your London Chauffeur"
        />
        <meta
          property="og:description"
          content="Experience luxury chauffeur car hire services near you. Enjoy the comfort and style of our chauffeur-driven cars in London. Book now for an exceptional ride!"
        />
        <meta
          property="og:image"
          content="https://yourlondonchauffeur.co.uk/chauffeur-cars/images/og-image.jpg"
        />
        <meta
          property="og:url"
          content="https://yourlondonchauffeur.co.uk/chauffeur-cars"
        />
        <meta name="robots" content="index, follow" />
        <meta property="og:type" content="website" />
        <link
          rel="canonical"
          href="https://yourlondonchauffeur.co.uk/chauffeur-cars"
        />
        <NextSeo
          title="Chauffeur Car Hire - Luxury Services | Your London Chauffeur"
          description="Experience luxury chauffeur car hire services near you. Enjoy the comfort and style of our chauffeur-driven cars in London. Book now for an exceptional ride!"
          canonical="https://yourlondonchauffeur.co.uk/chauffeur-cars"
        />
      </Head>
      {/* Section # 1 */}
      <div className={styles.heroSection}>
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              {/* <div data-aos="fade-right"
            data-aos-duration="500"
            data-aos-once="false" className={styles.heroHeading}>{text}</div> */}
              <div
                data-aos="fade-right"
                data-aos-duration="500"
                data-aos-once="false"
                className={styles.heroHeading}>
                Our Cars
              </div>
              <div
                data-aos="fade-right"
                data-aos-duration="500"
                data-aos-once="false"
                className={styles.heroMercedesPara}>
                BUSINESS CARS CHAUFFEUR-DRIVEN HIRE
              </div>
              <div
                data-aos="fade-right"
                data-aos-duration="500"
                data-aos-once="false"
                className={styles.heroParagraph}>
                All of our vehicles are equipped with WiFi, chargers for your
                smartphones and tablets as well as complimentary water bottles
                with every journey with us
                <h1 className={`d-inline ${styles.heroParagraph}`}> - Chauffeur Car Hire.</h1>

              </div>
            </div>
            <div
              data-aos="fade-left"
              data-aos-duration="500"
              data-aos-once="false"
              className="col-lg-6 d-flex justify-content-center">
              <HeroSectionForm />
            </div>
          </div>
        </div>
      </div>
      {/* Section # 1 */}

      {/* Section # 2 */}
      <CarCategoriesSlider cars={cars} />
      {/* Section # 2 */}

      {/* Section # 3 */}
      <video width="100%" height="100%" autoPlay loop playsInline muted>
        <source src="/videos/car-video.mp4" type="video/mp4" />
      </video>
      {/* Section # 3 */}

      {/* Section # 4 */}
      <div className={styles.reviewSection}>
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div
                data-aos="fade-up"
                data-aos-duration="500"
                data-aos-once="false"
                className={styles.ourRideHeading}>
                We’re as good as they say we are
              </div>
              <div
                data-aos="fade-up"
                data-aos-duration="500"
                data-aos-once="false"
                className={styles.borderBottom}
              />
              <div
                ref={reviewCardWrapperRef}
                className={styles.reviewCardWrapper}>
                <ReviewCard
                  reviwerName="James McDonaugh"
                  description="I would recommend this company to anyone needing a first rate service.
                  You will always have someone at the end of the line for you if you need to make further
                  arrangements or late changes. "
                />
                <ReviewCard
                  reviwerName="Managing Director"
                  description="Many thanks for helping to make our trip to Twickenham for the rugby a most 
                  enjoyable experience.It was a pleasure being with you, your assistance was greatly appreciated by us all"
                />
                <ReviewCard
                  reviwerName="Stella"
                  description="Just to say a massive thank you for Saturday. Sorry we didn't use you as much as we had 
                  planned to but it was great having you there, the service we got from both of you was excellent."
                />
                <ReviewCard
                  reviwerName="Epo Engenharia"
                  description="Thank you for your attention to detail and excellent professional service while we were in London"
                />
                <ReviewCard
                  reviwerName="Kay & Bill Ashton"
                  description="Thank you so much for providing such a perfect service on the day"
                />
                <ReviewCard
                  reviwerName="Jenny"
                  description="Thank you for the attention showed to us for my son and daughter- in-law's wedding.
Little touches like having water and mints available were very welcome. The BMW was a perfect choice.
I certainly will recommend you to our friends. Thank you."
                />
              </div>
              <div
                data-aos="fade-up"
                data-aos-duration="500"
                data-aos-once="false"
                className={styles.arrowsWrapper}>
                <Image
                  onClick={handleLeftArrowClick}
                  src={arrowBlackIcon}
                  alt="Chauffeur Car Hire"
                />
                <Image
                  onClick={handleRightArrowClick}
                  className={styles.arrowIcon}
                  src={arrowBlackIcon}
                  alt="Chauffeur Car Hire"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Section # 4 */}

      {/* Section # 5 */}
      <GetAQuoteCard />
      {/* Section # 5 */}
    </div>
  );
};

export default Home;
