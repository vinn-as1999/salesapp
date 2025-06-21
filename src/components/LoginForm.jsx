import {useState} from 'react'

function LoginForm(props) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const emailClassName = email ? 'login-field has-content' : 'login-field';
  const pswdClassName = password ? 'login-field has-content' : 'login-field';

  
  return (
    <div>
      <main style={{
        display: 'flex', 
        flexDirection: 'column', 
        justifyContent: 'center', 
        alignItems: 'center'
      }}>
        <h1>Login</h1>
        <form>
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