export default function Pokedex(props){
    return(
        <article className="projectContainer page red">
            <svg
                onClick={() => {
                    props.updateView(0, 5 * props.magicNegativeNumber)
                }}
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
            >
                <line x1="19" y1="12" x2="5" y2="12"></line>
                <polyline points="12 19 5 12 12 5"></polyline>
            </svg>
            <h1>Pokedex</h1>
            <div className="projectPage">
                <img src={require("../assets/Pokedex.png")} alt="Pokedex Project" />
                <div className="projectInfo">
                    <div className="projectLinks">
                        <a href="https://github.com/CameronHardy9/Pokedex_Project" rel="noreferrer" target="_blank">GitHub Repo</a>
                        <a href="https://project-pokedex.netlify.app/" rel="noreferrer" target="_blank">Live Site</a>
                    </div>
                    <p>
                        React-based app that pulls remote Pokémon data via Fetch request and populates the app with searchable Pokémon characters. The results can be further filtered based on two categories. This app uses React Router to give the user an experience of each Pokémon having a dedicated “about” page. It is built to be dynamic where any number of characters can be rendered based on what is returned from the Fetch request. Pokémon names are randomized and cycled for search bar placeholders.
                    </p>
                </div>
            </div>
        </article>
    );
};