import './Projects.css';

export default function Projects(){
    return(
        <section className="projectsContainer page orange">
            <article className='project'>
                <h2>Portfolio Site</h2>
                <div className="projectLinks">
                    <a href="https://github.com/CameronHardy9/full-page-transition-portfolio" rel="noreferrer" target="_blank">GitHub Repo</a>
                    <a href="https://www.cameron-hardy.com" rel="noreferrer" target="_blank">Live Site</a>
                </div>
            </article>
            <article className='project'>
                <h2>Checkbook Pocket</h2>
                <div className="projectLinks">
                    <a href="https://github.com/CameronHardy9/CheckBook-Pocket" rel="noreferrer" target="_blank">GitHub Repo</a>
                    <a href="https://checkbook-pocket.web.app" rel="noreferrer" target="_blank">Live Site</a>
                </div>
            </article>
            <article className='project'>
                <h2>Kanban Go</h2>
                <div className="projectLinks">
                    <a href="https://github.com/CameronHardy9/Kanban_Go" rel="noreferrer" target="_blank">GitHub Repo</a>
                    <a href="https://kanban-go.netlify.app/" rel="noreferrer" target="_blank">Live Site</a>
                </div>
            </article>
            <article className='project'>
                <h2>Pokedex</h2>
                <div className="projectLinks">
                    <a href="https://github.com/CameronHardy9/Pokedex_Project" rel="noreferrer" target="_blank">GitHub Repo</a>
                    <a href="https://project-pokedex.netlify.app/" rel="noreferrer" target="_blank">Live Site</a>
                </div>
            </article>
        </section>
    );
};