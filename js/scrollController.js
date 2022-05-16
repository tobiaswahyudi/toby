/******************************************************************************
 * Scroll Controller - toby.wahyudi.ca / tobiaswahyudi.github.io
 * 
 * Benedict Tobias H. Wahyudi, April 2022
 *****************************************************************************/

/** Multiplicative constants.
 * Used to center and scroll the `#main-contents` div.
 */ 
 const WIDTH_CONST = 0;
 const HEIGHT_CONST = 0 
// If the actual isometric transform is used, actual offsets are needed
// const WIDTH_CONST = 0.4;
// const HEIGHT_CONST = -0.25;
const POS_CONST = -Math.sqrt(3);
const SECTION_OFFSET_IN_VH = 75;

/******************************************************************************
 * FUNCTIONS
 *****************************************************************************/

/**
 * A helper function to generate CSS `matrix3d` transformation projecting from 
 * screen-parallel space to 3d isometric space.
 * 
 * @param {number} offsetX - X offset, used in the translation column of the affine matrix.
 * @param {number} offsetY - Y offset, used in the translation column of the affine matrix.
 * @returns a CSS `matrix3d` transformation that projects a screen-parallel
 * plane to an isometric plane.
 */
const isometric = (offsetX, offsetY) =>
`matrix3d(
  1, 0, 0, 0,
  0, 1, 0, 0,
  0, 0, 1, 0,
  ${offsetX}, ${offsetY}, 0, 1
)`
// This matrix actually transforms the doc into isometric view.
// `matrix3d(
//   0.71, -0.5, 0.5, 0,
//   0.71, 0.5, -0.5, 0,
//   0, 0.71, 0.71, 0,
//   ${offsetX}, ${offsetY}, 0, 1
// )`

/**
 * Sometimes we want an object to move in isometric space, but retain a screen parallel appearance.
 * This function generates a transform that inverses the transformation generated by the `isometric`
 * function.
 * 
 * @param {number} offsetX - X offset, used in the translation column of the affine matrix.
 * @param {number} offsetY - Y offset, used in the translation column of the affine matrix.
 * @returns a CSS `matrix3d` transform string inversing the transformation generated by `isometric()`.
 */
const isometricInverse = (offsetX, offsetY) =>
`matrix3d(
  1, 0, 0, 0,
  0, 1, 0, 0,
  0, 0, 1, 0,
  ${offsetX}, ${offsetY}, 0, 1
)`
// This matrix actually inverts the matrix that transforms into isometric view.
// `matrix3d(
//   0.71, 0.71, 0, 0,
//   -0.5, 0.5, 0.71, 0,
//   0.5, -0.5, 0.71, 0,
//   ${offsetX}, ${offsetY}, 0, 1
// ) scale(1, 2)`

/**
 * Scroll listener. When the `main` container is scrolled, moves `mainContents` along the isometric `-y` axis.
 * 
 * @param {*} main - only used to get the size of the `main` container.
 * @param {*} mainContents - the `#main-container` element to move.
 * @returns a scroll event listener.
 */
const scroller = (main, mainContents) => (e) => {
  const pos = e.target.scrollTop;

  const x0 = WIDTH_CONST * main.offsetWidth;
  const y0 = HEIGHT_CONST * main.offsetHeight;

  const dx = POS_CONST * pos;
  const dy = -pos;

  mainContents.style.transform = isometric(x0 + dx, y0 + dy);
}

/**
 * Aligns the sections on page init.
 * 
 * @param {*} mainContents - the `#main-container`, whose children we will align.
 */
 const alignSections = (mainContents) => {
  [...mainContents.children].forEach((section, idx) => {
    console.log(section,idx);
    section.style.left = `${-SECTION_OFFSET_IN_VH * POS_CONST * idx}vh`;
    section.style.top = `${SECTION_OFFSET_IN_VH * idx}vh`;
  })
}

/******************************************************************************
 * ON INIT
 *****************************************************************************/
document.addEventListener('DOMContentLoaded', () => {
  const main = document.getElementsByTagName('main')[0];
  const mainContents = document.getElementById('main-contents');

  /****************************************************************************
   * SETUP
   ***************************************************************************/
  // Give each section the inverse isometric transform
  [...document.getElementsByTagName('section')].forEach(sec => {
    sec.style.transform = isometricInverse(0, 0);
  })
  // Attach to cars and such

  /****************************************************************************
   * LISTENERS
   ***************************************************************************/
  // On resize, call the scroller and aligner functions.
  window.addEventListener('resize', () => {
    const pos = main.scrollTop;
    (scroller(main, mainContents))({ target: { scrollTop: pos } });
    alignSections(mainContents);
  })
  
  // On scroll, call the scroller function.
  main.addEventListener('scroll', scroller(main, mainContents));

  /****************************************************************************
   * FINALIZE
   ***************************************************************************/
  // Initialize sections alignment
  alignSections(mainContents);
  // Call the scroller function to initialize the `#main-contents` transform.
  (scroller(main, mainContents))({ target: { scrollTop: 0 } });
})