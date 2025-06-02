import { useState } from 'react';

function RegisterForm(props) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const nameClassName = name ? 'login-field has-content' : 'login-field';
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
        <h1>Cadastro</h1>
        <form>
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
              placeholder='ex: João da Silva' 
              type="text" 
              value={name} 
              onChange={(e) => setName(e.target.value)} 
            />
          </div>
          <div className={emailClassName}>
            <label>Senha</label>
            <input 
              placeholder='ex: usuario@example.com' 
              type="text" 
              value={email} 
              onChange={(e) => setEmail(e.target.value)} 
            />
          </div>
          <div className={pswdClassName}>
            <label>Confirmar Senha</label>
            <input 
              placeholder='Crie uma senha' 
              type="password" 
              value={password} 
              onChange={(e) => setPassword(e.target.value)} 
            />
          </div>

          <button type="submit">Cadastrar</button>
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
