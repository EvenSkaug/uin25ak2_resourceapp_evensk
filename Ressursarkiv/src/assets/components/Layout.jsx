import Nav from './Nav';
import "../styles/Layout.scss"

export default function Layout({children}) {
    return (
        <>
        {/*Layout komponent som holder på stilen til nettsiden. Header komponentet holder på Nav komponentet og main holder på en seksjon med "children"
        som inneholder alle barneelemtene som ligger i Layout i App.*/}
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