export default function CheckbookPocket(props) {
    return (
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
            <h1>Checkbook Pocket</h1>
            <div className="projectPage">
                <img
                    src={require("../assets/CheckbookPocket.png")}
                    alt="CheckbookPocket Project"
                />
                <div className="projectInfo">
                    <div className="projectLinks">
                        <a
                            href="https://github.com/CameronHardy9/CheckBook-Pocket"
                            rel="noreferrer"
                            target="_blank"
                        >
                            GitHub Repo
                        </a>
                        <a
                            href="https://checkbook-pocket.web.app"
                            rel="noreferrer"
                            target="_blank"
                        >
                            Live Site
                        </a>
                    </div>
                    <p>
                        Full-stack app using React on the frontend, Node/Express
                        for the backend, and MongoDB for a database. Checkbook
                        Pocket is a budget tracking app where users can set a
                        budget and log their spending. Purchases are tracked by
                        date and visualized in a list form where they can be
                        added, edited, or deleted. Most UI/UX features were
                        created using the Material UI library. User
                        authentication and hosting is handled by Firebase.
                    </p>
                </div>
            </div>
        </article>
    );
}
