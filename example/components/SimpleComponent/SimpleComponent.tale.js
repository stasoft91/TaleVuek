import { text } from 'talevuek/lib/knobs/knobs'
import SimpleComponent from './index.vue'

export default {
  title: 'SimpleComponent',
  component: SimpleComponent,
  category: 'Simples',
  knobs: {
    title: text('default'),
    deep: {
      deepParam: text('deepDefault'),
      deepParam2: text('deepDefault2')
    }
  }
}
