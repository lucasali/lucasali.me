import '~/styles/main.css'
import '~/styles/prose.css'
import '~/styles/markdown.css'

import { ViteSSG } from 'vite-ssg'
import App from './App.vue'
import routes from '~pages'

export const createApp = ViteSSG(App, { routes })
