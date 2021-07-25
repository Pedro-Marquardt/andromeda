import React, {useState, useEffect}  from 'react';
import { Container } from './style';
import api from '../../services/api';
import Menu from   '../../components/Menu';
import Footer from '../../components/Footer';

export default function Home() {

    return (
        <Container>
            <Menu />
            <Footer />
        </Container>
    )
}
