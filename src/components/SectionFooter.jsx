

function SectionFooter({ totalPrice }) {
    return (
        <div>
            <p className="sec-footer">*Price before incentives and savings is ${totalPrice}, excluding taxes and fees. Subject to change.<br /><a href="#"> Learn about est. gas savings.</a></p>
        </div>
    )
}

export default SectionFooter
