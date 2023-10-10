import { useToken } from "../auth/useToken";

export const baseHeader = {
  headers: {
    "Content-Type": "application/json",
  },
};

export const baseHeaderWithAuth = (token) => {
  return {
    headers: {
      "Content-Type": "application/json",
      Authorization: `JWT ${token}`,
    },
  };
};

// ndak bisa
// export const BaseHeaderWithAuth = () => {
//   const [token] = useToken();
//   return {
//     headers: {
//       "Content-Type": "application/json",
//       Authorization: `JWT ${token}`,
//     },
//   };
// };
