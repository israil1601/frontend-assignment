import { ADD_PRODUCT_DATA, ADD_USER_DATA } from "../constants";

export const reducer = (state, action) => {
  const { userData, projectData } = state;
  switch (action.type) {
    case ADD_PRODUCT_DATA:
      return {
        userData,
        projectData: {
          type: "Product",
          data: [...projectData.data, ...action.payload],
        },
      };

    case ADD_USER_DATA:
      return {
        projectData,
        userData: {
          type: "User",
          data: [...userData.data, ...action.payload],
        },
      };
  }
};
