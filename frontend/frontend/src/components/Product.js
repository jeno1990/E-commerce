import {
  FavoriteBorderOutlined,
  SearchOutlined,
  ShoppingCartOutlined,
} from "@mui/icons-material";
import styled from "styled-components";

const Info = styled.div`
  opacity: 0;
  width: 100px;
  height: 100px;
  position: absolute;
  /* top: 0; */
  bottom: 0;
  right: 0;
  display: flex;
  justify-content: space-around;
  z-index: 3;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Container = styled.div`
  height: 350px;
  width: 280px;
  margin: 5px;
  display: flex;
  background-color: #f5fbf5;
  align-items: center;
  justify-content: center;
  position: relative;

  &:hover ${Info} {
    opacity: 1;
  }
`;
const Image = styled.img`
  height: 100%;
  width: 100%;
  margin: 5px;
  object-fit: cover;
`;

const Icon = styled.i`
  cursor: pointer;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 5px;
  padding: 5px;
  transform: all 0.5 ease;
  &:hover {
    background-color: #e9f5f5;
    transform: scale(1.1);
  }
`;
const Circle = styled.div`
  width: 200px;
  height: 200px;
  border-radius: 50%;
  background-color: white;
  position: absolute;
`;
const Product = ({ product }) => {
  return (
    <Container>
      <Circle>
        <Image src={product.img} />
        <Info>
          <Icon>
            <ShoppingCartOutlined />
          </Icon>
          <Icon>
            <SearchOutlined />
          </Icon>
          <Icon>
            <FavoriteBorderOutlined />
          </Icon>
        </Info>
      </Circle>
    </Container>
  );
};

export default Product;
