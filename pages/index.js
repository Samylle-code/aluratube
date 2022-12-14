import config from "../config.json";
import styled from "styled-components";
import { CSSReset } from "../Components/CSSReset";
import Menu from "../Components/menu";
import {StyledTimeline} from "../Components/timeline";

function HomePage() {
    const AparenciaMenu = {
        //backgroundColor: "red"
    };
   
    return (
        <>
            <CSSReset />
            <div style={AparenciaMenu}> 
                <Menu></Menu>
                <Header />
                <TimeLine playlist={config.playlists}>
                    Conteudo
                </TimeLine>
            </div>
        </>
    );
  }
  
  export default HomePage

  //function Menu() {
  //  return (
  //      <div>
  //      </div>
  //  )
 // }

  const StyledHeader = styled.div`
    img {
        width: 80px;
        heigth: 80px;
        border-radius: 50%;
    }
    .user-info {
        margin-top: 50px;
        display: flex;
        align-items: center;
        width: 100%;
        padding: 16px 32px;
        gap: 16px; 
    }
  `;
   function Header() {
    return (
        <StyledHeader>
            {/*<img src="banner"/>*/}
            <section className="user-info">
                <img src={`https://github.com/${config.github}.png`}/>
                <div>
                    <h2>{config.name}</h2>
                    <p>{config.job}</p>
                </div>
            </section>
            
        </StyledHeader>
    )
   }

   function TimeLine(props) {
    console.log("Dentro do componente", props.playlist);
    {
        // para cada playslist liste os videos, para cada video, imprima o nome
    }
    const playlistNames = Object.keys(props.playlist);
    return (
        <StyledTimeline>
            {playlistNames.map((playlistName) => {
                const videos = props.playlist[playlistName];
                console.log(playlistName);
                console.log(videos);
                return (
                    <section>
                        <h2>{playlistName}</h2>
                        <div>
                            {videos.map((video) => {
                                return (
                                    <a href={video.url}>
                                        <img src={video.thumb} />
                                        <span>
                                            {video.title}
                                        </span>
                                    </a>
                                )
                            })}
                        </div>
                    </section>
                )
            })}
        </StyledTimeline>
    )
   }