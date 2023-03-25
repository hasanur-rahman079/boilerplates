export default {
  name: 'home',
  title: 'Home',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'About Section Title',
      type: 'string',
    },
    {
      name: 'about',
      title: 'About Section Content',
      type: 'array',
      of: [
        {
          type: 'block',
        },
      ],
    },
    {
      name: 'ulink',
      title: 'YouTubeURL',
      type: 'string',
    },
    {
      name: 'joinTitle',
      title: 'Join Section Title',
      type: 'string',
    },
    {
      name: 'joinAbout',
      title: 'Join Section Content',
      type: 'array',
      of: [
        {
          type: 'block',
        },
      ],
    },
    {
      name: 'formLink',
      title: 'Google Form Link',
      type: 'string',
    },
  ],
}
