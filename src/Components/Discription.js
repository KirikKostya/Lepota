import  axios  from 'axios'
import React,{useEffect} from 'react'
import './Styles/Discription.css'

 const Pictures = [
  {
    id:0,
    img: require('../Photos/WorksPictures/candle.png')
  },
  {
    id:1,
    img: require('../Photos/WorksPictures/candleBird.png')
  },
  {
    id:2,
    img: require('../Photos/WorksPictures/Cup.png')
  },
  {
    id:3,
    img: require('../Photos/WorksPictures/Human.png')
  },
  {
    id:4,
    img: require('../Photos/WorksPictures/Dog.png')
  },
  {
    id:5,
    img: require('../Photos/WorksPictures/BubbleGum.png')
  },

 ]

export default function Discription() {

  return (
    <div className='DiscriptionContainer' id='Main'>
        {
          Pictures.map(work=>(
            <img key={work.id} src={work.img} className = 'Slide' />
          ))
        }
      </div>
  )
}
