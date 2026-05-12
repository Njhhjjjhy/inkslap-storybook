/**
 * Inkslap brand — Storybook UI theme.
 * Values extracted from https://inkslap.com.
 */
import { create } from 'storybook/theming';

export default create({
  base: 'light',

  brandTitle: 'Inkslap brand',
  brandUrl: 'https://inkslap.com',
  brandTarget: '_blank',

  colorPrimary: '#0099DE',
  colorSecondary: '#FFA81B',

  appBg: '#FFFFFF',
  appContentBg: '#FFFFFF',
  appPreviewBg: '#FFFFFF',
  appBorderColor: '#E3E3E3',
  appBorderRadius: 8,

  textColor: '#040404',
  textInverseColor: '#FFFFFF',
  textMutedColor: '#6C6C6C',

  barTextColor: '#6C6C6C',
  barSelectedColor: '#0099DE',
  barHoverColor: '#0099DE',
  barBg: '#FFFFFF',

  buttonBg: '#0099DE',
  buttonBorder: '#0099DE',

  inputBg: '#F3F3F3',
  inputBorder: '#E3E3E3',
  inputTextColor: '#040404',
  inputBorderRadius: 8,

  fontBase: '"Inter", "Noto Sans TC", system-ui, -apple-system, sans-serif',
  fontCode: 'ui-monospace, SFMono-Regular, "SF Mono", Menlo, Consolas, monospace',
});
