import { getPayload } from "payload";
import config from "@payload-config";
import { Media } from "@/payload-types";
import { ImageBox } from "@/components/imageBox";

export const revalidate = 10;

export default async function Home() {
  const payload = await getPayload({ config });
  const media = await payload.find({
    collection: "media",
  });
  // console.log("🚀 ~ Home ~ media:", media);

  return (
    <div className="grid grid-cols-2 gap-4 p-4">
      {media.docs.map((obj: Media) => {
        return (
          <div key={obj.id}>
            <ImageBox media={obj as Media} alt="Hi" />
          </div>
        );
      })}
    </div>
  );
}
