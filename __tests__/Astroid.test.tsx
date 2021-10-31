import React from "react";
import { Provider } from "react-redux";
import configureMockStore from "redux-mock-store";
import { shallow } from "enzyme";
import Astroid from "../screens/Astroid";

const mockStore = configureMockStore();
const store = mockStore({});

const createTestProps = () => ({
  navigation: {
    navigate: jest.fn(),
  },
});

describe("Users screen", () => {
  describe("rendering", () => {
    const props = createTestProps();
    const wrapper = shallow(
      <Provider store={store}>
        <Astroid {...props} />
      </Provider>
    );

    it("should render a view", () => {
      expect(wrapper.find(".Astroid-wrapper")).toHaveLength(0);
    });
  });
});
