export default function KanbanGo(props){
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