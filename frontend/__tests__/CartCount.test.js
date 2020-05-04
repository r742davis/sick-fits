import { shallow, mount } from "enzyme";
import ToJSON from "enzyme-to-json";
import CartCount from "../components/CartCount";

describe("CartCount />", () => {
  it("renders", () => {
    shallow(<CartCount count={10} />);
  });

  it("matches the snapshot", () => {
    const wrapper = shallow(<CartCount count={10} />);
    expect(ToJSON(wrapper)).toMatchSnapshot();
  });

  it('updates via props', () => {
    const wrapper = shallow(<CartCount count={50} />);
    expect(ToJSON(wrapper)).toMatchSnapshot();
    wrapper.setProps({count: 40})
    expect(ToJSON(wrapper)).toMatchSnapshot();
  })
});
