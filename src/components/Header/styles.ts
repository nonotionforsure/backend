import styled from 'styled-components'
export const HeaderStyle = styled.header`
   div{
      font-family: Russo One;
        font-size: clamp(1.0em, 0.25em + 7.25vw, 3.25em);
        float: center;
        display: flex;
        width:100%;
        align-items:center;
        h1{
            color: #fff;
            width:100%;
            margin:0;   
        }
        h1.harry{
            text-align:right;
        }
        img{
            height: 140px;
            @media(max-width: 766px){
                 height: 75px;
          }
        
        }
    }

   nav{
        width: 100%;
        background: #252323;
     
      ul{
        list-style: none;
        display: flex;
        justify-content:space-between;
          li{
            padding: 28px;
            display: flex;
            a{
                text-decoration: none;
                color: #C1675A;
             }

             a:hover{
                 color: white;
            }
            
          }
       } 
    }  
`