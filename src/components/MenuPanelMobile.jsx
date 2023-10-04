
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import HeaderGlobalIcon from './HeaderGlobalIcon'
import HeaderAccountIcon from './HeaderAccountIcon'
import Charging from './ChargingButton'
import Discover from './DiscoverButton'
import VehiclesButton from './VehiclesButton'
import EnergyButton from './EnergyButton'
import Logo from './Logo'
function MenuPanelMobile() {
  return (
    <div className="menu-panel"
      style={{
        position: 'fixed',
        top: '0',
        bottom: '0',
        right: '0',
        zIndex: '-1',
      }}>
      <Logo />
      <ol>
        <li><VehiclesButton /></li>
        <li><EnergyButton /></li>
        <li><Charging /></li>
        <li><Discover /></li>
        <li className='shop'><a href="">Shop</a></li>
        <li className='support'><a href='#'>Support</a></li>
        <li>
          <div className='menu-panel-items'>
            <div className='menu-panel-text1'>
              <a><HeaderGlobalIcon /></a>
              <strong style={{ fontWeight: "normal" }}>United State</strong>
            </div>
            <div className='hidden-icon'>
              <FontAwesomeIcon icon={faArrowRight} className='icon' />
            </div>
          </div>
        </li>
        <li >
          <div className='menu-panel-items'>
            <div className='menu-panel-text1'>
              <a><HeaderAccountIcon /></a>
              <strong style={{ fontWeight: "normal" }}>Account</strong>
            </div>
            <div className='hidden-icon'>
              <FontAwesomeIcon icon={faArrowRight} className='icon' />
            </div>
          </div>
        </li>
      </ol>
    </div>
  )
}

export default MenuPanelMobile
