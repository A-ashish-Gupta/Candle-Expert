import { createContext } from "react";

const Theme = {title:"Candle-Expert" , logo:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3BtiU-QvPyeeVnVGqGzikEy1TUhjxsiJkwPAXGGRbpw&s=10"}

const ThemeContext  = createContext(Theme);
export default ThemeContext