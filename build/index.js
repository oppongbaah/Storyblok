var __create = Object.create;
var __defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var __spreadProps = (a, b) => __defProps(a, __getOwnPropDescs(b));
var __markAsModule = (target) => __defProp(target, "__esModule", { value: true });
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __reExport = (target, module2, copyDefault, desc) => {
  if (module2 && typeof module2 === "object" || typeof module2 === "function") {
    for (let key of __getOwnPropNames(module2))
      if (!__hasOwnProp.call(target, key) && (copyDefault || key !== "default"))
        __defProp(target, key, { get: () => module2[key], enumerable: !(desc = __getOwnPropDesc(module2, key)) || desc.enumerable });
  }
  return target;
};
var __toESM = (module2, isNodeMode) => {
  return __reExport(__markAsModule(__defProp(module2 != null ? __create(__getProtoOf(module2)) : {}, "default", !isNodeMode && module2 && module2.__esModule ? { get: () => module2.default, enumerable: true } : { value: module2, enumerable: true })), module2);
};
var __toCommonJS = /* @__PURE__ */ ((cache) => {
  return (module2, temp) => {
    return cache && cache.get(module2) || (temp = __reExport(__markAsModule({}), module2, 1), cache && cache.set(module2, temp), temp);
  };
})(typeof WeakMap !== "undefined" ? /* @__PURE__ */ new WeakMap() : 0);

// <stdin>
var stdin_exports = {};
__export(stdin_exports, {
  assets: () => assets_manifest_default,
  entry: () => entry,
  routes: () => routes
});

// node_modules/@remix-run/dev/compiler/shims/react.ts
var React = __toESM(require("react"));

// app/entry.server.tsx
var entry_server_exports = {};
__export(entry_server_exports, {
  default: () => handleRequest
});
var import_server = require("react-dom/server");
var import_react2 = require("@emotion/react");
var import_create_instance = __toESM(require("@emotion/server/create-instance"));
var import_react3 = require("@remix-run/react");

// app/context.tsx
var import_react = require("react");
var ServerStyleContext = (0, import_react.createContext)(null);
var ClientStyleContext = (0, import_react.createContext)(null);

// app/createEmotionCache.ts
var import_cache = __toESM(require("@emotion/cache"));
function createEmotionCache() {
  return (0, import_cache.default)({ key: "css" });
}

// app/entry.server.tsx
function handleRequest(request, responseStatusCode, responseHeaders, remixContext) {
  const cache = createEmotionCache();
  const { extractCriticalToChunks } = (0, import_create_instance.default)(cache);
  const html = (0, import_server.renderToString)(/* @__PURE__ */ React.createElement(ServerStyleContext.Provider, {
    value: null
  }, /* @__PURE__ */ React.createElement(import_react2.CacheProvider, {
    value: cache
  }, /* @__PURE__ */ React.createElement(import_react3.RemixServer, {
    context: remixContext,
    url: request.url
  }))));
  const chunks = extractCriticalToChunks(html);
  const markup = (0, import_server.renderToString)(/* @__PURE__ */ React.createElement(ServerStyleContext.Provider, {
    value: chunks.styles
  }, /* @__PURE__ */ React.createElement(import_react2.CacheProvider, {
    value: cache
  }, /* @__PURE__ */ React.createElement(import_react3.RemixServer, {
    context: remixContext,
    url: request.url
  }))));
  responseHeaders.set("Content-Type", "text/html");
  return new Response(`<!DOCTYPE html>${markup}`, {
    status: responseStatusCode,
    headers: responseHeaders
  });
}

// route:/home/isaac/Documents/Nexum/storyBlok/nexum-shop/app/root.tsx
var root_exports = {};
__export(root_exports, {
  default: () => App,
  links: () => links,
  meta: () => meta
});
var import_react29 = __toESM(require("react"));
var import_react30 = require("@chakra-ui/react");
var import_react31 = require("@remix-run/react");
var import_react32 = require("@storyblok/react");

// app/components/nested/Feature.tsx
var import_react4 = require("@storyblok/react");
var import_react5 = require("@chakra-ui/react");
var Feature = ({ blok }) => {
  return /* @__PURE__ */ React.createElement(import_react5.Center, {
    h: "100px"
  }, /* @__PURE__ */ React.createElement(import_react5.Box, __spreadProps(__spreadValues({}, (0, import_react4.storyblokEditable)(blok)), {
    p: 5,
    shadow: "md",
    borderWidth: "1px"
  }), /* @__PURE__ */ React.createElement(import_react5.Heading, {
    fontSize: "xl"
  }, " ", blok.title, " "), /* @__PURE__ */ React.createElement(import_react5.Text, {
    mt: 4
  }, " ", blok.description, " ")));
};

// app/components/nested/Grid.tsx
var import_react6 = require("@storyblok/react");
var import_react7 = require("@chakra-ui/react");
var Grid = ({ bloks }) => {
  return /* @__PURE__ */ React.createElement(import_react7.List, {
    spacing: 3
  }, bloks.columns.map((blok) => /* @__PURE__ */ React.createElement(import_react7.ListItem, {
    key: blok._uid
  }, /* @__PURE__ */ React.createElement(import_react6.StoryblokComponent, {
    blok,
    key: blok._uid
  }))));
};

// app/components/nested/Teaser.tsx
var import_react8 = require("@storyblok/react");
var import_react9 = require("@chakra-ui/react");
var Teaser = ({ blok }) => {
  return /* @__PURE__ */ React.createElement(import_react9.Center, {
    h: "100px"
  }, /* @__PURE__ */ React.createElement(import_react9.Heading, __spreadProps(__spreadValues({}, (0, import_react8.storyblokEditable)(blok)), {
    size: "lg",
    fontSize: "40px",
    key: blok._uid
  }), blok.headline));
};

// app/components/content-types/Page.tsx
var import_react19 = require("@storyblok/react");
var import_react20 = require("@chakra-ui/react");

// app/scripts/helpers/components.ts
var ComponentHelpers = class {
  static processHomepageBloks(bloks) {
    let logoComponent = { logos: [] };
    let teaser = {};
    for (let blok of bloks) {
      blok = blok;
      if (blok.component.toLowerCase() === "logos") {
        logoComponent = this.processHomepageLogo(blok);
      }
      if (blok.component.toLowerCase() === "teaser") {
        teaser = this.processHomepageTeaser(blok);
      }
      if (blok.component.toLowerCase() === "feature") {
        this.processHomepageFeature(blok);
      }
    }
    return { logoComponent, features: this.features, teaser };
  }
  static refineImages(images) {
    let refinedImages = {};
    for (let logo of images) {
      if (logo.title === "dark" /* dark */) {
        refinedImages.dark = {
          src: logo.filename,
          alt: logo.alt
        };
      }
      if (logo.title === "light" /* light */) {
        refinedImages.light = {
          src: logo.filename,
          alt: logo.alt
        };
      }
    }
    return refinedImages;
  }
  static refineLogoComponent(component, refinedImages) {
    return Object.assign(refinedImages, {
      _editable: component._editable,
      component: component.component
    });
  }
  static getHeaderLinks(bloks) {
    const catalog = bloks.find((blok) => {
      var _a;
      return blok.component === "categories" && ((_a = blok.categories) == null ? void 0 : _a.length);
    });
    const refinedCategories = /* @__PURE__ */ new Map();
    catalog.categories.forEach((category) => {
      refinedCategories.set(category.id, {
        full_slug: category.full_slug ?? "",
        _editable: category._editable,
        name: category.name,
        _uid: category._uid
      });
    });
    return refinedCategories;
  }
  static processHomepageLogo(blok) {
    return this.transformBasicBlok(blok, (basicBlok) => {
      blok = blok;
      return {
        _editable: blok._editable,
        component: blok.component,
        _uid: blok._uid,
        logos: [...blok.logos]
      };
    });
  }
  static processHomepageTeaser(blok) {
    return this.transformBasicBlok(blok, (_) => {
      return blok;
    });
  }
  static processHomepageFeature(blok) {
    this.transformBasicBlok(blok, (basicBlok) => {
      const specificBlok = basicBlok;
      this.features.set(specificBlok.id.toLowerCase(), blok);
    });
  }
  static transformBasicBlok(blok, callback) {
    const basicBlok = blok;
    return callback(basicBlok);
  }
};
ComponentHelpers.features = /* @__PURE__ */ new Map();

// app/components/internal/Header.tsx
var import_react16 = __toESM(require("react"));
var import_react17 = require("@storyblok/react");
var import_icons = require("@chakra-ui/icons");

// app/components/nested/Category.tsx
var import_react10 = require("@storyblok/react");
var import_react11 = require("@chakra-ui/react");
var Category = ({ link }) => {
  return /* @__PURE__ */ React.createElement(import_react11.Link, __spreadProps(__spreadValues({}, (0, import_react10.storyblokEditable)(link)), {
    px: 2,
    py: 1,
    rounded: "md",
    _hover: {
      textDecoration: "none",
      bg: (0, import_react11.useColorModeValue)("gray.200", "gray.700")
    },
    href: link.full_slug
  }), link.name);
};

// app/components/internal/CountrySelector.tsx
var import_react13 = __toESM(require("react"));
var import_react14 = require("@chakra-ui/react");
var import_react_country_flag = __toESM(require("react-country-flag"));
var import_react15 = require("@remix-run/react");

// app/scripts/factories/constants.ts
var ConstantsFactory = class {
};
ConstantsFactory.locale = "locale";
ConstantsFactory.homepageFallback = "homepage";

// app/scripts/utils/algorithms.ts
var AlgosFactory = class {
  static findCommonElements(arrayOne, arrayTwo) {
    let commonElementsDictionary = /* @__PURE__ */ new Map();
    let commonElements = [];
    for (let i = 0; i < arrayOne.length; i++) {
      let element = arrayOne[i];
      if (!commonElementsDictionary.get(element)) {
        commonElementsDictionary.set(element, true);
      }
    }
    for (let j = 0; j < arrayTwo.length; j++) {
      let element = arrayTwo[j];
      if (commonElementsDictionary.get(element)) {
        commonElements.push(element);
      }
    }
    return commonElements;
  }
  static removeBrackets(value) {
    var _a;
    if (!value)
      return "";
    let trimmed = (_a = value.split("(")[1]) == null ? void 0 : _a.trim();
    return trimmed == null ? void 0 : trimmed.substring(0, trimmed == null ? void 0 : trimmed.lastIndexOf(")"));
  }
};
AlgosFactory.removeTrailingSlash = (url) => {
  if (url.endsWith("/")) {
    return url.substring(0, url.lastIndexOf("/"));
  }
  return url;
};

// app/scripts/helpers/event.ts
var _BrowserHelpers = class {
  constructor(storage) {
    this.setCurrentLocaleAndRedirect = (languageCodes, event) => {
      this.setCurrentLocale(event.target.value);
      this.redirectToCurrentLocale(event.target.value, languageCodes);
    };
    this.getCurrentLocale = () => {
      return this.storage.getValue(_BrowserHelpers.LOCALE);
    };
    this.storage = storage;
  }
  setCurrentLocale(value) {
    this.storage.setValue(_BrowserHelpers.LOCALE, value);
  }
  redirectToCurrentLocale(locale, languageCodes) {
    const languages = languageCodes;
    let pathname = location.pathname;
    let pathnames = pathname.split("/");
    let pathLocales = AlgosFactory.findCommonElements(languages, pathnames);
    let pathLocale = "";
    let updatedPathname = "";
    if (pathLocales.length === 1) {
      pathLocale = pathLocales.join();
      updatedPathname = pathname.replace(pathLocale, locale);
    }
    if (pathLocales.length === 0) {
      pathLocale = "/";
      updatedPathname = pathname.replace(pathLocale, `/${locale}`);
    }
    let url = location.origin + updatedPathname;
    location.assign(url);
  }
};
var BrowserHelpers = _BrowserHelpers;
BrowserHelpers.LOCALE = ConstantsFactory.locale;

// app/scripts/helpers/loaders/home.ts
var HomepageLoaderHelper = class {
  constructor(services) {
    this.services = services;
  }
  processHomepageLoaderRequests(slug, queries) {
    let responses = [];
    this.services.forEach((service) => {
      let response = service.getOne(slug, queries);
      responses.push(response);
    });
    return responses;
  }
};

// app/scripts/helpers/cookies.ts
var CookiesHelper = class {
  constructor(cookies) {
    this.cookies = cookies;
  }
  getCurrentLocalFromCookies(request) {
    let cookieHeader = request.headers.get("Cookie");
    let cookie = null;
    if (cookieHeader) {
      cookie = this.cookies.getValue(ConstantsFactory.locale, cookieHeader);
    }
    return cookie;
  }
};

// app/scripts/services/service.ts
var import_react12 = require("@storyblok/react");
var Services = class {
  async get(endpoint, slug = "", queries = {}) {
    const url = AlgosFactory.removeTrailingSlash(endpoint);
    const path = `${url}/${slug}`;
    if (!queries) {
      return (0, import_react12.getStoryblokApi)().get(path);
    }
    return (0, import_react12.getStoryblokApi)().get(path, queries);
  }
};

// app/scripts/services/story.ts
var _StoryServices = class extends Services {
  async getOne(slug, queries) {
    const response = await this.get(_StoryServices.ENDPOINT, slug, queries);
    if (!response.data) {
      throw new Response("Not Found", { status: 404 });
    }
    return response.data.story;
  }
};
var StoryServices = _StoryServices;
StoryServices.ENDPOINT = "cdn/stories" /* stories */;

// app/scripts/services/space.ts
var _SpaceServices = class extends Services {
  async getOne() {
    const response = await this.get(_SpaceServices.ENDPOINT);
    if (!response.data) {
      throw new Response("Not Found", { status: 404 });
    }
    return response.data.space;
  }
};
var SpaceServices = _SpaceServices;
SpaceServices.ENDPOINT = "cdn/spaces/me" /* spaces */;

// app/scripts/services/cookies.ts
var CookieUtilities = class {
  setValue(name, value, days) {
    let expires = "";
    if (days) {
      let date = new Date();
      date.setTime(date.getTime() + days * 24 * 60 * 60 * 1e3);
      expires = "; expires=" + date.toUTCString();
    }
    document.cookie = name + "=" + (value || "") + expires + "; path=/";
  }
  getValue(name, defaultCookies = "") {
    defaultCookies = defaultCookies || document.cookie;
    let cookies = defaultCookies.split(";");
    let nameEQ = name + "=";
    for (let i = 0; i < cookies.length; i++) {
      let cookie = cookies[i];
      while (cookie.charAt(0) == " ") {
        cookie = cookie.substring(1, cookie.length);
      }
      if (cookie.indexOf(nameEQ) == 0) {
        return cookie.substring(nameEQ.length, cookie.length);
      }
    }
    return null;
  }
  deleteValue(name) {
    document.cookie = name + "=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;";
  }
};

// app/models/story/decorator.ts
var StoryDecorators = class {
  constructor(apiStory) {
    this.apiStory = apiStory;
  }
  blokContent() {
    return {
      blok: __spreadValues({}, this.apiStory.content)
    };
  }
};

// app/models/story/fullStory.ts
var StoryModel = class extends StoryDecorators {
  constructor(apiStory) {
    super(apiStory);
    this.modelledStory = {};
    this.model();
  }
  model() {
    this.modelledStory = {
      content: this.blokContent()
    };
  }
  get story() {
    return this.modelledStory;
  }
};

// app/models/space/decorator.ts
var SpaceDecorators = class {
  constructor(apiSpace) {
    this.apiSpace = apiSpace;
  }
  addDefaultLanguage() {
    var _a;
    (_a = this.apiSpace.language_codes) == null ? void 0 : _a.push("" /* default */);
  }
  wrapLanguages() {
    let mappedLanguages = {};
    let languagesCodes = this.apiSpace.language_codes;
    for (let languageCode of languagesCodes) {
      switch (languageCode) {
        case "" /* default */:
          mappedLanguages[languageCode] = "Default";
          break;
        case "en-us" /* englishUS */:
          mappedLanguages[languageCode] = "English (US)";
          break;
        case "de-de" /* germanGerman */:
          mappedLanguages[languageCode] = "German (DE)";
          break;
        case "es" /* spanish */:
          mappedLanguages[languageCode] = "Spanish (ES)";
        default:
          break;
      }
    }
    this.apiSpace.languages = mappedLanguages;
  }
};

// app/models/space/fullSpace.ts
var SpaceModel = class extends SpaceDecorators {
  constructor(apiSpace) {
    super(apiSpace);
    this.apiSpace = apiSpace;
    this.model();
  }
  model() {
    this.addDefaultLanguage();
    this.wrapLanguages();
  }
  get space() {
    return this.apiSpace;
  }
};

// app/scripts/factories/home.ts
var HomeFactory = class {
  static browserCookies() {
    const cookies = new CookieUtilities();
    return new BrowserHelpers(cookies);
  }
  static serverCookies() {
    const cookie = new CookieUtilities();
    return new CookiesHelper(cookie);
  }
  static loaderProcessor() {
    const services = [
      new StoryServices(),
      new SpaceServices()
    ];
    return new HomepageLoaderHelper(services);
  }
  static storyModeller(services) {
    let storyModel = {};
    for (let service of services) {
      if (service.hasOwnProperty("content")) {
        storyModel = new StoryModel(service);
      }
      break;
    }
    return storyModel;
  }
  static spaceModeller(services) {
    let spaceModel = {};
    for (let service of services) {
      if (service.hasOwnProperty("id") && service.hasOwnProperty("version")) {
        spaceModel = new SpaceModel(service);
        break;
      }
    }
    return spaceModel;
  }
};

// app/components/internal/CountrySelector.tsx
var CountrySelector = () => {
  let { space } = (0, import_react15.useLoaderData)();
  const languages = space.languages;
  const languagesCodes = space.language_codes;
  const [languageSelected, setLanguage] = (0, import_react13.useState)("");
  const [rendered, isRendered] = (0, import_react13.useState)(false);
  (0, import_react13.useEffect)(() => {
    const locale = HomeFactory.browserCookies().getCurrentLocale();
    if (locale) {
      setLanguage(locale);
    }
    isRendered(true);
  }, []);
  return /* @__PURE__ */ import_react13.default.createElement(import_react14.Stack, {
    spacing: 4
  }, /* @__PURE__ */ import_react13.default.createElement(import_react14.Select, {
    defaultValue: "" /* default */,
    onChange: HomeFactory.browserCookies().setCurrentLocaleAndRedirect.bind(void 0, languagesCodes),
    size: "md"
  }, languagesCodes.map((languageCode) => /* @__PURE__ */ import_react13.default.createElement("option", {
    value: languageCode,
    selected: rendered && languageSelected === languageCode ? true : false,
    key: languageCode
  }, /* @__PURE__ */ import_react13.default.createElement(import_react_country_flag.default, {
    countryCode: AlgosFactory.removeBrackets(languages[languageCode])
  }), " " + languages[languageCode]))));
};

// app/components/internal/Header.tsx
var import_react18 = require("@chakra-ui/react");
var Header = ({ logos, links: links2 }) => {
  const { isOpen, onOpen, onClose } = (0, import_react18.useDisclosure)();
  const { colorMode, toggleColorMode } = (0, import_react18.useColorMode)();
  return /* @__PURE__ */ import_react16.default.createElement(import_react16.default.Fragment, null, /* @__PURE__ */ import_react16.default.createElement(import_react18.Flex, {
    h: 16,
    alignItems: "center",
    justifyContent: "space-between"
  }, /* @__PURE__ */ import_react16.default.createElement(import_react18.IconButton, {
    size: "md",
    icon: isOpen ? /* @__PURE__ */ import_react16.default.createElement(import_icons.CloseIcon, null) : /* @__PURE__ */ import_react16.default.createElement(import_icons.HamburgerIcon, null),
    "aria-label": "Open Menu",
    display: { md: "none" },
    onClick: isOpen ? onClose : onOpen
  }), /* @__PURE__ */ import_react16.default.createElement(import_react18.HStack, {
    spacing: 8,
    alignItems: "center"
  }, /* @__PURE__ */ import_react16.default.createElement(import_react17.StoryblokComponent, {
    blok: logos
  }), /* @__PURE__ */ import_react16.default.createElement(import_react18.HStack, {
    as: "nav",
    spacing: 4,
    display: { base: "none", md: "flex" }
  }, Array.from(links2.values()).map((link) => /* @__PURE__ */ import_react16.default.createElement(Category, {
    key: link._uid,
    link
  }, " ", link, " ")))), /* @__PURE__ */ import_react16.default.createElement(import_react18.Flex, {
    alignItems: "center"
  }, /* @__PURE__ */ import_react16.default.createElement(CountrySelector, null), /* @__PURE__ */ import_react16.default.createElement(import_react18.Button, {
    onClick: toggleColorMode
  }, colorMode === "light" /* light */ ? /* @__PURE__ */ import_react16.default.createElement(import_icons.MoonIcon, {
    w: 6,
    h: 6
  }) : /* @__PURE__ */ import_react16.default.createElement(import_icons.SunIcon, {
    w: 6,
    h: 6
  })), /* @__PURE__ */ import_react16.default.createElement(import_react18.Menu, null, /* @__PURE__ */ import_react16.default.createElement(import_react18.MenuButton, {
    as: import_react18.Button,
    rounded: "full",
    variant: "link",
    cursor: "pointer",
    minW: 0
  }, /* @__PURE__ */ import_react16.default.createElement(import_react18.Avatar, {
    size: "sm",
    src: "https://images.unsplash.com/photo-1493666438817-866a91353ca9?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&s=b616b2c5b373a80ffc9636ba24f7a4a9"
  })), /* @__PURE__ */ import_react16.default.createElement(import_react18.MenuList, null, /* @__PURE__ */ import_react16.default.createElement(import_react18.MenuItem, null), /* @__PURE__ */ import_react16.default.createElement(import_react18.MenuDivider, null))))), isOpen ? /* @__PURE__ */ import_react16.default.createElement(import_react18.Box, {
    pb: 4,
    display: { md: "none" }
  }, /* @__PURE__ */ import_react16.default.createElement(import_react18.Stack, {
    as: "nav",
    spacing: 4
  }, Array.from(links2.values()).map((link) => /* @__PURE__ */ import_react16.default.createElement(Category, {
    key: link._uid,
    link
  }, " ", link, " ")))) : null);
};

// app/components/content-types/Page.tsx
var Page = ({ blok }) => {
  const refinedLinks = ComponentHelpers.getHeaderLinks(blok.body);
  const { logoComponent, features, teaser } = ComponentHelpers.processHomepageBloks(blok.body);
  const refinedImages = ComponentHelpers.refineImages(logoComponent.logos);
  const refinedLogos = ComponentHelpers.refineLogoComponent(logoComponent, refinedImages);
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement(import_react20.Box, {
    bg: (0, import_react20.useColorModeValue)("gray.100", "gray.900"),
    px: 4
  }, /* @__PURE__ */ React.createElement(Header, {
    links: refinedLinks,
    logos: refinedLogos
  })), /* @__PURE__ */ React.createElement(import_react20.Box, {
    p: 4
  }, /* @__PURE__ */ React.createElement(import_react19.StoryblokComponent, {
    blok: teaser
  }), Array.from(features.values()).map((feature) => /* @__PURE__ */ React.createElement(import_react19.StoryblokComponent, {
    blok: feature,
    key: feature._uid
  }))));
};

// app/components/content-types/Product.tsx
var import_react21 = require("@storyblok/react");
var Product = ({ blok }) => {
  var _a;
  return /* @__PURE__ */ React.createElement("div", __spreadProps(__spreadValues({}, (0, import_react21.storyblokEditable)(blok)), {
    key: blok._uid
  }), /* @__PURE__ */ React.createElement("h2", null, " ", blok.name, " "), (_a = blok.images) == null ? void 0 : _a.map((image) => /* @__PURE__ */ React.createElement("img", {
    src: image.filename,
    alt: image.alt,
    key: image.id
  })));
};

// app/components/nested/Logos.tsx
var import_react22 = require("@storyblok/react");
var import_react23 = require("@chakra-ui/react");
var Logos = ({ blok }) => {
  var _a, _b, _c, _d;
  const { colorMode } = (0, import_react23.useColorMode)();
  return /* @__PURE__ */ React.createElement(React.Fragment, null, colorMode === "light" /* light */ ? /* @__PURE__ */ React.createElement(import_react23.Image, __spreadProps(__spreadValues({}, (0, import_react22.storyblokEditable)(blok)), {
    boxSize: "120px",
    objectFit: "contain",
    src: (_a = blok == null ? void 0 : blok.dark) == null ? void 0 : _a.src,
    alt: (_b = blok == null ? void 0 : blok.dark) == null ? void 0 : _b.alt
  })) : /* @__PURE__ */ React.createElement(import_react23.Image, __spreadProps(__spreadValues({}, (0, import_react22.storyblokEditable)(blok)), {
    boxSize: "120px",
    objectFit: "contain",
    src: (_c = blok == null ? void 0 : blok.light) == null ? void 0 : _c.src,
    alt: (_d = blok == null ? void 0 : blok.light) == null ? void 0 : _d.alt
  })));
};

// app/document.tsx
var import_react25 = require("@chakra-ui/react");
var import_react26 = require("@emotion/react");
var import_react27 = __toESM(require("react"));

// app/theme.ts
var import_react24 = require("@chakra-ui/react");
var config = {
  initialColorMode: "light" /* light */,
  useSystemColorMode: false
};
var theme = (0, import_react24.extendTheme)({ config });
var theme_default = theme;

// app/document.tsx
var import_react28 = require("@remix-run/react");
var Document = (0, import_react26.withEmotionCache)(({ children }, emotionCache) => {
  const serverStyleData = (0, import_react27.useContext)(ServerStyleContext);
  const clientStyleData = (0, import_react27.useContext)(ClientStyleContext);
  (0, import_react27.useEffect)(() => {
    emotionCache.sheet.container = document.head;
    const tags = emotionCache.sheet.tags;
    emotionCache.sheet.flush();
    tags.forEach((tag) => {
      emotionCache.sheet._insertTag(tag);
    });
    clientStyleData == null ? void 0 : clientStyleData.reset();
  }, []);
  return /* @__PURE__ */ import_react27.default.createElement("html", {
    lang: "en"
  }, /* @__PURE__ */ import_react27.default.createElement("head", null, /* @__PURE__ */ import_react27.default.createElement(import_react28.Meta, null), /* @__PURE__ */ import_react27.default.createElement(import_react28.Links, null), serverStyleData == null ? void 0 : serverStyleData.map(({ key, ids, css }) => /* @__PURE__ */ import_react27.default.createElement("style", {
    key,
    "data-emotion": `${key} ${ids.join(" ")}`,
    dangerouslySetInnerHTML: { __html: css }
  }))), /* @__PURE__ */ import_react27.default.createElement("body", null, /* @__PURE__ */ import_react27.default.createElement(import_react25.ColorModeScript, {
    initialColorMode: theme_default.config.initialColorMode
  }), children, /* @__PURE__ */ import_react27.default.createElement(import_react28.ScrollRestoration, null), /* @__PURE__ */ import_react27.default.createElement(import_react28.Scripts, null), /* @__PURE__ */ import_react27.default.createElement(import_react28.LiveReload, null)));
});

// .env.ts
var process = {
  env: {
    PREVIEW_ACCESS_TOKEN: "Wr4154DUMBlpx3rKUVTyrgtt"
  }
};

// route:/home/isaac/Documents/Nexum/storyBlok/nexum-shop/app/root.tsx
var components = {
  feature: Feature,
  grid: Grid,
  teaser: Teaser,
  page: Page,
  Product,
  logos: Logos
};
(0, import_react32.storyblokInit)({
  accessToken: process.env.PREVIEW_ACCESS_TOKEN,
  use: [import_react32.apiPlugin],
  components
});
var meta = () => ({
  charset: "utf-8",
  title: "Nexum Post",
  viewport: "width=device-width,initial-scale=1"
});
var links = () => {
  return [
    { rel: "preconnect", href: "https://fonts.googleapis.com" },
    { rel: "preconnect", href: "https://fonts.gstatic.com" },
    {
      rel: "stylesheet",
      href: "https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;1,300;1,400;1,500;1,600;1,700;1,800&display=swap"
    },
    { rel: "apple-touch-icon", sizes: "180x180", href: "/favicon_io/apple-touch-icon.png" },
    { rel: "icon", type: "image/png", sizes: "32x32", href: "/favicon_io/favicon-32x32.png" },
    { rel: "icon", type: "image/png", sizes: "16x16", href: "/favicon_io/favicon-16x16.png" },
    { rel: "manifest", href: "/favicon_io/site.webmanifest" }
  ];
};
function App() {
  return /* @__PURE__ */ import_react29.default.createElement(Document, null, /* @__PURE__ */ import_react29.default.createElement(import_react30.ChakraProvider, {
    theme: theme_default
  }, /* @__PURE__ */ import_react29.default.createElement(import_react31.Outlet, null)));
}

// route:/home/isaac/Documents/Nexum/storyBlok/nexum-shop/app/routes/Main-product/$productSlug.tsx
var productSlug_exports = {};
__export(productSlug_exports, {
  default: () => Product2,
  loader: () => loader
});
var import_node = require("@remix-run/node");
var import_react33 = require("@remix-run/react");
var import_tiny_invariant = __toESM(require("tiny-invariant"));
var import_react34 = require("@storyblok/react");
var loader = async ({ params }) => {
  (0, import_tiny_invariant.default)(params.productSlug, `params.productSlug is required`);
  return (0, import_node.json)({ story: {} });
};
function Product2() {
  let story = (0, import_react33.useLoaderData)();
  story = (0, import_react34.useStoryblokState)(story);
  return /* @__PURE__ */ React.createElement(import_react34.StoryblokComponent, {
    blok: story.content.blok
  });
}

// route:/home/isaac/Documents/Nexum/storyBlok/nexum-shop/app/routes/Main-product/index.tsx
var Main_product_exports = {};
__export(Main_product_exports, {
  default: () => Listing,
  loader: () => loader2
});
var import_node2 = require("@remix-run/node");
var import_react36 = require("@remix-run/react");

// app/folders/ProductListing.tsx
var import_react35 = require("@storyblok/react");
var ProductListing = ({ stories }) => {
  return /* @__PURE__ */ React.createElement(React.Fragment, null, stories.map((story) => /* @__PURE__ */ React.createElement("div", __spreadProps(__spreadValues({}, (0, import_react35.storyblokEditable)(story.content.blok)), {
    key: story.content.blok._uid
  }), /* @__PURE__ */ React.createElement("h2", null, " ", story.content.blok.name, " "), story.content.blok.images.map((image) => /* @__PURE__ */ React.createElement("img", {
    src: image.filename,
    alt: image.alt,
    key: image.id
  })))));
};

// route:/home/isaac/Documents/Nexum/storyBlok/nexum-shop/app/routes/Main-product/index.tsx
var loader2 = async () => {
  return (0, import_node2.json)({ stories: [{}] });
};
function Listing() {
  const stories = (0, import_react36.useLoaderData)();
  return /* @__PURE__ */ React.createElement(ProductListing, {
    stories
  });
}

// route:/home/isaac/Documents/Nexum/storyBlok/nexum-shop/app/routes/de-de/$deSlug.tsx
var deSlug_exports = {};
__export(deSlug_exports, {
  default: () => Page2,
  loader: () => loader3
});
var import_node3 = require("@remix-run/node");
var import_react37 = require("@remix-run/react");
var import_react38 = require("@storyblok/react");

// app/scripts/loaders/home.ts
var HomepageLoader = class {
  static async getLoaderData(params, queries, factory) {
    const slug = (params == null ? void 0 : params.slug) ?? ConstantsFactory.homepageFallback;
    const unresolvedResponse = factory.loaderProcessor().processHomepageLoaderRequests(slug, queries);
    const resolvedResponse = await Promise.all(unresolvedResponse);
    const storyModel = factory.storyModeller(resolvedResponse);
    const spaceModel = factory.spaceModeller(resolvedResponse);
    const response = {
      story: storyModel == null ? void 0 : storyModel.story,
      space: spaceModel == null ? void 0 : spaceModel.space
    };
    return response;
  }
};

// route:/home/isaac/Documents/Nexum/storyBlok/nexum-shop/app/routes/de-de/$deSlug.tsx
var loader3 = async ({ params }) => {
  const sbApiOptions = {
    version: "draft" /* draft */,
    language: "de-de" /* germanGerman */
  };
  const response = await HomepageLoader.getLoaderData(params, sbApiOptions, HomeFactory);
  return (0, import_node3.json)(response);
};
function Page2() {
  let { story } = (0, import_react37.useLoaderData)();
  story = (0, import_react38.useStoryblokState)(story);
  return /* @__PURE__ */ React.createElement(import_react38.StoryblokComponent, {
    blok: story.content.blok
  });
}

// route:/home/isaac/Documents/Nexum/storyBlok/nexum-shop/app/routes/en-us/$enSlug.tsx
var enSlug_exports = {};
__export(enSlug_exports, {
  default: () => Page3,
  loader: () => loader4
});
var import_node4 = require("@remix-run/node");
var import_react39 = require("@remix-run/react");
var import_react40 = require("@storyblok/react");
var loader4 = async ({ params }) => {
  const sbApiOptions = {
    version: "draft" /* draft */,
    language: "en-us" /* englishUS */
  };
  const response = await HomepageLoader.getLoaderData(params, sbApiOptions, HomeFactory);
  return (0, import_node4.json)(response);
};
function Page3() {
  let { story } = (0, import_react39.useLoaderData)();
  story = (0, import_react40.useStoryblokState)(story);
  return /* @__PURE__ */ React.createElement(import_react40.StoryblokComponent, {
    blok: story.content.blok
  });
}

// route:/home/isaac/Documents/Nexum/storyBlok/nexum-shop/app/routes/de-de/index.tsx
var de_de_exports = {};
__export(de_de_exports, {
  default: () => Page4,
  loader: () => loader5
});

// app/routes/de-de/$deSlug.tsx
var import_node5 = require("@remix-run/node");
var import_react41 = require("@remix-run/react");
var import_react42 = require("@storyblok/react");
var loader5 = async ({ params }) => {
  const sbApiOptions = {
    version: "draft" /* draft */,
    language: "de-de" /* germanGerman */
  };
  const response = await HomepageLoader.getLoaderData(params, sbApiOptions, HomeFactory);
  return (0, import_node5.json)(response);
};
function Page4() {
  let { story } = (0, import_react41.useLoaderData)();
  story = (0, import_react42.useStoryblokState)(story);
  return /* @__PURE__ */ React.createElement(import_react42.StoryblokComponent, {
    blok: story.content.blok
  });
}

// route:/home/isaac/Documents/Nexum/storyBlok/nexum-shop/app/routes/en-us/index.tsx
var en_us_exports = {};
__export(en_us_exports, {
  default: () => Page5,
  loader: () => loader6
});

// app/routes/en-us/$enSlug.tsx
var import_node6 = require("@remix-run/node");
var import_react43 = require("@remix-run/react");
var import_react44 = require("@storyblok/react");
var loader6 = async ({ params }) => {
  const sbApiOptions = {
    version: "draft" /* draft */,
    language: "en-us" /* englishUS */
  };
  const response = await HomepageLoader.getLoaderData(params, sbApiOptions, HomeFactory);
  return (0, import_node6.json)(response);
};
function Page5() {
  let { story } = (0, import_react43.useLoaderData)();
  story = (0, import_react44.useStoryblokState)(story);
  return /* @__PURE__ */ React.createElement(import_react44.StoryblokComponent, {
    blok: story.content.blok
  });
}

// route:/home/isaac/Documents/Nexum/storyBlok/nexum-shop/app/routes/es/$esSlug.tsx
var esSlug_exports = {};
__export(esSlug_exports, {
  default: () => Page6,
  loader: () => loader7
});
var import_node7 = require("@remix-run/node");
var import_react45 = require("@remix-run/react");
var import_react46 = require("@storyblok/react");
var loader7 = async ({ params }) => {
  const sbApiOptions = {
    version: "draft" /* draft */,
    language: "es" /* spanish */
  };
  const response = await HomepageLoader.getLoaderData(params, sbApiOptions, HomeFactory);
  return (0, import_node7.json)(response);
};
function Page6() {
  let { story } = (0, import_react45.useLoaderData)();
  story = (0, import_react46.useStoryblokState)(story);
  return /* @__PURE__ */ React.createElement(import_react46.StoryblokComponent, {
    blok: story.content.blok
  });
}

// route:/home/isaac/Documents/Nexum/storyBlok/nexum-shop/app/routes/es/index.tsx
var es_exports = {};
__export(es_exports, {
  default: () => Page7,
  loader: () => loader8
});

// app/routes/es/$esSlug.tsx
var import_node8 = require("@remix-run/node");
var import_react47 = require("@remix-run/react");
var import_react48 = require("@storyblok/react");
var loader8 = async ({ params }) => {
  const sbApiOptions = {
    version: "draft" /* draft */,
    language: "es" /* spanish */
  };
  const response = await HomepageLoader.getLoaderData(params, sbApiOptions, HomeFactory);
  return (0, import_node8.json)(response);
};
function Page7() {
  let { story } = (0, import_react47.useLoaderData)();
  story = (0, import_react48.useStoryblokState)(story);
  return /* @__PURE__ */ React.createElement(import_react48.StoryblokComponent, {
    blok: story.content.blok
  });
}

// route:/home/isaac/Documents/Nexum/storyBlok/nexum-shop/app/routes/$slug.tsx
var slug_exports = {};
__export(slug_exports, {
  default: () => Page8,
  loader: () => loader9
});
var import_node9 = require("@remix-run/node");
var import_react49 = require("@remix-run/react");
var import_react50 = require("@storyblok/react");
var loader9 = async ({ params, request }) => {
  const localCookie = HomeFactory.serverCookies().getCurrentLocalFromCookies(request);
  if (localCookie) {
    return (0, import_node9.redirect)(`/${localCookie.trim()}`);
  }
  const sbApiOptions = {
    version: "draft" /* draft */
  };
  const response = await HomepageLoader.getLoaderData(params, sbApiOptions, HomeFactory);
  return (0, import_node9.json)(response);
};
function Page8() {
  let { story } = (0, import_react49.useLoaderData)();
  story = (0, import_react50.useStoryblokState)(story);
  return /* @__PURE__ */ React.createElement(import_react50.StoryblokComponent, {
    blok: story.content.blok
  });
}

// route:/home/isaac/Documents/Nexum/storyBlok/nexum-shop/app/routes/index.tsx
var routes_exports = {};
__export(routes_exports, {
  default: () => Page9,
  loader: () => loader10
});

// app/routes/$slug.tsx
var import_node10 = require("@remix-run/node");
var import_react51 = require("@remix-run/react");
var import_react52 = require("@storyblok/react");
var loader10 = async ({ params, request }) => {
  const localCookie = HomeFactory.serverCookies().getCurrentLocalFromCookies(request);
  if (localCookie) {
    return (0, import_node10.redirect)(`/${localCookie.trim()}`);
  }
  const sbApiOptions = {
    version: "draft" /* draft */
  };
  const response = await HomepageLoader.getLoaderData(params, sbApiOptions, HomeFactory);
  return (0, import_node10.json)(response);
};
function Page9() {
  let { story } = (0, import_react51.useLoaderData)();
  story = (0, import_react52.useStoryblokState)(story);
  return /* @__PURE__ */ React.createElement(import_react52.StoryblokComponent, {
    blok: story.content.blok
  });
}

// server-assets-manifest:@remix-run/dev/assets-manifest
var assets_manifest_default = { "version": "fbefba2d", "entry": { "module": "/build/entry.client-4TE64GU2.js", "imports": ["/build/_shared/chunk-SO35XJ6Q.js", "/build/_shared/chunk-2BAGRJQB.js"] }, "routes": { "root": { "id": "root", "parentId": void 0, "path": "", "index": void 0, "caseSensitive": void 0, "module": "/build/root-EZ4JZA3U.js", "imports": ["/build/_shared/chunk-QTN7A4EK.js", "/build/_shared/chunk-WMKIJZDN.js"], "hasAction": false, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/$slug": { "id": "routes/$slug", "parentId": "root", "path": ":slug", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/$slug-I6TXW7XZ.js", "imports": ["/build/_shared/chunk-LY7SWJSC.js"], "hasAction": false, "hasLoader": true, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/Main-product/$productSlug": { "id": "routes/Main-product/$productSlug", "parentId": "root", "path": "Main-product/:productSlug", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/Main-product/$productSlug-VZ4YL47X.js", "imports": void 0, "hasAction": false, "hasLoader": true, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/Main-product/index": { "id": "routes/Main-product/index", "parentId": "root", "path": "Main-product", "index": true, "caseSensitive": void 0, "module": "/build/routes/Main-product/index-ROI47C2K.js", "imports": void 0, "hasAction": false, "hasLoader": true, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/de-de/$deSlug": { "id": "routes/de-de/$deSlug", "parentId": "root", "path": "de-de/:deSlug", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/de-de/$deSlug-THSIIN24.js", "imports": ["/build/_shared/chunk-UHUC4OGV.js"], "hasAction": false, "hasLoader": true, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/de-de/index": { "id": "routes/de-de/index", "parentId": "root", "path": "de-de", "index": true, "caseSensitive": void 0, "module": "/build/routes/de-de/index-NVGZU4KA.js", "imports": ["/build/_shared/chunk-UHUC4OGV.js"], "hasAction": false, "hasLoader": true, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/en-us/$enSlug": { "id": "routes/en-us/$enSlug", "parentId": "root", "path": "en-us/:enSlug", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/en-us/$enSlug-QHQF5QAH.js", "imports": ["/build/_shared/chunk-VWSLEYST.js"], "hasAction": false, "hasLoader": true, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/en-us/index": { "id": "routes/en-us/index", "parentId": "root", "path": "en-us", "index": true, "caseSensitive": void 0, "module": "/build/routes/en-us/index-TLOW257T.js", "imports": ["/build/_shared/chunk-VWSLEYST.js"], "hasAction": false, "hasLoader": true, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/es/$esSlug": { "id": "routes/es/$esSlug", "parentId": "root", "path": "es/:esSlug", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/es/$esSlug-TJRT4YVU.js", "imports": ["/build/_shared/chunk-5M57F65F.js"], "hasAction": false, "hasLoader": true, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/es/index": { "id": "routes/es/index", "parentId": "root", "path": "es", "index": true, "caseSensitive": void 0, "module": "/build/routes/es/index-FQ7HGIBO.js", "imports": ["/build/_shared/chunk-5M57F65F.js"], "hasAction": false, "hasLoader": true, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/index": { "id": "routes/index", "parentId": "root", "path": void 0, "index": true, "caseSensitive": void 0, "module": "/build/routes/index-DE25KWG3.js", "imports": ["/build/_shared/chunk-LY7SWJSC.js"], "hasAction": false, "hasLoader": true, "hasCatchBoundary": false, "hasErrorBoundary": false } }, "url": "/build/manifest-FBEFBA2D.js" };

// server-entry-module:@remix-run/dev/server-build
var entry = { module: entry_server_exports };
var routes = {
  "root": {
    id: "root",
    parentId: void 0,
    path: "",
    index: void 0,
    caseSensitive: void 0,
    module: root_exports
  },
  "routes/Main-product/$productSlug": {
    id: "routes/Main-product/$productSlug",
    parentId: "root",
    path: "Main-product/:productSlug",
    index: void 0,
    caseSensitive: void 0,
    module: productSlug_exports
  },
  "routes/Main-product/index": {
    id: "routes/Main-product/index",
    parentId: "root",
    path: "Main-product",
    index: true,
    caseSensitive: void 0,
    module: Main_product_exports
  },
  "routes/de-de/$deSlug": {
    id: "routes/de-de/$deSlug",
    parentId: "root",
    path: "de-de/:deSlug",
    index: void 0,
    caseSensitive: void 0,
    module: deSlug_exports
  },
  "routes/en-us/$enSlug": {
    id: "routes/en-us/$enSlug",
    parentId: "root",
    path: "en-us/:enSlug",
    index: void 0,
    caseSensitive: void 0,
    module: enSlug_exports
  },
  "routes/de-de/index": {
    id: "routes/de-de/index",
    parentId: "root",
    path: "de-de",
    index: true,
    caseSensitive: void 0,
    module: de_de_exports
  },
  "routes/en-us/index": {
    id: "routes/en-us/index",
    parentId: "root",
    path: "en-us",
    index: true,
    caseSensitive: void 0,
    module: en_us_exports
  },
  "routes/es/$esSlug": {
    id: "routes/es/$esSlug",
    parentId: "root",
    path: "es/:esSlug",
    index: void 0,
    caseSensitive: void 0,
    module: esSlug_exports
  },
  "routes/es/index": {
    id: "routes/es/index",
    parentId: "root",
    path: "es",
    index: true,
    caseSensitive: void 0,
    module: es_exports
  },
  "routes/$slug": {
    id: "routes/$slug",
    parentId: "root",
    path: ":slug",
    index: void 0,
    caseSensitive: void 0,
    module: slug_exports
  },
  "routes/index": {
    id: "routes/index",
    parentId: "root",
    path: void 0,
    index: true,
    caseSensitive: void 0,
    module: routes_exports
  }
};
module.exports = __toCommonJS(stdin_exports);
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  assets,
  entry,
  routes
});
//# sourceMappingURL=index.js.map
