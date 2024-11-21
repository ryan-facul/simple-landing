import "../styles/footer.css";
import Face from "../assets/images/317727_facebook_social media_social_icon.svg";
import Insta from "../assets/images/1298747_instagram_brand_logo_social media_icon.svg";
import X from "../assets/images/11244080_x_twitter_elon musk_twitter new logo_icon.svg";
import Link from "../assets/images/5296501_linkedin_network_linkedin logo_icon.svg";

export default function Footer() {
    return (
        <footer>
            <h3>Overtech</h3>
            <p>&copy; 2024 Todos os direitos reservados.</p>

            <div className="footer-links">
                <a href="#">Sobre nós</a>
                <a href="#">Política de Privacidade</a>
                <a href="#">Termos de Serviço</a>
            </div>

            <div className="footer-socials">
                <a href="#" aria-label="Facebook"><img src={Face} alt="facebook" /></a>
                <a href="#" aria-label="Instagram"><img src={Insta} alt="instagram" /></a>
                <a href="#" aria-label="X"><img src={X} alt="x" /></a>
                <a href="#" aria-label="LinkedIn"><img src={Link} alt="linkedin" /></a>
            </div>
        </footer>
    )
}
