
import Image from 'next/image'
import './template.css'

export default function ProjectTemplate({
    title,
    description,
    devTime,
    link,
    conceptArt
}) {
    return(
        <div className="tower_content">
            <Image src={conceptArt} width={550} height={255} alt='concept art'/>
            <h2>{title}</h2>
            <p>{description}</p>
            <br />
            <ul>
                <li><span>Engine:</span> Unity <i className="fa-brands fa-unity"></i></li>
                <li><span>Maked in:</span> {devTime}</li>
                <li><span>Itchi.io <i className="fa-brands fa-itch-io"></i></span> <a href={link} target="blank">click me!</a></li>
            </ul>
        </div> 
    )
}