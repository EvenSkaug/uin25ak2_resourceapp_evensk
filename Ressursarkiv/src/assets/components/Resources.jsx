import "../styles/Resources.scss"
import resources from "../scripts/ressurser.js";
import { useParams } from "react-router-dom";
import PageTitle from "./PageTitle.jsx";


export default function Resources() {
    //Variabel som gjør at "category" = det som det som står bak "/" i søkefeltet
    const { category } = useParams();

    //Variabel for å filtrere ressurs arrayen til bruk i mappingen når informasjonen skal skrives ut
    const filteredResources = resources.filter(
        (resource) => resource.category === category
    );

    return (

        //Seksjon med html som bruker verdiene fra objektene i arrayen til å mappe ut riktig informasjon  og skrive ut informasjonen til nettsiden basert på riktig katergori navn.
        <section>
            <PageTitle category={category} />
            <ul>
                {
                filteredResources.map((resource, index) => (
                <li key={index}>
                <a href={resource.url}>{resource.title}</a>
                </li>))
                }
            </ul>
        </section>
        );
    }

