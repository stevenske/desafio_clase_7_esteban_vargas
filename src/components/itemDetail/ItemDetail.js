import React from 'react'
import './ItemDetail.css'
import ItemCount from '../itemCount/ItemCount'


const ItemDetail = ({ product }) => {
    return (
        <>
            <div id={`phone${product.id}`} className="col-6 card card_size d-flex">
                <img src={`${product.img}`} className="card-img-top zoom" alt={product.alt}/>
                    <div className="d-flex justify-content-center card-body">
                        <h5 className="card-title text-center">{product.brand} {product.model}</h5>
                        <ItemCount product={product}/>
                        <h5 className="card-title text-center">Stock: {product.stock}</h5>
                        <h6 className="card-title text-center">${product.price}</h6>
                        <button className='btn'>Comprar</button>
                    </div>
            </div>
            <ul className='desc col-6'>
                <h3>Description:</h3>
                <li>{product.desc[1]}</li>
                <li>{product.desc[2]}</li>
                <li>{product.desc[0]}</li>
                <li>{product.desc[4]}</li>
                <li>{product.desc[3]}</li>
            </ul>

        </>
    )
}

export default ItemDetail