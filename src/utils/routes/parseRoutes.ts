import { RouteRecordRaw } from "vue-router";

function hasPermission(route: RouteRecordRaw, role: number) {
  const meta = route.meta as any;
  if (meta && meta.roles) {
    if (meta.roles[0] === -1) {
      if (meta.roles[1] >= role) {
        return true;
      } else {
        return false;
      }
    } else {
      if ((meta.roles as number[]).includes(role)) {
        return true;
      } else {
        return false;
      }
    }
  } else {
    return true;
  }
}

export function filterAsyncRoutes(asyncRoutes: RouteRecordRaw[], role: number) {
  const res = [];

  for (let route of asyncRoutes) {
    //防止原route对象被修改
    const temp = { ...route };
    if (hasPermission(temp, role)) {
      if (temp.children) {
        temp.children = filterAsyncRoutes(temp.children, role);
      }
      res.push(temp);
    }
  }
  return res;
}
