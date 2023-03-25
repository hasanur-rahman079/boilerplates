import HeroSlide from "@/components/HeroSlide";
import NavMenu from "@/components/NavMenu";
import NextSeoJabet from "@/components/NextSeo";
import { client } from "@/lib/client";

export default function Home({ homeinfo, featured }) {
  return (
    <>
      <NextSeoJabet title="Home" />

      <>
        <HeroSlide info={featured} />
        <h1>This is homepage</h1>
      </>
    </>
  );
}

export async function getStaticProps() {
  const query = "*[_type == 'home']";
  const homeinfo = await client.fetch(query);
  // const queryFeatured =
  // "*[_type == 'featured'][0]{..., blogs[]->{title, slug, excerpt, coverImage}}";
  const queryFeatured =
    '*[_type == "featured"][0]{..., "blogs": blogs[]->{title, "slug": slug.current, excerpt, "image": coverImage.asset->url}}';

  // [_type == 'featured']{
  //   title,
  //   category[]->,
  //   blogs[]->{
  //     title,
  //     excerpt,
  //     mainImage
  //   }
  // }

  const featured = await client.fetch(queryFeatured);

  // console.log(featured);

  return {
    props: {
      homeinfo,
      featured,
    },
    revalidate: 5,
  };
}
