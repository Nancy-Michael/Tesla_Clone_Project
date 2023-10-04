import LeftButton from './LeftButton'
import RightButton from './RightButton'
import HeroBgVideo from './HeroBgVideo'
import SectionFooter from './SectionFooter'
import ModelYSection from './ModelYSection'
import ModelSSection from './ModelSSection'
import ModelXSection from './ModelXSection'
import SolarPanelSection from './SolarPanelSection'
import SolarRoofSection from './SolarRoofSection'
import PowerWallSection from './PowerWallSection'
import AccessoriesSection from './AccessoriesSection'
import { Link } from 'react-router-dom'

function ProductsList({ products }) {

    return (
        <div className='container'>

            <HeroBgVideo
                titel="Model 3"
                price="From $29,740*"
                info="After Federal Tax Credit & Est. Gas Savings"
                LB={<Link to="/OrderModel3"><LeftButton leftText="Order Now" /></Link>}
                RB={<RightButton rightText="Demo Drive" />}
                secFooter={<SectionFooter />} />
            <ModelYSection products={products} />
            <ModelSSection products={products} />
            <ModelXSection products={products} />
            <HeroBgVideo
                titel="Experince Tesla"
                RB={<RightButton rightText="Demo Drive" />} />
            <SolarPanelSection products={products} />
            <SolarRoofSection products={products} />
            <PowerWallSection products={products} />
            <AccessoriesSection products={products} />
        </div>
    )
}

export default ProductsList
