import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/esm/Button";
import Col from "react-bootstrap/esm/Col";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import Card from "react-bootstrap/esm/Card";
import axios from "axios";
import { Link, useNavigate, useParams } from "react-router-dom";

function ProductDetail() {
  const [product, setProduct] = useState([]);
  const { id } = useParams();
  const navigate = useNavigate();
  

  useEffect(() => {
    const getSingleProduct = async () => {
      const { data } = await axios.get(`http://localhost:8000/api/${id}/`);
      setProduct(data);
    };
    getSingleProduct()
  }, [id]);

  const deleteProduct = async (id) => {
    await axios.delete(`http://localhost:8000/api/${id}/`)
    navigate('/')
  }

  return (
    <Container className="mb-2 d-block mx-auto">
      <Row>
        <Col className="ms-3 me-3 lg">
          <Card className="mt-3 p-2 shadow-lg">
            <Card.Img
              variant="top"
              height="200px"
              width="100%"
              src={product.image}
              className="img rounded"
              style={{
                border: "1px solid rgba(122, 109, 116, 0.8)",
                padding: "2px",
              }}
            />
            <Card.Body>
              <Card.Text>
                <strong>Product Name : </strong> {product.name}
              </Card.Text>
              <Card.Text>
                <strong>Amount : </strong>${product.price}
              </Card.Text>
              <Card.Text>
                <strong>Description : </strong> {product.description}
              </Card.Text>
              <Card.Text>
                <strong>Category : </strong> {product.category}
              </Card.Text>
              <Link className="btn btn-success" to={`/update/${product.id}/`}>
                Update Product
              </Link>
              <Button
                className="btn btn-danger ms-10"
                onClick={() => deleteProduct(product.id)}
              >
                Delete
              </Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default ProductDetail;
