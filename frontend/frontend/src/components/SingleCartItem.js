import styled from "styled-components";

const Container = styled.div`
  height: 200px;
  width: 100%;
  display: flex;
  /* border: 2px solid teal; */
`;
const Left = styled.div`
  flex: 2;
  display: flex;
`;
const Right = styled.div`
  flex: 1;
  
`;
const Image = styled.img`
  margin-top: 10px;
  width: 25%;
  height: 70%;
`;
const Info = styled.ul`
    margin-top: 30px;
`;
const Desc=styled.li`
    margin-bottom: 10px;
    list-style: none;
`
const Color = styled.div`
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background-color: ${props=>props.color};
    margin-bottom: 10px;
`
const AmmountBox = styled.div`
  
  display: flex;
  flex-direction: column;
  margin: 30px 0;
`;
const ManipulateBox = styled.div`
  display: flex;
`;
const Change = styled.span`
  font-size: 30px;
  font-weight: 900;
  margin: 0 10px;
  cursor: pointer;
`;

const Amount = styled.span`
  width: 30px;
  height: 30px;
  border-radius: 10%;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid gray;
`;
const Price = styled.p`
  margin-top: 30px;
  margin-left: 20px;
  font-size: 30px;
  font-weight: 200;
`;


const SingleCartItem = ({item}) => {
  return (
    <Container>
      <Left>
        <Image src={item.img} />
        <Info>
            <Desc><b>Product:</b> {item.title}</Desc>
            <Desc><b>Id:</b> {item.id}</Desc>
            <Color color={item.color}></Color>
            <Desc><b>Size:</b> {item.size}</Desc>
        </Info>
      </Left>
      <Right>
        <AmmountBox>
          <ManipulateBox>
            <Change>-</Change>
            <Amount>3</Amount>
            <Change>+</Change>
          </ManipulateBox>
          <Price>${item.price}</Price>
        </AmmountBox>
      </Right>
    </Container>
  );
};

export default SingleCartItem;
