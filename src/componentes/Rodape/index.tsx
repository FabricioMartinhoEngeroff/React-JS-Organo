import './rodape.css';

interface RodapeProps {
    facebookUrl: string;
    twitterUrl: string;
    instagramUrl: string;
    logoUrl: string;
    textoAlternativoLogo?: string;
}

const Rodape = ({ 
    facebookUrl, 
    twitterUrl, 
    instagramUrl, 
    logoUrl, 
    textoAlternativoLogo = "Logo da empresa" 
}: RodapeProps) => {
    return (
        <footer className="footer">
            <section>
                <ul>
                    <li>
                        <a href={facebookUrl} target="_blank" rel="noopener noreferrer">
                            <img src="/imagens/facebook.png" alt="Facebook" />
                        </a>
                    </li>
                    <li>
                        <a href={twitterUrl} target="_blank" rel="noopener noreferrer">
                            <img src="/imagens/twitter.png" alt="Twitter" />
                        </a>
                    </li>
                    <li>
                        <a href={instagramUrl} target="_blank" rel="noopener noreferrer">
                            <img src="/imagens/instagram.png" alt="Instagram" />
                        </a>
                    </li>
                </ul>
            </section>
            <section>
                <img src={logoUrl} alt={textoAlternativoLogo} />
            </section>
            <section>
                <p>Desenvolvido por Alura.</p>
            </section>
        </footer>
    );
};

export default Rodape;
