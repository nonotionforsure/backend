import styled from 'styled-components'
export const DiscografiaStyle = styled.section`
 
#nomealbum1{
    grid-area: na1;
    font-family: Crismon Text;
    font-size: clamp(1.75em, 1.50em + 3.75vw, 2.50em);
    color: #C1675A;
    margin-left: 38%;
    margin-top: 200px;
}

#capa1{
    grid-area: c1;
}

#a1{
    grid-area: a1;
    font-family: Crismon Text;
    font-size: clamp(1.25em, 1em + 3vw, 2.0em);
    color: #FFFFFF;  
    margin-left: -10%;
    margin-top: 10px;
    
}

.grid-container{
    margin-top: -140px;
    display: grid;
    grid-template-areas:
    'na1 na1 na1'
    'c1 a1 a1';
}

#nomealbum2{
    grid-area: na2;
    font-family: Crismon Text;
    font-size: clamp(1.75em, 1.50em + 3.75vw, 2.50em);
    color: #EDAEAE;
    margin-left: 38%;
}

#capa2{
    grid-area: c2;
    width: 100%;
}

#a2{
   grid-area: a2;
   font-family: Crismon Text;
   font-size: clamp(1.25em, 1em + 3vw, 2.0em);
   color: #FFFFFF;  
   margin-left: -12%;
   margin-top: 14px;

}

.grid-container2{
    display: grid;
    grid-template-areas:
    'na2 na2 na2'
    'c2 a2 a2';
}
@media(max-width: 1200px){
    .grid-container{
        display: grid;
        grid-template-areas: 
        'na1 '
        'c1 '
        'a1 ';
    }
    #a1{
        margin-left: 180px;
    }
    #capa11{
        margin-left: 150px;
    }
    #capa11{
        width: 380px;
        height: 290px;
    }
}

@media(max-width: 1200px){
    .grid-container2{
        display: grid;
        grid-template-areas: 
        'na2'
        'c2 '
        'a2 ';
    }
    #a2{
        margin-left: 180px;
    }
    #capa22{
        margin-left: 150px;
    }
    #capa22{
        width: 380px;
        height: 290px;
    }
}@media(max-width: 1200px){
    #capa11{
        width: 300px;
        height: 229px;
    }
    #capa22{
        width: 300px;
        height: 229px;
    }

}

`