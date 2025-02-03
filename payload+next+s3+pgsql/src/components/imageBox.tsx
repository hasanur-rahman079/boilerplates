import { Media } from "@/payload-types";
import Image from "next/image";

interface ImageBoxProps {
  media: Media;
  fill?: boolean;
  sizes?: string;
  className?: string;
  alt?: string;
}

export const ImageBox: React.FC<ImageBoxProps> = (props) => {
  const { media, fill, className, sizes, alt } = props;

  const { width: imageWidth, height: imageHeight } = media;

  const width = imageWidth ?? undefined;
  const height = imageHeight ?? undefined;

  const objectPosition =
    media.focalX != null && media.focalY != null
      ? `${media.focalX}% ${media.focalY}%`
      : "center";

  return (
    <Image
      src={`${media.url!}?${media.updatedAt}`}
      alt={alt!}
      quality={95}
      fill={fill}
      width={!fill ? width : undefined}
      height={!fill ? height : undefined}
      className={className}
      sizes={sizes}
      style={{
        objectFit: "cover",
        objectPosition,
      }}
      placeholder={media.blurhash ? "blur" : "empty"}
      blurDataURL={media.blurhash || undefined}
    />
  );
};
