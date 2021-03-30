import styled from 'styled-components'
export const ForumStyle = styled.section`


#mensagem{
    font-family: Josefin Sans;
    font-size: clamp(1.25em, 1em + 3vw, 2.0em);
    color: #FFF;
    text-align: center;
    margin-left: -140px;


}
.formulario{
    font-family: Josefin sans;
    font-size: clamp(1.25em, 1em + 3vw, 2.0em);
    color: #FFF;
    width: 40%;
    float: center;
    margin-left: 400px;
    border-color: white;
    border-width: 5px;
  }
  .dentroform{
    padding: 5%;
}
.enviar {
    margin-left: 35%;
    background-color: black;
    font-family: Josefin Family;
    font-size: clamp(1.75em, 1.50em + 3.50vw, 2.50em);
    color: #FFF ;
    padding: 5px;
    width: 25%;
    text-align:center;
    border-color: white;
    border-width: 3px;
  }
  @media screen and (min-width: 1100px) {
    .enviar {
      font-size: 20px;
    }
  }
  
  @media screen and (max-width: 1100px) {
    .enviar {
      font-size: 10px;
    }
  }
  @media only screen and (max-width: 600px) {
    .enviar {
      background-color: black;
    }
  }
  #flor1{
    grid-area: f1;
    margin-left: 320px;
  }

  #mensagem2{
    grid-area: m2;
    font-family: Josefin sans;
    font-size: clamp(1.25em, 1em + 3vw, 2.0em);
    color: #C1675A;
    margin-left: -190px;

  }

  #flor2{
    grid-area: f2;
    margin-left: -200px;
  }

  .grid-container{
    display: grid;
    grid-template-areas: 
    'f1 m2 f2';
  }
  @media(max-width: 766px){
    #flor1{
      display: none;
    }
    #flor2{
      display: none;
    }
    #mensagem{
      margin-left:18%;
    }
    #mensagem2{
      margin-left:35%;
    }
    .formulario{
      margin-left:35%;
    }

  }


`
