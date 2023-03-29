import React from "react";
import logements from "../datas/logements.json";
import { Link } from "react-router-dom";

export default function Logements() {
    return (
        <div className="logements">
            {logements.map((logement) => (
                <div className="logements__logement" key={logement.id}>
                    <Link to={`/logement/${logement.id}`} className="logements__logement__link">
                        <div className="logements__logement__image">
                            <img src={logement.cover} alt="" />
                            <div className="logements__logement__image__titre">{logement.title}</div>
                        </div>
                    </Link>
                </div>
            ))}
        </div>
    )
}





