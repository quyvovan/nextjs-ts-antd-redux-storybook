import React, { FC } from 'react'
import styled from 'styled-components'
import NavMenu from './NavMenu'
import { IMenuItem } from './types'

interface IProps {
  menuItems: IMenuItem[]
}

const HeaderWrapper = styled.header`
  padding: 0 15px;
`

const Header: FC<IProps> = ({ menuItems }) => (
  <HeaderWrapper>
    <NavMenu
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
  </HeaderWrapper>
)

export default Header
