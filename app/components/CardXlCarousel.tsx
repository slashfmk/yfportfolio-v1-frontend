
"use client";

import React, { Component } from "react";
import Carousel from "nuka-carousel"


interface ICardCarousel {
    children: React.ReactNode[] | React.ReactNode;
}

function CardXlCarousel(props: ICardCarousel) {

    const colors = [
        { sColors: [`#0da3f6`, `#06d967`] },
        { sColors: [`#DF13B6`, `#9411C4`] },
        { sColors: [`#0A8A8A`, `#CF11B2`] }
    ];


    const settings = {
        autoplay: true,
        enableKeyboardControls: true,
        wrapAround: false,
        speed: 1000
    }

    return (

        <Carousel {...settings}
            className={`w-full text-white 
            bg-gradient-to-r from-[#0da3f6] to-[#06d967]
            rounded-lg bg-black justify-center align-middle py-7`} >

            {props.children}

        </Carousel>

    )
}

export default CardXlCarousel;