import UU5 from "uu5g04";
import UuPeoplecounter from "uu_peoplecounter_maing01-hi";

const { shallow } = UU5.Test.Tools;

describe(`UuPeoplecounter.Bricks.ShopingCenter`, () => {
  it(`default props`, () => {
    const wrapper = shallow(<UuPeoplecounter.Bricks.ShopingCenter />);
    expect(wrapper).toMatchSnapshot();
  });
});
