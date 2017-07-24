import { configure } from '@storybook/vue'

import Vue from 'vue';
import Element from '../lib/index.js';
import '../lib/theme-default/index.css';
Vue.use(Element);

function loadStories() {
  require('../src/stories')
}

configure(loadStories, module)
