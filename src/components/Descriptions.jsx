import React from 'react'
import {FaArrowDown, FaArrowUp, FaWind} from "react-icons/fa"
import {BiHappy} from "react-icons/bi"
import {MdCompress, MdOutlineWaterDrop} from "react-icons/md"

import "./Description.css"

const Descriptions = ({weather,units}) => {

  const tempUnit = units === "metric" ? "°C":"°F"
  const windUnit = units === "metric" ? "m/s": "m/h"

  const cards = [
    {
      id:1,
      icon: <FaArrowDown/>,
      title: "min",
      data: weather.temp_min,
      unit: tempUnit,
    },

    {
      id:2,
      icon: <FaArrowUp/>,
      title: "max",
      data: weather.temp_max,
      unit: tempUnit,
    },
    {
      id:3,
      icon: <BiHappy/>,
      title: "feels like",
      data: weather.feels_like,
      unit: tempUnit,
    },
    {
      id:4,
      icon: <MdCompress/>,
      title: "pressure",
      data: weather.pressure,
      unit: "hPa",
    },
    {
      id:5,
      icon: <MdOutlineWaterDrop/>,
      title: "Humidity",
      data: weather.humidity,
      unit: "%",
    },
    {
      id:6,
      icon: <FaWind/>,
      title: "wind speed",
      data: weather.speed,
      unit: windUnit,
    },
  ]
    
  return (
      <div className='section section-description'>
        {cards.map(({id,icon,title,data,unit}) => (
          <div key={id} className='card'>
            <div className='description-icon'>
                {icon}
                <small>{title}</small>
            </div>
            <h1>{`${data} ${unit}`}</h1>
        </div>
        ))}
        
        
        </div>
  )
}

export default Descriptions