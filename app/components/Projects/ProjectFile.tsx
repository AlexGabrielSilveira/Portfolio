import Frogger from './frogger/Frogger'
import './project.css'
import SpaceInvanders from './space Invander/SpaceInvaders'

export default function Projects() {
    return (
        <main>
            <h1>Projects:</h1>
            <div className='content'>
                <Frogger />
               <SpaceInvanders />
            </div>
        </main>
    )
}