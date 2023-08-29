import { useState } from "react";
import styles from './styles.module.css'

const ImageSlider = ({ slides }) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const sliderStyles = {
        height: "100%",
        position: "relative"
    }
    const slideStyles = {
        backgroundImage: `url(${slides[currentIndex].url})`
    }
    const goToPrev = () => {
        const isFirstSlide = currentIndex === 0;
        const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
        setCurrentIndex(newIndex);
    }
    const goToNext = () => {
        const isLastSlide = currentIndex === slides.length - 1;
        const newIndex = isLastSlide ? 0 : currentIndex + 1;
        setCurrentIndex(newIndex);
    }
    const goToSlide = (slideIndex) =>{
        setCurrentIndex(slideIndex);
    }
    return (
        <div style={sliderStyles}>
            <div className={`${styles.leftArrowStyles} ${styles.arrowStyles}`} onClick={goToPrev}>{"<"}</div>
            <div className={`${styles.rightArrowStyles} ${styles.arrowStyles}`} onClick={goToNext}> {">"} </div>
            <div style={slideStyles} className={styles.slideStyles}></div>
            <div className={styles.dotsConStyle}>
                {slides.map((slide, slideIndex)=> (
                    <div key={slideIndex} className={styles.dotStyles} onClick={() =>goToSlide(slideIndex)}>
                    &#x2022;
                    </div>
                ))}
            </div> 
        </div>
    )
}
export default ImageSlider