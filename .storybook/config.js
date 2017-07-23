import { configure } from '@storybook/vue'

import Vue from 'vue';
import Element from '../src/index.js';
import '../packages/theme-default/src/index.css';
Vue.use(Element);

function loadStories() {
  require('../src/stories')
}

configure(loadStories, module)
