import { text } from 'talevuek/lib/knobs/knobs'
import ComplicatedComponent from './index.vue'

export default {
  title: 'ComplicatedComponent',
  component: ComplicatedComponent,
  category: 'Complicates',
  knobs: {
    title1: text('title1'),
    title2: text('title2'),
    title3: text('title3')
  }
}
