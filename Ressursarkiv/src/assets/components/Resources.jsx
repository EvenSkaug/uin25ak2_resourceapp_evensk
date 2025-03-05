import "../styles/Resources.scss"
import resources from "../scripts/ressurser.js";
import { useParams } from "react-router-dom";
import PageTitle from "./PageTitle.jsx";


export default function Resources() {
    const { category } = useParams();

    const filteredResources = resources.filter(
        (resource) => resource.category === category
    );

    return (
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

