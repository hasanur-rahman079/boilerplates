import {format} from 'date-fns'
import {SiEventstore} from 'react-icons/si'

export default {
  title: 'Events',
  name: 'event',
  type: 'document',
  icon: SiEventstore,
  fields: [
    {
      title: 'Title',
      name: 'title',
      type: 'string',
    },
    {
      title: 'Slug',
      name: 'slug',
      type: 'slug',
      validation: (Rule) => Rule.required(),
      options: {
        source: 'title',
        maxLength: 96,
      },
    },
    {
      title: 'Date',
      name: 'date',
      type: 'object',
      fields: [
        {
          title: 'Start Date',
          name: 'startDate',
          type: 'datetime',
        },
        {
          title: 'End Date',
          name: 'endDate',
          type: 'datetime',
        },
      ],
    },
    {
      title: 'Cover Image',
      name: 'coverImage',
      type: 'customImage',
    },
    {
      title: 'Excerpt',
      name: 'excerpt',
      type: 'normalText',
      description: 'A short description of the Event',
    },
    {
      title: 'Event Sections',
      name: 'sections',
      type: 'array',
      of: [
        {
          name: 'Section',
          type: 'object',
          fields: [
            {
              name: 'title',
              title: 'Section Title',
              type: 'string',
            },
            {
              name: 'body',
              title: 'Section Body',
              type: 'richText',
            },
          ],
        },
      ],
    },
    {
      title: 'Sponsors',
      name: 'sponsors',
      type: 'array',
      of: [
        {
          type: 'object',
          name: 'Sponsors Logo',
          fields: [
            {
              name: 'title',
              title: 'Title',
              type: 'string',
            },
            {
              title: 'Logo',
              name: 'logo',
              type: 'customImage',
            },
            {
              title: 'Website Link',
              name: 'url',
              type: 'url',
            },
          ],
        },
      ],
    },
    {
      title: 'Media Partners',
      name: 'mediaPartner',
      type: 'array',
      of: [
        {
          type: 'object',
          name: 'Media Partners',
          fields: [
            {
              name: 'title',
              title: 'Title',
              type: 'string',
            },
            {
              title: 'Logo',
              name: 'logo',
              type: 'customImage',
            },
            {
              title: 'Website Link',
              name: 'url',
              type: 'url',
            },
          ],
        },
      ],
    },
    {
      title: 'Downloads',
      name: 'downloads',
      type: 'array',
      of: [
        {
          type: 'object',
          name: 'Download Files',
          fields: [
            {
              name: 'btnText',
              title: 'Button Title',
              type: 'string',
            },
            {
              name: 'asset',
              title: 'Assets',
              type: 'file',
            },
          ],
        },
      ],
    },
    {
      title: 'Gallery',
      name: 'gallery',
      type: 'array',
      of: [
        {
          type: 'object',
          name: 'Gallery Images',
          fields: [
            {
              name: 'title',
              title: 'Title',
              type: 'string',
            },
            {
              title: 'Upload',
              name: 'image',
              type: 'customImage',
            },
          ],
        },
      ],
    },
  ],
  preview: {
    select: {
      image: 'coverImage',
      title: 'title',
      publishedAt: 'date.startDate',
    },
    prepare({image, title, publishedAt}) {
      return {
        title,
        media: image,
        subtitle: publishedAt ? format(new Date(publishedAt), 'p, dd/MM/yyy') : '',
      }
    },
  },
}
