// Функция должна найти максимальное число в не зависимости от типа аргумента
const getMaxNumber = (...args) => {
  if (!isNaN(args[0])) {
    console.log(Math.max(...args));
  }
  if (Array.isArray(args[0])) { 
    console.log( Math.max(...args[0]));
  }
  if (typeof args[0] === 'object') {
    console.log(Math.max(...Object.values(args[0])));
  }
}
getMaxNumber(1,2,3,4,5,7,8,9,56,-3)
getMaxNumber([1,2,3,4,57,8,9,56,-3])
getMaxNumber({a: 1, b: 2, c: 3, f: 6, d: 44, w:22, r:-1,}) 

