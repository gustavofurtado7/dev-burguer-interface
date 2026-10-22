import styled from 'styled-components';
import BannerHamburguer from '../../assets/banner-hamburguer.svg';
import Background from '../../assets/background.svg';
import { Link } from 'react-router-dom';

export const Container = styled.div`
    width: 100%;
    min-height: 100vh;
    background-color: #F0F0F0;
        background: linear-gradient(
            rgba(255,255,255,0.5), 
            rgba(255,255,255,0.5)
            ),
        url('${Background}');
        height: 500px;

`;

export const Banner = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;

    background: url('${BannerHamburguer}') no-repeat;
    background-color: #1f1f1f;
    background-position: center;
    background-size: cover;
    width: 100%;

    h1{
        font-family: 'Road Rage', sans-serif;
        font-size: 80px;
        line-height: 65px;
        color: #f4f4f4;
        position: absolute;
        right: 20%;
        top: 30%;

        span{
            display: block;
            color: #fff;
            font-size: 20px;
        }
    }
`;

export const CategoryMenu = styled.div`
    display: flex;
    justify-content: center;
    gap: 50px;
    margin-top: 30px;


`;

export const CategoryButton = styled(Link)`
    text-decoration: none;
    cursor: pointer;
    background: none;
    color: ${(props) => (props.isCategoryActive ? '#9758a6' : '#767677ff')};
    font-size: 24px;
    font-weight: 500;
    padding-bottom: 5px;
    line-height: 20px;
    border: none;
    border-bottom: ${(props) => props.isCategoryActive && '3px solid #9758a6'};
 

`;

export const ProductsContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    padding: 40px;
    gap: 60px;
    justify-content: center;
    max-width: 1280px;
    margin: 50px auto 0;

`;
