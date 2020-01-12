import React from 'react';
import styled from 'styled-components';

export default function Spinner() {
    return (
        <SpinnerWrapper>
            <div className="white-bg text-center">
                <div className="spinner spinner-grow" role="status">
                    <span className="sr-only">Loading...</span>
                </div>
            </div>
        </SpinnerWrapper>
    )
}


const SpinnerWrapper = styled.div`
    position:absolute;
    .white-bg{
        z-index:150;
        width:100vw;
        height:100vh;
        background-color:white;
        display:flex;
        justify-content:center;
        align-items:center;
    }
    div .spinner{
        width:3rem;
        height:3rem;
        margin:auto;
        z-index:200;
    }
`