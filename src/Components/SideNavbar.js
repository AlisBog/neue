import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

export default function SideNavbar() {
    return (
        <SideNavWrapper className="side">
            <div className="text-capitalized">

                <ul className="viewall">
                    <Link to="/products">
                        <span className="viewall">view all</span>
                    </Link>
                </ul>
                <ul className="bybrand">
                    <span className="font-weight-bold">shop by brand</span>
                    <li className="hmproducts">
                        <Link to={{
                            pathname: '/hmproducts',
                            state: {
                                value: "h&m home"
                            }
                        }}>
                            h&m home
                        </Link>
                    </li>
                    <li className="zaraproducts">
                        <Link to={{
                            pathname: '/zaraproducts',
                            state: {
                                value: "zara home"
                            }
                        }}>
                            zara home
                        </Link>
                    </li>
                </ul>
                <ul className="byroom">
                    <span className="font-weight-bold">shop by room</span>
                    <li className="bedroom">
                        <Link to={{
                            pathname: '/bedroom',
                            state: {
                                value: "bedroom"
                            }
                        }}>
                            bedroom
                        </Link>
                    </li>
                    <li className="kitchen">
                        <Link  to={{
                            pathname: '/kitchen',
                            state: {
                                value: "kitchen"
                            }
                        }}>
                            kitchen
                        </Link>
                    </li>
                    <li className="livingroom">
                        <Link to={{
                            pathname: '/livingroom',
                            state: {
                                value: "livingroom"
                            }
                        }}>
                            living room
                        </Link>
                    </li>
                    <li className="garden">
                        <Link to={{
                            pathname: '/garden',
                            state: {
                                value: "garden"
                            }
                        }}>
                            garden
                        </Link>
                    </li>
                    <li className="bathroom">
                        <Link to={{
                            pathname: '/bathroom',
                            state: {
                                value: "bathroom"
                            }
                        }}>
                            bathroom
                        </Link>
                    </li>
                    <li className="outdoor">
                        <Link to={{
                            pathname: '/outdoor',
                            state: {
                                value: "outdoor"
                            }
                        }}>
                            outdoor
                        </Link>
                    </li>
                </ul>
                <ul className="byproduct">
                    <span className="font-weight-bold">shop by product</span>
                    <li className="products">
                        <Link to="/products">
                            view all
                        </Link>
                    </li>
                    <li className="pillows">
                        <Link to={{
                            pathname: '/pillows',
                            state: {
                                value: "pillows"
                            }
                        }}>
                            pillows
                        </Link>
                    </li>
                    <li className="decoration">
                        <Link to={{
                            pathname: '/decoration',
                            state: {
                                value: "decoration"
                            }
                        }}>
                            decoration
                        </Link>
                    </li>
                    <li className="storage">
                        <Link to={{
                            pathname: '/storage',
                            state: {
                                value: "storage"
                            }
                        }}>
                            storage
                        </Link>
                    </li>
                    <li className="blankets">
                        <Link to={{
                            pathname: '/blankets',
                            state: {
                                value: "blankets"
                            }
                        }}>
                            blankets
                        </Link>
                    </li>
                    <li className="kitchenwear">
                        <Link to={{
                            pathname: '/kitchenwear',
                            state: {
                                value: "kitchenwear"
                            }
                        }}>
                            kitchenware
                        </Link>
                    </li>
                    <li className="candlescandleholders">
                        <Link to={{
                            pathname: '/candlescandleholders',
                            state: {
                                value: "candlesandcandleholders"
                            }
                        }}>
                            candles & candleholders
                        </Link>
                    </li>
                    <li className="homewear">
                        <Link to={{
                            pathname: '/homewear',
                            state: {
                                value: "homewear"
                            }
                        }}>
                            homewear
                        </Link>
                    </li>
                    <li className="pots">
                        <Link to={{
                            pathname: '/pots',
                            state: {
                                value: "pots"
                            }
                        }}>
                            pots
                        </Link>
                    </li>
                </ul>
            </div>
        </SideNavWrapper>
    )
}

const SideNavWrapper = styled.div`
    position: fixed;
    display:flex;
    align-items:center;
    span{
        text-transform: uppercase;;
    }
    ul {
        list-style: none;
    }
    li{
        text-transform:capitalize;
    }
    li a{
        color:black;
    }
    a:hover{
        color:var(--mainBlue);
    }
    .viewall{
        color:#55574d;
        &:hover{
            color:var(--mainBlue);
        }
    }
`;
