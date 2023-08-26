import styles from "@/styles/TermsAndCondition.module.css";
import Image from "next/image";
import chauffeurBlackLogo from "../images/svgs/chauffeur-black-logo.svg";

const TermsAndCondition = () => {
  return (
    <div className={styles.Container}>
      {/* <Head>
        <title>About Our Chauffeur Company Terms And Condition | London's Best</title>
        //  Open Grapg tags  
        <meta
          property="og:title"
          content="About Our Chauffeur Company | London's Best"
        />
        <meta
          property="og:description"
          content="Learn about our premier London chauffeur company. Experience top-notch service with the best chauffeur company near you. Your satisfaction is our priority."
        />
        <meta
          property="og:image"
          content="https://yourlondonchauffeur.co.uk/about-us/images/og-image.jpg"
        />
        <meta
          property="og:url"
          content="https://yourlondonchauffeur.co.uk/about-us/"
        />
        <meta name="robots" content="index, follow" />
        <meta property="og:type" content="website" />
        <link
          rel="canonical"
          href="https://yourlondonchauffeur.co.uk/about-us/"
        />
        <NextSeo
          title="About Our Chauffeur Company | London's Best"
          description="Learn about our premier London chauffeur company. Experience top-notch service with the best chauffeur company near you. Your satisfaction is our priority."
          canonical="https://yourlondonchauffeur.co.uk/about-us/"
        />
      </Head> */}
      {/* Section # 1 */}
      <div className={styles.ourStorySection}>
        <div className="container">
          <div className="row">
            <div className="col-12 d-flex flex-column align-items-center">
              <div
                data-aos="fade-up"
                data-aos-duration="500"
                data-aos-once="false"
                className={styles.ourStoryHeading}>
                TERMS & CONDITIONS
              </div>
              <div
                data-aos="fade-up"
                data-aos-duration="500"
                data-aos-once="false"
                className={styles.borderBottom}
              />
              <Image
                data-aos="fade-up"
                data-aos-duration="500"
                data-aos-once="false"
                className={styles.chauffeurImg}
                src={chauffeurBlackLogo}
                alt=" Chauffeur Company"
              />
              <div
                data-aos="fade-up"
                data-aos-duration="500"
                data-aos-once="false"
                className={styles.ourStoryDescription}>
                The contract for all bookings is between Your London Chauffeur and the client/passenger.
                Your London Chauffeur is responsible for both accepting the booking as well as the provision of the transportation services.
                Any liability in relation to the transportation services belongs to Your London Chauffeur.
              </div>
              <div
                data-aos="fade-up"
                data-aos-duration="500"
                data-aos-once="false"
                className={styles.ourStorySubHeading}>
                General
              </div>
              <div
                data-aos="fade-up"
                data-aos-duration="500"
                data-aos-once="false"
                className={styles.ourStoryDescription}>
                All bookings including return trips must be pre-booked in advance.
                Apart from agreed fixed prices all journey&apos;s are priced to start and finish at Mayfair, London
                All bookings must be made direct including journey details with Your London Chauffeur
                Prices quoted are based on information provided at time of booking All bookings must be confirmed by email
                Full payment by debit or credit card is required for all pre- bookings, unless otherwise agreed.
              </div>
              <div
                data-aos="fade-up"
                data-aos-duration="500"
                data-aos-once="false"
                className={styles.ourStoryDescription}>
                Any hire where a deposit has been paid, the outstanding balance must be paid at least 7 days prior to the collection
                Any person or persons who do not show for a pre-arranged pick up, full payment will be due
                Invoices must be settled on receipt of invoice or a credit recovery company may be engaged
                Bookings may be subject to extra waiting time and parking charges over the price quoted.
              </div>
              <div
                data-aos="fade-up"
                data-aos-duration="500"
                data-aos-once="false"
                className={styles.ourStoryDescription}>
                For any extra payments due, extra mileage over the allowance, extra hours, waiting time or extra journey&apos;s over the agreed hire must be settled immediately on the day by cash
                We reserve the right to keep payment details until the hire is finished
                We reserve the right to deduct any outstanding payments over the price quoted not paid in cash on the day of the hire by the original method of payment made by the client Your London Chauffeur have the right to refuse a booking.
              </div>
              <div
                data-aos="fade-up"
                data-aos-duration="500"
                data-aos-once="false"
                className={styles.ourStorySubHeading}>
                Cancellations
              </div>
              <div
                data-aos="fade-up"
                data-aos-duration="500"
                data-aos-once="false"
                className={styles.ourStoryDescription}>
                Any bookings cancelled within 24 hours of hire must be paid in full.
                Any bookings cancelled within 48 hours of hire a 50% refund will apply, less a £20 admin fee
                Any bookings cancelled 7 days or more in advance, a full refund will be made less a £20 admin fee
                Any bookings made with a deposit, no refunds will be made
                Your London Chauffeur has the right to cancel a booking with at least 2 days notice if road closures occur at the pickup or drop off area that make it impossible to access the area. A full refund will be given if payment has been made
                Any bookings cancelled for hires of 2 days or more and multiple vehicle hire, 7 days notice is required. If cancellation is less than 7 days, full payment is required.
              </div>
              <div
                data-aos="fade-up"
                data-aos-duration="500"
                data-aos-once="false"
                className={styles.ourStoryDescription}>
                Bookings for 2 vehicles or more, 7 days notice is required for a full refund. If payment is on receipt of invoice and less than 7 days notice is given then full payment is required
                For wedding bookings, a deposit will be taken with the balance settled at least 30 days before the wedding date.
                Wedding cancellations, deposits will be returned provided 30 days notice is given. Any cancellation of less than 30 days the deposit is non refundable. Quotes are valid for 24 hours
                In the event of Your London Chauffeur having to cancel owing to unforseen circumstances and an alternative vehicle cannot be provided, a full refund will be given.
                For any single cancellations by the client a £20.00 admin surcharge will be applied.
              </div>
              <div
                data-aos="fade-up"
                data-aos-duration="500"
                data-aos-once="false"
                className={styles.ourStoryDescription}>
                Deferred deposits are valid for one month.
              </div>
              <div
                data-aos="fade-up"
                data-aos-duration="500"
                data-aos-once="false"
                className={styles.ourStoryDescription}>
                All of our chauffeurs are fully licenced and insured. The carriage of a clients property is at their own risk. we cannot be held responsible for property lost while in transit.
              </div>
              <div
                data-aos="fade-up"
                data-aos-duration="500"
                data-aos-once="false"
                className={styles.ourStorySubHeading}>
                Charges
              </div>
              <div
                data-aos="fade-up"
                data-aos-duration="500"
                data-aos-once="false"
                className={styles.ourStoryDescription}>
                <ul>
                  <li>
                    Standard rate in Central London Mercedes V Class £45.00 per hour.</li>
                  <li>All prices are subject to 20%VAT</li>
                  <li>Minimum hire 4 hours excluding airport transfers.</li>
                  <li>Mercedes S Class and BMW 7 series - Hire charges are on website page Minimum hire for as directed in Central London is 4 hours.</li>
                  <li>
                    Discounts can be offered at the discretion of the management for multi vehicle hire and multi day hire, minimum hire 10 hours per vehicle.</li>
                  <li></li>
                </ul>
              </div>
              <div
                data-aos="fade-up"
                data-aos-duration="500"
                data-aos-once="false"
                className={styles.ourStorySubHeading}>
                Airport pickups and drop offs
              </div>
              <div
                data-aos="fade-up"
                data-aos-duration="500"
                data-aos-once="false"
                className={styles.ourStoryDescription}>
                Meet & greet, waiting time and parking for up to 45 minutes from when the aircraft lands will be charged at £12.
                After 45 minutes, extra waiting and parking charges will apply Excess luggage charges apply
                Drop off charges at cost will be added.
              </div>
              <div
                data-aos="fade-up"
                data-aos-duration="500"
                data-aos-once="false"
                className={styles.ourStoryDescription}>
                Extra charges will be added for collections outside of Central London Eurostar St Pancras International collections, a charge of £15 will be added to include meet and greet, parking and up to 30 minutes waiting time from when the train arrives.
                After 30 minutes, extra waiting and parking charges will apply. (Eurostar) Private Jet service clients will incur waiting time after 10 minutes. Motorway journeys will be quoted on an individual basis
                Waiting time will be charged after a period of 10 minutes after the arranged pick up time.
                Waiting time £45.00 per hour in 30 minute increments.
                Any additional pick ups or drop off&apos;s not agreed when booking will be charged at £15 per drop or pick up payable on the day of hire to the chauffeur.
              </div>
              <div
                data-aos="fade-up"
                data-aos-duration="500"
                data-aos-once="false"
                className={styles.ourStoryDescription}>
                Extra charges will be made for excess luggage
                Mileage allowance in Central London - 10 miles per hour
                Excess miles travelled at the request of the client over the quote will be charged at standard rate of £2.50 per mile.
                We allow 10 minutes free waiting time over the agreed pickup time, after this waiting time will be charged.
                The route taken is at the discretion of the chauffeur. If the client has a preferred route and it results in additional mileage, extra charges will apply.
              </div>
              <div
                data-aos="fade-up"
                data-aos-duration="500"
                data-aos-once="false"
                className={styles.ourStoryDescription}>
                If it is necessary for the chauffeur to stay overnight, a charge of from £100 per night, depending on location will be applied.
                For every 10 hour booking a charge of £10 will be added for chauffeur refreshments.
                We do not offer accounts
                Any sub contract chauffeur companies or clients who withhold payment for more than 14 days will be subject to a surcharge of 10% and details passed to a debt recovery agency
                A 50% surcharge will be applied for Christmas Eve, Christmas Day, Boxing Day, New years Eve, New years Day. (Airport transfers will be quoted).
                Christmas week surcharges will apply.
                Weddings are quoted on an individual basis, minimum 3 hours We do not store credit card details
                No details of bookings or personal are passed to anybody else We do not accept any full track data by emails.
              </div>
              <div
                data-aos="fade-up"
                data-aos-duration="500"
                data-aos-once="false"
                className={styles.ourStoryDescription}>
                When booking please take into account the amount of passengers and luggage. The Mercedes V Class will hold up to 7 passengers + 7 standard size suitcases + 3 hand luggage. A reasonable amount of luggage will be carried.
                If the chauffeur thinks the luggage is excessive it will not be carried. luggage must be stored in the boot/trunk of the car. No luggage can be placed on the seats at any time.
                No animals are allowed in any of our vehicles.
                We can provide a child seat and booster seats, which must be requested in advance to avoid delays.
                If a journey is at rush hour time, please allow an extra hour when booking. We cannot be held responsible for any delays caused by road closures, accidents,
              </div>
              <div
                data-aos="fade-up"
                data-aos-duration="500"
                data-aos-once="false"
                className={styles.ourStoryDescription}>
                When booking please take into account the amount of passengers and luggage. The Mercedes V Class will hold up to 7 passengers + 7 standard size suitcases + 3 hand luggage. A reasonable amount of luggage will be carried.
                If the chauffeur thinks the luggage is excessive it will not be carried. luggage must be stored in the boot/trunk of the car. No luggage can be placed on the seats at any time.
                No animals are allowed in any of our vehicles.
                We can provide a child seat and booster seats, which must be requested in advance to avoid delays.
                If a journey is at rush hour time, please allow an extra hour when booking. We cannot be held responsible for any delays caused by road closures, accidents, diversions, traffic hold ups or unforeseen circumstances.
              </div>
              <div
                data-aos="fade-up"
                data-aos-duration="500"
                data-aos-once="false"
                className={styles.ourStoryDescription}>
                Any changes to the information provided must be notified at least 12 hours in advance otherwise charges may apply.
                If a passenger does not show at the agreed time of pick up, a waiting time charge will apply.
                All journey details including times must be confirmed by e.mail in advance. Your London Chauffeur cannot be held responsible for any mistakes for information provided at time of booking.
                A charge will be made if the chauffeur has started the journey and the incorrect information has been provided or an item has been forgotten at the pickup point (passport, tickets etc).
                Client/passenger must check at the drop off point that any luggage, computers, mobile phones etc have not been left behind.
              </div>
              <div
                data-aos="fade-up"
                data-aos-duration="500"
                data-aos-once="false"
                className={styles.ourStoryDescription}>

                A delivery charge will be made if any items are left on board and they have to be returned. We cannot be held responsible for items left in the vehicle.
                Any parking tickets obtained at the request of the client asking the chauffeur to wait will be charged at cost.
                For any extra waiting time during the journey, a charge will apply. This does not apply to hourly, half day or daily bookings.
              </div>
              <div
                data-aos="fade-up"
                data-aos-duration="500"
                data-aos-once="false"
                className={styles.ourStoryDescription}>

                Airport/station arrivals - Meet and greet, parking and up to 45 minutes waiting time from when the aircraft lands will be added at £12.
                Any time spent waiting beyond this point, charges will apply at £45.00 per hour in increments of 30 minutes.
                Extra car parking charges and tolls will be charged at cost.
              </div>
              <div
                data-aos="fade-up"
                data-aos-duration="500"
                data-aos-once="false"
                className={styles.ourStoryDescription}>
                Your London Chauffeur and any sub contract driver cannot be held responsible for luggage left in any vehicle while waiting for the client.
                Wi-Fi is subject to availability Gratuities are at the clients discretion..
              </div>
              <div
                data-aos="fade-up"
                data-aos-duration="500"
                data-aos-once="false"
                className={styles.ourStorySubHeading}>
                Feedback / Complaints
              </div>
              <div
                data-aos="fade-up"
                data-aos-duration="500"
                data-aos-once="false"
                className={styles.ourStoryDescription}>

                If the client has any feedback or complaints regarding Your London Chauffeur, the client is encouraged to inform Your London Chauffeur as soon as possible.
              </div>

              <div
                data-aos="fade-up"
                data-aos-duration="500"
                data-aos-once="false"
                className={styles.ourStorySubHeading}>
                Safety
              </div>
              <div
                data-aos="fade-up"
                data-aos-duration="500"
                data-aos-once="false"
                className={styles.ourStoryDescription}>
                The chauffeur will drive taking into consideration driving conditions and road safety and will obey all traffic regulations at all times.
                It is against UK law to smoke in all private hire vehicles. It is UK law that seatbelts must be worn at all times.
              </div>
              <div
                data-aos="fade-up"
                data-aos-duration="500"
                data-aos-once="false"
                className={styles.ourStoryDescription}>

                We reserve the right to terminate the booking at point of collection or on a journey if there is abusive language or rudeness. Any client/passenger who behaves in an aggressive manner or appears to be intoxicated will not be tolerated at any time. The safety of our chauffeur is paramount at all times.
              </div>
              <div
                data-aos="fade-up"
                data-aos-duration="500"
                data-aos-once="false"
                className={styles.ourStoryDescription}>
                Any physical or verbal abuse of the chauffeur or failure to adhere to the no smoking policy will not be tolerated termination of the hire will be immediate with no compensation to the hirer. A police report will be made and legal proceedings may be implemented.
              </div>
              <div
                data-aos="fade-up"
                data-aos-duration="500"
                data-aos-once="false"
                className={styles.ourStoryDescription}>
                No drinks, alcohol, drugs or food may be consumed in the vehicle at any time. Champagne and wine may be allowed at the discretion of the management, any spillage on the seats or carpet will incurr a clean up fee of £250 to remove staines and odour
                If a client or clients are drunk we reserve the right to refuse their carriage No E cigarettes are allowed to be used in any of our vehicles.
              </div>
              <div
                data-aos="fade-up"
                data-aos-duration="500"
                data-aos-once="false"
                className={styles.ourStoryDescription}>
                The client/passenger will be held responsible for any damage to the vehicle inside and out through his/her actions whether deliberate or accidental.
              </div>
              <div
                data-aos="fade-up"
                data-aos-duration="500"
                data-aos-once="false"
                className={styles.ourStoryDescription}>

                Any damage to seats or interior trim cause by clients’ briefcases, laptops, hand luggage etc or passengers suit cases are the responsibility of the passenger
                Passengers must not put their feet or luggage on the seats at any time
                A charge of £250 plus the journey charge and any loss of earnings will apply if it is necessary to clean the inside of the vehicle due to vomit or anything else caused by the passenger or passengers.
              </div>
              <div
                data-aos="fade-up"
                data-aos-duration="500"
                data-aos-once="false"
                className={styles.ourStoryDescription}>
                Any damage caused to the vehicle by opening doors on to any object outside the car including a post, wall, motorbike, or pushbike will be the client/passenger&apos;s responsibility.
              </div>
              <div
                data-aos="fade-up"
                data-aos-duration="500"
                data-aos-once="false"
                className={styles.ourStoryDescription}>
                A basic first aid kit is available.
                Any situations arising beyond the control of Your London Chauffeur may be necessary to sub contract.
                Please be aware vehicle colour and specifications may vary. Pre-booking only with at least 12 hours notice required
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Section # 1 */}

    </div>
  );
};

export default TermsAndCondition;
