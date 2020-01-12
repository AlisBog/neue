import React from 'react';
import img from '../img/hmgoepprod.jpg';
import styled from 'styled-components';

export default function Banner() {
    return (
        <BannerWrapper>
            <img src={img} alt="banner" className="img-fluid"></img>
        </BannerWrapper>
    )
}

const BannerWrapper = styled.div`
    img{
        height: 6rem;
        margin:0 75px 0 40px;
        
    }

`
