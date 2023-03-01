import React, {useState} from 'react'
import { NavLink } from 'react-router-dom'
import './Styles/CardOfWork.css'

export default function CardOfWork({card, fetchProducts}) {

  const getImageFromAPI = (photoList) => {
    if (photoList === null || photoList[0] == undefined){ 
      return  require('../Photos/somethingWentWrong.png')
    } else {
      return photoList[0]
    }
  }
  return (
    <div className='Card'>

        <div className='InfoOfCard' key={card.id}>
          <img src={getImageFromAPI(card.icon) || require('../Photos/somethingWentWrong.png')} className='IMG' />
          <h4 onClick={()=>console.log(card)}>{card.name} <span>{card.price} Br</span> </h4>
          <p>Здесь будет небольшая информация про продукт</p>
        
        <NavLink to='/TypeCatalog' 
                 className='CatalogBTN' 
                 onClick={()=>{
                  fetchProducts(card.id)
                 }}>Каталог</NavLink>
                 
        </div>
    </div>
  )
}
