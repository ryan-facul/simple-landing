import Header from "./header";
import Card from "../components/card";
import HeroRectangleOne from "../assets/images/RectangleOne.png";
import HeroRectangleTwo from "../assets/images/RectangleTwo.png";
import "../styles/hero.css";
import "../styles/solucoes.css";
import "../styles/cards.css";
import "../styles/send.css";
import Contato from "../components/contato";
import Button from "../components/button";



function Home() {
    return (
        <>
            <div>
                <Header></Header>
                <section id="hero">
                    <span className="desktop-only">
                        <img src={HeroRectangleTwo} alt="Retangulo um tela inicial" />
                    </span>
                    <img src={HeroRectangleOne} alt="Retangulo dois tela inicial" />
                    <div className="container content">
                        <p className="desktop-only">
                            Olá
                        </p>
                        <h1>Soluções em tecnologia você encontra aqui!</h1>
                        <p>Te damos todo o suporte necessário em suas estações telemétricas? O melhor de tudo, nossas produtos são 100% nacionais, venha fazer parte do time Overtech!
                        </p>
                        <div className="flex gap-1">
                            <span><Button text="Cadastre-se" /></span>
                            <span className="desktop-only">
                                <Button text="Veja mais" secondary />
                            </span>
                        </div>
                    </div>

                </section>
                <section id="solucoes">
                    <div id="headerCard">
                        <h3>Soluções</h3>
                        <h2>Produtos para você!</h2>
                    </div>
                    <div id="cards">
                        <Card></Card>
                        <Card></Card>
                        <Card></Card>
                    </div>
                </section>
                <section id="send">
                    <Contato></Contato>
                </section>
            </div>
        </>
    )
}

export default Home;
