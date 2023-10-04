import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons'
import autopilot from '../assets/autopilot.webm'
import autopark from '../assets/autopark.webm'
import summon_v2 from '../assets/summon_v2.webm'

function AutopiloitCarousel() {
    const images = ["https://digitalassets.tesla.com/video/upload/f_auto:video,q_auto:best/prod/coin/static_assets/MODEL3/UI/summon_v2.mp4",
        "https://digitalassets.tesla.com/video/upload/f_auto:video,q_auto:best/prod/coin/static_assets/MODEL3/UI/autopark.mp4"]
    const [currImg, setCurrImg] = useState(0);
    return (
        <div className='auto-carousel'>
            <div className='inner-auto-carousel'>
                <div className='left-arrow'
                    onClick={() => {
                        currImg > 0 && setCurrImg(currImg - 1)
                    }}>
                    <FontAwesomeIcon icon={faChevronLeft} />
                </div>
                <video src={images[currImg]} alt="" />
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

export default AutopiloitCarousel
