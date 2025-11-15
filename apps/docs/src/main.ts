// apps/docs/src/main.ts

import App from './App.svelte'
import { mount } from 'svelte' // 1. Import 'mount'

const app = mount(App, { // 2. Change 'new' to 'mount'
  target: document.getElementById('app')!,
})

export default app