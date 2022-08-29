import {
  StoryblokComponent,
  useStoryblokState
} from "/build/_shared/chunk-WMKIJZDN.js";
import {
  React,
  init_react,
  useLoaderData
} from "/build/_shared/chunk-2BAGRJQB.js";

// app/routes/$slug.tsx
init_react();
function Page() {
  let { story } = useLoaderData();
  story = useStoryblokState(story);
  return /* @__PURE__ */ React.createElement(StoryblokComponent, {
    blok: story.content.blok
  });
}

export {
  Page
};
//# sourceMappingURL=/build/_shared/chunk-LY7SWJSC.js.map
