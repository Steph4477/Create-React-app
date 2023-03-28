import BannerImage from "../assets/banner.png"

export default function Banner() {
    return (
        
        <article className="article">
            <img className="article__banner-image" src={BannerImage} alt="Photographie avec un slogan écrit dessus" />
            <h2 className="article__banner-text">Texte à insérer dans l'image</h2>
        </article>
    )
}
           
 