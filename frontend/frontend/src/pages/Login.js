import { Facebook, Google } from "@mui/icons-material"
import styled from "styled-components"

const Container = styled.div`
    /* background-image: image-set(''); */
    width: 100vw;
    height: 100vh;
    background: url('https://images.pexels.com/photos/4240087/pexels-photo-4240087.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1') ;
    opacity: 0.75;
    background-size: cover;
    
`
const Wrapper = styled.div`
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

`
const Center = styled.div`
    padding: 20px;
    width: 25vw;
    height: 35vh;
    background-color: white;
    display: flex;
    flex-direction: column;
    align-items: center;
`
const Title = styled.h1`
    margin-bottom: 40px;
    font-weight: 200;
`
const Form = styled.form`
    height: 20vh;
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    
`
const Input = styled.input`
    width: 250px;
    padding: 10px;
    margin-bottom: 15px;
    margin-right: 10px;
    border: 1px solid teal;
`
const Agreement = styled.p`

`
const ThirdPartyWrap = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`
const ThirdParty = styled.i`
    cursor: pointer;
    margin: 0 20px;
`
const Button = styled.button`
    width: 200px;
    padding: 10px;
    margin-top: 20px;
    /* border: 2.5px solid teal; */
    border: none;
    cursor: pointer;
`

const Login = () => {
  return (
    <Container>
        <Wrapper>
            <Center>
                <Title>Sign in</Title>
                <Form>
                    <Input placeholder="username"/>
                    <Input placeholder="password"/> 
                </Form>
                <ThirdPartyWrap>
                    <ThirdParty>
                        <Google />
                        <Facebook />
                    </ThirdParty>
                </ThirdPartyWrap>
                <Agreement>If you don't have an account <a href="/regiser">Sign up</a></Agreement>
                
                <Button>SIGN IN</Button>
            </Center>
        </Wrapper>
    </Container>
  )
}

export default Login