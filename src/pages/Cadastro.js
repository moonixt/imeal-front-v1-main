import React from 'react'
import {useState} from 'react'
import axios from 'axios'

const Cadastro = () => {

  const [nome, setNome] = useState("")
  const [cpf, setCPF] = useState("")
  const [celular, setCelular] = useState("")
  const [email, setEmail] = useState("")
  const [senha, setSenha] = useState("")

  const handleSubmit = async (event) => {
    event.preventDefault();
    
    let formfield = new FormData

    formfield.append('nome', nome)
    formfield.append('cpf', cpf)
    formfield.append('celular', celular)
    formfield.append('email', email)
    formfield.append('senha', senha)

try {
    await axios.post('http://localhost:8000/usuarios/', formfield)
    alert('Conta Registrado')
} catch (error) {
    alert('Não foi possível realizar a ação',error);
}
    
  }

  return (
    <div>
      <form className='form-group' onSubmit={handleSubmit} >
        <label className="input input-bordered flex items-center gap-2 mb-4">
          <input
            type="text"
            className="grow"
            placeholder="Nome"
            name="nome"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
          />
        </label>

        <label className="input input-bordered flex items-center gap-2 mb-4">
          <input
            type="number"
            className="grow"
            placeholder="CPF"
            name="cpf"
            value={cpf}
            onChange={(e) => setCPF(e.target.value)}
          />
        </label>

        <label className="input input-bordered flex items-center gap-2 mb-4">
          <input
            type="number"
            className="grow"
            placeholder="Telefone"
            name="celular"
            value={celular}
            onChange={(e) => setCelular(e.target.value)}
          />
        </label>

        <label className="input input-bordered flex items-center gap-2 mb-4">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16 16"
            fill="currentColor"
            className="w-4 h-4 opacity-70"
          >
            <path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
            <path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
          </svg>
          <input
            type="email"
            className="grow"
            placeholder="Email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </label>

        <label className="input input-bordered flex items-center gap-2 mb-4">
          
          <input
            type="password"
            className="grow"
            placeholder="Senha"
            name="senha"
            value={senha}
            onChange={(e) => setSenha(e.target.value)}
          />
        </label>
        <input
          className="m-2 rounded bg-cyan-950 px-10 py-2 text-white"
          type="submit"
          value="Cadastrar-se"
        />
      </form>
    </div>
  )
}

export default Cadastro
