import ProjectTemplate from "../ProjectTemplate/Template";
import conceptArt_ from "../../../../public/conceptArtTower.png"
export default function TowerDefense() {
    return(
        <ProjectTemplate 
        title="Tower Defense" 
        description="A simple game where enemies spawn and run forward, and you must kill them! Destroy your enemies and buy weapons, each wave makes the game harder!"
        devTime="One Week" 
        link="https://almofadinhas.itch.io/tower-defense"
        conceptArt={conceptArt_}
        />
    )
}