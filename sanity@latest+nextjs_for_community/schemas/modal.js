import {HiOutlineFilm} from 'react-icons/hi'

export default {
  name: 'modal',
  title: 'Media & Workshops',
  type: 'document',
  icon: HiOutlineFilm,
  fields: [
    {
      title: 'Select Type',
      name: 'type',
      type: 'object',
      validation: (Rule) => Rule.required(),
      fields: [
        {
          title: 'Media',
          name: 'media',
          type: 'boolean',
          hidden: ({parent, value}) => !value && parent?.workshop,
        },
        {
          title: 'Workshop',
          name: 'workshop',
          type: 'boolean',
          hidden: ({parent, value}) => !value && parent?.media,
        },
      ],
    },

    {
      title: 'Cover Image',
      name: 'coverImage',
      type: 'customImage',
    },
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    {
      name: 'about',
      title: 'Description',
      type: 'richText',
      description: 'A short description of the media/workshop post',
    },
    {
      name: 'ulink',
      title: 'YouTubeURL for the Media',
      type: 'url',
      hidden: ({parent}) => !parent?.type?.media || parent?.type?.workshop,
    },
  ],

  preview: {
    select: {
      image: 'coverImage',
      title: 'title',
      media: 'type.media',
      workshop: 'type.workshop',
    },
    prepare({image, title, media, workshop}) {
      const subtitle = media ? 'Media' : workshop ? 'Workshop' : ''

      return {
        title,
        media: image,
        subtitle,
      }
    },
  },
}
