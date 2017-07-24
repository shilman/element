/* eslint-disable import/no-extraneous-dependencies, import/no-unresolved, import/extensions */

import { storiesOf } from '@storybook/vue';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import MyButton from './MyButton.vue';
import Welcome from './Welcome.vue';

storiesOf('Welcome', module).add('to Storybook', () => ({
  components: { Welcome },
  template: '<welcome :showApp="action" />',
  methods: { action: linkTo('Button') }
}));

storiesOf('element/Alert', module)
  .add('success', () => ({ template: '<el-alert title="success alert" type="success" />' }))
  .add('info', () => ({ template: '<el-alert title="info alert" type="info" />' }))
  .add('warning', () => ({ template: '<el-alert title="warning alert" type="warning" />' }))
  .add('failure', () => ({ template: '<el-alert title="failure alert" type="failure" />' }));

storiesOf('element/Badge', module)
  .add('comments', () => ({ template: `
    <el-badge :value="200" :max="99" class="item">
      <el-button size="small">comments</el-button>
    </el-badge>
  ` }))
  .add('replies', () => ({ template: `
    <el-badge :value="8" :max="10" class="item">
      <el-button size="small">replies</el-button>
    </el-badge>
  ` }));

storiesOf('Button', module)
  .add('with text', () => ({
    components: { MyButton },
    template: '<my-button @click="action">Hello Button</my-button>',
    methods: { action: action('clicked') }
  }))
  .add('with some emoji', () => ({
    components: { MyButton },
    template: '<my-button @click="action">😀 😎 👍 💯</my-button>',
    methods: { action: action('clicked') }
  }));
