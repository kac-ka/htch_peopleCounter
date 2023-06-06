//@@viewOn:imports
import UU5 from "uu5g04";
import { createVisualComponent, useState, useCallback } from "uu5g04-hooks";
import Config from "./config/config";
import Shop from "../bricks/shop";
import Timer from "../bricks/timer";
import Css from "./peoplecounter.css";
import Lsi from "../config/lsi.js";
//@@viewOff:imports

const STATICS = {
  //@@viewOn:statics
  displayName: Config.TAG + "Peoplecounter",
  nestingLevel: "bigBoxCollection",
  //@@viewOff:statics
};

export const Peoplecounter = createVisualComponent({
  ...STATICS,

  //@@viewOn:propTypes
  propTypes: {},
  //@@viewOff:propTypes

  //@@viewOn:defaultProps
  defaultProps: {},
  //@@viewOff:defaultProps

  render(props) {
    const [totalCount, setTotalCount] = useState(0);
    const [nightMode, setNightMode] = useState();

    //@@viewOn:private
    const addCount = useCallback(() => setTotalCount((totalCount) => totalCount + 1), []);
    const subCount = useCallback(() => setTotalCount((totalCount) => totalCount - 1), []);

    const setNight = useCallback(() => {
      setTotalCount(0);
      setNightMode(true);
    });

    const setDay = useCallback(() => {
      setNightMode(false);
    });
    //@@viewOff:private

    //@@viewOn:interface
    //@@viewOff:interface

    //@@viewOn:render
    const className = Config.Css.css``;
    const attrs = UU5.Common.VisualComponent.getAttrs(props, className);
    const currentNestingLevel = UU5.Utils.NestingLevel.getNestingLevel(props, STATICS);

    return currentNestingLevel ? (
      <div {...attrs}>
        <div className={Css.totalCount()}>
          <h1 className={Css.h1()}>{<UU5.Bricks.Lsi lsi={Lsi.peoplecounter.totalCount} />}</h1>
          <p className={Css.p()}>{totalCount}</p>
        </div>
        <Timer setDay={setDay} setNight={setNight} />
        <Shop
          shopName={<UU5.Bricks.Lsi lsi={Lsi.peoplecounter.shop1} />}
          nightMode={nightMode}
          maxCount={10}
          addCount={addCount}
          subCount={subCount}
        />
        <Shop
          shopName={<UU5.Bricks.Lsi lsi={Lsi.peoplecounter.shop2} />}
          nightMode={nightMode}
          maxCount={20}
          addCount={addCount}
          subCount={subCount}
        />
        <Shop
          shopName={<UU5.Bricks.Lsi lsi={Lsi.peoplecounter.shop3} />}
          nightMode={nightMode}
          maxCount={8}
          addCount={addCount}
          subCount={subCount}
        />
        <Shop
          shopName={<UU5.Bricks.Lsi lsi={Lsi.peoplecounter.shop4} />}
          nightMode={nightMode}
          maxCount={42}
          addCount={addCount}
          subCount={subCount}
        />
      </div>
    ) : null;

    //@@viewOff:render
  },
});

export default Peoplecounter;
