import { createGlobalStyle } from "styled-components";

import "react-circular-progressbar/dist/styles.css";

export default createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        outline: 0;
        box-sizing: border-box !important;; 


    }

    body {
        font-family: 'Roboto', sans-serif;
        font-weight: 400;
        font-size: 1.2rem;
background: #6a3093;  /* fallback for old browsers */
background: -webkit-linear-gradient(to right, #a044ff, #6a3093);  /* Chrome 10-25, Safari 5.1-6 */
background: linear-gradient(to right, #a044ff, #6a3093); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */

        text-rendering: optimizeLegibility;
        -webkit-font-smoothing: antialiased;
        user-select: none;
    }

    html, body #root {
        height: 100%;
    }

    .logo {

        font-family: 'Roboto', sans-serif;
        font-size: 3rem;
        color: #fff;
        font-weight: 400;
        text-align: center;
        margin: 0 auto;
        margin-top: 5%;
        
        overflow: hidden; 
        white-space: nowrap;
        animation: 
        typing 3.5s steps(30, end),
        blink-caret .5s;
  
    }

    @keyframes typing {
        from { width: 0 }
        to { width: 100% }
        
    }

    @keyframes blink-caret {
    from, to { border-color: transparent }
    50% { border-color: #fff; }
    
    }

    .container {
        background-color: #8b69d5;
    }

    .upload {
        color: #fff;
    }

`;
