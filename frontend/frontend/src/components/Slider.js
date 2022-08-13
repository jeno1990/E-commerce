import { ArrowLeftOutlined, ArrowRightOutlined } from "@mui/icons-material";
import { useState } from "react";
import styled from "styled-components";
import { Items } from "../items/data";

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  position: relative;
  overflow: hidden;
`;
const Arrow = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: white;
  cursor: pointer;
  position: absolute;
  top: 0;
  left: ${(props) => props.direction === "left" && "10px"};
  right: ${(props) => props.direction === "right" && "10px"};
  bottom: 0;
  margin: auto;
  opacity: 0.75;
  background-color: orange;
`;
const Wrapper = styled.div`
  height: 100%;
  background-color: ${(props) => props.bg};
  /* width: 80%; */
  /* text-align: center; */
  display: flex;
  align-items: center;
  margin: 30px 0;
  transition: all 1.5s ease;
  transform: translate(${(props) => props.slideIndex * -100}vw);
  /* overflow-x: hidden; */
`;
const Slide = styled.div`
  display: flex;
  width: 100vw;
  height: 100vh;
  align-items: center;
  background-color: ${(props) => props.bg};
`;
const ImgContainer = styled.div`
  flex: 1;
  height: 100%;
  text-align: center;
`;
const InfoContainer = styled.div`
  flex: 1;
  padding: 50px;
  margin-right: 30px;
`;
const Image = styled.img`
  
  height: 80%;
  align-items: center;
`;

const Title = styled.h1`
  font-size: 70px;
  font-weight: 900;
`;
const Desc = styled.p`
  margin: 50px 0;
  font-weight: 400;
  letter-spacing: 3px;
`;
const Button = styled.button`
  padding: 10px;
  font-size: 20px;
  cursor: pointer;
`;
const Slider = () => {
  const [slideIndex, setSlideIndex] = useState(0);
  const handleClick = (direction) => {
    if (direction === "left") {
      setSlideIndex(slideIndex > 0 ? slideIndex - 1 : 2);
      console.log('left')
    } else if (direction === "right") {
      setSlideIndex(slideIndex < 2 ? slideIndex + 1 : 0);
      console.log('right')
    }
  };
  return (
    <Container>
      <Wrapper slideIndex={slideIndex}>
        {Items.map((item) => (
          <Slide bg={item.bg} key={item.id}>
            <ImgContainer>
              <Image src={item.img} />
            </ImgContainer>
            <InfoContainer>
              <Title>{item.title}</Title>
              <Desc>{item.desc}</Desc>
              <Button>SHOW NOW</Button>
            </InfoContainer>
          </Slide>
        ))}
      </Wrapper>
      <Arrow direction="left" onClick={() => handleClick("left")}>
        <ArrowLeftOutlined />
      </Arrow>
      <Arrow direction="right" onClick={() => handleClick("right")}>
        <ArrowRightOutlined />
      </Arrow>
    </Container>
  );
};

export default Slider;
