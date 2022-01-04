import http from "../../utils/http";
import * as types from "./constants";
import { Dispatch } from "redux";

const key = "XEXvkyZvA8JUgfjddI8fKVChSOOv2zdgMeoLl4Xa";
export const SearchAstroid =
  (id: string, navigation: any) => (dispatch: Dispatch) => {
    http
      .get(`${id}?api_key=${key}`)
      .then((res) => {
        // console.log(res.data);
        dispatch({ type: types.SET_LOADING, payload: false });
        dispatch({ type: types.SET_ASTROID, payload: res.data });
        navigation.navigate("Astroid");
      })
      .catch((err) => {
        dispatch({ type: types.SET_LOADING, payload: false });
        alert(`Enter a valid id \n${err} `);
        console.log(err);
      });
  };

export const StartRandomSearch =
  (navigation: any) => async (dispatch: Dispatch) => {
    dispatch({ type: types.SET_LOADING, payload: true });
    await http
      .get(`browse?api_key=${key}`)
      .then((res) => {
        const randomAstroidId =
          res.data.near_earth_objects[
            Math.floor(Math.random() * res.data.near_earth_objects.length)
          ].id;
        http
          .get(
            `https://api.nasa.gov/neo/rest/v1/neo/${randomAstroidId}?api_key=${key}`
          )
          .then((res) => {
            dispatch({ type: types.SET_LOADING, payload: false });
            dispatch({ type: types.SET_ASTROID, payload: res.data });
          });
        navigation.navigate("Astroid");
      })
      .catch((err) => {
        dispatch({ type: types.SET_LOADING, payload: false });
        alert(`${err} Enter a valid id`);
        console.log(err);
      });
  };

// export const loading = ()=> (dispatch: Dispatch) => {

// }
