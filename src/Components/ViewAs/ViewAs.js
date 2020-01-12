import React from 'react';
import styled from 'styled-components';
import { ProductConsumer } from '../../context';
import thumbnail1 from '../../img/thumbnails1.png';
import thumbnail2 from '../../img/thumbnails2.png';


export default function ViewAs() {
    return (  
        <ViewWrapper>
            <ProductConsumer>
                {(value) => {
                    return(
                    <div className="row">
                        <div className="col-3 col-lg-2"></div>
                        <div className="view col-9 col-lg-10 d-flex justify-content-end pt-2">
                            <div className="itemsNum pr-4">{value.products.length} Items</div>
                            <a href="#"><img className="thumbnail" alt="view2" src={thumbnail2} onClick={() => value.handleView('small')}></img></a>
                            <a href="#"><img className="thumbnail" alt="view1" src={thumbnail1} onClick={() => value.handleView('large')}></img></a>
                        </div>
                    </div>)
                }}
            </ProductConsumer>
        </ViewWrapper>
    )
}

const ViewWrapper = styled.div`
    .view.col-9.col-lg-10{
        padding-right:55px;
    }
    .thumbnail{
        width:15px;
        height:15px;
        padding-bottom:0;
        margin-left:15px;
    }
    a:hover{
        text-decoration:underline;
        text-decoration-color:var(--mainBlue);
    }
    a:link {
        color: green;
    }
    a:active {
        text-decoration:underline;
        text-decoration-color:var(--mainBlue);
    }
    .itemsNum{
        font-weight:500;
    }
`
