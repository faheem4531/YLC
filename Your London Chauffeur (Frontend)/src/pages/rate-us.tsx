import React, { useState } from "react";
import { useRouter } from "next/router";
import { toast } from "react-toastify";
import ReactStars from "react-stars";
import styles from "@/styles/RateUs.module.css";

import Button from "@/components/genericButton";
import api from "@/services/api";

const RateUs = () => {
  const [rating, setRating] = useState<number>(0);
  const [loading, setLoading] = useState<boolean>(false);

  const router = useRouter();
  const { bookingId } = router.query;

  const ratingChanged = (newRating: number) => {
    setRating(newRating);
  };

  const handleRating = async () => {
    setLoading(true);
    try {
      await api.put(`booking/rateUs/${bookingId}`, {
        rating,
      });
      toast("Rated successfully", { type: "success" });
      setLoading(false);
    } catch (error: any) {
      toast(error.response?.data?.message || "Failed to rate ride", {
        type: "error",
      });
      setLoading(false);
    }
  };

  return (
    <div>
      <div className={styles.ourStorySection}>
        <div className="container">
          <div className="row">
            <div className="col-12 d-flex flex-column align-items-center">
              <div className={styles.ourStoryHeading}>Rate Our Services</div>
              <div className={styles.borderBottom} />
              <div className={styles.starIconsWrapper}>
                <ReactStars
                  count={5}
                  size={50}
                  value={rating}
                  color2="#FDC65C"
                  color1="#D9D9D9"
                  onChange={ratingChanged}
                />
                <div className={styles.buttonWrapper}>
                  <Button
                    title="Rate Us!"
                    loading={loading}
                    onClick={handleRating}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RateUs;
