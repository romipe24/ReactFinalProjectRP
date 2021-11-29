import React from 'react'
import { useEffect, useState } from 'react';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { useParams } from 'react-router-dom'
import { getData } from '../../helpers/getData'
import ItemDetail from '../ItemDetail/ItemDetail';




const ItemDetailContainer = () => {
    const { idProducto } = useParams()
    const [item, setItem] = useState({})

    
    useEffect(() => {
        getData
        .then(res => {
            setItem(res.find(element => element.id === idProducto))
            console.log(item)
        })
        .catch(err => console.log(err))
    }, [idProducto, item])

    
    return (
        <Container fluid className="d-flex justify-content-center">
            <Row className="d-flex justify-content-center">
                <Col lg="10">
                    {<ItemDetail producto={item}/>}
                </Col>
            </Row>
        </Container>
    )
}

export default ItemDetailContainer
