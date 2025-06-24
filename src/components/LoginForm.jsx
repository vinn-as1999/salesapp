import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function LoginForm(props) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const emailClassName = email ? 'login-field has-content' : 'login-field';
  const pswdClassName = password ? 'login-field has-content' : 'login-field';

  const navigate = useNavigate();


  async function loginUser() {
    const requestBody = { email, password };

    try {
      const response = await fetch('http://localhost:5152/login', {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(requestBody)
      });

      const data = await response.json();
      
      console.log('o data: ', data);

      const message = data.message;
      const status = response.status;
      const token = data.token;

      props.setServerMessage(message);
      props.setError(false);

      if (status !== 200) {
        props.setError(true);
        return
      }

      localStorage.setItem('token', token);
      navigate('/home');

    } catch (error) {
      console.log("Erro na autenticação:", error);
      props.setError(true);
    }
  };

  
  return (
    <div>
      <main style={{
          display: 'flex', 
          flexDirection: 'column', 
          justifyContent: 'center', 
          alignItems: 'center'
        }}>
        <h1>Login</h1>
        <form onSubmit={(e) => { e.preventDefault(); loginUser() }}>
          <div className={emailClassName}>
            <label>Email</label>
            <input placeholder='ex: 0gV2d@example.com' type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
          </div>
          <div className={pswdClassName}>
            <label>Senha</label>
            <input placeholder='ex: 123456' type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
          </div>

          <div className="forgot-password">Esqueceu sua senha?</div>
          <button type="submit">Entrar</button>
          <div className="register">
            {!props.registering ? 'Não tem uma conta?' : 'Não tem uma conta? '}
            <span onClick={() => props.setRegistering(prev => !prev)}>
              {props.registering ? 'Faça o login' : 'Cadastre-se'}
            </span>
          </div>
        </form>
      </main>
    </div>
  )
}

export default LoginForm