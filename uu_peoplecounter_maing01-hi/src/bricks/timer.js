//@@viewOn:imports
import UU5 from "uu5g04";
import { createVisualComponent, useState, useEffect } from "uu5g04-hooks";
import Config from "./config/config";
import Css from "./timer.css";
//@@viewOff:imports

const STATICS = {
  //@@viewOn:statics
  displayName: Config.TAG + "Timer",
  nestingLevel: "bigBoxCollection",
  //@@viewOff:statics
};

export const Timer = createVisualComponent({
  ...STATICS,

  //@@viewOn:propTypes
  propTypes: {
    setNight: UU5.PropTypes.func.isRequired,
    setDay: UU5.PropTypes.func.isRequired,
  },
  //@@viewOff:propTypes

  //@@viewOn:defaultProps
  defaultProps: {},
  //@@viewOff:defaultProps

  render(props) {
    //@@viewOn:private
    const [time, setTime] = useState();

    useEffect(() => {
      let intervalId;
      intervalId = setInterval(() => {
        const date = new Date();
        if (date.getHours() >= 22 || date.getHours() < 6) {
          props.setNight();
        } else {
          props.setDay();
        }
        setTime(date.toLocaleTimeString());
      }, 1000);

      return () => {
        clearTimeout(intervalId);
      };
    }, []);

    //@@viewOff:private

    //@@viewOn:interface
    //@@viewOff:interface

    //@@viewOn:render
    const className = Config.Css.css``;
    const attrs = UU5.Common.VisualComponent.getAttrs(props, className);
    const currentNestingLevel = UU5.Utils.NestingLevel.getNestingLevel(props, STATICS);

    return currentNestingLevel ? (
      <div {...attrs}>
        <div className={Css.time()}>{time}</div>
      </div>
    ) : null;
    //@@viewOff:render
  },
});

export default Timer;
