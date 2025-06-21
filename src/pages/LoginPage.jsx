import { useState } from 'react'
import LoginForm from '../components/LoginForm';
import RegisterForm from '../components/RegisterForm';
import ServerMessage from '../components/ServerMessage';

function LoginPage(props) {
  const [registering, setRegistering] = useState(true);
  const [serverMessage, setServerMessage] = useState('');
  const [error, setError] = useState(false);

  return (
    <>
      <main className={props.isMobile ? "login-main mobile" : "login-main pc"}>
        <svg width="100%" height="100%">
          <circle className='circle1' cx="10%" cy="5%" r="30%" />
          <circle className='circle2' cx="40%" cy="30%" r="20%" />
          <circle className='circle3' cx="10%" cy="95%" r="25%" />
        </svg>

        <section className="forms">
          {
            serverMessage !== '' && <ServerMessage message={serverMessage} error={error} />
          }
          {
            registering
              ? <LoginForm 
                  error={error} setError={setError} setServerMessage={setServerMessage} setRegistering={setRegistering} 
                />
              : <RegisterForm 
                  error={error} setError={setError} setRegistering={setRegistering} setServerMessage={setServerMessage}
                /> 
          }
        </section>
      </main>
    </>
  )
}

export default LoginPage;