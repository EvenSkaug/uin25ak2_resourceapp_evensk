import "../styles/PageTitle.scss"

export default function PageTitle( {category} ) {
    return (
        <h2>{category}</h2>
    );
}

//Komponent som bruker "catergory" propen fra resources komponentet til å skrive ut tittelen på siden.