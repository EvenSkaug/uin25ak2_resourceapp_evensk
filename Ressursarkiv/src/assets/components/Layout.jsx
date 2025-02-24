import Nav from './Nav';
import "../styles/layout.scss"

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