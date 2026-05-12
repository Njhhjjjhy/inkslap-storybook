import { addons } from 'storybook/manager-api';
import inkslapTheme from './inkslapTheme';

addons.setConfig({
  theme: inkslapTheme,
  sidebar: {
    showRoots: true,
  },
});
