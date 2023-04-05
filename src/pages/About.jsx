import Banner from "../components/Banner"
import About from "../components/About"
import bannerImage from "../assets/kalen-emsley-Bkci_8qcdvQ-unsplash 2.png"

export default function PageAbout() {
    return(
        <main>
            <Banner image={bannerImage} showText={false} />
            <About />
        </main>
    )
}
