import type { CollectionConfig } from "payload";
import { generateBlurHash } from "./hooks/generateBlurHash";

export const Media: CollectionConfig = {
  slug: "media",
  access: {
    read: () => true,
  },
  fields: [
    {
      name: "alt",
      type: "text",
    },
    {
      name: "blurhash",
      type: "text",
      admin: {
        hidden: true,
        disableListColumn: true,
        disableListFilter: true,
      },
    },
  ],
  hooks: {
    beforeValidate: [generateBlurHash],
  },
  upload: {
    mimeTypes: ["image/*", "application/pdf"],
  },
};
