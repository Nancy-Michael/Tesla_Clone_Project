import HeaderIcons from "./HeaderIcons"
import HeaderMenuButtonMobile from "./HeaderMenuButtonMobile"
import HeaderMenue from "./HeaderMenue"
import Logo from "./Logo"
import { useState } from "react";
function Header() {
    const [showPanel, setShowPanel] = useState(false);
    return (
        <header className="header">
            <Logo />
            <HeaderMenue />
            <HeaderIcons />
            <HeaderMenuButtonMobile show={showPanel} showCard={() => setShowPanel(!showPanel)} />
        </header>
    )
}

export default Header
