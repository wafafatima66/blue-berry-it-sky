"use client"
import Slider from "react-slick";
import React, { Component } from "react";
import Image from "next/image";

// CAROUSEL DATA

interface DataType {
    profession: string;
    name: string;
    imgSrc: string;
}

const postData: DataType[] = [
    {
        name: 'Expert Team',
        profession: 'Our engineers and architects hold industry certifications and have 10+ years of combined experience across startups, scale-ups, and Fortune 500 companies.',
        imgSrc: '/images/wework/avatarberry.png',
    },
    {
        name: 'Agile & Responsive',
        profession: 'We adapt quickly to your changing needs and deliver results on time, every time. Your success is our success.',
        imgSrc: '/images/wework/avatarberry2.png',
    },
    {
        name: 'Local Advantage, Global Reach',
        profession: 'Based in Dhaka, we understand the South Asian market dynamics while delivering world-class international standards.',
        imgSrc: '/images/wework/avatarberry3.png',
    },
    {
        name: 'End-to-End Solutions',
        profession: 'From strategy and design to deployment and ongoing support, we handle everything, so you don\'t have to.',
        imgSrc: '/images/wework/avatarberry4.png',
    },
    {
        name: 'Cost-Effective',
        profession: 'Get premium services at competitive rates without compromising on quality.',
        imgSrc: '/images/wework/avatarberry5.png',
    },
    {
        name: 'Proven Track Record',
        profession: 'We\'ve successfully delivered 500+ projects for startups, SMEs, and enterprises across multiple industries.',
        imgSrc: '/images/wework/avatarberry6.png',
    },
]

// CAROUSEL SETTINGS


export default class Whyus extends Component {

    render() {
        const settings = {
            dots: false,
            infinite: true,
            slidesToShow: 5,
            // centerMode: true,
            slidesToScroll: 1,
            arrows: false,
            autoplay: true,
            speed: 4000,
            autoplaySpeed: 2000,
            cssEase: "linear",
            responsive: [
                {
                    breakpoint: 1200,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 1,
                        infinite: true,
                        dots: false
                    }
                },
                {
                    breakpoint: 800,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 1,
                        infinite: true,
                        dots: false
                    }
                },
                {
                    breakpoint: 450,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        infinite: true,
                        dots: false
                    }
                }
            ]
        };


        return (
            <div className="bg-wework py-32">

                <div className='mx-auto max-w-2xl lg:max-w-7xl sm:py-4 lg:px-8 '>

                    <div className="text-center">
                        <h3 className="text-4xl sm:text-6xl font-bold text-black my-2">Why Choose Us</h3>
                        {/* <h3 className="text-4xl sm:text-6xl font-bold text-black opacity-50 lg:mr-48 my-2">Why Partner With Us?</h3> */}
                        <h3 className="text-3xl sm:text-2xl font-bold text-black opacity-25 lg:-mr-32 my-2">At Blueberry IT Sky, we combine technical expertise with business acumen. Here's what sets us apart</h3>
                    </div>

                </div>

                <Slider {...settings}>
                    {postData.map((items, i) => (
                        <div key={i}>
                            <div className='bg-white m-3 py-14 my-10 text-center shadow-xl rounded-3xl h-[560px] flex flex-col'>
                                <div className='relative'>
                                    <Image src={items.imgSrc} alt="gaby" width={282} height={282} className="inline-block m-auto" />
                                    {/* <Image src={'/images/wework/linkedin.svg'} alt="greenbg" width={120} height={120} className=" absolute inline-block position-linkedin" /> */}
                                </div>
                                <h4 className='text-2xl font-bold pt-14'>{items.name}</h4>
                                <h3 className='text-lg font-normal pt-4 pb-2 opacity-50 px-4'>{items.profession}</h3>
                            </div>
                        </div>
                    ))}
                </Slider>

            </div>

        );
    }
}
