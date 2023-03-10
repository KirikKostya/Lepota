import React, { useEffect, useState } from 'react'
import CardOfWork from './CardOfWork'
import LoadingComp from '../CatalogOfWorks/LoadingComp'
import { useDispatch, useSelector } from 'react-redux'
import './Styles/WorkCatalog.css'
import axios from 'axios'

export default function WorkCatalog( {setOpenID, fetchProducts} ) {
  
  const [CARDS, setCARDS] = useState([])
  const dispatch = useDispatch();
  const isLoading = useSelector(state=>state.isLoading);

  const fetchFanc = () =>{
    axios.get(`https://api.native-flora.tk/Item/GetAll`)
      .then(res=>{
        setCARDS(res.data.data)
        dispatch({type: 'LOADING_IS_COMPLETED'});
      }) 
  }

  useEffect(()=>{
    fetchFanc()
  },[])

  return (
    <div className='CatalogContainer' id='CatalogOfWorks'>
        <h1>Наши Работы</h1>
        <p className='paragraph'>У нас вы можете приобрести разного вида подарки, 
          начиная от выразительных статуэток и заканчивая ключницами и разными подставками. 
          Вы сможете сделать заказ и обсудить с мастером вариант вашейго собственного заказа.
        </p>
        <div className='ListOfWorks'>
            {
              isLoading
                ? <div className='LoadingComp'>
                    <LoadingComp />
                  </div>
                  : CARDS.map(card => (
                      <CardOfWork key={card.id} card={card} setOpenID={setOpenID} fetchProducts={fetchProducts}/>
                    ))
            }
        </div>
    </div>
  )
}
