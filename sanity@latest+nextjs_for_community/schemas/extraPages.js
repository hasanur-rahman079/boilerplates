import {HiDocumentText} from 'react-icons/hi'
import {orderRankField, orderRankOrdering} from '@sanity/orderable-document-list'

export default {
  name: 'extraPages',
  title: 'Extra Pages',
  type: 'document',
  icon: HiDocumentText,
  orderings: [orderRankOrdering],
  fields: [
    {
      title: 'Page Title',
      name: 'title',
      type: 'string',
    },
    {
      title: 'Page Slug',
      name: 'slug',
      type: 'slug',
      validation: (Rule) => Rule.required(),
      options: {
        source: 'title',
        maxLength: 96,
      },
    },
    {
      title: 'Page Content',
      name: 'content',
      type: 'richText',
    },

    orderRankField({type: 'team'}),
  ],
}
