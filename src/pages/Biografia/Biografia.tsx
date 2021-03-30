import { BiografiaStyle } from "../../styles/pages/BiografiaStyle"
import { Header } from "../../components"


export default function Home() {
    return (
        <>
            <Header />
            <BiografiaStyle>
                <div className="grid-container">
                    <>
                        <picture>
                            <img id="foto1" src="/foto1.png" />
                        </picture>
                        <article id="a1">Harry Edward Styles nasceu em Redditch no dia 1 de <br /> fevereiro de  1994, é um cantor,
                         compositor e ator inglês. Styles <br /> ganhou fama mundial como membro da banda de pop rock britânica
                         <br /> One Direction. Ele fez sua estréia como cantor na banda White <br /> Eskimo, que performavam
                        localmente em Holmes Chapel, Cheshire, Inglaterra.</article>
                        <article id="a2">Quando criança, Styles amava cantar, observando Freddie Mercury, Elvis Presley e os
                        Beatles como suas influências. Em 2010, Styles fez uma audição como um artista solo para a competição
                        musical britânica The X Factor. Após ser eliminado como um artista solo, Styles foi levado de volta para
                        a competição, juntamente com quatro outros competidores, para formar o grupo que mais tarde se tornou
                        conhecido como One Direction.</article>
                        <picture id="foto2"> <img id="ft2" src="/eskimo.png" /> </picture>
                        <picture id="foto3"> <img id="ft3" src="/xfactor.png" /> </picture>
                        <article id="a3">Um nativo de Holmes Chapel, Styles estudou na Holmes Chapel Comprehensive School e
                        também trabalhava meio expediente em uma padaria local. Ele terminou sua educação depois de tomar
                        seu GCSE, como sua carreira deu certo. Ele se tornou interessado em cantar quando ainda era jovem,
                        apresentando-se em vários shows de talentos, competições de canto e casamentos. Além de cantar, Styles
                        também apareceu na televisão e no cinema, incluindo na série iCarly, da Nickelodeon, e no filme de concerto
                        autobiográfico da banda, One Direction: This Is Us. <br /> <br /> Desde que se juntou a One Direction, Harry, junto com os companheiros
                        banda Niall Horan, Zayn Malik, Liam Payne e Louis Tomlinson, eles já lançaram quatro álbuns comercialmente
                        bem sucedidos, realizaram uma turnê mundial e ganharam vários prêmios.</article>
                        <picture id="foto4"> <img id="ft4" src="/foto4.png" width="480" height="320" /> </picture>
                    </>
                </div>

            </BiografiaStyle>

        </>
    )
}
