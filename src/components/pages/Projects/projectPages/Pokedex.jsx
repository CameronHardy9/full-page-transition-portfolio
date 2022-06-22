export default function Pokedex(){
    return(
        <article className="projectContainer page red">
            <h1>Pokedex</h1>
            <div className="projectPage">
                <img src={require("../assets/Pokedex.png")} alt="Pokedex Project" />
                <div className="projectInfo">
                    <div className="projectLinks">
                        <a href="https://github.com/CameronHardy9/Pokedex_Project" rel="noreferrer" target="_blank">GitHub Repo</a>
                        <a href="https://project-pokedex.netlify.app/" rel="noreferrer" target="_blank">Live Site</a>
                    </div>
                    <p>
                        Project details here...
                    </p>
                </div>
            </div>
        </article>
    );
};