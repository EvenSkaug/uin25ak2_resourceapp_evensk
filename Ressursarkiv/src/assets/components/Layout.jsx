import Nav from './Nav';
import "../styles/Layout.scss"

export default function Layout({children}) {
    return (
        <>
        <header>
        <Nav />
        </header>
        
        <main>
            <section id="contentarea">
                {children}
            </section>
        </main>
        </>
    );
}