import { seoPlugin } from "@payloadcms/plugin-seo";
import { Plugin } from "payload";
import { GenerateTitle, GenerateURL } from "@payloadcms/plugin-seo/types";

import { Post } from "@/payload-types";
import { getServerSideURL } from "@/utils/getURL";

const generateTitle: GenerateTitle<Post | Post> = ({ doc }) => {
  return doc?.title
    ? `${doc.title} | ${process.env.WEBSITE_TITLE}`
    : `${process.env.WEBSITE_TITLE}`;
};

const generateURL: GenerateURL<Post | Post> = ({ doc }) => {
  const url = getServerSideURL();

  return doc?.slug ? `${url}/${doc.slug}` : url;
};

export const plugins: Plugin[] = [
  seoPlugin({
    generateTitle,
    generateURL,
  }),
];
