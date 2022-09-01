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
const Products = ({catagory, filter, sort}) => {

  const [ProductL, setProducts] = useState([]);
  const [FilteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    const getProduct = async () => {
      try {
        const res = await axios.get(
          catagory
            ? `http://localhost:5000/products/getproducts/?catagory=${catagory}`:
             "http://localhost:5000/products/getproducts"
        );
        setProducts(res.data);
        // console.log(res.data);
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
          ProductL.filter(function(item){
            return filter.color || filter.size ? (item.color === filter.color) && (item.size===filter.size): true
          })
        );
        // console.log(filter)
        // console.log("---------------------filtering use effect (products.js)-----------")
    },
    [ ProductL, catagory, filter ]
  );
  // console.log("filtered")
  // console.log( FilteredProducts)
  return (
    <Container>
      {FilteredProducts.map((product) => (
        <Product product={product} key={product.id} />
      ))}
    </Container>
  );
};

export default Products;
