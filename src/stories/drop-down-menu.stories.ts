import { storiesOf, moduleMetadata } from '@storybook/angular';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { ComponentsModule, MenuConfig } from '../components';
import { action } from '@storybook/addon-actions';

const defaultOption: MenuConfig = {
  icon: 'assets/images/menu.png',
  options: [
    {
      text: 'Option 1',
      icon: 'assets/images/chicken-menu-icon.png',
      event: 'option1',
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
    {
      text: 'Option 2',
      icon: 'assets/images/menu-menu-icon.png',
      event: 'option2',
      subMenu: [{
        text: 'Option 21',
        icon: 'assets/images/cross-menu-icon.png',
        event: 'option21'
      }, {
        text: 'Option 22',
        icon: 'assets/images/lens-menu-icon.png',
        event: 'option22'
      }]
    },
    {
      text: 'Option 3',
      icon: 'assets/images/trolley-menu-icon.png',
      event: 'option3',
      subMenu: [{
        text: 'Option 31',
        icon: 'assets/images/cross-menu-icon.png',
        event: 'option31'
      }, {
        text: 'Option 32',
        icon: 'assets/images/lens-menu-icon.png',
        event: 'option32'
      }]
    },
    {
      text: 'Option 4',
      icon: '../assets/images/config-menu-icon.png',
      event: 'option4'
    }
  ]
}

const actions = {
  onOptionSelected: action('onOptionSelected')
}

storiesOf('Menu drop down', module)
.addDecorator(
  moduleMetadata({
    imports: [ CommonModule, ComponentsModule, BrowserAnimationsModule ]
  })
)
.add('default', () => ({
  template: `
    <div style="display: flex; justify-content: flex-end">
      <cc-drop-down-menu
      [config]="defaultOption"
      [menuPosX]="1240"
      [menuPosY]="28"
      (optionSelected)="onOptionSelected($event)"
      ></cc-drop-down-menu>
    </div>
  `,
  props: {
    defaultOption: defaultOption,
    onOptionSelected: actions.onOptionSelected
  }
}))

