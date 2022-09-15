import React, { useState } from 'react'
import './ItemCount.css'

const ItemCount = ({ product }) => {
    const [items, setItems] = useState(0)
    const onRemove = () => items <= product.stock - 1 ? setItems(items + 1) : alert` a llegado al limite del stock`
    const onAdd = () => items > 0 ? setItems(items - 1) : alert`por favor introduzca la cantidad de los productos que desea comprar, muchas gracias!`
    return (
        <>
        <div className='d-flex justify-content-center'>
                        <button className='btn' onClick={onAdd}>-</button>
                        <p className='my-auto mx-2'>{items}</p>
                        <button className='btn' onClick={onRemove}>+</button>
                    </div>
    </>
    )
}
export default ItemCount