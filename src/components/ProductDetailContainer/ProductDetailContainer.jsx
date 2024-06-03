import React from 'react'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import {firebaseApp} from '../../fireBase/config'
import {doc, getDoc, getFirestore} from 'firebase/firestore'
import { ProductDetail } from '../ProductDetail/ProductDetail'

const ProductDetailContainer = () => {

    const {itemId} = useParams()
    const [producto, setProducto] = useState([])


    useEffect(()=>{
        const db = getFirestore(firebaseApp);
        const documentRef = doc(db, 'items', itemId);

        getDoc(documentRef).then((snapshot)=>{

          setProducto({...snapshot.data(), id:snapshot.id})
        })
        .catch(error =>{
          console.log(error)
        })
      }, [itemId])

  return (
    <div>
        <ProductDetail producto={producto}></ProductDetail>
    </div>
  )
}

export {ProductDetailContainer}