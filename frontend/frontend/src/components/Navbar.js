import { Search, ShoppingCartOutlined } from "@mui/icons-material";
import { Badge } from "@mui/material";
import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
// import SearchIcon from '@mui/icons-material/Search';

const Container = styled.div`
  height: 60px;
`;
const Wrapper = styled.div`
  padding: 10px 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`;
const Center = styled.div`
  flex: 1;
  text-align: center;
`;
const Right = styled.div`
  flex: 1;
  display: flex;
  justify-content: flex-end;
`;
const Language = styled.span`
  font-size: 14;
`;
const SearchContainer = styled.div`
  border: 0.25px solid lightblue;
  display: flex;
  align-items: center;
  margin-left: 20px;
  padding: 10px;
`;

const Input = styled.input`
  border: none;
`;

const Logo = styled.h1`
  font-weight: bold;
  color:green;
`;

const MenuItem = styled.div`
  font-size: 14px;
  cursor: pointer;
  margin-left: 25px;
`;
const Navbar = () => {

  const quantity = useSelector(state => state.cart.quantity)
  return (
    <Container>
      <Wrapper>
        <Left>
          <Language>En</Language>
          <SearchContainer>
            <Input />
            <Search style={{color:"gray",fontSize:"16px"}}/>
          </SearchContainer>
        </Left>
        <Center>
          <Logo>Jeno Electronic Market</Logo>
        </Center>
        <Right>
          <Link to = '/register'><MenuItem>REGISTER</MenuItem></Link>
          <Link to = '/login'><MenuItem>SIGN IN</MenuItem></Link>
          <MenuItem>
            <Badge badgeContent={quantity} color="primary">
              <ShoppingCartOutlined />
            </Badge>
          </MenuItem>
        </Right>
      </Wrapper>
    </Container>
  );
};

export default Navbar;
