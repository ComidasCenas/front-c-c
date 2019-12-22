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
     width: 100%;
     display: flex;
     justify-content: flex-end;
    "
    >
      <div style="
        margin-left: auto;
        display: flex;
        align-items: center;
        width: 186px;
        background-color: #AE0F10;
        margin: 0px;
        padding: 0px 18px 0px 11px;
      ">
        <cc-drop-down-option
        [optionConfig]="defaultOption"
        [last]="true"
        style="width: 100%;"
        (optionSelected)="onOptionSelected($event)"
        ></cc-drop-down-option>
      </div>
    </div>
  `,
  props: {
    defaultOption: defaultOption,
    onOptionSelected: actions.onOptionSelected
  }
}))
.add('subMenu', () => ({
  template: `
  <div style="
  width: 100%;
  display: flex;
  justify-content: flex-end;
 "
 >
   <div style="
     margin-left: auto;
     display: flex;
     align-items: center;
     width: 186px;
     background-color: #AE0F10;
     margin: 0px;
     padding: 0px 18px 0px 11px;
   ">
     <cc-drop-down-option
     [optionConfig]="defaultOption"
     [last]="true"
     style="width: 100%;"
     (optionSelected)="onOptionSelected($event)"
     ></cc-drop-down-option>
   </div>
 </div>
  `,
  props: {
    defaultOption: {
      ...defaultOption,
      subMenu: [{
        text: 'Option 11',
        icon: '../assets/images/cross-menu-icon.png',
        event: 'option11'
      }, {
        text: 'Option 12',
        icon: 'assets/images/lens-menu-icon.png',
        event: 'option12'
      }]
    },
    onOptionSelected: actions.onOptionSelected
  }
}))