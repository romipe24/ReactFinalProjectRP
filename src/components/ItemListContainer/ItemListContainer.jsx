import React from "react";
import { useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./ItemListContainer.css";
import ItemList from "../ItemList/ItemList";
import Loader from "./../Loader/Loader";
import Hero from "../Carousel/Carousel";
import { getFirestore } from "../../Firebase/firebase";
import { useParams } from "react-router-dom";

const ItemListContainer = ({ title }) => {
  //Variables
  const [data, setData] = useState([]);
  const [loader, setLoader] = useState(true);
  const { idCategoria } = useParams();

  //Fetch - LLamada a la API
  useEffect(() => {
    //conexion con firestore
    const db = getFirestore();
    const dbCollection = db.collection("productos");
    const dbQueryWhere = idCategoria
      ? dbCollection.where("category", "==", idCategoria)
      : dbCollection;

    dbQueryWhere
      .get() // traer todo
      .then((res) => {
        setData(res.docs.map((pro) => ({ id: pro.id, ...pro.data() })));
      })
      .catch((err) => console.log(err))
      .finally(() => setLoader(false));
  }, [idCategoria]);

  //
  return (
    <div className="App">
      <main>
        <Hero />
        <Container fluid className="d-flex justify-content-center">
          <Row className="d-flex justify-content-center">
            <Col lg="11">
              <h1>{title}</h1>
              {loader ? <Loader /> : <ItemList products={data} />}
            </Col>
          </Row>
        </Container>
      </main>
    </div>
  );
};

export default ItemListContainer;
