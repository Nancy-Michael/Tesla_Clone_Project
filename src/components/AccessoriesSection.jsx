import LeftButton from './LeftButton'
import SectionTitle from './SectionTitle'
import SectionPrice from './SectionPrice'


function AccessoriesSection({ products }) {
    return (
        <div>
            {products.filter(car => car.title === "Accessories").map(filteredCar => (
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
                            <button className='left-btn v-btn'><LeftButton leftText="Shop Now" /></button>
                        </div>

                    </div>
                </section>
            ))}
        </div>
    )
}

export default AccessoriesSection
