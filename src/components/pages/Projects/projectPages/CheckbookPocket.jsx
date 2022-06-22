export default function CheckbookPocket(){
    return(
        <article className="projectContainer page red">
            <h1>Checkbook Pocket</h1>
            <div className="projectPage">
                <img src={require("../assets/CheckbookPocket.png")} alt="CheckbookPocket Project" />
                <div className="projectInfo">
                    <div className="projectLinks">
                        <a href="https://github.com/CameronHardy9/CheckBook-Pocket" rel="noreferrer" target="_blank">GitHub Repo</a>
                        <a href="https://checkbook-pocket.web.app" rel="noreferrer" target="_blank">Live Site</a>
                    </div>
                    <p>
                        Project details here...
                    </p>
                </div>
            </div>
        </article>
    );
};