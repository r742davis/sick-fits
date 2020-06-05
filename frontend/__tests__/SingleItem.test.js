import { mount } from "enzyme";
import toJSON, { toJson } from "enzyme-to-json";
import wait from "waait";
import SingleItem, { SINGLE_ITEM_QUERY } from "../components/SingleItem";
import { MockedProvider } from "react-apollo/test-utils";
import { fakeItem } from "../lib/testUtils";
import { isType } from "graphql";

describe("<SingleItem />", () => {
  it("renders with proper data", async () => {
    const mocks = [
      {
        //when someone makes a  request with this query and variable combo, return fake data
        request: {
          query: SINGLE_ITEM_QUERY,
          variables: { id: '1234' }
        },
        result: {
          data: {
            item: fakeItem(),
          }
        }
      }
    ]
    const wrapper = mount(
      <MockedProvider mocks={mocks}>
        <SingleItem id="1234" />
      </MockedProvider>
    );
    expect(wrapper.text()).toContain('Loading...')
    await wait();
    wrapper.update();
    expect(toJSON(wrapper.find('h2'))).toMatchSnapshot();
    expect(toJSON(wrapper.find('img'))).toMatchSnapshot();
    expect(toJSON(wrapper.find('p'))).toMatchSnapshot();
    // console.log(wrapper.debug());
  });

  it('Errors with a not found item', async () => {
    const mocks = [
      {
        //when someone makes a  request with this query and variable combo, return fake data
        request: {
          query: SINGLE_ITEM_QUERY,
          variables: { id: '1234' }
        },
        result: {
          errors: [{message: 'Items Not Found! BOOOOOOO'}]
        }
      }
    ]
    const wrapper = mount(
      <MockedProvider mocks={mocks}>
        <SingleItem id="1234" />
      </MockedProvider>
    );
    await wait();
    wrapper.update();
    console.log(wrapper.debug());
    const item = wrapper.find('[data-test="graphql-error"]');
    expect(item.text()).toContain('Items Not Found! BOOOOOOO')


  })
});
