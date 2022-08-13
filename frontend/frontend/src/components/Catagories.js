import styled from "styled-components"
import CatagoryItem from "./CatagoryItem"
import { ItemsList } from './../items/catagoryItems'
const Container = styled.div`
    display: flex;
    padding: 20px;
    justify-content: space-between;
`

 const Catagories = () => {
  return (
    <Container>
        {ItemsList.map((item)=>(
            <CatagoryItem item={item} key={item.id}/>
        ))}
    </Container>
  )
}

export default Catagories