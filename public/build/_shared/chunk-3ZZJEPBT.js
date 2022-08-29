import {
  useStoryblokApi
} from "/build/_shared/chunk-WMKIJZDN.js";
import {
  init_react
} from "/build/_shared/chunk-2BAGRJQB.js";

// app/scripts/factories/home.ts
init_react();

// app/scripts/helpers/event.ts
init_react();

// app/scripts/factories/constants.ts
init_react();
var ConstantsFactory = class {
};
ConstantsFactory.locale = "locale";
ConstantsFactory.homepageFallback = "homepage";

// app/scripts/utils/algorithms.ts
init_react();
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
      return sto.getValue(_BrowserHelpers.LOCALE);
    };
    sto = storage;
  }
  setCurrentLocale(value) {
    sto.setValue(_BrowserHelpers.LOCALE, value);
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
init_react();
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
init_react();
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

// app/scripts/services/story.ts
init_react();

// app/scripts/services/service.ts
init_react();
var Services = class {
  async get(endpoint, slug = "", queries = {}) {
    const url = AlgosFactory.removeTrailingSlash(endpoint);
    const path = `${url}/${slug}`;
    if (!queries) {
      return useStoryblokApi().get(path);
    }
    return useStoryblokApi().get(path, queries);
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
init_react();
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
init_react();
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

// app/models/story/fullStory.ts
init_react();

// app/models/story/decorator.ts
init_react();
var StoryDecorators = class {
  constructor(apiStory) {
    this.apiStory = apiStory;
  }
  blokContent() {
    return {
      blok: { ...this.apiStory.content }
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

// app/models/space/fullSpace.ts
init_react();

// app/models/space/decorator.ts
init_react();
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

export {
  AlgosFactory,
  HomeFactory
};
//# sourceMappingURL=/build/_shared/chunk-3ZZJEPBT.js.map
