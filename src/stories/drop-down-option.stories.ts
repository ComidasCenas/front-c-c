import { storiesOf, moduleMetadata } from '@storybook/angular';
import { action } from '@storybook/addon-actions';

import { ComponentsModule, Option } from '../components';


const defaultOption: Option = {
  text: 'Option 1',
  icon: 'assets/images/chicken-menu-icon.png',
  event: 'option1'
}

const actions = {
  onOptionSelected: action('onOptionSelected')
}

storiesOf('Option drop down', module)
.addDecorator(
  moduleMetadata({
    imports: [ ComponentsModule ]
  })
)
.add('default', () => ({
  template: `
    <div style="
      display: flex;
      justify-content: flex-end;
      align-items: center;
      width: 186px;
      height: 40px;
      background-color: #AE0F10;
      margin: 0px;
      padding: 0px 18px 0px 11px;
    ">
    <cc-drop-down-option
    [optionConfig]="defaultOption"
    style="width: 100%;"
    (optionSelected)="onOptionSelected($event)"
    ></cc-drop-down-option>
    </div>
  `,
  props: {
    defaultOption: defaultOption,
    onOptionSelected: actions.onOptionSelected
  }
}))