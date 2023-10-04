import { useState, useRef, useEffect } from "react"

import Logo from "../components/Logo"
import HeaderGlobalIcon from "../components/HeaderGlobalIcon"
import TopHeader from "../components/TopHeader"

import BlackColorBtn from "../Buttons/BlackColorBtn"
import BlueColorBtn from "../Buttons/BlueColorBtn"
import GrayColorBtn from "../Buttons/GrayColorBtn"
import RedColorBtn from "../Buttons/RedColorBtn"
import WhiteColorBtn from "../Buttons/WhiteColorBtn"

import ModelXWhiteCarousel from "../ModelsCarousels/ModelXWhiteCarousel"
import ModelXBlackCarousel from "../ModelsCarousels/ModelXBlackCarousel"
import ModelXBlueCaeousel from "../ModelsCarousels/ModelXBlueCaeousel"
import ModelXGrayCarousel from "../ModelsCarousels/ModelXGrayCarousel"
import ModelXRedCarousel from "../ModelsCarousels/ModelXRedCarousel"

import FeatureDetails from "../components/FeatureDetails"
import WheelsX from "../components/WheelsX"

import SectionTitle from "../components/SectionTitle"

import ModelPriceStantard from "../components/ModelPriceStantard"
import ModelPriceTri from "../components/ModelPriceTri"
import PurchasePrice from "../components/PurchasePrice"
import ProbableSaving from "../components/ProbableSaving"
import PriceDescriptionOrderPage from "../components/PriceDescriptionOrderPage"
import ModelStantardSpeed from "../components/ModelStantardSpeed"
import ModelTriMotorSpeed from "../components/ModelTriMotorSpeed"

import SeatingLayout from "../components/SeatingLayout"
import SteeringControl from "../components/SteeringControl"
import ModelXWhiteInteriorCarousel from "../ModelsCarousels/ModelXWhiteInteriorCarousel"
import InteriorBlackButton from "../Buttons/InteriorBlackButton"
import InteriorCreamButton from "../Buttons/InteriorCreamButton"
import InteriorWhiteButton from "../Buttons/InteriorWhiteButton"
import EnhancedAutopilot from "../components/EnhancedAutopilot"

import SubmitOrder from "../components/SubmitOrder"
import ChargingOrder from "../components/ChargingOrder"







function OrderModelX() {
    const [activeColor, setActiveColor] = useState("whiteColor");
    const [activeSpeed, setActiveSpeed] = useState("stantard");
    const [activePriceDes, setActiveDes] = useState("stantard")
    const [activePrice, setActivePrice] = useState("price");
    const [btnColor, setBtnColor] = useState("white");
    const [purchase, setPurchase] = useState(true)
    const [saving, setSaving] = useState(false)


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
                {activeColor === "whiteColor" && <ModelXWhiteCarousel />}
                {activeColor === "blackColor" && <ModelXBlackCarousel />}
                {activeColor === "blueColor" && <ModelXBlueCaeousel />}
                {activeColor === "grayColor" && <ModelXGrayCarousel />}
                {activeColor === "redColor" && <ModelXRedCarousel />}

                <div className="side-bar">
                    <header>
                        <TopHeader
                            taxPrice="$7,500"
                            text1="Federal Tax Credit"
                            text2="Model X Dual Motor vehicles qualify for a federal tax credit for eligible buyers. Reductions likely after Dec 31."
                        />
                    </header>
                    <div className="car-speed">
                        <SectionTitle title="Model X" />
                        <div className="delivery-time">
                            <p>Est. Delivery: Nov – Dec 2023</p>
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
                                range="348"
                                top="149"
                                sec="3.8" />}
                        </div>
                        <div>
                            {activeSpeed === "tri" && <ModelTriMotorSpeed
                                range="333"
                                top="149"
                                sec="2.5" />}
                        </div>

                        {activePrice === "price" && <ModelPriceStantard handelSpeed={() => {
                            setActiveSpeed("stantard")
                            setActiveDes("stantard");
                        }
                        }
                            titel="Dual Motor All-Wheel Drive"
                            text="Model X"
                            price="$79,990*" />}
                        {activePrice === "saving" && <ModelPriceStantard handelSpeed={() => {
                            setActiveSpeed("stantard")
                            setActiveDes("stantard");
                        }
                        }
                            titel="Dual Motor All-Wheel Drive"
                            text="Model X"
                            price="$76,090" />}
                        {activePrice === "price" && <ModelPriceTri handelSpeed={() => {
                            setActiveSpeed("tri")
                            setActiveDes("tri")
                        }}
                            titel="Tri Motor All-Wheel Drive"
                            text="Model X Plaid"
                            price="$89,990*" />}
                        {activePrice === "saving" && <ModelPriceTri handelSpeed={() => {
                            setActiveSpeed("tri")
                            setActiveDes("tri")
                        }}
                            titel="Tri Motor All-Wheel Drive"
                            text="Model X Plaid"
                            price="$86,090*" />}
                        {activePriceDes === "stantard" && <PriceDescriptionOrderPage
                            text="  *Prices assume $7,500 IRA Federal Tax Credit (not all customers qualify) and est. gas savings of $3,900 over 3 years." />}
                        {activePriceDes === "tri" && <PriceDescriptionOrderPage
                            text="* Price include est.gas saving of $3,900 over 3 years" />}
                        <FeatureDetails />
                    </div>
                    <h1 style={{ marginTop: "40px", fontWeight: "400" }}>Paint</h1>
                    <div className="paint-btns">
                        <WhiteColorBtn handelColor={() => setActiveColor("whiteColor")} />
                        <BlackColorBtn handelColor={() => setActiveColor("blackColor")} />
                        <BlueColorBtn handelColor={() => setActiveColor("blueColor")} />
                        <GrayColorBtn handelColor={() => setActiveColor("grayColor")} />
                        <RedColorBtn handelColor={() => setActiveColor("redColor")} />
                    </div>
                    <WheelsX />
                    <div className="package" style={{ textAlign: "center", marginBottom: "100px", marginTop: "100px" }}>
                        <h1 style={{ fontWeight: "400", marginTop: "40px", marginBottom: "10px" }}>Tow Package</h1>
                        <p style={{ marginBottom: "20px", opacity: ".9" }}>Included</p>
                        <p style={{ opacity: ".9" }}>High Strengh, Class ll steel tow bar.</p>
                        <p style={{ opacity: ".9" }}>Capable of towing up to 5,000 lbs.</p>
                    </div>
                    <div className=" interior">
                        <h1 style={{ fontWeight: "normal", fontSize: "40px" }}>Interior</h1>
                        <div className="interior-btns">
                            <InteriorBlackButton handelColor={() => { setBtnColor("black") }} />
                            <InteriorWhiteButton handelColor={() => { setBtnColor("white") }} />
                            <InteriorCreamButton handelColor={() => { setBtnColor("cream") }} />
                        </div>
                        <div>
                            {btnColor === "black" && <div className="interior-text"><p><span style={{ fontWeight: "500" }}>All Black</span>
                                <span style={{ opacity: "0.9" }}>Included</span></p>
                                <span>Ebony Decor</span></div>}
                            {btnColor === "white" && <div className="interior-text"><p><span style={{ fontWeight: "500" }}>Black and White</span>
                                <span style={{ opacity: "0.9" }}>$2,000</span></p>
                                <span>Walnut Decor</span></div>}
                            {btnColor === "cream" && <div className="interior-text"> <p><span style={{ fontWeight: "500" }}>Cream</span>
                                <span style={{ opacity: "0.9" }}>$2,000</span></p>
                                <span>walnut Decor</span></div>}
                        </div>
                    </div>
                    <SeatingLayout />
                    <SteeringControl />
                    <FeatureDetails />
                    <EnhancedAutopilot />
                    <ChargingOrder price1="$475"
                        price2="$230" />
                    <SubmitOrder model="Model X"
                        date="Est. Delivery: Nov - Dec 2023"
                        qualification="Your design qualifies for a $7,500 federal tax credit for eligible buyers." />
                </div>

            </div>
        </div>
    )




}
export default OrderModelX
