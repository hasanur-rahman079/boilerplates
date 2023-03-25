import { NextSeo } from "next-seo";

export default function NextSeoJabet({ title }) {
  return (
    <NextSeo
      title={title}
      titleTemplate="%s | StemCIUB"
      defaultTitle="STEM Community, IUB"
      description="STEM Community, IUB (STEMcIUB) is an independent nonprofit initiative based in Independent University, Bangladesh (IUB) that connects & develops students who are passionate about science, technology, engineering, and mathematics (STEM)."
      //   canonical="https://www.hasanur.me/"
      openGraph={{
        title: `${title} | JABET`,
        description:
          "STEM Community, IUB (STEMcIUB) is an independent nonprofit initiative based in Independent University, Bangladesh (IUB) that connects & develops students who are passionate about science, technology, engineering, and mathematics (STEM).",
        url: "https://www.exomeit.com",
        siteName: "STEM Community, IUB",
        // images: [
        //   {
        //     url: "https://hasanur-me-v2.vercel.app/og.jpg",
        //     width: 1920,
        //     height: 1080,
        //   },
        //   {
        //     url: "https://hasanur-me-v2.vercel.app/og.jpg",
        //     width: 1920,
        //     height: 1080,
        //   },
        // ],
        locale: "en-US",
        type: "website",
      }}
      twitter={{
        handle: "@handle",
        site: "@exomeit",
        cardType: "summary_large_image",
      }}
      additionalLinkTags={[
        {
          rel: "icon",
          href: "/favicon.ico",
        },
      ]}
    />
  );
}
