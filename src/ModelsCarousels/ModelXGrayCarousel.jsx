
import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons'

function ModelXGrayCarousel() {
    const images = [
        { img: "/images/grayX-1.jpg" },
        { img: "/images/grayX-2.jpg" },
        { img: "/images/grayX-3.jpg" },
        { img: "/images/grayX-4.jpg" },
        { img: "/images/grayX-5.jpg" }
    ]
    const [currImg, setCurrImg] = useState(0);
    return (
        <div className='carousel'>
            <div className='inner-carousel'>
                <div className='left-arrow'
                    onClick={() => {
                        currImg > 0 && setCurrImg(currImg - 1)
                    }}>
                    <FontAwesomeIcon icon={faChevronLeft} />
                </div>
                <img src={images[currImg].img} alt="" />
                <div className='right-arrow'
                    onClick={() => {
                        currImg < images.length - 1 && setCurrImg(currImg + 1)

                    }}>
                    <FontAwesomeIcon icon={faChevronRight} />
                </div>
            </div>

        </div>
    )
}

export default ModelXGrayCarousel
