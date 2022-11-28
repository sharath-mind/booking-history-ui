import React from "react";
import style from "./booking-history.module.css";
import AdvertCard from "../../components/AdvertCard";
import AppointmentCard from "../../components/ApointmentCard";
import Button from "../../components/Button";
import Header from "../../components/header";
import { APPOINTMENT_DATA, BUTTON_VARIANTS } from "../../constants";

const BookingHistory = () => {
  return (
    <div className={style.container}>
      <Header title={"UPCOMING APPOINTMENTS"} />
      <AdvertCard message={"new booking in 2 minutes"} />
      <div className={style.appointments}>
        {APPOINTMENT_DATA?.map((data, index) => (
          <AppointmentCard
            key={data.time + index}
            time={data.time}
            clinicName={data.clinicName}
            docName={data.docName}
            test={data.test}
          />
        ))}
      </div>
      <div className={style.backButton}>
        <Button value={"BACK"} variant={BUTTON_VARIANTS.PLAIN} fullWidth />
      </div>
    </div>
  );
};

export default BookingHistory;
