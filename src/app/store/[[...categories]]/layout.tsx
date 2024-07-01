import './layout.css';
export default function Layout({children} : {children: React.ReactNode}){
    return (
        <main>
            <nav className='nav'>Navegacion de los productos:</nav>
            {children}
        </main>
    )
}