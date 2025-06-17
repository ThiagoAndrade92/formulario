//React
import { useState } from 'react';

//Css
import style from './styles.module.css';

export const FormLogin = () => {
    const [ nomeLogin, setNomeLogin ] = useState('');
    const [ senhaLogin, setSenhaLogin ] = useState('');

  return (
    <div className={style.login}>
        <form>
            <h2 className={style.titulo}>Login</h2>
            <label>
                Nome:
                <input 
                type="text" 
                id='nomeLogin'
                placeholder='Digite seu nome'
                value={nomeLogin}
                onChange={e => setNomeLogin(e.target.value)}
                />
            </label>

            <label>
                Nome:
                <input 
                type="password" 
                id='senhaLogin'
                placeholder='Digite sua senha'
                value={senhaLogin}
                onChange={e => setSenhaLogin(e.target.value)}
                />
            </label>

            <button type="submit" className={style.btn}>Enviar</button>

            <span className={style.cadastrar}>Não possui uma conta? faça <a href="/">login</a></span>
        </form>

    </div>
  )
}
