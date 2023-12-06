import React, { useEffect, useState } from "react";
import axios from "axios";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Link } from "react-router-dom";

function ShowProducts() {
  const [products, setProducts] = useState([]);
  const getProducts = async () => {
    const { data } = await axios.get("http://localhost:8000/api/");
    setProducts(data);
  };

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <>
      {products.length > 0 ? (
        <Container fluid className="mb-2">
          {products.map((product, index) => (
            <Row key={index} xl={4} className=" ms-2 me-2 lg">
              <Col className="mb-4">
                <Card className="mt-3 p-2 shadow-lg">
                  <Card.Img
                    variant="top"
                    height="200px"
                    width="100%"
                    src={product.image}
                    className="img rounded lg-img"
                    style={{
                      border: "1px solid rgba(122, 109, 116, 0.8)",
                      padding: "2px",
                    }}
                  />
                  <Card.Body className="d-flex flex-column justify-content-between">
                    <Card.Text className="text-center">
                      <strong>Product Name : </strong>
                      {product.name}
                    </Card.Text>
                    <Card.Text className="text-center">
                      <strong>Amount : </strong><span className="text-success">${product.price}</span>
                    </Card.Text>

                    <Link className="btn btn-primary d-block mx-auto" to={`/${product.id}/`}>
                      Show Detail
                    </Link>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          ))}
        </Container>
      ) : (
        <h6 className="text-success text-center mt-5">Loading...</h6>
      )}
    </>
  );
}

export default ShowProducts;
