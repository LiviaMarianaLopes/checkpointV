"use client"
import { useState } from "react";
import "./styles.css";
const ContatoForm = ()=>{
    const [nome, setNome] = useState("");
    const [email, setEmail] = useState("");
    const [mensagem, setMensagem] = useState("");
    
  const nomeChange = (event: any) => {
    setNome(event.target.value);
  };
  const emailChange = (event: any) => {
    setEmail(event.target.value);
  };
  const mensagemChange = (event: any) => {
    setMensagem(event.target.value);
  };
    return (
        <div className="menu">
          <form className="cadastro">
            <h1>Mande sua mensagem</h1>
            <div>
                
          <label htmlFor="name">Nome</label>
          <input id = "name" type="text" onChange={nomeChange} className="border-2" />
          </div>
         <div>
          <label htmlFor="email">Email</label>
          <input id = "email" type="email" onChange={emailChange} className="border-2" />
          </div>
          <div>
          <label htmlFor="mensagem">Mensagem</label>
          <textarea id="mensagem" onChange={mensagemChange}></textarea>
                    </div>
          <button 
          className="bg-slate-500 p-2">
            Enviar
          </button>
          </form>
          </div>)
}
export default ContatoForm;