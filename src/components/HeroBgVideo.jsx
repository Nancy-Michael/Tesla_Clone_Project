import videobg from '../assets/videobg.mp4'
import SectionFooter from './SectionFooter'
import SectionPrice from './SectionPrice'
import SectionTitle from './SectionTitle'




function HeroBgVideo({ titel, price, info, LB, RB, secFooter }) {
    return (


        <section className='video-section hero-section'>

            <video className='video' src={videobg} autoPlay loop muted />
            <div className='hero-content' >
                <SectionTitle title={titel} />
                <SectionPrice price={price} info={info} />

                <div className=' btn'>
                    <button className='left-btn'>{LB}</button>
                    <button className='right-btn'>{RB}</button>
                </div>
            </div>
            {secFooter && <SectionFooter totalPrice="40,240" />}
        </section>

    )
}

export default HeroBgVideo
