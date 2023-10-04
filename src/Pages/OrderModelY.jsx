import { useState } from "react";
import HeaderGlobalIcon from "../components/HeaderGlobalIcon";
import Logo from "../components/Logo";
import ModelYGrayCarousel from "../ModelsCarousels/ModelYGrayCarousel"
import ModelYWhiteCarousel from "../ModelsCarousels/ModelYWhiteCarousel"
import ModelYBlueCarousel from "../ModelsCarousels/ModelYBlueCarousel"
import ModelYBlackCarousel from "../ModelsCarousels/ModelYBlackCarousel"
import ModelYRedCarousel from "../ModelsCarousels/ModelYRedCarousel"
import TopHeader from "../components/TopHeader";
import SectionTitle from "../components/SectionTitle";
import PurchasePrice from "../components/PurchasePrice";
import ProbableSaving from "../components/ProbableSaving";

import ModelStantardSpeed from "../components/ModelStantardSpeed";
import ModelPriceStantard from "../components/ModelPriceStantard";
import ModelLongRangePrice from "../components/ModelLongRangePrice";
import ModelPricePerformance from "../components/ModelPricePerformance";
import PriceDescriptionOrderPage from "../components/PriceDescriptionOrderPage";
import FeatureDetails from "../components/FeatureDetails";
import GrayColorBtn from "../Buttons/GrayColorBtn";
import BlackColorBtn from "../Buttons/BlackColorBtn";
import WhiteColorBtn from "../Buttons/WhiteColorBtn";
import RedColorBtn from "../Buttons/RedColorBtn";
import BlueColorBtn from "../Buttons/BlueColorBtn";
import WheelsY from "../components/WheelsY"
import PerformanceUpgrade from "../components/PerformanceUpgrade";
import TowHitch from "../components/TowHitch";
import InteriorBlackButton from "../Buttons/InteriorBlackButton";
import InteriorWhiteButton from "../Buttons/InteriorWhiteButton";
import SeatingLayout from "../components/SeatingLayout";
import SeatingBtn from "../Buttons/SeatingBtn";
import EnhancedAutopilot from "../components/EnhancedAutopilot";
import ChargingOrder from "../components/ChargingOrder";
import SubmitOrder from "../components/SubmitOrder";
function OrderModelY() {
    const [activeColor, setActiveColor] = useState("grayColor");
    const [activePrice, setActivePrice] = useState("saving");
    const [activeSpeed, setActiveSpeed] = useState("longRange");
    const [btnColor, setBtnColor] = useState("black");
    const [purchase, setPurchase] = useState(false)
    const [saving, setSaving] = useState(true)

    return (
        <div>
            <div className="order-header">
                <div className="logo">
                    <Logo />
                </div>
                <div className="icon">
                    <HeaderGlobalIcon />
                </div>
            </div>
            <div className="order-model" style={{ display: "flex" }}>
                {activeColor === "grayColor" && <ModelYGrayCarousel />}
                {activeColor === "whiteColor" && <ModelYWhiteCarousel />}
                {activeColor === "blueColor" && <ModelYBlueCarousel />}
                {activeColor === "blackColor" && <ModelYBlackCarousel />}
                {activeColor === "redColor" && <ModelYRedCarousel />}

                <div className="side-bar">
                    <header>
                        <TopHeader
                            taxPrice="$7,500"
                            text1="Federal Tax Credit"
                            text2="All Model 3 and Model Y purchases qualify for a $7,500 federal tax credit for eligible buyers. Additional state incentives may be available."
                        />
                    </header>
                    <div className="car-speed">
                        <SectionTitle title="Model Y" />
                        <div className="delivery-time">
                            <p>Est. Delivery: Oct – Nov 2023</p>
                            <p>Delivery ZIP Code: <span>41011</span></p>
                        </div>
                        <div className="purchase-btns">
                            <PurchasePrice background={purchase ? "#fff" : "#f4f4f4"}
                                handelPrice={() => {
                                    setActivePrice("price")
                                    setPurchase(!purchase)
                                    setSaving(!saving)
                                }} />
                            <ProbableSaving background={saving ? "#fff" : "#f4f4f4"}
                                handelPrice={() => {
                                    setActivePrice("saving")
                                    setSaving(!saving)
                                    setPurchase(!purchase)
                                }} />
                        </div>
                        <div>
                            {activeSpeed === "stantard" && <ModelStantardSpeed
                                range="260"
                                top="135"
                                sec="6.6" />}
                            {activeSpeed === "longRange" && <ModelStantardSpeed
                                range="330"
                                top="135"
                                sec="4.8" />}
                            {activeSpeed === "performance" && <ModelStantardSpeed
                                range="303"
                                top="155"
                                sec="3.5" />}
                        </div>
                        <div className="prices">
                            <div>
                                {activePrice === "saving" && <ModelPriceStantard handelSpeed={() => {
                                    setActiveSpeed("stantard")
                                }}
                                    text="Model Y" price="$23,890*"
                                    titel="Rear-Wheel Drive" />}
                                {activePrice === "price" && <ModelPriceStantard handelSpeed={() => {
                                    setActiveSpeed("stantard")
                                }}
                                    text="Model Y" price="$43,990*"
                                    titel="Rear-Wheel Drive" />}
                            </div>
                            <p><a href="" style={{ textDecoration: "none" }}><span style={{ borderBottom: "2px black Solid" }}>Learn More</span> about Range and Performance</a></p>
                            <div>
                                <h2 style={{ fontWeight: "400", textAlign: "start" }}>Dual Motor All-Wheel Drive</h2>
                                {activePrice === "saving" && <ModelLongRangePrice handelSpeed={() => {
                                    setActiveSpeed("longRange")
                                }}
                                    text="Model Y Long Range"
                                    price="$50,490*" />}
                                {activePrice === "price" && <ModelLongRangePrice handelSpeed={() => {
                                    setActiveSpeed("longRange")

                                }}
                                    text="Model Y Long Range"
                                    price="$47,240*" />}
                                {activePrice === "saving" && <ModelPricePerformance handelSpeed={() => {
                                    setActiveSpeed("performance")
                                }}
                                    text="Model Y Performance"
                                    price="$43,390*" />}
                                {activePrice === "price" && <ModelPricePerformance handelSpeed={() => {
                                    setActiveSpeed("performance")
                                }}
                                    text="Model Y Performance"
                                    price="$54,490*" />}
                            </div>
                            <PriceDescriptionOrderPage
                                text="All prices are shown without incetives or est.3- years gas
                            savings of $3,600."/>
                            <FeatureDetails />
                            <PerformanceUpgrade />
                        </div>
                    </div>
                    <h1 style={{ marginTop: "40px", fontWeight: "400" }}>Paint</h1>
                    <div className="paint-btns">
                        <GrayColorBtn handelColor={() => { setActiveColor("grayColor") }} />
                        <WhiteColorBtn handelColor={() => setActiveColor("whiteColor")} />
                        <BlueColorBtn handelColor={() => setActiveColor("blueColor")} />
                        <BlackColorBtn
                            handelColor={() => { setActiveColor("blackColor") }} />
                        <RedColorBtn handelColor={() => { setActiveColor("redColor") }} />
                    </div>
                    <WheelsY />
                    <TowHitch price="$1000" />
                    <div className=" interior">
                        <h1 style={{ fontWeight: "normal", fontSize: "40px" }}>Interior</h1>
                        <div className="interior-btns">
                            <InteriorBlackButton handelColor={() => { setBtnColor("black") }} />
                            <InteriorWhiteButton handelColor={() => { setBtnColor("white") }} />
                        </div>
                        <div>
                            {btnColor === "black" && <div className="interior-text"><p><span style={{ fontWeight: "500" }}>All Black</span>
                                <span style={{ opacity: "0.9" }}>Included</span></p></div>}
                            {btnColor === "white" && <div className="interior-text"><p><span style={{ fontWeight: "500" }}>Black and White</span>
                                <span style={{ opacity: "0.9" }}>$1,000</span></p></div>}
                        </div>
                    </div>
                    <div className='layout-text'>
                        <div className="layout-btns" >
                            <SeatingBtn num={5} />
                        </div>
                        <div>
                            <p style={{ fontWeight: "500", marginBottom: "20px" }}>Five Seat Interior
                                <span style={{ opacity: ".85", fontWeight: "normal" }}>Included</span></p>
                        </div>
                        <ul >
                            <li style={{ fontSize: "16px" }}>Second row with adjustable seatbacks</li>
                            <li style={{ fontSize: "16px", padding: "5px 10px" }}>Fold-flat second row for maximum cargo storage
                            </li>
                            <li style={{ fontSize: "16px" }}>Electronic fold-flat releases in trunk</li>
                        </ul>
                        <FeatureDetails />
                    </div>
                    <EnhancedAutopilot />
                    <ChargingOrder price1="$475"
                        price2="$230" />

                    <SubmitOrder model="Model Y"
                        date="Est. Delivery: Oct - Nov 2023"
                        qualification="Your design qualifies for a $7,500 federal tax credit for eligible buyers." />
                </div>
            </div>
        </div>

    )
}

export default OrderModelY
