import { createGlobalStyle } from "styled-components"

export default createGlobalStyle`
    body{
        background-color: rgb(0, 0, 0);
    }
    @media(max-width: 768px){
        html{
            font-size: 50%;
        }
    }
    
`