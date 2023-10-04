import MenuPanelMobile from "./MenuPanelMobile"

function HeaderMenuButtonMobile({ show, showCard }) {

    return <div className="panel-list">
        {show && <MenuPanelMobile />}
        <button className='menu-button-mobile-size-only'
            onClick={showCard}>{show ? 'X' : 'Menu'}</button>
    </div>
}

export default HeaderMenuButtonMobile
