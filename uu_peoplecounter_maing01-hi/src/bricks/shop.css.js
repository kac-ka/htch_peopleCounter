import Config from "./config/config";

const main = () => Config.Css.css`
  display: flex; 
  justify-content: center; 
  align-items: center;
`;

const item = () => Config.Css.css`
  display: flex; 
  justify-content: space-between; 
  align-items: center;
  width: 60%;
  max-width: 500px;
  border: 2px solid black;
  border-radius: 10px;
  box-shadow: 5px 5px 10px gray;
  margin: 20px 0;
  padding: 5px 15px;
`;

const button = () => Config.Css.css`
padding: 0 8px;
`;

const name = () => Config.Css.css`
text-align: center;
font-size: 25px;
`;

const count = () => Config.Css.css`
text-align: center;
font-size: 20px;
`;

const content = () => Config.Css.css`
flex-direction: column;
`;

export default {
  main,
  item,
  button,
  name,
  count,
  content,
};
