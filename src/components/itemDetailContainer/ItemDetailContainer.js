import GetFetch from '../data/Data'
import { useEffect, useState } from 'react'
import ItemDetail from '../itemDetail/ItemDetail'

const ItemDetailContainer = () => {
    const [product, setProduct] = useState()
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        
        GetFetch
            .then((resp) => setProduct(resp.find(el => el.id == 1)))
            .then(console.log(product))
            .finally(() => setLoading(false))
    }, [])

    return (
    <>
        <div id='ItemDetail-container' className='row itemContainer gap-3'>
            {
                loading ? <span>Cargando...</span> :
                    <ItemDetail product={product} />
            }
        </div>
    </>
    )
}

export default ItemDetailContainer