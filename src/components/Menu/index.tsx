import React from 'react'
import { Container, Icon, Logo, Select} from './styles';
 import { FaShoppingCart } from 'react-icons/fa';
 import { AiOutlineUser } from 'react-icons/ai';
 import {IoIosRocket} from 'react-icons/io';
  
export default function index() {

    return (
        <Container >
            <Logo>
            <a href="/"><IoIosRocket size="60" color="#fff" /></a>
            <a href="/"><h1> Andromeda </h1></a>
            </Logo>
            <Select >
                <h1><a href="/celulares">Celulares</a></h1>
            </Select>
            <Icon>
            <a href="/user"><AiOutlineUser className="icone" role="button" size="40" color="#fff" /></a>
            <a href="#"><FaShoppingCart className="icone" role="button" size="40" color="#fff"/></a>
            </Icon>
        </Container>
    );
}
