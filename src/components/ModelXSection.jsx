
import LeftButton from './LeftButton'
import RightButton from './RightButton'
import SectionTitle from './SectionTitle'
import SectionPrice from './SectionPrice'
import SectionFooter from './SectionFooter'
import { Link } from 'react-router-dom'

function ModelXSection({ products }) {
    return (
        <div>
            {products.filter(car => car.title === 'Model X').map(filteredCar => (
                <section className="hero-section" key={filteredCar.id}
                    style={{
                        backgroundImage: filteredCar.img,
                        backgroundRepeat: 'no-repeat',
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                    }}>
                    <div className="hero-content">
                        <SectionTitle title={filteredCar.title} />
                        <SectionPrice price={filteredCar.price} info={filteredCar.info} />
                        <div className="btn">
                            <Link to="OrderModelX"><button className='left-btn v-btn'><LeftButton leftText="Order Now" /></button></Link>
                            <button className='right-btn v-btn'><RightButton rightText="Demo Drive" /></button>
                        </div>
                        <SectionFooter totalPrice="74,990" />
                    </div>
                </section>
            ))}
        </div>
    )
}

export default ModelXSection
