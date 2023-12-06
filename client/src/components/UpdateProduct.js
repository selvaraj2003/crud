import React, { useEffect, useState } from "react";
import { CDBInput, CDBCard, CDBCardBody, CDBBtn, CDBContainer } from "cdbreact";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

function UpdateProduct() {
  const [image, setImage] = useState(null);
  const [name, setName] = useState(null);
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");

  const navigate = useNavigate();
  const { id } = useParams();



  useEffect(() => {
    const loadProducts = async () => {
      const { data } = await axios.get(`http://localhost:8000/api/${id}/`);

      console.log(data);
    };
    loadProducts();
  }, [id]);

  const UpdateProductInfo = async () => {
    let formField = new FormData();

    formField.append("name", name);
    formField.append("price", price);
    formField.append("description", description);
    formField.append("category", category);

    if (image !== null) {
      formField.append("image", image);
    }

    await axios({
      method: "PUT",
      url: `http://localhost:8000/api/${id}/`,
      // headers: {
      //   "Content-Type": "multipart/form-data",
      // },
      data: formField,
    }).then((response) => {
      console.log(response.data);
      navigate("/");
    });
  };

  return (
    <CDBContainer>
      <CDBCard className="mt-5 mb-5 w-100">
        <CDBCardBody className="mx-4">
          <div className="text-center mt-3 mb-3">
            <p className="h1">Update Product</p>
          </div>

          <CDBInput
            placeholder="Enter  Product Name"
            type="text"
            name="name"
            value={name}
            className="mb-2"
            onChange={(e) => setName(e.target.value)}
          />
          <CDBInput
            placeholder="Enter  Price"
            type="number"
            className="mb-2"
            name="price"
            onChange={(e) => setPrice(e.target.value)}
          />
          <CDBInput
            placeholder="Enter  Description"
            type="textarea"
            className="mb-2"
            name="description"
            onChange={(e) => setDescription(e.target.value)}
          />
          <CDBInput
            placeholder="Enter  Category"
            type="text"
            className="mb-2"
            name="category"
            onChange={(e) => setCategory(e.target.value)}
          />

          <CDBInput
            type="file"
            className="mb-2"
            onChange={(e) => setImage(e.target.files[0])}
          />
          <CDBBtn
            color="primary"
            className="btn-block my-3 mx-0"
            onClick={UpdateProductInfo}
          >
            Upadate Product
          </CDBBtn>
        </CDBCardBody>
      </CDBCard>
    </CDBContainer>
  );
}

export default UpdateProduct;
