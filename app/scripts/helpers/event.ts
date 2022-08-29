import type { ChangeEvent } from "react";
import type { IBrowserHelpers } from "~/types";
import constants from "~/scripts/factories/constants";
import algorithms from "../utils/algorithms";

export default class BrowserHelpers {
    private static LOCALE = constants.locale;
    private storage: IBrowserHelpers;

    constructor(storage: IBrowserHelpers) {
        this.storage = storage;
    }

	public setCurrentLocaleAndRedirect = (languageCodes: any, event: ChangeEvent<HTMLSelectElement>) => {
        this.setCurrentLocale(event.target.value);
        this.redirectToCurrentLocale(event.target.value, languageCodes);
    }

	public getCurrentLocale = (): string | null => {
		return this.storage.getValue(BrowserHelpers.LOCALE);
	}

    public setCurrentLocale(value: string) {
        this.storage.setValue(BrowserHelpers.LOCALE, value);
    }

    public redirectToCurrentLocale(locale: string, languageCodes: any) {
        const languages = languageCodes;
        let pathname = location.pathname;
        let pathnames = pathname.split("/");

        // find the locale used in the location url
        let pathLocales = algorithms.findCommonElements(languages, pathnames);
        let pathLocale: string = "";
        let updatedPathname: string = "";

        // check if one one language exist in the path
        if (pathLocales.length === 1) {
            pathLocale = pathLocales.join();
            updatedPathname = pathname.replace(pathLocale, locale);
        }

        // changing language on default language
        if (pathLocales.length === 0) {
            pathLocale = "/";
            updatedPathname = pathname.replace(pathLocale, `/${locale}`);
        }

        let url = location.origin + updatedPathname;
        location.assign(url)
    }
}
