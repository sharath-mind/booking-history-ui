import React from 'react'
import style from "./advert-card.module.css"
import Button from '../Button'
import {BUTTON_VARIANTS} from "../../constants"

const AdvertCard = ({message}) => {
  return (
    <div className={style.container}>
      <div>{message}</div>
      <Button value={"Book Now"} variant={BUTTON_VARIANTS.PRIMARY_BORDERED}/>
    </div>
  )
}

export default AdvertCard