//React
import { useState } from 'react';

//React Route
import { RotasLink } from '../RotasLink';
import { useNavigate } from 'react-router';

//Css
import style from './styles.module.css';

export const FormLogin = () => {
    const [ nomeLogin, setNomeLogin ] = useState('');
    const [ senhaLogin, setSenhaLogin ] = useState('');
    const [ erro, setErro ] = useState('');

    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();

        const dadosSalvos = JSON.parse(localStorage.getItem('usuario'));

        if (dadosSalvos) {
            const nomeSalvo = dadosSalvos.nome;
            const senhaSalva = dadosSalvos.confirmarSenha;

            if (nomeLogin === nomeSalvo && senhaLogin === senhaSalva) {
                navigate('/home/')
            } else {
                setErro('Nome ou senha incorretos.')
            }
        } else {
            setErro('Nenhum usuário cadastrado');
        }

        setNomeLogin('');
        setSenhaLogin('');
    }

  return (
    <div className={style.login}>
        <form onSubmit={handleSubmit}>
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
                {erro && <span className={style.erro}>{erro}</span>}
            </label>

            <label>
                Senha:
                <input 
                type="password" 
                id='senhaLogin'
                placeholder='Digite sua senha'
                value={senhaLogin}
                onChange={e => setSenhaLogin(e.target.value)}
                />
                {erro && <span className={style.erro}>{erro}</span>}
            </label>

            <button type="submit" className={style.btn}>Enviar</button>

            <span className={style.cadastrar}>Não possui uma conta? faça seu <RotasLink href="/cadastro/">cadastro</RotasLink></span>
        </form>

    </div>
  )
}
