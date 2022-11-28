import React from "react";
import style from "./appointment-card.module.css";
import Button from "../Button";
import { BUTTON_VARIANTS } from "../../constants";
import { EyeIcon } from "../../Assets/icons";
import UserImg from "../../Assets/images/user.png";

const AppointmentCard = (props) => {
  const { time, docName, clinicName, test } = props;
  return (
    <div className={style.container}>
      <div className={style.topButtons}>
        <Button value={"Clinic"} variant={BUTTON_VARIANTS.PRIMARY} />
        <Button value={"Test"} variant={BUTTON_VARIANTS.PLAIN} />
        <Button value={"Surgery"} variant={BUTTON_VARIANTS.PLAIN} />
        <Button value={"Medicine"} variant={BUTTON_VARIANTS.PLAIN} />
      </div>
      <div className={style.content}>
        <img src={UserImg} alt="User" />
        <div>
          <p>{time}</p>
          <p className={style.docName}>{`Appointment With Doctor ${docName}`}</p>
          <p>{clinicName}</p>
          {test && <p>{`Test: ${test}`}</p>}
        </div>
      </div>
      <div className={style.bottomButtons}>
        <Button value={"RESCHEDULE"} variant={BUTTON_VARIANTS.SECONDARY} />
        <Button value={"CANCEL"} variant={BUTTON_VARIANTS.SECONDARY} />
        <Button value={"VIEW"} variant={BUTTON_VARIANTS.PLAIN} Icon={EyeIcon} />
      </div>
    </div>
  );
};

export default AppointmentCard;
