import HeaderInfoIcon from './HeaderInfoIcon'
import HeaderGlobalIcon from './HeaderGlobalIcon'
import HeaderAccountIcon from './HeaderAccountIcon'

function HeaderIcons() {
    return (
        <div className='header-icons-desktop hidden-mobile-size'>
            <HeaderInfoIcon />
            <HeaderGlobalIcon />
            <HeaderAccountIcon />
        </div>
    )
}

export default HeaderIcons
