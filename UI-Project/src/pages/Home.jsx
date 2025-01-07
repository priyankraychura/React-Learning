import HomeSection from "../components/HomeSection";
import Navbar from "../components/Navbar";
import './Home.css';

function Home() {
    return (
        <>
            <Navbar />
            <div className="home-main">
                <div className="home-banner">
                    <img src="https://cdn.zeptonow.com/web-static-assets-prod/artifacts/12.25.0/tr:w-1438,ar-1438-265,pr-true,f-auto,q-80//images/paan-corner/paan-corner-desktop.png" alt="" />
                </div>
                <HomeSection />
            </div>
        </>
    )
}

export default Home;