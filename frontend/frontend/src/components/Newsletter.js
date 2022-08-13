import { Send } from "@mui/icons-material"
import styled from "styled-components"

const Container = styled.div`
    height: 50vh;
    background-color: #fcf5f5;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    
`
const Title = styled.h1`
    font-size: 70px;
    margin: 40px;
    font-weight: 800;
`
const Desc = styled.p`
    font-size: 30px;
    font-weight: 300;
    margin-bottom: 20px;

`
const InputContainer = styled.div`
    width: 50%;
    background-color: white;
    height: 40px;
    display: flex;
    justify-content: space-between;
    border: 1px solid lightgray;
`
const Input = styled.input`
    border: none;
    flex: 12;
`
const Icon = styled.i`
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
    background-color: teal;
`

const Newsletter = () => {
  return (
    <Container>
        <Title>Newsletter</Title>
        <Desc>Get timley updates from yout facorite products</Desc>
        <InputContainer>
            <Input placeholder="your input"></Input>
            <Icon>
                <Send />
            </Icon>
        </InputContainer>
    </Container>
  )
}

export default Newsletter