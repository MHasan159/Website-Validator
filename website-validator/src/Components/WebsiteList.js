import Search from "./Search";
import WebsiteCards from "./WebsiteCards";

//List out cards, search (putting in child components)
    //Here is where we will build our function for search
export default function WebsiteList({ websites }) {

    const displayWebsites = 
    websites.map(website => 
        <WebsiteCards
        key={website.id}
        website={website}
        />
        )

    return (
        <div className="cards">
            {displayWebsites}
        </div>
    )
}
