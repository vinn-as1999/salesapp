import { useState } from 'react'
import { AiOutlineMail } from "react-icons/ai";
import Navigation from '../components/Navigation';
import LoginForm from '../components/LoginForm';
import RegisterForm from '../components/RegisterForm';

function LoginPage(props) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [registering, setRegistering] = useState(true);
  const emailClassName = email ? 'login-field has-content' : 'login-field';
  const pswdClassName = password ? 'login-field has-content' : 'login-field';

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
            registering
              ? <LoginForm setRegistering={setRegistering} />
              : <RegisterForm setRegistering={setRegistering} /> 
          }
        </section>
      </main>
    </>
  )
}

export default LoginPage;