import React from 'react'
import Form from '../../components/FormUser';
import Menu from '../../components/Menu';
import Footer from '../../components/Footer';
import * as S from './styles';

export default function index() {
    return (
        <S.Container>
            <Menu />
            <S.Tittle>
                <h2>Cadastre-se para Receber as Melhores Promoções!!</h2>
            </S.Tittle>
            <Form />
            <Footer />
        </S.Container>
    )
}
