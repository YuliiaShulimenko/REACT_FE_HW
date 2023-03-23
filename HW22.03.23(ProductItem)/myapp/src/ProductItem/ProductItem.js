import React from 'react'
import s from "./ProductItem.module.css"

function ProductItem(props){

    
    const {id,name, price, count,incr,decr,deleteProduct} = props


    
    return(
        <div className={s.cards_container} onDoubleClick={()=> deleteProduct(id)}>
            <p>{name}</p>
            <p>Price:{price}</p>
            <div className={s.count_button}>
        <button onClick={()=>incr(id)}>+</button>
        <p>{count}</p>
        <button onClick={()=>decr(id)}>-</button>
      </div>
        </div>
    )
}


export default ProductItem