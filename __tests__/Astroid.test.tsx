import React from "react";
import { Provider } from "react-redux";
import configureMockStore from "redux-mock-store";
import { shallow } from "enzyme";
import Astroid from "../screens/Astroid";

const mockStore = configureMockStore();
const store = mockStore({
  userState: {
    astroid: {
      name: "",
      is_potentially_hazardous_asteroid: "",
      nasa_jpl_url: "",
    },
    loading: false,
  },
});

const createTestProps = (props: Object) => ({
  navigation: {
    navigate: jest.fn(),
  },
  ...props,
});

describe("Users screen", () => {
  describe("rendering", () => {
    const props = createTestProps({});

    const wrapper = shallow(
      <Provider store={store}>
        <Astroid {...props} />
      </Provider>
    );

    it("should render a view", async () => {
      expect(wrapper.find(".Astroid-wrapper")).toHaveLength(0);
    });
  });
});
