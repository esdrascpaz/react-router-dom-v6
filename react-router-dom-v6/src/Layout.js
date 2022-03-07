import { Outlet } from "react-router-dom";

export default function Layout() {
    return (
        <>
            {/*Estilo que será herdado aos componentes que receberem Layout como Pai*/}
            <main style={
                {
                    textDecoration: 'underline',
                    backgroundColor: 'cornflowerblue',
                    padding: '140px'
                }
            }>
                {/*Outlet passa o Children (Tudo que contém) para os elementos que o herdarem */}
                <Outlet />
            </main>
        </>
    )
}