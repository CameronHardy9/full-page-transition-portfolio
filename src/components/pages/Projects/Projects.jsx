import './Projects.css';

export default function Projects(props){
    //For y-axis coordinate - 100 / # of total rows in grid
    const magicNegativeNumber = -(100 / 7);

    return(
        <section className="projectsContainer page orange">
            <button className='projectNav' onClick={() => {
                props.updateView(0, 0 * magicNegativeNumber);
            }}>
                Portfolio Site
            </button>
            <button className='projectNav' onClick={() => {
                props.updateView(-100, 0 * magicNegativeNumber);
            }}>
                Checkbook Pocket
            </button>
            <button className='projectNav' onClick={() => {
                props.updateView(-200, 0 * magicNegativeNumber);
            }}>
                Kanban Go
            </button>
            <button className='projectNav' onClick={() => {
                props.updateView(-400, 0 * magicNegativeNumber);
            }}>
                Pokedex
            </button>
        </section>
    );
};