/* ==========================================================================
  Mixin to style scrollbars
========================================================================== */

export default function (size = '7px', color = 'rgba(0, 0, 0, 0.5)', radius = '4px') {
  return `
    -ms-overflow-style: -ms-autohiding-scrollbar;

    &::-webkit-scrollbar {
      width: ${size};
      appearance: none;
    }

    &::-webkit-scrollbar-thumb {
      background-color: ${color};
      border-radius: ${radius};
      box-shadow: 0 0 1px ${color};
    }
  `;
}
