import ProjectTemplate from "../ProjectTemplate/Template";
import conceptArt_ from "../../../../public/conceptArt.jpg"
export default function SpaceInvaders() {
    return(
        <ProjectTemplate 
        title="SpaceInvaders" 
        description="I developed this game to study how a game restart works. 
        There are still some bugs to fix, but the core of the game is already in place!"
        devTime="One day" 
        link="https://almofadinhas.itch.io/space-invaders"
        conceptArt={conceptArt_}
        />
    )
}