import { css } from 'styled-components';
import gridStyle from '../grid';

const { breakpoints } = gridStyle.flexboxgrid;

const sizes = {
  desktop: breakpoints.lg,
  tablet: breakpoints.md,
  phone: breakpoints.sm,
  smallPhone: breakpoints.xs,
};

// Iterate through the sizes and create a media template
export default Object.keys(sizes).reduce((acc, label) => {
  acc[label] = (...args) => css`
    @media (max-width: ${sizes[label]}px) {
      ${css(...args)}
    }
  `;
  return acc;
}, {});
