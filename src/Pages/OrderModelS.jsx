import HeaderGlobalIcon from "../components/HeaderGlobalIcon"
import Logo from "../components/Logo"
import ProbableSaving from "../components/ProbableSaving"
import PurchasePrice from "../components/PurchasePrice"
import SectionTitle from "../components/SectionTitle"
import ModelStantardSpeed from "../components/ModelStantardSpeed"
import ModelTriMotorSpeed from "../components/ModelTriMotorSpeed"
import ModelPriceStantard from "../components/ModelPriceStantard"
import ModelPriceTri from "../components/ModelPriceTri"
import { useState } from "react"
import PriceDescriptionOrderPage from "../components/PriceDescriptionOrderPage"
import FeatureDetails from "../components/FeatureDetails"
import WhiteColorBtn from "../Buttons/WhiteColorBtn"
import BlackColorBtn from "../Buttons/BlackColorBtn"
import GrayColorBtn from "../Buttons/GrayColorBtn"
import BlueColorBtn from "../Buttons/BlueColorBtn"
import RedColorBtn from "../Buttons/RedColorBtn"
import ModelSGrayCarousel from "../ModelsCarousels/ModelSGrayCarousel"
import ModelSWhiteCarousel from "../ModelsCarousels/ModelSWhiteCarousel"
import ModelSBlackCarousel from "../ModelsCarousels/ModelSBlackCarousel"
import ModelSBlueCarousel from "../ModelsCarousels/ModelSBlueCarousel"
import ModelSRedCarousel from "../ModelsCarousels/ModelSRedCarousel"
import WheelsS from "../components/WheelsS"
import InteriorBlackButton from "../Buttons/InteriorBlackButton"
import InteriorWhiteButton from "../Buttons/InteriorWhiteButton"
import InteriorCreamButton from "../Buttons/InteriorCreamButton"
import SteeringControl from "../components/SteeringControl"
import EnhancedAutopilot from "../components/EnhancedAutopilot"
import Charging from "../components/Charging"
import ChargingOrder from "../components/ChargingOrder"
import SubmitOrder from "../components/SubmitOrder"

function OrderModelS() {
    const [activeColor, setActiveColor] = useState("whiteColor");
    const [activePrice, setActivePrice] = useState("saving");
    const [activeSpeed, setActiveSpeed] = useState("stantard");
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
                {activeColor === "grayColor" && <ModelSGrayCarousel />}
                {activeColor === "whiteColor" && <ModelSWhiteCarousel />}
                {activeColor === "blueColor" && <ModelSBlueCarousel />}
                {activeColor === "blackColor" && <ModelSBlackCarousel />}
                {activeColor === "redColor" && <ModelSRedCarousel />}


                <div className="side-bar">
                    <div className="car-speed">
                        <SectionTitle title="Model S" />
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
                                range="405"
                                top="149"
                                sec="3.1" />}
                            {activeSpeed === "tri" && <ModelTriMotorSpeed
                                range="396"
                                top="200"
                                sec="1.99" />}
                        </div>
                        <div>
                            {activePrice === "price" && <ModelPriceStantard handelSpeed={() => {
                                setActiveSpeed("stantard")
                                setActiveDes("stantard");
                            }
                            }
                                titel="Dual Motor All-Wheel Drive"
                                text="Model S"
                                price="$74,990*" />}
                            {activePrice === "saving" && <ModelPriceStantard handelSpeed={() => {
                                setActiveSpeed("stantard")
                                setActiveDes("stantard");
                            }
                            }
                                titel="Dual Motor All-Wheel Drive"
                                text="Model S"
                                price="$71,090" />}
                            {activePrice === "price" && <ModelPriceTri handelSpeed={() => {
                                setActiveSpeed("tri")
                                setActiveDes("tri")
                            }}
                                titel="Tri Motor All-Wheel Drive"
                                text="Model S Plaid"
                                price="$89,990*" />}
                            {activePrice === "saving" && <ModelPriceTri handelSpeed={() => {
                                setActiveSpeed("tri")
                                setActiveDes("tri")
                            }}
                                titel="Tri Motor All-Wheel Drive"
                                text="Model S Plaid"
                                price="$86,090*" />}
                            <PriceDescriptionOrderPage
                                text="* Prices include est. gas savings of $3,900 over 3 years." />
                        </div>
                        <FeatureDetails />

                    </div>
                    <h1 style={{ marginTop: "40px", fontWeight: "400" }}>Paint</h1>
                    <div className="paint-btns">
                        <WhiteColorBtn handelColor={() => setActiveColor("whiteColor")} />
                        <BlackColorBtn handelColor={() => { setActiveColor("blackColor") }} />
                        <GrayColorBtn handelColor={() => { setActiveColor("grayColor") }} />
                        <BlueColorBtn handelColor={() => setActiveColor("blueColor")} />
                        <RedColorBtn handelColor={() => { setActiveColor("redColor") }} />
                    </div>
                    <WheelsS />
                    <div className=" interior">
                        <h1 style={{ fontWeight: "normal", fontSize: "40px" }}>Interior</h1>
                        <div className="interior-btns">
                            <InteriorBlackButton handelColor={() => {
                                setBtnColor("black")
                                setActiveColor([
                                    { img: "/images/ordermodelx-5.jpg" },
                                    ...activeColor
                                ])
                            }} />
                            <InteriorWhiteButton handelColor={() => {
                                setBtnColor("white")
                                setActiveColor([
                                    { img: "https://static-assets.tesla.com/configurator/compositor?context=design_studio_2&options=$MTX15,$PPSW,$IWW00,$ST03&view=INTERIOR&model=mx&size=1920&bkba_opt=2&crop=0,0,0,0&" },
                                    ...activeColor
                                ])
                            }} />
                            <InteriorCreamButton handelColor={() => {
                                setBtnColor("cream")
                                console.log(activeColor)
                                setActiveColor([
                                    { img: "/images/ModelXwhite-5.jpg" },
                                    ...activeColor
                                ])
                            }} />
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
                    <SteeringControl />
                    <FeatureDetails />
                    <EnhancedAutopilot />
                    <ChargingOrder price1="$475"
                        price2="$230" />
                    <SubmitOrder model="Model S"
                        date="Est.Delivery: Oct - Nov 2023" />
                </div>
            </div>
        </div>
    )
}

export default OrderModelS
