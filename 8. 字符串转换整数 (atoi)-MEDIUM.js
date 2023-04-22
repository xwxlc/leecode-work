// https://leetcode.cn/problems/string-to-integer-atoi/

/**
 * @param {string} s
 * @return {number}
 */
const paramS = process.argv[2] ? String(process.argv[2]) : '42';

/**
 * 利用 parseInt
 */
var myAtoi = function (s) {
  const max = 2 ** 31 - 1;
  const min = -(2 ** 31);
  const res = parseInt(s, 10);
  if (res > max) {
    return max;
  } else if (res < min) {
    return min;
  } else {
    return res ? res : 0;
  }
};

console.log(myAtoi(paramS));

/**
 * 官方 自动机 思路
 */
class Automaton {
  constructor() {
    this.state = 'start';
    // 执行阶段，默认处于开始执行阶段
    this.state = 'start';
    // 正负符号，默认是正数
    this.sign = 1;
    // 数值，默认是0
    this.answer = 0;
    /*
      关键点：
      状态和执行阶段的对应表
      含义如下：
      [执行阶段, [空格, 正负, 数值, 其他]]
      */
    this.map = new Map([
      ['start', ['start', 'signed', 'in_number', 'end']],
      ['signed', ['end', 'end', 'in_number', 'end']],
      ['in_number', ['end', 'end', 'in_number', 'end']],
      ['end', ['end', 'end', 'end', 'end']]
    ]);
  }
  // 获取状态的索引
  getIndex(char) {
    if (char === ' ') {
      // 空格判断
      return 0;
    } else if (char === '-' || char === '+') {
      // 正负判断
      return 1;
    } else if (typeof Number(char) === 'number' && !isNaN(char)) {
      // 数值判断
      return 2;
    } else {
      // 其他情况
      return 3;
    }
  }
  /*
    关键点：
    字符转换执行函数
    */
  get(char) {
    this.state = this.map.get(this.state)[this.getIndex(char)];
    if (this.state === 'in_number') {
      this.answer = this.answer * 10 + (char - 0);
      this.answer =
        this.sign === 1
          ? Math.min(this.answer, Math.pow(2, 31) - 1)
          : Math.min(this.answer, -Math.pow(-2, 31));
    } else if (this.state === 'signed') {
      this.sign = char === '+' ? 1 : -1;
    }
  }
}
var myAtoi = function (s) {
  let automaton = new Automaton();
  // 遍历每个字符
  for (let char of str) {
    // 依次进行转换
    automaton.get(char);
  }

  // 返回值，整数 = 正负 * 数值
  return automaton.sign * automaton.answer;
};

console.log(myAtoi(paramS));
