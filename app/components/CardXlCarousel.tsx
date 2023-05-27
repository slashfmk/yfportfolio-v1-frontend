
"use client";

import React, { Component } from "react";
import Carousel from "nuka-carousel"


interface ICardCarousel {
    children: React.ReactNode [] | React.ReactNode;
}

function CardXlCarousel(props: ICardCarousel) {

    return (

        <Carousel
            className={`text-white 
            bg-gradient-to-r from-[#0da3f6] to-[#06d967]
            rounded-lg bg-black w-full justify-center align-middle py-7`}
            
            autoplay
            enableKeyboardControls={true}
            wrapAround={true}
            speed={1000}
            zoomScale={1}>
            {
                props.children
            }
        </Carousel>

    )
}

export default CardXlCarousel;