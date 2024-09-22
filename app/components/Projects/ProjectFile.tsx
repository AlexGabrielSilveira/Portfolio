
import './project.css'
import SpaceInvaders from './SpaceInvaders/SpaceInvaders'
import TowerDefense from './TowerDefense/TowerDefense'

export default function Projects() {
    return (
        <main>
            <h1>Projects:</h1>
            <div className='content'>
                <TowerDefense />
                <SpaceInvaders />
            </div>
        </main>
    )
}