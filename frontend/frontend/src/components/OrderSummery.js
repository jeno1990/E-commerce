import styled from "styled-components";

const Container = styled.div`
  width: 70%;
  height: 42vh;
  border: 1px solid #eee;
`;
const Title = styled.div`

    font-size: 40px;
    margin: 20px ;
`;
const DetailLine = styled.div`
    margin: 10px 0 30px 30px;
    width: 70%;
    display: flex;
    justify-content: space-between;
`;
const Each = styled.div`
  font-weight: 900;
  font-size: ${(props) => props.font};
`;
const Button = styled.button`
    background-color: black;
    color: white;
    width: 80%;
    font-weight: 900;
    padding: 10px;
    margin: 20px;
    cursor: pointer;
`

const OrderSummery = () => {
  return (
    <Container>
      <Title>ORDER SAMARY</Title>
      <DetailLine>
        <Each font="20px">subtotal</Each>
        <Each>$80</Each>
      </DetailLine>
      <DetailLine>
        <Each font="20px">Estimated shopping</Each>
        <Each>$8.30</Each>
      </DetailLine>
      <DetailLine>
        <Each font="20px">Shopping discount</Each>
        <Each>-$8.30</Each>
      </DetailLine>
      <DetailLine>
        <Each font="30px">Total</Each>
        <Each font="30px">$80</Each>
      </DetailLine>
      <Button>CHECKOUT NOW</Button>
    </Container>
  );
};

export default OrderSummery;
