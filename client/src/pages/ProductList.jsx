import styled from 'styled-components'
import Navbar from '../components/Navbar'
import Announcement from '../components/Announcement'
import Products from '../components/Products'
import Newsletter from '../components/Newsletter'
import Footer from '../components/Footer'
import { mobile } from "../responsive";
import { useLocation } from 'react-router-dom'
import { useState } from 'react'


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
    const location = useLocation();
    const cat = location.pathname.split("/")[2];
    const [filters, setFilters] = useState({})
    const [sort, setSort] = useState("newest")

    const handleFilters = (e) =>{
        const value = e.target.value;
        setFilters({
            ...filters,
            [e.target.name]: value,
        })
        
    }


    return (
        <Container>
            <Navbar />
            <Announcement />
            <Title>{cat}</Title>
            <FilterContainer>
                <Filter>
                    <FilterText>Filter Styles:</FilterText>
                    <Select name="colour" onChange={handleFilters}>
                        <Option>
                            Colour
                        </Option>
                        <Option>Red</Option>
                        <Option>Blue</Option>
                        <Option>Green</Option>
                        <Option>Tan</Option>
                        <Option>Pink</Option>
                        <Option>Black</Option>
                    </Select>
                    <Select name="size" onChange={handleFilters}>
                        <Option>
                            Size
                        </Option>
                        <Option>XS</Option>
                        <Option>S</Option>
                        <Option>M</Option>
                        <Option>L</Option>
                        <Option>XL</Option>
                        <Option>XXL</Option>
                    </Select>
                </Filter>
                <Filter>
                    <FilterText>Sort Clothes:</FilterText>
                    <Select name="sort" onChange={(e)=>setSort(e.target.value)}>
                        <Option value={"newest"}>
                            Newest
                        </Option>
                        <Option value={"asc"}>Price (asc)</Option>
                        <Option value={"desc"}>Price (dec)</Option>
                    </Select>
                </Filter>
            </FilterContainer>
            <Products cat={cat} filters={filters} sort={sort} />
            <Newsletter />
            <Footer />
        </Container>
    )
}

export default ProductList