
export default function Banner({image, showText}) {
    return (
        
        <article className="article">
            <img className="article_banner-image" src={image} alt="Photographie avec un slogan écrit au centre" />
            {showText && <h1 className="article_banner-text" alt="Texte à insérer dans l'image">Chez vous, partout et ailleurs</h1>}
        </article>
    )
}

