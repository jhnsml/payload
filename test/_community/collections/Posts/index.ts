import { CollectionConfig } from '../../../../src/collections/config/types';
import QuoteBlock from '../../blocks/QuoteBlock';
import { mediaSlug } from '../Media';

export const postsSlug = 'posts';

export const PostsCollection: CollectionConfig = {
  slug: postsSlug,
  fields: [
    {
      name: 'text',
      type: 'text',
      access: {
        read: () => true,
        create: () => false,
        update: () => false,
      },
    },
    {
      name: 'components',
      type: 'blocks',
      blocks: [
        QuoteBlock,
      ],
    },
    {
      name: 'associatedMedia',
      type: 'upload',
      relationTo: mediaSlug,
      access: {
        create: () => true,
        update: () => false,
      },
    },
  ],
};
