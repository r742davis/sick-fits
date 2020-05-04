import ItemComponent from "../components/Item";
import { shallow } from "enzyme";

const fakeItem = {
  id: "ABC123",
  title: 'A cool item',
  price: 6500,
  description: "Ite ya yayaya",
  image: "dope.jpg",
  largeImage: "doper.jpg"
}

describe('<Item />',() => {
  it('renders the price tage and title properly', () => {
    const wrapper = shallow(<ItemComponent item={fakeItem} />);
    const PriceTag = wrapper.find('PriceTag');
    // console.log(PriceTag.dive().text())
    // console.log(PriceTag.children().text())
    expect(PriceTag.children().text()).toBe('$65');
    expect(wrapper.find('Title a').text()).toBe(fakeItem.title)

  })

  it('renders image properly', () => {
    const wrapper = shallow(<ItemComponent item={fakeItem} />);
    const img = wrapper.find('img');
    console.log(img.debug())
    expect(img.props().src).toBe(fakeItem.image);
    expect(img.props().alt).toBe(fakeItem.title)
  })

  it('renders out the buttons properly', () => {
    const wrapper = shallow(<ItemComponent item={fakeItem} />);
    const ButtonList = wrapper.find(".buttonList");
    console.log(ButtonList.children())
    expect(ButtonList.children()).toHaveLength(3);
    expect(ButtonList.find('Link')).toHaveLength(1);
    expect(ButtonList.find('AddToCart')).toHaveLength(1);
    expect(ButtonList.find('DeleteItem')).toHaveLength(1);
  })
})