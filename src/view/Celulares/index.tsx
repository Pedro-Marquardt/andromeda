/* eslint-disable react-hooks/rules-of-hooks */
import React, {useEffect, useState} from 'react'
import * as S from './styles';
import Menu from '../../components/Menu';
import Footer from '../../components/Footer';
import api from '../../services/api';
export default function index() {

    interface IProduct{
        id: number;
        name: string;
        photo: string;
        description: string;
        price: number;
    }


    const [data, setDate] = useState<IProduct[]>([]);

    useEffect(() => {
        api.get('').then(
            response => {
                setDate(response.data)
            }
        )
    }, [])


    const handleCart = (index : number) =>{

        const productStore = JSON.stringify(data[index])

        localStorage.setItem(`@Produto-${index}`, productStore);
        
    }


    return (
        <S.Container>
            <Menu />
                <section>
            {data.map((prod, index) => (
                 <div className="product-content" key={prod.id}>
                    <img  src={prod.photo} alt="imagem produto" width="200" height="auto"/>
                    <h4>{prod.name}</h4>
                    <span>{prod.description}</span>
                    <h6>R$ {prod.price}</h6>
                    <button onClick={() =>handleCart( index )}>Adicionar ao carrinho</button>
                </div>
                ))}
                </section>
            <Footer /> 
        </S.Container>
    )
}
