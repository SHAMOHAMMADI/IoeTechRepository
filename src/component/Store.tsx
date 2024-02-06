import React from 'react'
import storedData from "../data/store.json"
import StoreItems from './storeItems'
import ProductsCart from "./ProductsCart"

export default function Store() {
  return (
    <div>
        {storedData.map((item)=>(
            <div key={item.id}>
                {/* <StoreItems {...item} /> */}
                <ProductsCart {...item} />
                <p>{item.price}</p>

            </div>
        ))}
    </div>
  )
}
