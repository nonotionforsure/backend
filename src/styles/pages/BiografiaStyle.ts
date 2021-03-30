import styled from 'styled-components'
export const BiografiaStyle = styled.section`

picture{
    grid-area: foto1;
    padding: 18px ;
    width: 200%;
}
#a1{
    grid-area: p1;
    margin: 18px -84px ;
    font-family: Josefin Sans;
    font-size: clamp(1.25em, 1em + 3vw, 2.0em);
    color: #FFFFFF;
    grid-gap: 0px;
    
}
#a2{
    grid-area: p2;
    margin: -50px 18px;
    font-family: Josefin Sans;
    font-size: clamp(1.25em, 1em + 3vw, 2.0em);
    color: #FFFFFF;
}
#foto2{
    grid-area: ft2; 
    align-items: center;  
    align-content: center;
    padding: 16% 20%;
}

#foto3{
    grid-area: ft3;
    padding: 16% 10%;
}

#a3{
    grid-area: p3;
    margin:2%;
    font-family: Josefin Sans;
    font-size: clamp(1.25em, 1em + 3vw, 2.0em);
    color: #FFFFFF;
}

#foto4{
    grid-area: ft4;
    padding: 2% 30%;
}
.grid-container{
    display: grid;
    height: 1900px;
    border: 5px solid #C1675A;
    margin-top: 40px;
    grid-template-areas:
    
    'foto1 p1 p1 p1'
    'p2 p2 p2 p2'
    'ft2 ft2 ft3 ft3 '
    'p3 p3 p3 p3'
    'ft4 ft4 ft4 ft4'; 
}
@media(max-width: 1210px){
    .grid-container{
        height: 3000px;
        display: grid;
        grid-template-areas:
        'foto1'
        'p1'
        'p2'
        'ft2'
        'ft3'
        'p3'
        'ft4';
    } 
    #foto1{
        margin-left: 16%;
    }
    #a1{
        margin-left: 2%;
    }
    #a2{
        margin: 2%;
    }
    #ft2{
        margin-left: 60px;
        margin-top: -120px;
    }
    #ft3{
        margin-left: 135px;
        margin-top: -220px;
    }
    #ft4{
        margin-left: -60px;
    }
}


`