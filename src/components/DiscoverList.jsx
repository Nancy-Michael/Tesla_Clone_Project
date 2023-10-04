import Header from "./Header"


function DiscoverList() {
    return (
        <div>
            <Header />
            <div className="discover-list">
                <div className="resourse">
                    <h3>Resources</h3>
                    <a href="">Demo Drive</a>
                    <a href="">insurance</a>
                    <a href="">Video Guide</a>
                    <a href="">Customer Stories</a>
                    <a href="">Events</a>
                </div>
                <div className="location-Services">
                    <h3>Location Services</h3>
                    <a href="">Find Us</a>
                    <a href="">Trip Planner</a>
                    <a href="">Find a Collision Center</a>
                    <a href="">Find a Certified</a>
                </div>
                <div className="company ">
                    <h3>Company</h3>
                    <a href="">About</a>
                    <a href="">Careers</a>
                    <a href="">Investor Relations</a>
                </div>

            </div>
        </div>

    )
}

export default DiscoverList
