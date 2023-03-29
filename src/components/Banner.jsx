import BannerImage from "../assets/banner.png"

export default function Banner() {
    return (
        <article className="article">
            <img className="article__banner-image" src={BannerImage} alt="Photographie avec un slogan écrit au centre" />
            <h2 className="article__banner-text" alt="Texte à insérer dans l'image">Texte à insérer dans l'image</h2>
        </article>
    )
}

