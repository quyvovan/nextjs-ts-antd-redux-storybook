import React from 'react'
import Article from './index'

export default {
  title: 'Example/Article',
  component: Article,
}

const Template = () => (
  <Article
    articles={[
      {
        id: 1,
        title: 'Ken',
        body: 'string',
        userId: 12,
      },
    ]}
  />
)
export const Default = Template.bind({})
