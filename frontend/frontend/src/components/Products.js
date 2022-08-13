import { useEffect, useState } from "react";
import styled from "styled-components";
// import { ProductList } from "./../items/products";
import Product from "./Product";
import axios from "axios";
const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: 0 40px;
`;
const Products = (catagory, filter, sort) => {
  // console.log(catagory , filter , sort);

  const [ProductL, setProducts] = useState([]);
  const [FilteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    const getProduct = async () => {
      try {
        console.log(catagory["cat"]);
        const res = await axios.get(
          catagory
            ? `http://localhost:5000/products/getproducts/?catagory=${catagory["cat"]}`
            : "http://localhost:5000/products/getproducts"
        );
        setProducts(res.data);
        console.log(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    getProduct();
  }, [catagory]);

  //filter items here
  useEffect(
    () => {
      catagory &&
        setFilteredProducts(
          ProductL.filter((item) =>
            Object.entries(filter).every(([key, value]) =>
              item[key].includes(value)
            )
          )
        );
    },
    [ ProductL, catagory, filter ]
  );
  console.log("filtered")
  console.log( FilteredProducts)
  return (
    <Container>
      {FilteredProducts.map((product) => (
        <Product product={product} key={product.id} />
      ))}
    </Container>
  );
};

export default Products;
