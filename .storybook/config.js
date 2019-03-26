import { configure, addParameters } from '@storybook/react'
import { addDecorator } from '@storybook/react'
import requireContext from 'require-context.macro'
import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport'

import "../src/styles/global.css"
 
const newViewports = {
  kindleFire2: {
    name: 'Kindle Fire 2',
    styles: {
      width: '600px',
      height: '963px'
    }
  },
  kindleFireHD: {
    name: 'Kindle Fire HD',
    styles: {
      width: '533px',
      height: '801px'
    }
  }
}

addParameters({
  viewport: {
    defaultViewport: 'iphone6',
    viewports: {
      ...INITIAL_VIEWPORTS,
      ...newViewports
    }
  }
})

const req = requireContext('../src/components', true, /\.stories\.js$/)

function loadStories() {
  req.keys().forEach(filename => req(filename))
}

configure(loadStories, module)
