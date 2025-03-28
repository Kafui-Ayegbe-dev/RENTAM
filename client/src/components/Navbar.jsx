import styled from 'styled-components'
import { AddShoppingCartOutlined, Search } from '@mui/icons-material'
import Badge from '@mui/material/Badge';
import {mobile} from '../responsive'
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";



// this is how styling is done with styled components
const Container = styled.div`
    height: 60px;
    ${mobile({ height: "50px" })}
    
`
const Wrapper = styled.div`
    padding: 10px 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    ${mobile({ padding: "10px 0px" })}
`

const Left = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
`

const Center = styled.div`
    flex: 1;
    text-align: center;
`

const Right = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    ${mobile({ flex: 2, justifyContent: "center" })}
`
const Language = styled.span`
    font-size: 14px;
    cursor: pointer;
    ${mobile({ display: "none" })}
`

const SearchContainer = styled.div`
    border: 0.5px solid lightgray;
    display: flex;
    align-items: center;
    margin-left: 25px;
    padding: 5px;
`

const Input = styled.input`
    border: none;
    ${mobile({ width: "50px" })}
`

const Logo = styled.h1`
    font-weight: bold;
    ${mobile({ fontSize: "24px" })}
`
const MenuItem = styled.div`
    font-size: 14px;
    cursor: pointer;
    margin-left: 25px;
    ${mobile({ fontSize: "12px", marginLeft: "10px" })}
`


const Navbar = () => {
    const quantity = useSelector(state=>state.cart.quantity)

  return (
    <Container>
        <Wrapper>
            <Left>
                <Language>EN</Language>
                <SearchContainer>
                    <Input placeholder='Search'/>
                    <Search style={{color: "gray", fontSize:16}}/>
                </SearchContainer>
                </Left>
            <Center><Logo>TADAA!</Logo></Center>
            <Right>
                <MenuItem>REGISTER</MenuItem>
                <MenuItem>SIGN IN</MenuItem>
                <MenuItem>
                    <Badge badgeContent={quantity} color="primary">
                        <AddShoppingCartOutlined />
                    </Badge>
                </MenuItem>
            </Right>
        </Wrapper>
        
    </Container>
  )
}

export default Navbar