//React Router
import { BrowserRouter, Routes, Route } from 'react-router';

//Components
import { FormLogin } from '../FormLogin'
import { FormCadastro } from '../FormCadastro';

//Páginas
import { Home }from '../../Paginas/Home'


export const Rotas = () => {
  return (
    <BrowserRouter>
        <Routes>
            <Route path='/' element={<FormLogin />} />
            <Route path='/cadastro/' element={<FormCadastro />} />
            <Route path='/home/' element={<Home />} />
        </Routes>
    </BrowserRouter>
  )
}
