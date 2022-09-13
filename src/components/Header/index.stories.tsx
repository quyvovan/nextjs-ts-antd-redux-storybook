import React from 'react'
import Header from './index'

// jest.mock('./NavMenu', () => 'NavMenu')

export default {
  title: 'Example/Header',
  component: Header,
}

const Template = () => (
  <Header
    menuItems={[
      {
        key: '/',
        title: '主页',
        desc: '项目主页面',
        pathname: '/',
      },
      {
        key: '/user',
        title: '用户页',
        desc: '用户信息',
        pathname: '/user',
      },
      {
        key: '/articles',
        title: '文章列表页',
        desc: '文章列表来展示请求数据',
        pathname: '/articles',
      },
    ]}
  />
)

export const Default = Template.bind({})
