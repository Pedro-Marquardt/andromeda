import styled  from 'styled-components';
import media from 'styled-media-query';
import image from '../../../public/assets/andromeda-banner.jpg';

export  const Container = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    ${media.lessThan('medium')`
        flex-direction: column;
        margin-top:10rem;
    `}
`; 

export const Banner = styled.div`
    background-image: url('https://c4.wallpaperflare.com/wallpaper/527/535/672/andromeda-galaxy-universe-space-wallpaper-preview.jpg');
    width: 30%;
    height: 20rem;
    margin-top: 10rem;
    margin-left: 5rem;
    background-repeat: no-repeat;
    border-radius: 0.5rem;
    background-color: black;
    margin-bottom: 1rem;
    text-align: center;
    color: #fff;
    ${media.lessThan('medium')`
        width: 100%;
        margin-left:0;
    `}
`;

export const Banner3 = styled.div`
    background-image: url('https://media.istockphoto.com/vectors/vector-cosmic-illustration-beautiful-colorful-space-background-vector-id1203818959?k=6&m=1203818959&s=612x612&w=0&h=Wsi9teabd86aNrd3gbIlUjygfqQ7T83E2i3foxPH30U=');
    width: 30%;
    height: 20rem;
    margin-top: 10rem;
    margin-left: 3rem;
    background-repeat: no-repeat;
    border-radius: 0.5rem;
    background-color: black;
    margin-bottom: 10rem;
    margin-right: 4rem;
    ${media.lessThan('medium')`
         width: 100%;
        margin-left:0;
        margin-top:0;
    `}

`;


export const Banner2 = styled.div`
    background-image: url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcREwKCceBpSHGxAKwhcsTQthY1WOws4RaXn2Q&usqp=CAU');
    width: 30%;
    height: 20rem;
    margin-top: 10rem;
    margin-left: 3rem;
    background-repeat: no-repeat;
    border-radius: 0.5rem;
    background-color: black;
    margin-bottom: 10rem;
    ${media.lessThan('medium')`
        width: 100%;
        margin-left:0;
        margin-top: 0;
        margin-bottom:1rem;
    `}

`;
