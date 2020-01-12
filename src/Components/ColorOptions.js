import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';




export default function ColorOptions({ value, product }) {

    const { id, variantT, variant } = product;

    const colorPalette = (variant, variantT) => {
        const arr = [];
        for(let i = 0; i < variantT; i++){
            arr.push(
                <div className="circle-container" 
                data-toggle="tooltip" 
                data-placement="top" 
                title={variant[i].colorT} 
                onClick={() => value.handleDetail(id, variant[i].colorT)}>
                    <Div className="dot ml-2" color={variant[i].color}/>
                </div>
            );
        };
        return arr;
    }
    return (  
        <ColorCircle>
            <Link to="/details">
                {colorPalette(variant, variantT).map(item => item)}
            </Link>
        </ColorCircle>
    )
}; 


const ColorCircle = styled.div`
    .circle-container{
        display: inline-block;
        background-color: transparent;
        &:hover{
            cursor: pointer;
        }
    }
`
const Div = styled.div`
    background-color: ${props => props.color};
    height: 12px;
    width: 12px;
    border: 1px solid grey;
    border-radius: 50%;
    display: inline-block;
    z-index: 99;
    &:hover{
        cursor: pointer;
    }

    
`

