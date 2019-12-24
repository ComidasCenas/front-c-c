import { configure } from '@storybook/angular';
import '@storybook/addon-console';

configure(require.context('../src', true, /\.stories\.[tj]s$/), module);