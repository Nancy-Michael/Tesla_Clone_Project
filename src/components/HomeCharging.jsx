

function HomeCharging({ a, A, title }) {
    return (
        <div className="charging-menu">
            <a href="">
                <img src="https://digitalassets.tesla.com/tesla-contents/image/upload/f_auto,q_auto/Mega-Menu-Charging-Home-Charging.png" alt="charging-home" />
            </a>
            <div>
                <h3>{title}</h3>
                <a href="">{a}</a>
                <a href="">{A}</a>
            </div>


        </div>
    )
}

export default HomeCharging
