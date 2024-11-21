import "../styles/footer.css";

export default function Footer() {
    return (
        <footer>
            <h3>Nome da Empresa</h3>
            <p>&copy; 2024 Todos os direitos reservados.</p>

            <div className="footer-links">
            <a href="#">Sobre nós</a>
            <a href="#">Política de Privacidade</a>
            <a href="#">Termos de Serviço</a>
            </div>

            <div className="footer-socials">
            <a href="#" aria-label="Facebook">F</a>
            <a href="#" aria-label="Instagram">I</a>
            <a href="#" aria-label="Twitter">T</a>
            <a href="#" aria-label="LinkedIn">L</a>
            </div>
        </footer>
    )
}