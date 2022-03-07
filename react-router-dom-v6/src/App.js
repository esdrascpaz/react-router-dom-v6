import './App.css';

import Navigation from './Navigation'
import Home from './Home'
import Users from './Users'

import { Routes, Route } from 'react-router-dom'
import Layout from './Layout';

function App() {
  return (
    <>

      <h1>React Router Dom V6</h1>

      <Navigation />

      <Routes>

        {/* Passando um Route com os estilos de Layout para seus filhos */}
        <Route element={<Layout />} >

          <Route path="home" element={<Home />} />
          <Route path="users" element={<Users />} />

        </Route>

      </Routes>

    </>
  );
}

export default App;
