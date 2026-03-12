/**
 * Marketing site config. The app lives at bidblender.io; this site (bidblender.com) links to it.
 */
export const APP_URL = process.env.NEXT_PUBLIC_APP_URL ?? "https://bidblender.io";

export const APP_SIGNUP_URL = `${APP_URL}/auth/signup`;
export const APP_SIGNIN_URL = `${APP_URL}/auth/signin`;
