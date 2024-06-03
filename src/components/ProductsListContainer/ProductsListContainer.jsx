import React, { useContext } from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import {collection, getDocs, getFirestore, query, where} from 'firebase/firestore';
import {firebaseApp} from '../../fireBase/config';
import ProductsList from '../ProductsList/ProductsList';
import HeaderShop from '../HeaderShop/HeaderShop';
import { useFilters } from '../../hooks/useFilters';



const ProductsListContainer = () => {

  const {sortProduct, sortBy, filter} = useFilters()

  const {categoryId} = useParams()

  const {brand} = useParams()

  const [productos, setProductos] = useState([]);


  useEffect(()=>{
    const db = getFirestore(firebaseApp);
    const collectionRef = collection(db, 'items');
    let q ='';

    if(categoryId !== undefined){
      q = query(collectionRef, where('category', '==', categoryId
      ))
    }else if(brand !== undefined){
      q = query(collectionRef, where('brand', '==', brand))
    }else{
      q = collectionRef
    }
    
    
    getDocs(q).then((snapshot)=>{
      if(snapshot.size !== 0){
        const productsList = snapshot.docs.map((item)=>({
          id: item.id,
          ...item.data()
        }));
        setProductos(productsList)
      }else{
        alert('PRODUCTOS NO ENCONTRADO')
      }

    })
    .catch(error=>{
      console.log(error)
    })

  }, [categoryId, brand])


    const orderedProducts = sortProduct(productos)
 

  return (
    <div>
        <HeaderShop/>
        <ProductsList productos= {orderedProducts.length != 0? orderedProducts : 'No se encontraron productos'}></ProductsList>       
    </div>
    
  )
}

export {ProductsListContainer} 