import Send from "./send.tsx";
import "../styles/send.css"
import "../styles/button.css"
import { useState } from "react";


export default function Contato() {

    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');

    async function enviarEmail(name:string, mail:string): Promise<void> {
        const data = {
            nome: name,
            email: mail,
        };
        
        console.log('Teste 1 = ' + JSON.stringify(data));
        
        try {
            const response = await fetch('https://testesandro-678569712894.us-central1.run.app/receba', {
            method: 'POST',
            headers: {'Content-Type':'application/json'},
            mode: 'no-cors',
            body: JSON.stringify(data),
            });

            if (!response.ok) {
                throw new Error('Erro na requisição: ' + response.status);
            }
        
            const result = await response.json();
            console.log(result);

        } catch (error) {
            console.error('Erro ao enviar dados:', error);
        }
    }

    const handleSubmit = () =>{
        enviarEmail(nome, email);
    };

    return (
        <>
            <header className="container content">
                <span>
                    <p>Assine nossa Newsletter!</p>
                    <h2>Produtos exclusivos para você</h2>
                </span>
                <p>Forneça seu nome e e-mail abaixo para receber ofertas e produtos exclusivos, saiba mais sobre nossa empresa esteja mais próximo das soluções ideais para você.</p>
            </header>
            <span className="content input">
                <input type="text" value={email} 
                    onChange={event => setEmail(event.target.value)} placeholder="Seu e-mail" />
                <input type="text" value={nome}
                    onChange={event => setNome(event.target.value)} placeholder="Seu nome"/>
                
                <Send text="Assinar" func={handleSubmit} />
            </span>
        </>
    )
}
