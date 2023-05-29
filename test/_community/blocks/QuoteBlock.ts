import { Block } from '../../../src/fields/config/types';

const QuoteBlock: Block = {
  slug: 'Quote', // required
  imageURL: 'https://google.com/path/to/image.jpg',
  imageAltText: 'A nice thumbnail image to show what this block looks like',
  fields: [ // required
    {
      name: 'quoteHeader',
      type: 'text',
      required: true,
    },
    {
      name: 'quoteText',
      type: 'text',
      access: {
        create: () => true,
        update: () => false,
      },
    },
  ],
};
export default QuoteBlock;
