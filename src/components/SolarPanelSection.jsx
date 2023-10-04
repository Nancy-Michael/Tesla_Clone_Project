
import LeftButton from './LeftButton'
import RightButton from './RightButton'
import SectionTitle from './SectionTitle'
import SectionPrice from './SectionPrice'


function SolarPanelSection({ products }) {
    return (
        <div>
            {products.filter(car => car.title === "Solar Panels").map(filteredCar => (
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
                            <button className='left-btn v-btn'><LeftButton leftText="Order Now" /></button>
                            <button className='right-btn v-btn'><RightButton rightText="Learn More" /></button>
                        </div>
                    </div>
                </section>
            ))}

        </div>
    )
}

export default SolarPanelSection
