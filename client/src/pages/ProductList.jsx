import styled from 'styled-components'
import Navbar from '../components/Navbar'
import Announcement from '../components/Announcement'
import Products from '../components/Products'
import Newsletter from '../components/Newsletter'
import Footer from '../components/Footer'
import { mobile } from "../responsive";


const Container = styled.div`
    // height: 60vh;
    // background-color: #fcf5f5;
    // display: flex;
    // align-items: center;
    // justify-content: center;
    // flex-direction: column;
`

const FilterContainer = styled.div`
    display: flex;
    justify-content: space-between;
`
const Filter = styled.div`
    margin: 20px;
    ${mobile({ width: "0px 20px", display: "flex", flexDirection: "column" })}
`
const Title = styled.h1`
    margin: 20px;
`

const FilterText = styled.span`
    font-size: 20px;
    font-weight: 600;
    margin-right: 20px;
    ${mobile({ marginRight: "0px" })}
`

const Select = styled.select`
    padding: 10px;
    margin-right: 20px;
    ${mobile({ margin: "10px 0px" })}
`

const Option = styled.option`
    
`

const OptionNoSelect = styled.option`
    font-style: italic;
    color: red;
`

const ProductList = () => {
  return (
    <Container>
        <Navbar />
        <Announcement />
        <Title>Cars </Title>
        <FilterContainer>
            <Filter>
                <FilterText>Filter Cars:</FilterText>
                <Select>
                    <OptionNoSelect disabled selected>
                        Brand
                    </OptionNoSelect>
                    <Option>Toyota</Option>
                    <Option>Mercedes</Option>
                    <Option>Honda</Option>
                    <Option>Volkswagon</Option>
                    <Option>Tata</Option>
                    <Option>Mazda</Option>
                </Select>
                <Select>
                    <OptionNoSelect disabled selected>
                        Colour
                    </OptionNoSelect>
                    <Option>Red</Option>
                    <Option>Orange</Option>
                    <Option>Yellow</Option>
                    <Option>Green</Option>
                    <Option>Blue</Option>
                    <Option>Violet</Option>
                </Select>
            </Filter>
            <Filter>
                <FilterText>Sort Cars:</FilterText>
                <Select>
                    <Option selected>
                        Newest
                    </Option>
                    <Option>Price (asc)</Option>
                    <Option>Price (dec)</Option>
                </Select>
            </Filter>
        </FilterContainer>
        <Products />
        <Newsletter />
        <Footer />
    </Container>
  )
}

export default ProductList