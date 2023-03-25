import {HiOutlineSparkles} from 'react-icons/hi'
import {orderRankField, orderRankOrdering} from '@sanity/orderable-document-list'

export default {
  name: 'spectrum',
  title: 'Spectrum',
  type: 'document',
  icon: HiOutlineSparkles,
  orderings: [orderRankOrdering],
  fields: [
    {
      title: 'Issue Title',
      name: 'isTitle',
      type: 'string',
    },
    {
      title: 'Volume',
      name: 'volume',
      type: 'string',
    },
    {
      title: 'Publish Date',
      name: 'date',
      type: 'date',
    },
    {
      title: 'Cover Image',
      name: 'coverImage',
      type: 'customImage',
    },
    {
      title: 'Short Description',
      name: 'excerpt',
      type: 'normalText',
      description: 'A short description of the release',
    },
    {
      title: 'Upload PDF',
      name: 'issuePdf',
      type: 'file',
    },
    orderRankField({type: 'team'}),
  ],
  preview: {
    select: {
      image: 'coverImage',
      title: 'isTitle',
      subtitle: 'date',
    },
    prepare({image, title, subtitle}) {
      return {
        title,
        media: image,
        subtitle: subtitle,
      }
    },
  },
}
