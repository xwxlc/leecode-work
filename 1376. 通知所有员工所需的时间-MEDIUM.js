// https://leetcode.cn/problems/time-needed-to-inform-all-employees/

/**
 * @param {number} n
 * @param {number} headID
 * @param {number[]} manager
 * @param {number[]} informTime
 * @return {number}
 */
const paramN = 1; //员工数
const paramHeadID = 0; //总负责人
const paramManager = [-1]; //负责人
const paramInformTime = []; //通知耗时

/**
 * DFS 深度优先算法
 *
 */
var numOfMinutes = function (n, headID, manager, informTime) {
  let map = new Map();
  // 初始化哈希表 下级关系
  for (let i = 0; i < n; i++) {
    const _manager = manager[i];
    if (!map.has(_manager)) {
      map.set(_manager, []);
    }
    map.get(_manager).push(i);
  }
  const dfs = (headID, informTime, map) => {
    let res = 0;
    const subordinate = map.get(headID) || [];
    for (const user of subordinate) {
      res = Math.max(res, dfs(user, informTime, map));
    }
    return informTime[headID] + res;
  };
  return dfs(headID, informTime, map);
};

console.log(numOfMinutes(paramN, paramHeadID, paramManager, paramInformTime));

/**
 * BFS 广度优先算法
 */
var numOfMinutes = function (n, headID, manager, informTime) {
  let map = new Map();
  // 初始化哈希表 下级关系
  for (let i = 0; i < n; i++) {
    const _manager = manager[i];
    if (!map.has(_manager)) {
      map.set(_manager, []);
    }
    map.get(_manager).push(i);
  }
  // 初始化队列 [[用户, 时间]]
  const queue = [[headID, 0]];
  let res = 0;
  while (queue.length) {
    const [user, time] = queue.shift();
    // 但没有下属时 更新结果
    if (!map.has(user)) {
      res = Math.max(res, time);
    } else {
      // 把每个下属更新到列表
      for (const key of map.get(user)) {
        queue.push([key, time + informTime[user]]);
      }
    }
  }
  return res;
};

console.log(numOfMinutes(paramN, paramHeadID, paramManager, paramInformTime));

/**
 * 记忆化搜索
 */
var numOfMinutes = function (n, headID, manager, informTime) {
  let map = new Map();
  let res = 0;
  const dfs = (cur) => {
    if (cur == headID) {
      return 0;
    }
    if (!map.has(cur)) {
      const res = dfs(manager[cur]) + informTime[manager[cur]];
      map.set(cur, res);
    }
    return map.get(cur);
  };
  for (let i = 0; i < n; i++) {
    res = Math.max(res, dfs(i));
  }
  return res;
};

console.log(numOfMinutes(paramN, paramHeadID, paramManager, paramInformTime));
