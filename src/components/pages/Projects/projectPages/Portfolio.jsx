export default function Portfolio(){
    return(
        <article className="projectContainer page red">
            <h1>Portfolio</h1>
            <div className="projectPage">
                <img src={require("../assets/Portfolio.png")} alt="Portfolio Project" />
                <div className="projectInfo">
                    <div className="projectLinks">
                        <a href="https://github.com/CameronHardy9/full-page-transition-portfolio" rel="noreferrer" target="_blank">GitHub Repo</a>
                        <a href="https://www.cameron-hardy.com" rel="noreferrer" target="_blank">Live Site</a>
                    </div>
                    <p>
                        Project details here...
                    </p>
                </div>
            </div>
        </article>
    );
};