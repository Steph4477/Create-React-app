import { useState } from 'react';
import arrow from "../assets/Arrow.svg";

export default function Collapse({ title, content }) {
  const [actif, setActif] = useState(false)

  return (
    <div className="collapse">
              
      <div className='collapse_title' title="Cliquez pour voir le contenu." onClick={() => setActif(!actif)}>
        <h2> {title} </h2>
        <img
          className={actif ? 'arrow arrow_down' : 'arrow arrow_up'}
          src={arrow}
          alt="Affiche le contenu."
          title= "Cliquez pour voir le contenu."
        />
      </div>
      
      <div className={actif ? 'collapse_content_hidden' : 'collapse_content' }>
        {Array.isArray(content) ? content.map((item, index) => (
          <p key={index}>{item}</p>
        )) : content}
      </div>

    </div>
  )
}