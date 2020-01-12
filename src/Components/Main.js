import React, { Component } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';


export default class Main extends Component {
  render() {

    return (
    <Mainwrapper>
        <Link to="/products">
        
        <div className="bg"></div>
        <div className="border-box"></div>
        <div className="box-fill"></div>
        <div className="logo">Neue</div>
        <div className="rights">by Gensler GROUP<i class="far fa-copyright fa-2x"></i></div>
        </Link>

        <div class="hero">
            <div class="snow">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1536" preserveAspectRatio="xMidYMax slice">
                    <g fill="#FFF" fill-opacity=".15" transform="translate(55 42)">
                    <g id="snow-bottom-layer">
                        <ellipse cx="6" cy="1009.5" rx="6" ry="5.5"/>
                        <ellipse cx="138" cy="1110.5" rx="6" ry="5.5"/>
                        <ellipse cx="398" cy="1055.5" rx="6" ry="5.5"/>
                        <ellipse cx="719" cy="1284.5" rx="6" ry="5.5"/>
                        <ellipse cx="760" cy="1155.5" rx="6" ry="5.5"/>
                        <ellipse cx="635" cy="1459.5" rx="6" ry="5.5"/>
                        <ellipse cx="478" cy="1335.5" rx="6" ry="5.5"/>
                        <ellipse cx="322" cy="1414.5" rx="6" ry="5.5"/>
                        <ellipse cx="247" cy="1234.5" rx="6" ry="5.5"/>
                        <ellipse cx="154" cy="1425.5" rx="6" ry="5.5"/>
                        <ellipse cx="731" cy="773.5" rx="6" ry="5.5"/>
                        <ellipse cx="599" cy="874.5" rx="6" ry="5.5"/>
                        <ellipse cx="339" cy="819.5" rx="6" ry="5.5"/>
                        <ellipse cx="239" cy="1004.5" rx="6" ry="5.5"/>
                        <ellipse cx="113" cy="863.5" rx="6" ry="5.5"/>
                        <ellipse cx="102" cy="1223.5" rx="6" ry="5.5"/>
                        <ellipse cx="395" cy="1155.5" rx="6" ry="5.5"/>
                        <ellipse cx="826" cy="943.5" rx="6" ry="5.5"/>
                        <ellipse cx="626" cy="1054.5" rx="6" ry="5.5"/>
                        <ellipse cx="887" cy="1366.5" rx="6" ry="5.5"/>
                        <ellipse cx="6" cy="241.5" rx="6" ry="5.5"/>
                        <ellipse cx="138" cy="342.5" rx="6" ry="5.5"/>
                        <ellipse cx="398" cy="287.5" rx="6" ry="5.5"/>
                        <ellipse cx="719" cy="516.5" rx="6" ry="5.5"/>
                        <ellipse cx="760" cy="387.5" rx="6" ry="5.5"/>
                        <ellipse cx="635" cy="691.5" rx="6" ry="5.5"/>
                        <ellipse cx="478" cy="567.5" rx="6" ry="5.5"/>
                        <ellipse cx="322" cy="646.5" rx="6" ry="5.5"/>
                        <ellipse cx="247" cy="466.5" rx="6" ry="5.5"/>
                        <ellipse cx="154" cy="657.5" rx="6" ry="5.5"/>
                        <ellipse cx="731" cy="5.5" rx="6" ry="5.5"/>
                        <ellipse cx="599" cy="106.5" rx="6" ry="5.5"/>
                        <ellipse cx="339" cy="51.5" rx="6" ry="5.5"/>
                        <ellipse cx="239" cy="236.5" rx="6" ry="5.5"/>
                        <ellipse cx="113" cy="95.5" rx="6" ry="5.5"/>
                        <ellipse cx="102" cy="455.5" rx="6" ry="5.5"/>
                        <ellipse cx="395" cy="387.5" rx="6" ry="5.5"/>
                        <ellipse cx="826" cy="175.5" rx="6" ry="5.5"/>
                        <ellipse cx="626" cy="286.5" rx="6" ry="5.5"/>
                        <ellipse cx="887" cy="598.5" rx="6" ry="5.5"/>
                    </g>
                    </g>
                    <g fill="#FFF" fill-opacity=".3" transform="translate(65 63)">
                    <g id="snow-top-layer">
                        <circle cx="8" cy="776" r="8"/>
                        <circle cx="189" cy="925" r="8"/>
                        <circle cx="548" cy="844" r="8"/>
                        <circle cx="685" cy="1115" r="8"/>
                        <circle cx="858" cy="909" r="8"/>
                        <circle cx="874" cy="1438" r="8" transform="rotate(180 874 1438)"/>
                        <circle cx="657" cy="1256" r="8" transform="rotate(180 657 1256)"/>
                        <circle cx="443" cy="1372" r="8" transform="rotate(180 443 1372)"/>
                        <circle cx="339" cy="1107" r="8" transform="rotate(180 339 1107)"/>
                        <circle cx="24" cy="1305" r="8" transform="rotate(180 24 1305)"/>
                        <circle cx="8" cy="8" r="8"/>
                        <circle cx="189" cy="157" r="8"/>
                        <circle cx="548" cy="76" r="8"/>
                        <circle cx="685" cy="347" r="8"/>
                        <circle cx="858" cy="141" r="8"/>
                        <circle cx="874" cy="670" r="8" transform="rotate(180 874 670)"/>
                        <circle cx="657" cy="488" r="8" transform="rotate(180 657 488)"/>
                        <circle cx="443" cy="604" r="8" transform="rotate(180 443 604)"/>
                        <circle cx="339" cy="339" r="8" transform="rotate(180 339 339)"/>
                        <circle cx="24" cy="537" r="8" transform="rotate(180 24 537)"/>
                    </g>
                    </g>
                </svg>
            </div>
        </div>
      </Mainwrapper>
      )
  }}


  const Mainwrapper = styled.div`
    .bg{
        width: 100vw;
        height: 85vh;
        display: flex;
        position: absolute;
        margin-top: 7vh;
        justify-content: center;
        background-image: url(https://artemest-spree-production-cdn.s3.amazonaws.com/italian_luxury_handmade_home-decor_and_furniture-398788a0-9f42-4d34-b326-6cde3e5f60ca.jpeg);
        background-position: center center; 
        background-size: cover;
        z-index: 1;
        box-sizing: border-box;
        animation: slide 60s linear infinite;
    }

    @keyframes slide {
    from { background-position: 0 0; }
    to { background-position: -100vw 0; }
    }

    .border-box{
        margin:0;
        position: fixed;
        display: block;
        width: 450px;
        height: 350px;
        top: calc(50% - 225px);
        left: calc(50% - 225px);
        background: transparent;
        opacity: 1;
        z-index:100;
        border: 10px solid white;
        cursor:pointer;
        transition:all 1s;
        &:after,&:before{
		    content:" ";
            width:105%;
            height:105%;
            position:absolute;
            border :0px solid #fff;
            transition:all 1s;
        }
        &:after{
            top:-1px;
            left:-1px;
            border-top:15px solid black;
            border-left:15px solid black;
        }
        &:before{
            bottom:-1px;
            right:-1px;
            border-bottom:15px solid black;
            border-right:15px solid black;
        }
        &:hover{
            &:before,&:after{
                
                width:40px;
                height:40px;

            }
	    }
    }
    .box-fill{
        margin:0;
        position: fixed;
        display: block;
        justify-content:center;
        align-items: center;
        width: 450px;
        height: 350px;
        top: calc(50% - 225px);
        left: calc(50% - 225px);
        background: white;
        opacity: 0.8;
        z-index:99;
    }

    .logo{
        width: 160px;
        height: 200px;
        position: absolute;
        top: calc(50% - 120px);
        left: calc(50% - 130px);
        text-decoration:underline;
        text-decoration-color: black;
        text-shadow: 2px 2px var(--lightBlue);
        z-index:200;
        font-size:95px;
        color:black;
    }
    .rights{
        position:absolute;
        bottom:0;
        right:0;
        color:black;
        margin-left:10px;
        margin-right:10px;
        font-weight:bold;
        font-size:18px;
        padding-bottom:10px;
        .far{
            font-size:16px;
            margin-left:10px;
        }
    }



    .hero {
        min-height: 100vh;
        position: relative;
        overflow: hidden;
        display: flex;
        justify-content: center;
        align-content: center;
        
        &__content {
            position: relative;
            align-self: center;
            padding: 3rem 0;
        }
    }

    .snow {
        position: absolute;
        min-width: 100vw;
        min-height: 100vh;
        height: 100%;
        width: 100%;
        top: 0;
        left: 0;
        z-index:50;
    }

    #snow-top-layer {
        will-change: transform;
        transform: translateY(-768px);
        animation: fall 22.5s infinite linear;
    }

    #snow-bottom-layer {
        will-change: transform;
        transform: translateY(-768px);
        animation: fall 45s infinite linear;
    }

    @keyframes fall {
        
        100% {
            transform: translateY(0);
        }
        
    }
  `