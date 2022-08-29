import type {
	IBrowserHelpers,
} from "~/types";
import constants from "../factories/constants";

export default class CookiesHelper {
	private cookies: IBrowserHelpers;

	constructor (cookies: IBrowserHelpers) {
		this.cookies = cookies;
	}

	public getCurrentLocalFromCookies(request: Request): string | null {
		let cookieHeader = request.headers.get("Cookie");
		let cookie: string | null = null;
	  
		if (cookieHeader) {
		  cookie = this.cookies.getValue(constants.locale, cookieHeader);
		}

		return cookie;
	}
}
