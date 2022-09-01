import { useState } from "react";
import { useLocation } from "react-router-dom";
import styled from "styled-components";
import Announcment from "../components/Announcment";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Newsletter from "../components/Newsletter";
import Products from "../components/Products";

const Container = styled.div``;
const Title = styled.h1`
  margin: 20px;
`;
const FilterContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;
const Filter = styled.div`
  margin: 20px;
`;
const FilterText = styled.span`
  margin: 20px;
  font-size: 30px;
`;

const Select = styled.select`
    font-size: 25px;
    padding: 10px;
    margin-right: 20px;
`
const Options = styled.option`

`
const ProductList = () => {

  const location = useLocation();
  let catagory = location.pathname.split("/")[2];

  const [sort , setSort] = useState('newest');
  const [filter , setFilter] = useState({});

  const handleSort = (e) =>{
    setSort(e.target.value);
  }

  const handleFilters = (e) =>{
    const value = e.target.value;
    setFilter({
      ...filter,
      [e.target.name]:value
    })
  }
  // console.log('productList.js')
  // console.log(filter)
  // console.log('check for catagory productList', catagory)
  return (
    <Container>
      <Navbar />
      <Announcment />
      <Title>Dresses</Title>
      <FilterContainer>
        
        <Filter>

          <FilterText>Filter Products</FilterText>

          <Select name="color" onChange={handleFilters}>
            <Options disabled selected>Color</Options>
            <Options>white</Options>
            <Options>black</Options>
            <Options>red</Options>
            <Options>yellow</Options>
            <Options>pink</Options>
          </Select>

          <Select name="size" onChange={handleFilters}>
            <Options disabled selected>Size</Options>
            <Options>x</Options>
            <Options>s</Options>
            <Options>l</Options>
            <Options>xl</Options>
          </Select>

        </Filter>

        <Filter>
          <FilterText>Sort Products</FilterText>
          <Select onChange={handleSort}>
            <Options value='newest'>Newest</Options>
            <Options value='asc'>Price (asc)</Options>
            <Options value='dec'>Price (dec)</Options>
            
          </Select>
        </Filter>

      </FilterContainer>
      {/* <div>{JSON.stringify(filter)}</div> */}
      <Products catagory={catagory} filter = {filter} sort={sort}/>
      <Newsletter />
      <Footer />
    </Container>
  );
};

export default ProductList;
