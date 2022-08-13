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
    width: 35vw;
    height: 40vh;
    background-color: white;
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
    padding: 10px;
    margin-bottom: 15px;
    margin-right: 10px;
    border: 1px solid teal;
`
const Agreement = styled.p`

`
const Button = styled.button`
    width: 200px;
    padding: 10px;
    margin-top: 20px;
    /* border: 2.5px solid teal; */
    border: none;
    cursor: pointer;
`

const Register = () => {
  return (
    <Container>
        <Wrapper>
            <Center>
                <Title>Create An Account</Title>
                <Form>
                    <Input placeholder="name"/>
                    <Input placeholder="username"/>
                    <Input placeholder="password"/> 
                    <Input placeholder="last name"/>
                    <Input placeholder="email"/>
                    <Input placeholder="confirm password"/>
                </Form>
                <Agreement>by creating an count I concent the personal data in accordance with the <b>PRIVACY POLICEY<b></b></b></Agreement>
                <Button>Create</Button>
            </Center>
        </Wrapper>
    </Container>
  )
}

export default Register