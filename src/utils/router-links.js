const Util = (name, type) => {
  const array = {
    Login: "/auth/login",
    Dashboard: "/",
    User: "/user",
    Product: '/product'
  }; // 💬 generate link to here

  const apis = {
    Dashboard: "/dashboard",
    User: "/user",
    Product: "/product"
  }; // 💬 generate api to here

  switch (type) {
    case "api":
      return apis[name];
    default:
      return array[name];
  }
};
export default Util;
