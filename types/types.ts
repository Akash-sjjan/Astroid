export interface Astroid {
  astroid: {
    name: string;
    is_potentially_hazardous_asteroid: string;
    nasa_jpl_url: string;
  };
  loading: boolean;
}

export interface AstroidAction {
  type: string;
  payload: Astroid;
}

export interface Storetype {
  astroidState: Astroid;
}
