/* ==========================================================================
  Smooth & sharp
========================================================================== */

export function typographySmooth() {
  return `
    -moz-osx-font-smoothing: grayscale; /* Font smoothing tweaks for MacOSx in Gecko */
    -webkit-font-smoothing: antialiased; /* Font smoothing tweaks for MacOSx in Webkit */
  `;
}

export function typographySharp() {
  return `
    -moz-osx-font-smoothing: initial; /* Turn off font smoothing tweaks for MacOSx in Gecko */
    -webkit-font-smoothing: initial; /* Turn off font smoothing tweaks for MacOSx in Webkit */
  `;
}

/* ==========================================================================
  Ellipsis
========================================================================== */

/* The container needs to have a width for it to work */

export function typographyEllipsis() {
  return `
    overflow: hidden; /* "overflow" value must be different from "visible" */
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow-wrap: normal;
  `;
}

export function typographyEllipsisMultiline(lineCount, maxHeight) {
  return `
    max-height: ${maxHeight};
    overflow: hidden;

    /* $line-count lines of text */
    /* stylelint-disable */
    display: -webkit-box;
    text-overflow: ellipsis;
    -webkit-line-clamp: ${lineCount};
    -webkit-box-orient: vertical;
    /* stylelint-enable */
  `;
}

/* ==========================================================================
  Truncate
========================================================================== */

export function truncate(width) {
  return `
    width: ${width};
    max-width: ${width};
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  `;
}

export function notTruncated(width) {
  return `
    width: ${width};
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  `;
}
