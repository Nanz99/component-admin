const Layout = () => [
  {
    icon: 'las la-chart-area',
    name: 'Dashboard',
  },
  {
    icon: 'las la-user-circle',
    name: 'User',
  },
  {
    icon: 'lab la-product-hunt',
    name: 'Product',
  },
  {
    icon: 'las la-user-plus',
    name: 'User 1',
    child: [
      {
        icon: 'las la-user-plus',
        name: 'User 2'
      },
      {
        icon: 'las la-user-plus',
        name: 'User 3'
      },
      {
        icon: 'las la-user-plus',
        name: 'User 4'
      },
    ]
  }
];
export default Layout;
