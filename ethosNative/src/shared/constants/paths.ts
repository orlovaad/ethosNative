export const MAIN = '/';
export const START = '/start';

export const ENTRY = '/entry';
export const NEW_ENTRY_VALUES = '/new-entry-values';
export const DASHBOARD_VALUES = '/dashboard-values';
export const HOME = '/home';
export const ACCOUNT = '/account';
export const SETTINGS = '/settings';
export const DISABLED_DESKTOP = '/disabled-desktop';
export const TASKS = '/tasks';
export const INNER_UNIVERSE = '/inner-universe';
export const EXPLORE = '/explore';
export const MEANINGS = '/meanings';
export const MEANINGS_DETAIL = `${MEANINGS}/:id`;
export const valuesDetailLink = (id: string | number) => `${MEANINGS}/${id}`;
export const MEANINGS_CREATE = `${MEANINGS_DETAIL}/create-meaning`;
export const meaningsCreateLink = (id: string | number) => `${valuesDetailLink(id)}/create-meaning`;
export const MEANINGS_SYNTHESIZE = `${MEANINGS_DETAIL}/create-synthesize`;
export const meaningsSynthesizeLink = (id: string | number) =>
  `${valuesDetailLink(id)}/create-synthesize`;
export const MEANINGS_SYNTHESIZE_CREATE = `${MEANINGS_DETAIL}/create-synthesize/create`;
export const meaningsSynthesizeCreateLink = (id: string | number) =>
  `${valuesDetailLink(id)}/create-synthesize/create`;
export const CREATED_MEANING = '/created-meaning';
export const CREATED_MEANING_ROUTE = `${CREATED_MEANING}/:id`;
export const createdMeaning = (id: string | number) => `${CREATED_MEANING}/${id}`;
export const NORMS = '/norms';
export const GOALS = '/goals';
export const VALUES = '/values';
export const SHARE = '/share';
export const OTHER_SAY = '/other-say';
export const OTHER_SAY_ROUT = '/other-say/:idValue';
export const otherSayLink = (id: string | number) => `${OTHER_SAY}/${id}`;
export const PRIVACY_POLICY = '/privacy-policy';
export const TERMS_CONDITIONS = '/terms-conditions';
export const COOKIES_POLICY = '/cookies-policy';
export const CONTACTS = '/contacts';
export const SELECT_LANGUAGE = '/select-language';
