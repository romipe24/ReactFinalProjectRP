import React from "react";
import { useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./ItemListContainer.css";
import { getData } from "../../helpers/getData";
import ItemList from "../ItemList/ItemList";
import Loader from "./../Loader/Loader";
import Hero from "../Carousel/Carousel";
import { getFirestore } from "../../Firebase/firebase";

import { useParams } from "react-router-dom";

const ItemListContainer = ({ title }) => {
  //Variables
  const [data, setData] = useState([]);
  const [loader, setLoader] = useState(true);
  const [bool, setBool] = useState(true);
  const { idCategoria } = useParams();

  //Fetch - LLamada a la API
  useEffect(() => {
    //conexion con firestore
    const dbQuery = getFirestore();
    console.log("idCategoria=", idCategoria);
    if (idCategoria) {
      console.log("[useEffect] Actualizando categoria" + idCategoria);
      dbQuery
        .collection("productos")
        .where("category", "==", idCategoria)
        .get() // traer todo
        .then((res) => {
          console.log(res.docs.map((pro) => ({ id: pro.id, ...pro.data() })));
          setData(res.docs.map((pro) => ({ id: pro.id, ...pro.data() })));
        })
        .catch((err) => console.log(err))
        .finally(() => setLoader(false));
    } else {
      console.log("[useEffect] Actualizando todos los productos");
      dbQuery
        .collection("productos")
        .get() // traer todo
        .then((res) =>
          setData(res.docs.map((pro) => ({ id: pro.id, ...pro.data() })))
        )
        .catch((err) => console.log(err))
        .finally(() => setLoader(false));
    }
  }, [idCategoria]);

  //   if (idCategoria) {
  //     getData
  //       .then((res) => {
  //         console.log(idCategoria);
  //         setData(res.filter((product) => product.category === idCategoria));
  //       })
  //       .catch((err) => console.log(err))
  //       .finally(() => setLoader(false));
  //   } else {
  //     getData
  //       .then((res) => {
  //         console.log(res);
  //         setData(res);
  //       })
  //       .catch((err) => console.log(err))
  //       .finally(() => setLoader(false));
  //   }
  // }, [idCategoria]);

  /* console.log(data) */
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
