import { useState } from 'react'
import SeatingBtn from '../Buttons/SeatingBtn'

function SeatingLayout() {
    const [seatNumber, setSeatNumber] = useState("five");
    return (
        <div className="layout">
            <h1 style={{ fontWeight: "normal" }}>Seating Layout</h1>
            <div className="layout-btns" >
                <SeatingBtn num={5} handelSeats={() => {
                    setSeatNumber("five")
                }} />
                <SeatingBtn num={6} handelSeats={() => {
                    setSeatNumber("six")
                }} />
                <SeatingBtn num={7} handelSeats={() => {
                    setSeatNumber("seven")
                }} />
            </div>
            <div className='layout-text'>
                {seatNumber === "five" && <p style={{ fontWeight: "500", }}>Five Seats
                    <span style={{ opacity: ".85", fontWeight: "normal" }}>Included</span></p>}
                {seatNumber === "six" && <p style={{ fontWeight: "500", }}>Six Seats
                    <span style={{ opacity: ".85", fontWeight: "normal" }}>$6,500</span></p>}
                {seatNumber === "seven" && <p style={{ fontWeight: "500", }}>Seven Seats
                    <span style={{ opacity: ".85", fontWeight: "normal" }}>$3,500</span></p>}
            </div>
            <a href="">View Seating Layouts</a>
        </div>
    )
}

export default SeatingLayout
