export interface SiteBlogConfig {
    enabled?: boolean;
}

export interface SiteConfig {
    blog?: SiteBlogConfig;
}

import data from "./site-config.yaml";
const siteConfig = data as SiteConfig;

export default siteConfig;