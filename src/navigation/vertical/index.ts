// ** Icon imports
import HomeOutline from 'mdi-material-ui/HomeOutline'
import AccountCogOutline from 'mdi-material-ui/AccountCogOutline'

// ** Type import
import { VerticalNavItemsType } from 'src/layouts/types'

const navigation = (): VerticalNavItemsType => [
  {
    title: 'Dashboard',
    icon: HomeOutline,
    path: '/',
  },
  {
    title: 'Account Settings',
    icon: AccountCogOutline,
    path: '/Account',
  },
]

export default navigation
