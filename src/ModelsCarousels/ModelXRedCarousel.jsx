
import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons'


function ModelXRedCarousel() {
    const images = [
        { img: "/images/redX-1.jpg" },
        { img: "/images/redX-2.jpg" },
        { img: "/images/redX-3.jpg" },
        { img: "/images/redX-4.jpg" },
        { img: "/images/redX-5.jpg" }
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

export default ModelXRedCarousel
