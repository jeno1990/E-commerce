import styled from "styled-components";
import { Link } from "react-router-dom";

const Container = styled.div`
  flex: 1;
  height: 70vh;
  margin: 0 5px;
  align-items: center;
  position: relative;
`;
const Title = styled.h1`
  color: green;
  margin: 20px;
  background-color: #f5fbf1;
`;
const Info = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
const Button = styled.button`
  padding: 20px;
  border: none;
  background-color: white;
  color: grey;
  font-weight: 600;
  cursor: pointer;
`;
const Image = styled.img`
  width: 100%;
  height: 80%;
  object-fit: cover;
`;

const CatagoryItem = ({ item }) => {
  return (
    <Container>
      <Link to={`/products/${item.cat}`} >
        <Image src={item.img} />
        <Info>
          <Title>{item.title}</Title>
          <Button>SHOP NOW</Button>
        </Info>
      </Link>
    </Container>
  );
};

export default CatagoryItem;
