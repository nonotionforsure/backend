import { hasUncaughtExceptionCaptureCallback } from "process";

import { DiscografiaStyle } from "../../styles/pages/DiscografiaStyle"
import { Header } from "../../components"


export default function Home() {
    return (
        <>
            <Header />
            <DiscografiaStyle>
                <div className="grid-container">
                    <h2 id="nomealbum1">Harry Styles</h2>
                    <picture id="capa1">
                        <a href="https://open.spotify.com/album/1FZKIm3JVDCxTchXDo5jOV">
                            <img id="capa11" src="capa1.png" />
                        </a>
                    </picture>
                    <h4 id="a1">
                        1 meet me at the hallway - 6 only angel <br /> <br /> 2 sing of the times - 7 kiwi <br /> <br /> 3 carolina - 8 ever
                        since new york <br /> <br /> 4 two ghosts  - 9 woman <br /> <br /> 5 sweet creature - 10 from the dinner table
                       </h4>
                </div>
                <div className="grid-container2">
                    <h2 id="nomealbum2">Fine Line</h2>
                    <picture id="capa2">
                        <a href="https://open.spotify.com/album/7xV2TzoaVc0ycW7fwBwAml">
                            <img id="capa22" src="/capa2.png" />
                        </a>
                    </picture>
                    <h4 id="a2">
                        1 golden - 7 to be so lonely <br /> <br /> 2 watermelon sugar - 8 she  <br /> <br /> 3 adore you - 9 sunflower, vol.6 <br /> <br />
                                4 lights up - 10 canyon moon <br /> <br /> 5 cherry - 11 treat people with kindness <br /> <br /> 6 falling - 12 fine line
                       </h4>
                </div>


            </DiscografiaStyle>
        </>
    )
}
