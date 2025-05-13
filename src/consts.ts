export type Site = {
  TITLE: string;
  DESCRIPTION: string;
  EMAIL: string;
  NUM_POSTS_ON_HOMEPAGE: number;
  WEBSITE_URL: string;
};

export type Metadata = {
  TITLE: string;
  DESCRIPTION: string;
};

export type Socials = {
  NAME: string;
  HREF: string;
}[];

export const SITE_TITLE = "Mostly True";
export const SITE_DESCRIPTION = "Stories I like to tell around a campfire";
export const SITE_URL = "https://mostlytrue.life";
export const SITE_AUTHOR = "Virgil (Tim) Eaton";

export const SITE: Site = {
  TITLE: "Mostly True",
  DESCRIPTION: "A selection of stories I like to tell around a campfire",
  EMAIL: "virgil@mostlytrue.life",
  NUM_POSTS_ON_HOMEPAGE: 7,
  WEBSITE_URL: "https://mostlytrue.life",
};
