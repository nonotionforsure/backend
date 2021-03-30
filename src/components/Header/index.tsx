import Link from "react-router-dom"
import { HeaderStyle } from "./styles"
const Header = () => {
    return (
        <HeaderStyle>

            <div>

                <h1 className="harry">HARRY</h1>
                <img src="/hslogo.png" alt="lala" />
                <h1>STYLES</h1>

            </div>


            <nav className="barra">
                <ul>
                    <li><link href="Biografia">BIOGRAFIA</link></li>
                    <li><link href="Discografia">DISCOGRAFIA</link></li>
                    <li><link href="/">INÍCIO</link></li>
                    <li><link href="Forum">FÓRUM</link></li>
                    <li><link href="Galeria">GALERIA</link></li>
                </ul>
            </nav>
        </HeaderStyle>
    )
}
export default Header