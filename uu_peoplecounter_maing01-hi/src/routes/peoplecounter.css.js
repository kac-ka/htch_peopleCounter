import Config from "./config/config";

const totalCount = () => Config.Css.css`
  text-align: center;
  margin: 15px 0;;
  box-shadow: 0 7px 7px gray;
  padding-bottom: 10px
`;

const h1 = () => Config.Css.css`
  font-size: 30px;
  margin-bottom: 10px;
`;

const p = () => Config.Css.css`
    font-size: 20px;
    font-weight: bold;
    margin: 0;
`;

export default {
  totalCount,
  h1,
  p,
};
