import { useState, useEffect, useRef } from "react"
import Logo from "../components/Logo"
import HeaderGlobalIcon from "../components/HeaderGlobalIcon"
import TopHeader from "../components/TopHeader"
import SectionTitle from "../components/SectionTitle"
import PurchasePrice from "../components/PurchasePrice"
import ProbableSaving from "../components/ProbableSaving"
import ModelStantardSpeed from "../components/ModelStantardSpeed"
import ModelPriceStantard from "../components/ModelPriceStantard"
import ModelPriceTri from "../components/ModelPriceTri"
import ModelPricePerformance from "../components/ModelPricePerformance"
import PriceDescriptionOrderPage from "../components/PriceDescriptionOrderPage"
import FeatureDetails from "../components/FeatureDetails"
import GrayColorBtn from "../Buttons/GrayColorBtn"
import WhiteColorBtn from "../Buttons/WhiteColorBtn"
import BlueColorBtn from "../Buttons/BlueColorBtn"
import RedColorBtn from "../Buttons/RedColorBtn"
import BlackColorBtn from "../Buttons/BlackColorBtn"
import Wheels3 from "../components/Wheels3"
import Model3GrayCarousel from "../ModelsCarousels/Model3GrayCarousel"
import Model3WhiteCarousel from "../ModelsCarousels/Model3WhiteCarousel"
import Model3BlueCarousel from "../ModelsCarousels/Model3BlueCarousel"
import Model3BlackCarousel from "../ModelsCarousels/Model3BlackCarousel"
import Model3RedCarousel from "../ModelsCarousels/Model3RedCarousel"
import InteriorBlackButton from "../Buttons/InteriorBlackButton"
import InteriorWhiteButton from "../Buttons/InteriorWhiteButton"
import ModelLongRangePrice from "../components/ModelLongRangePrice"
import EnhancedAutopilot from "../components/EnhancedAutopilot"
import ChargingOrder from "../components/ChargingOrder"
import SubmitOrder from "../components/SubmitOrder"
import Model3InteriorWhite from "../ModelsCarousels/Model3InteriorWhite"
import Model3BlackInteriorCarousel from "../ModelsCarousels/Model3BlackInteriorCarousel"


function OrderModel3() {
    const [activeColor, setActiveColor] = useState("grayColor");
    const [btnColor, setBtnColor] = useState("black");
    const [activeSpeed, setActiveSpeed] = useState("stantard");
    const [activePrice, setActivePrice] = useState("saving");

    const [purchase, setPurchase] = useState(false)
    const [saving, setSaving] = useState(true)

    // const [refEl, setRefEl] = useState();
    // const myRef = useRef();
    // useEffect(() => {
    //     const observer = new IntersectionObserver((entries) => {
    //         const entery = entries[0];
    //         setRefEl(entery.isIntersecting);
    //     })
    //     observer.observe(myRef.current)
    // }, [])
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
                {activeColor === "grayColor" && <Model3GrayCarousel />}
                {activeColor === "whiteColor" && <Model3WhiteCarousel />}
                {activeColor === "blueColor" && <Model3BlueCarousel />}
                {activeColor === "blackColor" && <Model3BlackCarousel />}
                {activeColor === "redColor" && <Model3RedCarousel />}
                {activeColor === "white" && <Model3InteriorWhite />}
                {activeColor === "black" && <Model3BlackInteriorCarousel />}
                <div className="side-bar">
                    <header>
                        <TopHeader
                            taxPrice="$7,500"
                            text1="Federal Tax Credit"
                            text2="All Model 3 vehicles currently qualify for a federal tax credit for eligible buyers. Reductions likely after Dec 31."
                        />
                    </header>
                    <div className="car-speed">
                        <SectionTitle title="Model 3" />
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
                                range="272"
                                top="140"
                                sec="5.8" />}
                            {activeSpeed === "longRange" && <ModelStantardSpeed
                                range="333"
                                top="145"
                                sec="4.2" />}
                            {activeSpeed === "performance" && <ModelStantardSpeed
                                range="315"
                                top="162"
                                sec="3.1" />}
                        </div>
                        <div className="prices">
                            <div>
                                {activePrice === "saving" && <ModelPriceStantard handelSpeed={() => {
                                    setActiveSpeed("stantard")
                                }}
                                    text="Model 3" price="$29,740*"
                                    titel="Rear-Wheel Drive" />}
                                {activePrice === "price" && <ModelPriceStantard handelSpeed={() => {
                                    setActiveSpeed("stantard")
                                }}
                                    text="Model 3" price="$40,240*"
                                    titel="Rear-Wheel Drive" />}
                            </div>
                            <p><a href="" style={{ textDecoration: "none" }}><span style={{ borderBottom: "2px black Solid" }}>Learn More</span> about Range and Performance</a></p>
                            <div>
                                <h2 style={{ fontWeight: "400", textAlign: "start" }}>Dual Motor All-Wheel Drive</h2>
                                {activePrice === "saving" && <ModelLongRangePrice handelSpeed={() => {
                                    setActiveSpeed("longRange")
                                }}
                                    text="Model 3 Long Range"
                                    price="$36,740*" />}
                                {activePrice === "price" && <ModelLongRangePrice handelSpeed={() => {
                                    setActiveSpeed("longRange")
                                }}
                                    text="Model 3 Long Range"
                                    price="$47,240*" />}
                                {activePrice === "saving" && <ModelPricePerformance handelSpeed={() => {
                                    setActiveSpeed("performance")
                                }}
                                    text="Model 3 Performance"
                                    price="$42,740*" />}
                                {activePrice === "price" && <ModelPricePerformance handelSpeed={() => {
                                    setActiveSpeed("performance")
                                }}
                                    text="Model 3 Performance"
                                    price="$53,240*" />}
                            </div>
                            <PriceDescriptionOrderPage
                                text="*Price assume $7,500 IRA Federal Tax Credit (not all customers qualify)
                    and est. gas saving of $3,000 over 3 years. "/>
                            <FeatureDetails />
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
                    <Wheels3 />
                    <div className=" interior">
                        <h1 style={{ fontWeight: "normal", fontSize: "40px" }}>Interior</h1>
                        <div className="interior-btns">
                            <InteriorBlackButton handelColor={() => {
                                setBtnColor("black")
                                // setActiveColor("black")

                            }} />
                            <InteriorWhiteButton handelColor={() => {
                                setBtnColor("white")
                                // setActiveColor("white")

                            }} />
                        </div>
                        <div>
                            {btnColor === "black" && <div className="interior-text"><p><span style={{ fontWeight: "500" }}>All Black</span>
                                <span style={{ opacity: "0.9" }}>Included</span></p></div>}
                            {btnColor === "white" && <div className="interior-text"><p><span style={{ fontWeight: "500" }}>Black and White</span>
                                <span style={{ opacity: "0.9" }}>$2,000</span></p></div>}
                        </div>
                        <FeatureDetails />
                    </div>
                    <EnhancedAutopilot />
                    <ChargingOrder price1="$475" price2="$230" />
                    <SubmitOrder model="Model 3"
                        date="Est. Delivery: Oct - Nov 2023"
                        qualification="Your design qualifies for a $7,500 federal tax credit for eligible buyers." />
                </div>
            </div>
        </div>
    )
}

export default OrderModel3
