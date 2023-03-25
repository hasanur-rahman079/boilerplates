// ./deskStructure.js

import {AiOutlineHome} from 'react-icons/ai'
import {MdStar} from 'react-icons/md'
import {
  HiOutlineMailOpen,
  HiOutlineUserAdd,
  HiOutlineLightBulb,
  HiOutlineSparkles,
  HiDocumentText,
} from 'react-icons/hi'
import {orderableDocumentListDeskItem} from '@sanity/orderable-document-list'

export const myStructure = (S, context) =>
  S.list()
    .title('stemcIUB')
    .items([
      S.listItem()
        .title('Home')
        .icon(AiOutlineHome)
        .child(S.document().schemaType('home').documentId('home')),

      S.listItem()
        .title('Featured')
        // .id('featuredItems')
        .icon(MdStar)
        .child(S.document().schemaType('featured').documentId('featured')),

      S.listItem()
        .title('Contact')
        .icon(HiOutlineMailOpen)
        .child(S.document().schemaType('contact').documentId('contact')),

      // orderable document list
      orderableDocumentListDeskItem({
        type: 'team',
        title: 'Team',
        icon: HiOutlineUserAdd,
        S,
        context,
      }),

      orderableDocumentListDeskItem({
        type: 'stemx',
        title: 'STEMx',
        icon: HiOutlineLightBulb,
        S,
        context,
      }),

      orderableDocumentListDeskItem({
        type: 'spectrum',
        title: 'Spectrum',
        icon: HiOutlineSparkles,
        S,
        context,
      }),

      orderableDocumentListDeskItem({
        type: 'extraPages',
        title: 'Extra Pages',
        icon: HiDocumentText,
        S,
        context,
      }),

      // filter duplication
      ...S.documentTypeListItems().filter(
        (listItem) =>
          !['home', 'featured', 'contact', 'team', 'stemx', 'spectrum', 'extraPages'].includes(
            listItem.getId()
          )
      ),
    ])
