import UU5 from "uu5g04";
import UuPeoplecounter from "uu_peoplecounter_maing01-hi";

const { shallow } = UU5.Test.Tools;

describe(`UuPeoplecounter.Bricks.Timer`, () => {
  it(`default props`, () => {
    const wrapper = shallow(<UuPeoplecounter.Bricks.Timer />);
    expect(wrapper).toMatchSnapshot();
  });
});
