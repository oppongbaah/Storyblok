import {
  editable
} from "/build/_shared/chunk-WMKIJZDN.js";
import {
  React,
  init_react,
  useLoaderData
} from "/build/_shared/chunk-2BAGRJQB.js";

// browser-route-module:/home/isaac/Documents/Nexum/storyBlok/nexum-shop/app/routes/Main-product/index.tsx?browser
init_react();

// app/routes/Main-product/index.tsx
init_react();

// app/folders/ProductListing.tsx
init_react();
var ProductListing = ({ stories }) => {
  return /* @__PURE__ */ React.createElement(React.Fragment, null, stories.map((story) => /* @__PURE__ */ React.createElement("div", {
    ...editable(story.content.blok),
    key: story.content.blok._uid
  }, /* @__PURE__ */ React.createElement("h2", null, " ", story.content.blok.name, " "), story.content.blok.images.map((image) => /* @__PURE__ */ React.createElement("img", {
    src: image.filename,
    alt: image.alt,
    key: image.id
  })))));
};

// app/routes/Main-product/index.tsx
function Listing() {
  const stories = useLoaderData();
  return /* @__PURE__ */ React.createElement(ProductListing, {
    stories
  });
}
export {
  Listing as default
};
//# sourceMappingURL=/build/routes/Main-product/index-ROI47C2K.js.map
