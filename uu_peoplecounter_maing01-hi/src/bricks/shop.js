//@@viewOn:imports
import UU5 from "uu5g04";
import { createVisualComponent, useState, useEffect } from "uu5g04-hooks";
import Config from "./config/config";
import Css from "./shop.css";
//@@viewOff:imports

const STATICS = {
  //@@viewOn:statics
  displayName: Config.TAG + "Shop",
  nestingLevel: "bigBoxCollection",
  //@@viewOff:statics
};

export const Shop = createVisualComponent({
  ...STATICS,

  //@@viewOn:propTypes
  propTypes: {
    shopName: UU5.PropTypes.string.isRequired,
    maxCount: UU5.PropTypes.number.isRequired,
    addCount: UU5.PropTypes.func.isRequired,
    subCount: UU5.PropTypes.func.isRequired,
    nightMode: UU5.PropTypes.bool,
  },
  //@@viewOff:propTypes

  //@@viewOn:defaultProps
  defaultProps: {
    shop: null,
    nightMode: false,
  },
  //@@viewOff:defaultProps

  render(props) {
    //@@viewOn:private
    const [count, setCount] = useState(0);
    const [color, setColor] = useState("black");
    const [plusDisable, setPlusDisable] = useState(false);
    const [minusDisable, setMinusDisable] = useState(true);

    function minusCount() {
      if (count > 0) {
        setCount(count - 1);
      }
      if (count < props.maxCount + 1) {
        setColor("black");
        setPlusDisable(false);
      }
      if (count === 1) {
        setMinusDisable(true);
      }
    }

    function plusCount() {
      if (count < props.maxCount) {
        setCount(count + 1);
      }
      if (count === props.maxCount - 1) {
        setColor("red");
        setPlusDisable(true);
      }
      if (count === 0) {
        setMinusDisable(false);
      }
    }
    useEffect(() => {
      setPlusDisable(props.nightMode);
      setMinusDisable(true);
      setCount(0);
    }, [props.nightMode]);
    //@@viewOff:private

    //@@viewOn:interface
    //@@viewOff:interface

    //@@viewOn:render
    const className = Config.Css.css``;
    const attrs = UU5.Common.VisualComponent.getAttrs(props, className);
    const currentNestingLevel = UU5.Utils.NestingLevel.getNestingLevel(props, STATICS);

    return currentNestingLevel ? (
      <div {...attrs}>
        <div className={Css.main()}>
          <div className={Css.item()}>
            <div className={Css.button()}>
              <UU5.Bricks.Button
                disabled={minusDisable}
                onClick={() => {
                  minusCount();
                  props.subCount();
                }}
                colorSchema="red"
              >
                <UU5.Bricks.Icon icon="uu5-minus" />
              </UU5.Bricks.Button>
            </div>
            <div className={Css.content()} style={{ color: color }}>
              <div className={Css.name()}>{props.shopName}</div>
              <div className={Css.count()}>{count}</div>
            </div>
            <div className={Css.button()}>
              <UU5.Bricks.Button
                disabled={plusDisable}
                onClick={() => {
                  plusCount();
                  props.addCount();
                }}
                colorSchema="green"
              >
                <UU5.Bricks.Icon icon="uu5-plus" />
              </UU5.Bricks.Button>
            </div>
          </div>
        </div>
      </div>
    ) : null;
    //@@viewOff:render
  },
});

export default Shop;
