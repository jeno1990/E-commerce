import { useEffect,useState } from "react"
import styled from "styled-components"
import Announcment from "../components/Announcment"
import Footer from "../components/Footer"
import Navbar from "../components/Navbar"
import Newsletter from "../components/Newsletter"
import { pubReq } from "../requests"
import { useDispatch } from "react-redux"
import { addProduct } from "../redux/cartRedux"

const Container = styled.div`
    
`
const Body = styled.div`
    margin: 40px;
    height: 80vh;
    display: flex;

`
const Left = styled.div`
    height: 100%;
    margin-right: 30px;
    flex: 1;
`
const Right = styled.div`

    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
`
const Image = styled.img`
    height: 100%;
    padding: 20px;
    object-fit: cover;
`
const Title = styled.h1`
    font-style: 70px;
    font-weight: 800;
    /* margin-bottom: 30px; */
`
const Desc = styled.p`
    font-size: 20px;
    font-weight: 500;
    margin-right: 30px;
    padding: 20px;
`
const Price = styled.h2`
    margin: 20px;
    font-size: 35px;
    font-weight: 300 ;
`
const Info = styled.div`
    width: 50%;
    margin: 30px 0;
    display: flex;
    justify-content: space-evenly;
`
const Color = styled.div`
    margin-top: 2px;
    font-weight: 200;
    display: flex;
`
const Size = styled.div`
    font-weight: 200;
`
const Circle = styled.div`
    cursor: pointer;
    height: 20px;
    width: 20px;
    background-color: ${props=>props.color};
    border-radius: 50%;
    margin-left: 10px;
`
const Select = styled.select`
    margin-left: 10px;
    padding: 5px;

`

const Options = styled.option`

`

const Add = styled.div`
    display: flex;
`
const Change = styled.span`
    font-size: 30px;
    font-weight: 900;
    margin: 0 10px;
    cursor:pointer;
`

const Amount = styled.span`
    width: 30px;
    height: 30px;
    border-radius: 10%;
    display: flex;
    justify-content: center;
    align-items: center;
    border: 1px solid gray;
`
const Button = styled.button`
    margin: 0 30px;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 30%;
    border: 1px solid teal;
    cursor: pointer;
    font-weight: 500;
`
const Product = () => {
    
  const id = window.location.pathname.split("/")[2]
  const [product , setProduct] = useState({}) 
  const [quantity , setQuantity]=useState(1)
 
  const dispatch = useDispatch()

  const increaseQuantity = ()=>{
    setQuantity(quantity+1) 
  }

  const decreaseQuantity = ()=>{
    quantity > 0 ? setQuantity(quantity-1): setQuantity(0)
  }

  const updateCart = () =>{
    dispatch(addProduct({product , quantity ,price: product.price*quantity}))
  }

  useEffect(()=>{
    const getProduct = async ()=>{
        try {
            const res = await pubReq.get('products/getproduct/'+id)
            console.log(res.data)
            setProduct(res.data)
        } catch (error) {
            console.log(error)
        }
    }
    getProduct()
  },[id]);  
  return (
    <Container>
        <Navbar />
        <Announcment />
        <Body>
            <Left>
                <Image src={product.img} />
            </Left>
            <Right>
                <Title>{product.title}</Title>
                <Desc>{product.desc}</Desc>
                <Price>{product.Price}</Price>
                <Info>
                    <Color>
                        Color
                        <Circle color={product.color}></Circle>
                    </Color>
                    <Size>
                        Size
                        <Select>
                            <Options>{product.size}</Options>
                            <Options>S</Options>
                            <Options>M</Options>
                            <Options>X</Options>
                            <Options>XL</Options>
                            <Options>XXL</Options>
                        </Select>
                    </Size>
                </Info>
                <Add>
                    <Change onClick={decreaseQuantity}>-</Change>
                    <Amount>{quantity}</Amount>
                    <Change onClick={increaseQuantity}>+</Change>
                    <Button onClick={updateCart}>Add to Cart</Button>
                </Add>
                
            </Right>
        </Body>
        <Newsletter />
        <Footer />
    </Container>
  )
}

export default Product