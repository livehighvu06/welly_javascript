// 1. JavaScript: 字串反轉
function reverseString(str) {
  return str.split("").reverse().join("");
}
console.log("1. JavaScript: 字串反轉");
console.log(reverseString("Hello"));

// 2. JavaScript: 陣列過濾
// 問題：寫一個JavaScript函式，接受一個數字陣列，並返回該陣列中所有大於5的數字。

function filterNumbersGreaterThanFive(numbers) {
  // 實作你的解答
  return numbers.filter((num) => num > 5);
}

const numbers = [2, 8, 4, 10, 1, 7];
console.log("2. JavaScript: 陣列過濾");
console.log(filterNumbersGreaterThanFive(numbers));

// 3. JavaScript: 重構
// 問題：重構這段程式碼並說明原因

function formatName(firstName, lastName) {
  // 使用template literals來簡化寫法，並使用trim()來處理純空格的情況。
  // 姓氏與名字之間的空格，則用三元運算子來判斷，有名字時再加空格
  return `${firstName.trim()}${firstName.trim() ? " " : ""}${lastName.trim()}`;
}
console.log("3. JavaScript: 重構");
console.log(formatName("   ", "Chen"));
console.log(formatName("Eddie", "Chen"));
console.log(formatName("Eddie    ", "Chen"));
console.log(formatName("Eddie    ", "   "));
