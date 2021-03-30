import Link from "react-router-dom"
import { HomeStyle } from "../../styles/pages/HomeStyle"
import { Header } from "../../components"

export default function Home() {
  return (
    <>
      <Header />
      <HomeStyle>
        <div>
          <div>

          </div>
          <img className="foto" src="/sot.png" alt="eita" />
        </div>
        <link href="https://open.spotify.com/artist/6KImCVD70vtIoJWnq6nGn3">
          <img className="spot" src="/spotify.png" alt="vai" />
        </link>

      </HomeStyle>
    </>
  )
}