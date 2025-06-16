import { useState } from 'react';
import style from './styles.module.css';

export const  FormCadastro= () => {
    const [ nome, setNome ] = useState('');
    const [ senha, setSenha ] = useState('');
    const [ confirmarSenha, setConfirmarSenha ] = useState('');

    const [ erroNome, setErroNome ] = useState('');
    const [ erroSenha, setErroSenha ] = useState('');
    const [ erroConfirmarSenha, setErroConfirmarSenha ] = useState('');

    const validarNome = (valor) => {
        setNome(valor);
        if (valor.length < 3 || valor.trim() === '') {
            setErroNome('O campo precisa de no mínimo 3 caracteres.');
        } else {
            setErroNome('');
        }
    };

    const validarSenha = (valor) => {
        setSenha(valor);
        if(valor.length < 6 || valor.trim() === '') {
            setErroSenha('A senha deve ter pelo menos 6 caracteres.');
        } else {
            setErroSenha('');
        }
    };

    const validarConfirmarSenha = (valor) => {
        setConfirmarSenha(valor);
        if(valor !== senha || valor.trim() === '') {
            setErroConfirmarSenha('As senhas não coincidem.')
        } else {
            setErroConfirmarSenha('');
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (erroNome || erroSenha || erroConfirmarSenha) {
            alert('Corrija os erros antes de enviar.');
            return;
        }

        setNome('');
        setSenha('');
        setConfirmarSenha('');

        console.log(nome, senha, confirmarSenha)
    };


  return (
    <div className={style.form}>
        <form onSubmit={handleSubmit}>
            <h2 className={style.titulo}>Cadastre-se</h2>
            <div className={style.inputs}>
                <label className={style.label}>
                    Nome:
                    <input
                    type="text"
                    id="nome"
                    placeholder='Digite seu nome'
                    value={nome}
                    onChange={e => validarNome(e.target.value)}
                    />
                    {erroNome && <span className={style.erro}>{erroNome}</span>}
                </label>

                <label className={style.label}>
                    Senha:
                    <input
                    type="password"
                    id="senha"
                    placeholder='Digite sua senha'
                    value={senha}
                    onChange={e => validarSenha(e.target.value)}
                    />
                    {erroSenha && <p className={style.erro}>{erroSenha}</p>}
                </label>

                <label className={style.label}>
                    Confirmar Senha:
                    <input
                    type="password"
                    id="confirmar_senha"
                    placeholder='Confirme sua senha'
                    value={confirmarSenha}
                    onChange={e => validarConfirmarSenha(e.target.value)}
                    />
                    {erroConfirmarSenha && <p className={style.erro}>{erroConfirmarSenha}</p>}
                </label>
            </div>
            <button type="submit" className={style.btn}>Enviar</button>
        
          </form>
    </div>
  )
}
