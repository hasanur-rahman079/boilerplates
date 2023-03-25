import {HiOutlineMailOpen} from 'react-icons/hi'

export default {
  name: 'contact',
  title: 'Contact',
  type: 'document',
  icon: HiOutlineMailOpen,
  fields: [
    {
      title: 'Page Title',
      name: 'pageTitle',
      type: 'string',
    },
    {
      name: 'title',
      title: 'Social Title',
      type: 'array',
      of: [
        {
          name: 'Contacts',
          type: 'object',

          fields: [
            {
              name: 'title',
              title: 'Title',
              type: 'string',
            },
            {
              title: 'Link',
              name: 'urlLink',
              type: 'string',
            },
          ],
        },
      ],
    },
  ],
}
