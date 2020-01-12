import styled from 'styled-components';

export const ButtonContainer = styled.button`
text-transform: capitalize;
font-size: 0.9rem;
background: ${props => props.cart ? 'var(--mainWhite)' : 'var(--lightBlue)'};
border: 0.05rem solid black;
border-color: ${props => props.cart ? 'black' : 'black'};
color: ${props => props.cart ? 'black' : 'black' };
padding: 0.5rem 1.8rem;
cursor: pointer;
margin:0.2rem 0.5rem  0.2rem 0;
transition: all 0.5s ease-in-out;
&:hover{
    background: ${props => props.cart ? 'var(--lightBlue)' : 'var(--mainWhite)' };
    color: black;
    border-color: black;
}
&:focus{
    outline:none;
}
`;