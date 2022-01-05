import React from "react";
import { Provider } from "react-redux";
import configureMockStore from "redux-mock-store";
import { mount } from "enzyme";
import AstroidSearch from "../screens/AstroidSearch";
import * as dependencies from "../redux/actions/astroidAction";
import { TextInput } from "react-native-paper";

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
    let props = createTestProps({});
    beforeEach(() => {
      props = {
        navigation: {
          navigate: jest.fn(() => console.log("called")),
        },
      };

      Object.defineProperty(dependencies, "SearchAstroid", {
        value: jest.fn(() => {
          return () => {
            console.log("mock fn");
            return new Promise((res, rej) => {
              res("done");
            });
          };
        }),
      });
      Object.defineProperty(dependencies, "StartRandomSearch", {
        value: jest.fn(() => {
          return () => {
            console.log("mock fn");
            return new Promise((res, rej) => {
              res("done");
            });
          };
        }),
      });
    });
    const wrapper = mount(
      <Provider store={store}>
        <AstroidSearch {...props} />
      </Provider>
    );

    it("should render a TextInput", async () => {
      expect(wrapper.find(TextInput)).toHaveLength(1);
    });
  });
});
