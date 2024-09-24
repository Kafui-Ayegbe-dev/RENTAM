// used to make rules to make site responsive on different screens
import { css } from "styled-components";

export const mobile = (props) => {
  return css`
    @media only screen and (max-width: 380px) {
      ${props}
    }
  `;
};


// find out cut off with for tablets
// export const tablet = (props) => {
//     return css`
//       @media only screen and (max-width: 380px) {
//         ${props}
//       }
//     `;
//   };