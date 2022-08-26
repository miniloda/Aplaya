import Hero from "./MainLayout/Hero"
import About from "./MainLayout/About"
import Featured from "./MainLayout/Featured"
import Gallery from "./MainLayout/Gallery"
const MainLayout = () => {
    return (
        <div>
            <Hero />
            <About />
            <Featured />
            <Gallery />
        </div>
    )
}

export default MainLayout;