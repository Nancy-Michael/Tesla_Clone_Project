import TopHeader from "../components/TopHeader"
import Header from "../components/Header"
import ProductsList from "../components/ProductsList"
import UseFetch from "../UseFetch"


function HomePage() {
    const { data: products } = UseFetch("http://localhost:8000/products")
    return (
        <section className="home-page">
            <TopHeader
                taxPrice="$7,500"
                text1=" Federal Tax Credit"
                text2="Available for Model 3, Model Y and certain Model X. Reductions to tax credit likely after Dec 31."
            />
            <Header />
            <ProductsList products={products} />

        </section>
    )

}

export default HomePage
