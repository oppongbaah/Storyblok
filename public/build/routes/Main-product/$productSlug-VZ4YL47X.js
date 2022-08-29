import {
  StoryblokComponent,
  useStoryblokState
} from "/build/_shared/chunk-WMKIJZDN.js";
import {
  React,
  init_react,
  useLoaderData
} from "/build/_shared/chunk-2BAGRJQB.js";

// browser-route-module:/home/isaac/Documents/Nexum/storyBlok/nexum-shop/app/routes/Main-product/$productSlug.tsx?browser
init_react();

// app/routes/Main-product/$productSlug.tsx
init_react();
function Product() {
  let story = useLoaderData();
  story = useStoryblokState(story);
  return /* @__PURE__ */ React.createElement(StoryblokComponent, {
    blok: story.content.blok
  });
}
export {
  Product as default
};
//# sourceMappingURL=/build/routes/Main-product/$productSlug-VZ4YL47X.js.map
