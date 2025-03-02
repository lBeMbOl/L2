import { createGlobalStyle } from "styled-components";
import { theme } from "./Theme";
import { size } from "./Common";

export const GlobalStyle = createGlobalStyle`
*,
*::before,
*::after{
    margin:0;
    padding:0;
    box-sizing:border-box;
}
html {
  font-size: ${size({ Fmax: 18, Fmin: 12 })};
}

body {
  
  margin: 0;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen",
    "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background-color: rgb(255, 255, 255);
  min-width:360px;
}

code {
  font-family: source-code-pro, Menlo, Monaco, Consolas, "Courier New",
    monospace;
}


a {
  
    
}

ul {
    list-style:none;
}

button {
  
}

section {
  padding: 100px 0;
  @media ${theme.media.mobile} {
    padding:80px 0;
  }
}

`;
