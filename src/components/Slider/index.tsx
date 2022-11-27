import React, {useCallback, useRef, WheelEvent} from 'react';
import Slider from "react-slick";
import s from './Slider.module.css'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export const SliderComponent = () => {
    const sliderRef = useRef<any>(null)
    const settings = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 4.5,
        slidesToScroll: 1
    }
    const onWheelSlider = useCallback((e: WheelEvent<HTMLDivElement>) => {
        if (!sliderRef.current) return;
        if (e.deltaY > 0) {
            sliderRef.current.slickNext();
        } else if (e.deltaY < 0) {
            sliderRef.current.slickPrev();
        }
    }, [sliderRef]);
    return (
        <div className={s.container} onWheel={onWheelSlider}>
            <Slider {...settings} ref={sliderRef} className={s.sliderContainer}>
                <div>
                    <img src="/img/slider/sliderOne.jpg" className={s.slideItem} alt="sliderImg"/>
                </div>
                <div>
                    <img src="/img/slider/sliderTwo.jpg" className={s.slideItem} alt="sliderImg"/>
                </div>
                <div>
                    <img src="/img/slider/sliderThree.jpg" className={s.slideItem} alt="sliderImg"/>
                </div>
                <div>
                    <img src="/img/slider/sliderFour.jpg" className={s.slideItem} alt="sliderImg"/>
                </div>
                <div>
                    <img src="/img/slider/sliderFive.jpg" className={s.slideItem} alt="sliderImg"/>
                </div>
                <div>
                    <img src="/img/slider/sliderSix.jpg" className={s.slideItem} alt="sliderImg"/>
                </div>
                <div>
                    <img src="/img/slider/sliderSeven.jpg" className={s.slideItem} alt="sliderImg"/>
                </div>
                <div>
                    <img src="/img/slider/sliderEight.jpg" className={s.slideItem} alt="sliderImg"/>
                </div>
            </Slider>
        </div>
    );
};