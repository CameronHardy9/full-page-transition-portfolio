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
                        Full-stack app using React on the frontend, Node/Express for the backend, and MongoDB for a database. Checkbook Pocket is a budget tracking app where users can set a budget and log their spending. Purchases are tracked by date and visualized in a list form where they can be added, edited, or deleted. Most UI/UX features were created using the Material UI library. User authentication and hosting is handled by Firebase.
                    </p>
                </div>
            </div>
        </article>
    );
};