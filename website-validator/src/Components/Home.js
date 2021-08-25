import { NavLink } from "react-router-dom";

//Description about app, featured verified websites.
export default function Home() {


    return (
        <section className="home">

            <h2>Checkout some of these great websites!</h2>
            <nav>
                <NavLink className="button" to="/SiteList">
                SiteList
                </NavLink>
            </nav>
            <p>
                Love to e-shop, but don't know if you can trust the site?
                Don't worry! As fellow shoppers, we are here to help each
                other make safe purchases.
            </p>
            <video src="/pexels-kindel-media-6994619.mp4" autoPlay loop muted id="shopVideo"/>
        </section>
    )
}