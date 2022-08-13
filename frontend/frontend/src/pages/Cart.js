import styled from "styled-components";
import Announcment from "../components/Announcment";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Newsletter from "../components/Newsletter";
import OrderSummery from "../components/OrderSummery";
import SingleCartItem from "../components/SingleCartItem";
import { CartList } from "../items/products";
const Container = styled.div`
  margin: 10px;
`;
const Wrapper = styled.div`
  margin: 20px;
  display: flex;
`;
const Title = styled.h1`
  margin: 30px 0;
  text-align: center;
`;
const Left = styled.div`
  margin-left: 20px;
  flex: 2;
`;

const TopDesc = styled.div`
  margin: 20px;
  display: flex;
  justify-content: space-between;
  /* margin: 10px 10px 10px 30px; */
`;
const ContinueButton = styled.button`
  margin-bottom: 30px;
  padding: 5px 20px;
  cursor: pointer;
  font-weight: 600;
  border: ${(props) => props.type === "filled" && "none"};
  background-color: ${(props) =>
    props.type === "filled" ? "black" : "transparent"};
  color: ${(props) => props.type === "filled" && "white"};
`;
const LittleDesc = styled.div`
  display: flex;
`;
const Littleinfo = styled.p`
  /* flex: 1; */
  margin: 20px;
`;

const Right = styled.div`
  display: flex;
  justify-content: center;
  flex: 1;
`;

const Hr = styled.hr`
  text-align: center;
  height: 1px;
  width: 75%;
  background-color: #eee;
`;
const List = styled.div``;
const Cart = () => {
  return (
    <Container>
      <Navbar />
      <Announcment />
      <Title>YOUR BAG</Title>
      <TopDesc>
        <ContinueButton>Continue shopping</ContinueButton>
        <LittleDesc>
          <Littleinfo>Shopping bag (2) </Littleinfo>
          <Littleinfo>Your Whishlist (0) </Littleinfo>
        </LittleDesc>
        <ContinueButton type={"filled"}>Checkout now</ContinueButton>
      </TopDesc>
      <Wrapper>
        <Left>
          {CartList.map((item) => (
            <List>
              <SingleCartItem item={item} />
              <Hr />
            </List>
          ))}
        </Left>
        <Right>
          <OrderSummery />
        </Right>
      </Wrapper>
      <Newsletter />
      <Footer />
    </Container>
  );
};

export default Cart;
