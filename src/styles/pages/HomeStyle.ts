import styled from 'styled-components'
export const HomeStyle = styled.section`

div{
    display:flex;
    flex-direction:column;
    align-items:center;
    div{

       width:300px;
       height:300px;
       background-color:#A13020;
   }
   img.foto{
       width:300px;
       height:300px;
       margin:-280px 0 0 40px;
      
    }
}    

    img.spot{
        
            position:fixed;
            right:40px;
            bottom: 40px;
            width: 100px;
            height: 100px;  
            
       }  
       
     
    @media(max-width: 766px){
       img.spot{
            position: fixed;
            width: 10px;
            height: 25px;
            left: 290px;
            top: 500px;
        }
    }
`