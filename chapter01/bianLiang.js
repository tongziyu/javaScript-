// 使用let来声明变量
let a = "String";

let i = 10;

// let a = 19;
console.log(a)

// 接收用户名，并打印到控制台
let username = prompt("请输入用户名")
console.log("用户名为: " + username);


// 交换变量的值
let x = prompt("请输入第一个变量")
let y = prompt("请输入第二个变量")
let t;

t = x;
x = y;
y = t;

alert("第一个变量值:" + x)
alert("第二个变量:" + y)