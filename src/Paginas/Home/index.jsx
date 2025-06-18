export const Home = () => {

  const dadosUsuario = JSON.parse(localStorage.getItem('usuario'));

  const nome = dadosUsuario.nome

  return (
    <div className="home">
        <h1>Seja bem vindo(a) <span className="usuario">{nome}</span>.</h1>
    </div>
  )
}
