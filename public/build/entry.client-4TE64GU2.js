import {
  CacheProvider,
  ClientStyleContext,
  emotion_cache_browser_esm_default,
  require_react_dom
} from "/build/_shared/chunk-SO35XJ6Q.js";
import {
  RemixBrowser,
  __toESM,
  init_react,
  require_react
} from "/build/_shared/chunk-2BAGRJQB.js";

// app/entry.client.tsx
init_react();
var import_react = __toESM(require_react());
var import_react_dom = __toESM(require_react_dom());

// app/createEmotionCache.ts
init_react();
function createEmotionCache() {
  return emotion_cache_browser_esm_default({ key: "css" });
}

// app/entry.client.tsx
function ClientCacheProvider({ children }) {
  const [cache, setCache] = (0, import_react.useState)(createEmotionCache());
  function reset() {
    setCache(createEmotionCache());
  }
  return /* @__PURE__ */ import_react.default.createElement(ClientStyleContext.Provider, {
    value: { reset }
  }, /* @__PURE__ */ import_react.default.createElement(CacheProvider, {
    value: cache
  }, children));
}
(0, import_react_dom.hydrate)(/* @__PURE__ */ import_react.default.createElement(ClientCacheProvider, null, /* @__PURE__ */ import_react.default.createElement(RemixBrowser, null)), document);
//# sourceMappingURL=/build/entry.client-4TE64GU2.js.map
