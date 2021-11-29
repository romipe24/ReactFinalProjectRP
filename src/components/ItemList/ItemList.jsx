import React from 'react'
import Row from 'react-bootstrap/Row'
import Item from '../Item/Item'
import './ItemList.css'


const ItemList = ({products}) => {
    /* console.log('Data', products) */
    return (
        <Row className="d-flex justify-content-center">
            {products.map(prod => <Item product={prod} />)}
        </Row>
    )
}

export default ItemList
