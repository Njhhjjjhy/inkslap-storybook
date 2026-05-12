import '../src/styles/global.css';
import inkslapTheme from './inkslapTheme';

/** @type { import('@storybook/react-vite').Preview } */
const preview = {
  parameters: {
    docs: {
      theme: inkslapTheme,
    },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    backgrounds: {
      default: 'white',
      values: [
        { name: 'white', value: '#FFFFFF' },
        { name: 'brand-blue', value: '#0099DE' },
        { name: 'navy-deep', value: '#111A2D' },
        { name: 'subtle', value: '#F3F3F3' },
      ],
    },
    a11y: {
      test: 'todo',
    },
    options: {
      storySort: {
        order: [
          'Introduction',
          'Foundations',
          [
            'Logo',
            'Color',
            'Typography',
            'Spacing',
            'Shadows',
            'Iconography',
            'Imagery',
            'Motion',
          ],
          'Guidelines',
          [
            'Brand Principles',
            'Voice & Tone',
            'Writing Style',
            'Bilingual',
            'Accessibility',
          ],
          'Components',
          ['Buttons', 'Cards', 'Forms', 'Navigation', 'Modals'],
          'Audit',
          ['Findings'],
        ],
      },
    },
  },
};

export default preview;
