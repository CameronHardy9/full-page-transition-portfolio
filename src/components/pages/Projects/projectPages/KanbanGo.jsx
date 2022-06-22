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
                        Full-stack app using React on the frontend, Node/Express for the backend, and MongoDB for a database. This is an implementation of a simple ‘Kanban’ style project management app where users can log in, create projects, and manage tasks divided across multiple columns or segments of a project. This app supports user auth through Auth0, caching, auto-save (with status indicator), drag & drop functionality, and add/edit/delete options for Tasks, Columns, and Projects.
                    </p>
                </div>
            </div>
        </article>
    );
};