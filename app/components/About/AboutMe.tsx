import Image from 'next/image'
import photo from '../../../public/perfil4all - Copia.jpg'
import './aboutMe.css'

export default function AboutMe() {
    return(
        <div className="about_me_content">
            <h2>About</h2>
            <div className="first_section">
                <Image src={photo} width={245} height={255} alt='alex photo'/>
                <div>
                <p> 
                    I am a game developer with one year of experience making games! Currently, I am working as a trainee and creating my own games.
                </p>
                <p>My focus is on creating fun games with clear mechanics that players will love!</p>
                <p>I love developing genres like <span>Strategy</span>, <span>Card Games</span>, <span>RPGs</span>, and <span>Classic Games</span>. In every game, I try to incorporate some kind of roguelike system because challenging games are so much fun to play.
                </p>
                <p className='links'>
                    <a href="https://github.com/AlexGabrielSilveira" target="_blank"><i className="fab fa-github"></i></a>
                    <a href="https://www.youtube.com/@alx_gameDev" target="_blank"><i className="fa-brands fa-youtube"></i></a>
                    <a href="https://www.tiktok.com/@alx_gamedev" target="_blank"><i className="fa-brands fa-tiktok"></i></a>
                </p>
                </div>
            </div>
            
        </div>
    )
}