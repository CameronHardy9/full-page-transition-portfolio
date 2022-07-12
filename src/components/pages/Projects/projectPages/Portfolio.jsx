export default function Portfolio(props){
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