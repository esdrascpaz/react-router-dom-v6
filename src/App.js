import './App.css';

import Navigation from './Navigation'
import Home from './Home'
import Users from './Users'
import User from './User';

import { useState } from 'react'

import { Routes, Route, useNavigate } from 'react-router-dom'
import Layout from './Layout';
import NoMacth from './NoMatch';

function App() {
  const navigate = useNavigate()  

  const [users, setUsers] = useState([
    { id: 1, fullName: 'Esdras' },
    ,{ id: 2, fullName: 'Ednalva' },
    { id: 3, fullName: 'PauNoCuDoDanilo' }
  ])  

  const handleRemoveUser = (userId) => {
    setUsers((state) => state.filter((user) => user.id !== userId))

    navigate('/users')
  }

  return (
    <>
      <h1>React Router Dom V6</h1>
      <Navigation />
      <Routes>
        {/*Passando um Route com os estilos de Layout para seus filhos*/}
        <Route element={<Layout />} > {/*Elemento de Rota com outros Elementos de Rota aninhados*/}
          <Route index element={<Home />} />
          <Route path="home" element={<Home />} />
          <Route path="users" element={<Users users={users} />}>
            <Route
              path=":userId"
              element={<User onRemoveUser={handleRemoveUser} />}
            />
          </Route>
          <Route path="*" element={<NoMacth />} /> {/*Envia o usuário para uma página de erro caso uma rota não seja encontrada*/}
        </Route>
      </Routes>

    </>
  );
}

export default App;
