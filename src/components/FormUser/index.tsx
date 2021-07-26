/* eslint-disable react-hooks/rules-of-hooks */
import React, {useState} from 'react'
import * as S from './styles';
import moment from 'moment';


export default function index() {
    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [data, setData] = useState('');

    function submit() {
        console.log("eu aqui");
        setData(moment().format("YYYY/MM/DD HH:mm"));
        
        const user ={
            nome, 
            email,
            data,
        }

        const convertUser = JSON.stringify(user);
        localStorage.setItem('lead', convertUser);

    }

    console.log(nome);
    console.log(email);
    return (
        <S.Container>
            <input type="text" placeholder="nome" onChange={event => setNome(event.target.value)} />
            <input type="text" placeholder="email" onChange={event => setEmail(event.target.value)} /><br />
            <button onClick={() => submit()}>Enviar !!</button>
        </S.Container>
    )
}
