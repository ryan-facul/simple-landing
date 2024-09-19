import "../styles/cards.css";
import Button from "./button";
import Imagem from "../assets/react.svg";


export default function Card() {
    return (
        <div className="card">
            <img src={Imagem} alt="Imagem do Card" className="card-img" />
                <div className="card-content">
                    <h2 className="card-title">Novidade!</h2>
                    <p className="card-description">Este é um novo produto da overtech! Aqui você pode verificar as informações relevantes sobre este produto. Clique em saiba mais!</p>
                    <Button text="Saiba mais" secondary></Button>
                </div>
        </div>
    )
}