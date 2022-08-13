import {
    CallRounded,
  Facebook,
  Instagram,
  LocalActivity,
  LocationOffRounded,
  LocationOnRounded,
  MailRounded,
  Pinterest,
  Twitter,
} from "@mui/icons-material";
import styled from "styled-components";

const Container = styled.div`
  margin-top: 30px;
  padding: 30px;
  height: 40vh;
  background-color: #f5fbf5;
  display: flex;
`;
const Left = styled.div`
  flex: 1;
  padding: 30px;
`;
const Center = styled.div`
  flex: 1;
  padding: 30px;
`;
const Right = styled.div`
  flex: 1;
  padding: 30px;
`;
const IconWrapper = styled.div`
  width: 40px;
  height: 40px;
  padding: 10px;
  border-radius: 50%;
  cursor: pointer;
`;
const Title = styled.h1`
  margin-bottom: 40px;
`;
const Desc = styled.p``;
const Icons = styled.i`
  margin-top: 30px;
  display: flex;
`;
const Header = styled.h2`
  margin-bottom: 30px;
`;
const List = styled.ul`
  list-style: none;
  display: flex;
  flex-wrap: wrap;
`;
const List2 = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
`;

const Listitem = styled.li`
  cursor: pointer;
  margin-bottom: 10px;
  width: 50%;
`;
const SimpleInfo = styled.li`
`;
const Footer = () => {
  return (
    <Container>
      <Left>
        <Title>Jeno</Title>
        <Desc>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at urna
          velit. Nam molestie, velit vel sollicitudin semper, felis lorem
          pulvinar purus, nec posuere dolor libero in lectus. Nunc ornare urna
          at nulla fermentum, ac feugiat orci porttitor. Cras congue scelerisque
          sagittis. Proin lacinia finibus hendrerit. Donec sit amet viverra
          turpis. Cras tempor, arcu sed convallis dignissim,",
        </Desc>
        <Icons>
          <IconWrapper>
            <Facebook />
          </IconWrapper>
          <IconWrapper>
            <Instagram />
          </IconWrapper>
          <IconWrapper>
            <Twitter />
          </IconWrapper>
          <IconWrapper>
            <Pinterest />
          </IconWrapper>
        </Icons>
      </Left>
      <Center>
        <Header>Useful links</Header>
        <List>
          <Listitem>Home</Listitem>
          <Listitem>Cart</Listitem>
          <Listitem>Man Fashion</Listitem>
          <Listitem>Accessories</Listitem>
          <Listitem>My Account</Listitem>
          <Listitem>Order Tracking</Listitem>
          <Listitem>Terms</Listitem>
          <Listitem>Accessories</Listitem>
          <Listitem>My Account</Listitem>
          <Listitem>Order Tracking</Listitem>
          <Listitem>Terms</Listitem>
        </List>
      </Center>
      <Right>
        <Title>Contacts</Title>
        <List2>
          <SimpleInfo>
            <LocationOnRounded />
            34 street , lalo
          </SimpleInfo>
          <SimpleInfo>
            <CallRounded />
            +251 965 4545
          </SimpleInfo>
          <SimpleInfo>
            <MailRounded />
            jeno@gmail.com
          </SimpleInfo>
        </List2>
      </Right>
    </Container>
  );
};

export default Footer;
