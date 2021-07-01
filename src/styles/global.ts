import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        outline: 0;
        box-sizing: border-box;
    }

    body {
        background: #F7F7F7;
        -webkit-font-smoothing: antialiased;
    }

    body, input, button{
        font: 16px Helvetica, sans-serif;
        font-weight: bold;
        font-style: italic;
    }


    button {
        cursor: pointer;
    }


    #root {
      --gray: #707070;
      --light-gray:#9D9D9D;
      --border-gray:#DDDDDD;
      --light-green:#B5C401;
      --green:#01AC66;
      --purple:#7F3992;
      --orange:#F79C31;
      --white:#FFFFFF;
    }
`;
