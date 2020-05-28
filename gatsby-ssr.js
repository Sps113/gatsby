/**
 * Implement Gatsby's SSR (Server Side Rendering) APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/ssr-apis/
 */

// You can delete this file if you're not using it
import React from "react"

export const onRenderBody = ({ setHeadComponents }) => {
  // Get the css and hydration script from Evergreen.

  // Takes an array of components as its first argument which are added to
  // the headComponents array which is passed to the html.js component.
  setHeadComponents([
    // We need a key here for Gatsby to stop complaining.
    <React.Fragment key="ssr"></React.Fragment>,
  ])
}
