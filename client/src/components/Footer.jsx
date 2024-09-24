import styled from 'styled-components'
import { Facebook, Instagram, Twitter, Room, Phone, MailOutline } from '@mui/icons-material'
import { mobile } from "../responsive";


const Container = styled.div`
    display: flex;
    ${mobile({ flexDirection: "column" })}
`

const Left = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    padding: 20px;
`

const Center = styled.div`
    flex: 1;
    padding: 20px;
    ${mobile({ display: "none" })}
`

const Title = styled.h3`
    margin-bottom: 30px;
`

const List = styled.ul`
    margin: 0;
    padding: 0;
    list-style: none;
    display: flex;
    flex-wrap: wrap;
`

const ListItem = styled.li`
    width: 50%;
    margin-bottom: 10px;
`

const Right = styled.div`
    flex: 1;
    padding: 20px;
    ${mobile({ backgroundColor: "#fff8f8" })}
`

const Logo = styled.h1`
    font-weight: bold;
`

const Description = styled.p`
    margin: 20px 0px;
`

const SocialContainer = styled.h1`
    display: flex;
`

const SocialIcon = styled.div`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    color: white;
    background-color: #${props=>props.color};
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 20px;
`

const ContactItem = styled.div`
    margin-bottom: 20px;
    display: flex;
    align-items: center;
`

const Payment = styled.img`
    width: 50%
`


const Footer = () => {
  return (
    <Container>
        <Left>
            <Logo>RentAM!</Logo>
            <Description>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Neque modi quasi hic vel sapiente autem aspernatur eveniet accusamus .
            </Description>
            <SocialContainer>
                <SocialIcon color="3B5999">
                    <Facebook />
                </SocialIcon>
                <SocialIcon color="E4405F">
                    <Instagram />
                </SocialIcon>
                <SocialIcon color="55ACEE">
                    <Twitter />
                </SocialIcon>
            </SocialContainer>
        </Left>
        <Center>
            <Title>Useful Links</Title>
            <List>
                <ListItem>Item 1</ListItem>
                <ListItem>Item 2</ListItem>
                <ListItem>Item 3</ListItem>
                <ListItem>Item 4</ListItem>
                <ListItem>Item 5</ListItem>
                <ListItem>Item 6</ListItem>
                <ListItem>Item 7</ListItem>
                <ListItem>Item 8</ListItem>
                <ListItem>Item 9</ListItem>
            </List>
        </Center>
        <Right>
            <Title>Contact</Title>
            <ContactItem>
                <Room style={{marginRight: '10px'}} />123 Accra Street
            </ContactItem>
            <ContactItem>
                <Phone style={{marginRight: '10px'}} />+233 1234 1234
            </ContactItem>
            <ContactItem>
                <MailOutline style={{marginRight: '10px'}} />contact@rentam.gh
            </ContactItem>
            <Payment src='https://i.ibb.co/Qfvn4z6/payment.png'/>
        </Right>
    </Container>
  )
}

export default Footer