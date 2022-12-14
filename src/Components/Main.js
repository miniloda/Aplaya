import Hero from "./MainLayout/Hero"
import About from "./MainLayout/About"
import Featured from "./MainLayout/Featured"
import Gallery from "./MainLayout/Gallery"
import Contact from "./MainLayout/Contact"
import GoogleApiWrapper  from "./MainLayout/Maps"
const MainLayout = () => {
    return (
        <div>
            <Hero />
            <About />
            <Featured />
            <Gallery />
            <Contact />
            
        </div>
    )
}

export default MainLayout;