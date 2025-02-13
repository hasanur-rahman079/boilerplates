import type { CollectionConfig } from "payload";
import { generateBlurHash } from "./hooks/generateBlurHash";
import { authenticated } from "@/access/authenticated";
import { anyone } from "@/access/anyone";
import {
  AlignFeature,
  BoldFeature,
  FixedToolbarFeature,
  lexicalEditor,
  LinkFeature,
} from "@payloadcms/richtext-lexical";

export const Media: CollectionConfig = {
  slug: "media",
  access: {
    create: authenticated,
    delete: authenticated,
    read: anyone,
    update: authenticated,
  },
  fields: [
    {
      name: "alt",
      type: "text",
    },
    {
      name: "caption",
      type: "richText",
      editor: lexicalEditor({
        features: () => {
          return [
            BoldFeature(),
            LinkFeature(),
            AlignFeature(),
            FixedToolbarFeature(),
          ];
        },
      }),
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
    mimeTypes: ["image/*", "video/mp4", "application/pdf"],
  },
};
