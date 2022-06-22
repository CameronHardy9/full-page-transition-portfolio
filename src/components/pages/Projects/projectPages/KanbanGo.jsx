export default function KanbanGo(){
    return(
        <article className="projectContainer page red">
            <h1>Kanban Go</h1>
            <div className="projectPage">
                <img src={require("../assets/KanbanGo.png")} alt="KanbanGo Project" />
                <div className="projectInfo">
                    <div className="projectLinks">
                        <a href="https://github.com/CameronHardy9/Kanban_Go" rel="noreferrer" target="_blank">GitHub Repo</a>
                        <a href="https://kanban-go.netlify.app/" rel="noreferrer" target="_blank">Live Site</a>
                    </div>
                    <p>
                        Project details here...
                    </p>
                </div>
            </div>
        </article>
    );
};