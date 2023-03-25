import {HiOutlineUserAdd} from 'react-icons/hi'
import {orderRankField, orderRankOrdering} from '@sanity/orderable-document-list'

export default {
  name: 'team',
  title: 'Team',
  type: 'document',
  icon: HiOutlineUserAdd,
  orderings: [orderRankOrdering],
  fields: [
    {
      title: 'Name',
      name: 'name',
      type: 'string',
    },
    {
      title: 'Designation',
      name: 'designation',
      type: 'string',
    },
    {
      title: 'Bio',
      name: 'bio',
      type: 'normalText',
    },
    {
      title: 'Skills',
      name: 'skills',
      type: 'string',
      description: 'Comma Separated',
    },
    {
      title: 'Interests',
      name: 'interests',
      type: 'string',
      description: 'Comma Separated',
    },
    {
      title: 'Education',
      name: 'education',
      type: 'array',
      of: [
        {
          name: 'Education',
          type: 'object',
          fields: [
            {
              title: 'Institute',
              name: 'institute',
              type: 'string',
            },
            {
              title: 'Department',
              name: 'department',
              type: 'string',
            },
            {
              title: 'Session',
              name: 'session',
              type: 'number',
            },
          ],
        },
      ],
    },
    {
      title: 'Achievements',
      name: 'achievements',
      type: 'array',
      of: [
        {
          name: 'Achievement',
          type: 'object',
          fields: [
            {
              title: 'Title',
              name: 'title',
              type: 'string',
            },
          ],
        },
      ],
    },
    {
      title: 'Photo',
      name: 'photo',
      type: 'customImage',
    },
    {
      title: 'Upload Resume',
      name: 'resume',
      type: 'file',
    },
    {
      title: 'Facebook URL',
      name: 'fburl',
      type: 'url',
    },
    {
      title: 'Whatsapp URL',
      name: 'wpurl',
      type: 'url',
    },
    {
      title: 'LinkedIn URL',
      name: 'ldurl',
      type: 'url',
    },
    {
      title: 'Twitter URL',
      name: 'twturl',
      type: 'url',
    },
    {
      title: 'Email',
      name: 'email',
      type: 'string',
    },
    orderRankField({type: 'team'}),
  ],
  preview: {
    select: {
      image: 'photo',
      title: 'name',
      designation: 'designation',
    },
    prepare({image, title, designation}) {
      return {
        title,
        media: image,
        subtitle: designation,
      }
    },
  },
}
