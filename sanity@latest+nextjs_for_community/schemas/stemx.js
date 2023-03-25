import {orderRankField, orderRankOrdering} from '@sanity/orderable-document-list'
import {HiOutlineLightBulb} from 'react-icons/hi'

export default {
  name: 'stemx',
  title: 'STEMx',
  type: 'document',
  icon: HiOutlineLightBulb,
  orderings: [orderRankOrdering],
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    {
      name: 'des',
      title: 'Description',
      type: 'richText',
      description: 'A short description of the media/workshop post',
    },
    {
      name: 'ulink',
      title: 'YouTubeURL',
      type: 'url',
    },
    orderRankField({type: 'stemx'}),
  ],

  preview: {
    select: {
      title: 'title',
    },
    prepare({title}) {
      return {
        title,
      }
    },
  },
}
