import { useState } from 'react';

function RegisterForm(props) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPswd, setConfirmPswd] = useState('');

  const nameClassName = name ? 'login-field has-content' : 'login-field';
  const emailClassName = email ? 'login-field has-content' : 'login-field';
  const pswdClassName = password ? 'login-field has-content' : 'login-field';


  async function registerUser() {
    if (!name || !email || !password || !confirmPswd) {
      console.log("n tem dados :(")
      return
    }

    if (password !== confirmPswd) {
      console.log("senha n combina :(")
      return
    }

    const requestBody = { name, email, password };

    const response = await fetch('http://localhost:5152/register', {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(requestBody)
    });

    
  }


  return (
    <div>
      <main style={{
        display: 'flex', 
        flexDirection: 'column', 
        justifyContent: 'center', 
        alignItems: 'center'
      }}>
        <h1>Cadastro</h1>
        <form onSubmit={(e) => { e.preventDefault(); registerUser(); }}>
          <div className={nameClassName}>
            <label>Nome</label>
            <input 
              placeholder='ex: João da Silva' 
              type="text" 
              value={name} 
              onChange={(e) => setName(e.target.value)} 
            />
          </div>
          <div className={nameClassName}>
            <label>Email</label>
            <input 
              placeholder='joão@exemplo.com' 
              type="text" 
              value={email} 
              onChange={(e) => setEmail(e.target.value)} 
            />
          </div>
          <div className={emailClassName}>
            <label>Senha</label>
            <input 
              placeholder='ex: 123456' 
              type="text" 
              value={password} 
              onChange={(e) => setPassword(e.target.value)} 
            />
          </div>
          <div className={pswdClassName}>
            <label>Confirmar Senha</label>
            <input 
              placeholder='Confirme sua senha' 
              type="password" 
              value={confirmPswd} 
              onChange={(e) => setConfirmPswd(e.target.value)} 
            />
          </div>

          <button type="submit">
            Cadastrar
          </button>
          <div className="register">
            Já tem uma conta?{' '}
            <span onClick={() => props.setRegistering(prev => !prev)}>
              Faça o login
            </span>
          </div>
        </form>
      </main>
    </div>
  );
}

export default RegisterForm;
