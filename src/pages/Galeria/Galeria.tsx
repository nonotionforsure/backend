import { GaleriaStyle } from "../../styles/pages/GaleriaStyle"
import Link from "react-router-dom"
import { Header } from "../../components"

export default function Home() {
    return (
        <>
            <Header />
            <GaleriaStyle>
                <div className="responsive">
                    <div className="gallery">
                        <link href="01.png">
                            <img alt="icone" src="01.png" width="600" height="400" />
                        </ link>

                    </div>
                </div>


                <div className="responsive">
                    <div className="gallery">
                        <link href="/02.png">
                            <img alt="icone" src="/02.png" width="600" height="400" />
                        </link>

                    </div>
                </div>

                <div className="responsive">
                    <div className="gallery">
                        <link href="/03.png">
                            <img alt="icone" src="/03.png" width="600" height="400" />
                        </link>

                    </div>
                </div>

                <div className="responsive">
                    <div className="gallery">
                        <link href="/04.png" >
                            <img alt="icone" src="/04.png" width="600" height="400" />
                        </link>

                    </div>
                </div>

            </GaleriaStyle>

        </>
    )
}