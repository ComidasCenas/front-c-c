import { storiesOf, moduleMetadata } from '@storybook/angular';

import { ComponentsModule } from '../components';

storiesOf('Menu drop down', module)
.addDecorator(
  moduleMetadata({
    imports: [ ComponentsModule ]
  })
)
.add('default', () => ({
  template: `
    <div style="display: flex; justify-content: flex-end">
      <cc-drop-down-menu></cc-drop-down-menu>
    </div>
  `,
  props: {}
}))

