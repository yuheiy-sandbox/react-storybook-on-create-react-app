import React from 'react';
import { storiesOf, action, linkTo } from '@kadira/storybook';
import Button from '../components/Button'
import '../index.css'

storiesOf('Button', module)
  .add('with text', () => {
    return <Button className="Button" onClick={action('event from storybook')}>Button Text</Button>
  })
