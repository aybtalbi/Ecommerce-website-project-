import {Search, ShoppingCartOutlined} from '@material-ui/icons'
import React from 'react'
import styled from 'styled-components'
import {Badge} from "@mui/material";


const Container = styled.div`
height:60px;
`

const Wrapper = styled.div`
padding: 10px 20px;
display: flex;
align-items: center;
justify-content: space-between;

`

const Left = styled.div`
flex: 1;
display:flex;
align-items: center;
`
const Center = styled.div`
flex: 2;
`
const Right = styled.div`
flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`

const Language = styled.div`
   font-size : 14px;
   cursor: pointer;
`

const SearchContainer = styled.div`
   border: 1px solid lightgray;
   display: flex;
   align-items: center;
   margin-left: 25px;
   padding: 5px;
`
const Input = styled.input`
border: none;
`

const Logo = styled.h1`
    font-weight: bold;
    text-align: center;
`

const MenuItems = styled.div`
    font-size: 14px;
    cursor: pointer;
  margin-left: 25px;
`

function NavBar() {
    return (
        <Container>
            <Wrapper>
                <Left>
                    <Language>EN</Language>
                    <SearchContainer>
                        <Input></Input>
                        <Search style={{color:"gray",fontSize:16}} />
                    </SearchContainer>
                </Left>
                <Center><Logo>DEKU</Logo></Center>
                <Right>
                    <MenuItems>REGISTER</MenuItems>
                    <MenuItems>SIGN IN</MenuItems>
                    <MenuItems>
                        <Badge badgeContent={4} color="primary">
                            <ShoppingCartOutlined/>
                        </Badge>
                    </MenuItems>
                </Right>
            </Wrapper>
        </Container>
    )
}

export default NavBar