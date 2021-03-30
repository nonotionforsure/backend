import styled from 'styled-components'
export const GaleriaStyle = styled.section`

a{
  text-decoration: none;
}

ul li{
  display: flex; 
}


div.gallery img {
  width: 100%;
  height: auto;
}

div.desc {
  padding: 15px;
  text-align: center;
}

.responsive {
  box-sizing: border-box;

}

.responsive {
  padding: 0 6px;
  float: left;
  width: 24.99999%;
}

@media only screen and (max-width: 700px) {
  .responsive {
    width: 49.99999%;
    margin: 6px 0;
  }
}

@media only screen and (max-width: 500px) {
  .responsive {
    width: 100%;
  }
}


`