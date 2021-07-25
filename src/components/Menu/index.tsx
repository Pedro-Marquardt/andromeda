import React from 'react'
import { Container, Icon, Logo, Select} from './styles';
 import { FaShoppingCart } from 'react-icons/fa';
 import {AiOutlineUser} from 'react-icons/ai';
 import {IoIosRocket} from 'react-icons/io';
  
export default function index() {

    return (
        <Container >
            <Logo>
            <IoIosRocket size="60" color="#fff" />
            <h1> Andromeda </h1>
            </Logo>
            <Select >
                <h1><a href="">Celulares</a></h1>
                <h1><a href="">Notebook's</a></h1>
            </Select>
            <Icon>
            <AiOutlineUser className="icone" role="button" size="40" color="#fff" />
            <FaShoppingCart className="icone" role="button" size="40" color="#fff"/>
            </Icon>
        </Container>
    );
}
