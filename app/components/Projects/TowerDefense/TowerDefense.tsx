import conceptArt from "../../../../public/conceptArt.jpg"
import Image from 'next/image'
import './tower.css'

export default function TowerDefense() {
    return(
        <div className="tower_content">
            <Image src={conceptArt} width={550} height={255} alt='concept art'/>
            <h2>Tower Defense:</h2>
            <p>A simple game where enemies spawn and run forward, and you must kill them! Destroy your enemies and buy weapons, each wave makes the game harder!
            </p>
            <br />
            <ul>
                <li><span>Engine:</span> Unity <i className="fa-brands fa-unity"></i></li>
                <li><span>Maked in:</span> One Week</li>
                <li><span>Itchi.io <i className="fa-brands fa-itch-io"></i></span> <a href="" target="blank">click me!</a></li>
            </ul>
        </div> 
    )
}