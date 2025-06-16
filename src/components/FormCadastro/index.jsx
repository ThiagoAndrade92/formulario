import style from './styles.module.css';

export const  FormCadastro= () => {
  return (
    <div className={style.form}>
        <form>
            <h2 className={style.titulo}>Cadastre-se</h2>
            <div className={style.inputs}>
                <label className={style.label}>
                    Nome:
                    <input
                    type="text"
                    id="nome"
                    placeholder='Digite seu nome'
                    />
                </label>

                <label className={style.label}>
                    Senha:
                    <input
                    type="password"
                    id="senha"
                    placeholder='Digite sua senha'
                    />
                </label>

                <label className={style.label}>
                    Corfirmar Senha:
                    <input
                    type="password"
                    id="corfirmar_senha"
                    placeholder='Confirme sua senha'
                    />
                </label>
            </div>
            <button type="submit" className={style.btn}>Enviar</button>
        
          </form>
    </div>
  )
}
