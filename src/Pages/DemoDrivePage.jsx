import { useState } from "react"
import Logo from "../components/Logo"
import HeaderMenue from "../components/HeaderMenue"
import HeaderIcons from "../components/HeaderIcons"
import ModelSButton from "../Buttons/ModelSButton"
import Model3Button from "../Buttons/Model3Button"
import ModelXButton from "../Buttons/ModelXButton"
import ModelYButton from "../components/ModelYButton"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import TeslaCopyRight from "../components/TeslaCopyRight"
import PricacyLegal from "../components/PricacyLegal"
import Contact from "../components/Contact"
import Careers from "../components/Careers"
import NewsLetter from "../components/NewsLetter"
import Location from "../components/Location"
import DatePicker from "react-datepicker"
import 'react-datepicker/dist/react-datepicker.css'

function DemoDrivePage() {
    const [modelImg, setModelImg] = useState("https://digitalassets.tesla.com/tesla-contents/image/upload/f_auto,q_auto/Mega-Menu-Vehicles-Model-3.png");
    const [contactInfo, setContactInfo] = useState({ firstName: '', lastName: '', email: '', phoneNumber: '' });
    const [selectedDate, setSelctedDate] = useState(new Date())

    const handelChange = (e) => {
        setContactInfo(e.target.value)
    }
    return (
        <div className="demo-drive-page">
            <div className="demo-drive-header">
                <Logo />
                <HeaderMenue />
                <HeaderIcons />
            </div>
            <div className="demo-drive">
                <div className="demo-drive-text">
                    <h1>Schedule a Demo Drive</h1>
                    <h4>Get behind the wheel for a no-pressure driving experience. Discover the vehicle, learn about the benefits of EV and get a personalized charging plan. Drivers must have a valid U.S. driver's license and be 18 years of age or older.</h4>
                </div>
                <div className="car-selector">
                    <div className="car-selector-btns">
                        <ModelSButton text="Model S" showImg={() => setModelImg("https://digitalassets.tesla.com/tesla-contents/image/upload/f_auto,q_auto/Mega-Menu-Vehicles-Model-S.png")} />
                        <Model3Button text="Model 3" showImg={() => setModelImg("https://digitalassets.tesla.com/tesla-contents/image/upload/f_auto,q_auto/Mega-Menu-Vehicles-Model-3.png")} />
                        <ModelXButton text="Model X" showImg={() => setModelImg("https://digitalassets.tesla.com/tesla-contents/image/upload/f_auto,q_auto/Mega-Menu-Vehicles-Model-x.png")} />
                        <ModelYButton text="Model Y" showImg={() => setModelImg("https://digitalassets.tesla.com/tesla-contents/image/upload/f_auto,q_auto/Mega-Menu-Vehicles-Model-y.png")} />
                    </div>
                    <div>
                        <img src={modelImg} alt="image" />
                    </div>
                </div>
                <div className="demo-drive-location">
                    <h2>Find Time and Location</h2>
                    <div>
                        <p>Input your zip code to search for
                            Tesla showrooms and schedule a Demo Drive</p>
                        <input type="text" placeholder="Zip Code" id="zipcode" />
                        <label className="search-lable" htmlFor="zipcode"><FontAwesomeIcon icon={faMagnifyingGlass} /></label>
                        <img src="https://maps.googleapis.com/maps/api/staticmap?scale=2&center=39.224464,-84.383847&zoom=15&size=432x174&markers=scale:2|icon:https://www.tesla.com/sites/all/modules/custom/tesla_findus_map/assets/icon-store@2x.png|39.224464,-84.383847&maptype=roadmap&style=feature:road.highway|element:geometry.fill|saturation:-100|lightness:50&style=element:geometry.stroke|saturation:-100&style=feature:road|element:labels.text|saturation:-100&style=feature:poi|visibility:off&client=gme-teslamotorsinc&channel=ITServicesProd&signature=A53ZDXaix25JYL557We6o4dD3g8=" alt="" />
                        <div className="date-time">
                            <div className="form">
                                <label htmlFor="date">Date</label>

                                <DatePicker
                                    selected={selectedDate}
                                    onChange={date => setSelctedDate(date)}
                                />

                            </div>
                            <div className="form">
                                <label htmlFor="time">Time</label>
                                <input type="text" id="time" />
                            </div>
                        </div>
                    </div>
                </div>
                <form >
                    <h2>Contact Information</h2>
                    <div className="form-names">
                        <div className="form">
                            <label htmlFor="firstName">First Name</label>
                            <input type="text" id="firstName"
                                value={contactInfo.firstName}
                                onChange={handelChange} />
                        </div>
                        <div className="form">
                            <label htmlFor="lastName">Last Name</label>
                            <input type="text" id="lastName"
                                value={contactInfo.lastName}
                                onChange={handelChange} />
                        </div>
                    </div>
                    <div className="form-emai-phone">
                        <div className="form">
                            <label htmlFor="email">Email Address</label>
                            <input type="text" id="email"
                                value={contactInfo.email}
                                onChange={handelChange} />
                        </div>
                        <div className="form">
                            <label htmlFor="phoneNumber">Phone Number</label>
                            <input type="text" id="phoneNumber"
                                value={contactInfo.phoneNumber}
                                placeholder="(201)555-0123"
                                onChange={handelChange} />
                        </div>
                    </div>
                    <div className="checks">
                        <input type="checkbox" id="check" className="checkbox" />
                        <label htmlFor="check">I’m interested in Solar and Powerwall</label>
                    </div>
                    <div>
                        <h5>By clicking "Schedule Demo Drive", I authorize Tesla to contact me about this request as well as with more information about Tesla products, services and regional events via
                            the contact information I provide. I understand calls or texts may use automatic or computer-assisted dialing or pre-recorded messages. Normal message and data rates apply. I can opt out at any
                            time in the Tesla app or by <a href="">unsubscribing.</a> This is not required for purchase.</h5>
                    </div>
                    <button className="demo-drive-btn">Schedule Demo Drive</button>
                </form>
                <div className="demo-drive-footer">
                    <TeslaCopyRight />
                    <PricacyLegal />
                    <Contact />
                    <Careers />
                    <NewsLetter />
                    <Location />
                </div>

            </div>

        </div>

    )
}

export default DemoDrivePage
