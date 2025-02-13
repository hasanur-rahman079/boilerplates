import { APIError, CollectionBeforeValidateHook } from "payload";
import { getPlaiceholder } from "plaiceholder";

export const generateBlurHash: CollectionBeforeValidateHook = async ({
  data,
  operation,
  req,
}) => {
  if (operation === "create" || operation === "update") {
    try {
      const buffer = req?.file?.data;
      const mimeType = req?.file?.mimetype;

      if (buffer && mimeType?.startsWith("image/")) {
        const { base64 } = await getPlaiceholder(buffer, { size: 32 });

        return {
          ...data,
          blurhash: base64,
        };
      } else {
        return {
          ...data,
          blurhash: null,
        };
      }
    } catch (error) {
      throw new APIError("Failed to generate blur data url", error);
    }
  }
};
