import React from 'react'
import '../App.css'
import locationLogo from '../images/Path.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheckSquare, faCoffee } from '@fortawesome/free-solid-svg-icons'
import { faLocation as fasLocation } from '@fortawesome/free-solid-svg-icons';
import Divider from "@material-ui/core/Divider";



const Card = (props) => {
  console.log(props)
  return (
    <div className='card-container'>
        <div className='image-container'>
          <img src={props.imageUrl} alt="" className='image-card'/>
        </div>
       
        <div className='card-content'>
            <div className='location-content'>
            <FontAwesomeIcon className='location-icon' icon={fasLocation} />
                <h4 className='country-title'>{props.location}</h4>
                <a href={props.googleMapsUrl} className='google-map-link'><u>View on Google Maps</u></a>
            </div>
            <h2 className='title-content'>{props.title}</h2>
            <h5 className='date-title'>{props.startDate} - {props.endDate}</h5>
            <p className='content-description'>{props.description}</p>
        </div>
    </div>
  )
}

export default Card