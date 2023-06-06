import UU5 from "uu5g04";
import UuPeoplecounter from "uu_peoplecounter_maing01-hi";

const { shallow } = UU5.Test.Tools;

describe(`UuPeoplecounter.Routes.Peoplecounter`, () => {
  it(`default props`, () => {
    const wrapper = shallow(<UuPeoplecounter.Routes.Peoplecounter />);
    expect(wrapper).toMatchSnapshot();
  });
});
