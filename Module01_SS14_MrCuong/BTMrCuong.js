//BAI 1 Viết chương trình khai báo 1 mảng số nguyên gồm các phần tử bất kỳ, tìm ra
// phần tử lớn nhất và nhỏ nhất trong mảng và in ra màn hình console.

// let a = [9, 2, 3, 4, 5, 6, 7, 8];
// let max = a[0];
// let min = a[0];
// for (let i = 0; i < a.length; i++) {
//   if (max < a[i]) {
//     max = a[i];
//   }
//   if (min > a[i]) {
//     min = a[i];
//   }
// }
// console.log(`
//     Mang co:
//     Gia tri lon nhat la ${max}
//     Gia tri nho  nhat la ${min}`);

// ========================================================================================

//BAI 2 Viết chương trình yêu cầu người dùng nhập vào 2 số nguyên a và b. Tạo ra mảng chứa tất cả các số trong khoảng giữa a và b, in mảng đó ra màn hình console.

// let a = +prompt("moi ban nhap so nguyen a");
// while (!Number.isInteger(a)) {
//   a = +prompt("Gia tri a khong la so nguyen moi ban nhap lai");
// }
// let b = +prompt("moi ban nhap so nguyen b");
// while (!Number.isInteger(b)) {
//   b = +prompt("Gia tri b khong la so nguyen moi ban nhap lai");
// }
// let c = [];
// if (a !== b) {
//   for (let i = 0; i <= Math.abs(b - a); i++) {
//     c.push(a + ((b - a) / Math.abs(b - a)) * i);
//   }
// } else {
// }
// console.log(c);

// ========================================================================================

//BAI 3 Viết chương trình khai báo mảng số nguyên gồm nhiều phần tử, tiến hành xóa tất cả các phần tử lẻ trong mảng và in mảng mới ra màn hình console.
// let a = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// for (let i = 0; i < a.length; i++) {
//   if (a[i] % 2 !== 0) {
//     a.splice(i, 1);
//   }
// }
// console.log(a);
// // ========================================================================================

//BAI 4 Viết chương trình khai báo mảng số nguyên gồm nhiều phần tử, tiến hành chia mảng ban đầu thành 2 mảng khác nhau, 1 mảng chỉ chứa số chẵn, 1 mảng chỉ chứa số lẻ và in 2 mảng đó ra màn hình console.
// let a = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// let even = [];
// let odd = [];
// for (let i = 0; i < a.length; i++) {
//   if (a[i] % 2 == 0) {
//     even.push(a[i]);
//   } else {
//     odd.push(a[i]);
//   }
// }
// console.log(even);
// console.log(odd);

// ========================================================================================

//BAI 5 Viết chương khai báo mảng gồm nhiều phần tử bất kỳ, tìm ra phần tử đầu tiên là độc  nhất trong mảng và in phần tử đó ra màn hình console.
// let a = [1, 2, 1, 3, 4, 5, 5, 3, 2];
// let b = [];
// for (let i = 0; i < a.length; i++) {
//   if (a.indexOf(a[i]) == a.lastIndexOf(a[i])) {
//     console.log(a[i]);
//     break;
//   }
// }

// ========================================================================================

//BAI 6 Viết chương trình khai báo mảng gồm nhiều phần tử bất kỳ, tiến  sắp xếp mảng đã khai báo theo thứ tự ngẫu nhiên và in mảng mới ra màn hình console.
// let a = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// let index = [];
// let b = [];
// for (let i = 0; i < a.length; i++) {
//   index.push(i);
// }
// console.log(index);

// for (let j = 0; j < a.length; ) {
//   let x = Math.floor(Math.random() * a.length);
//   while (index.indexOf(x) == -1) {
//     x = Math.floor(Math.random() * a.length);
//   }
//   b.push(a[x]);
//   j++;
//   index.splice(index.indexOf(x), 1);
//   //   console.log(index);
// }

// console.log(b);

// ========================================================================================

//BAI 7 Viết chương trình yêu cầu người dùng nhập vào 1 chuỗi bất kỳ, xây dựng hàm có tham số là 1 chuỗi và kết quả trả về là mảng chứa tất cả các chuỗi con trong chuỗi truyền vào. Gọi hàm với chuỗi đã nhập và in kết quả ra màn hình. Ví dụ nhập vào abc thì kết quả trả về là [“a”, ”ab”, ”abc”, ”b”, ”bc”, ”c”].
// let arr = ["a", "b", "c"];
// let con = [];
// for (let i = 0; i < arr.length; i++) {
//   for (let j = i + 1; j <= arr.length; j++) {
//     console.log(arr.slice(i, j).join(""));
//     con.push(arr.slice(i, j).join(""));
//   }
// }
// console.log(con);
// ========================================================================================

//BAI 8 Viết chương trình khai báo mảng bất kỳ, xây dựng hàm có tham số là 1 mảng có kết quả trả về là mảng con của mảng truyền vào chỉ chứa các phần tử phân biệt. Gọi hàm với mảng đã khai báo và in kết quả ra màn hình. Ví dụ khai báo mảng [1, 2, 1, 3, 4, “f”], kết quả trả về là [2, 1, 3, 4, “f”].

// let a = [1, 2, 1, 3, 4, "f"];
// let b = a.slice();
// for (let i = 0; i < a.length; i++) {
//   if (b.indexOf(b[i]) !== b.lastIndexOf(b[i])) {
//     b.splice(i, 1);
//   }
// }
// console.log(b);
// ========================================================================================

//BAI 9 Tìm hiểu về tham chiếu và tham trị trong javascript và cách bộ nhớ máy tính hoạt động với chúng.  Chạy đoạn code sau, giải thích dựa trên kết quả đã tìm hiểu và tạo ra mảng mới giống với mảng đã khai báo mà không liên quan đến mảng cũ:
// let numbers = [1, 2, 3, 4, 5];
// let newArr = numbers;
// newArr.push(8);
// console.log(newArr);
// console.log(numbers);

// ========================================================================================

//BAI 10 Viết chương trình khai báo mảng gồm nhiều phần tử bất kỳ, tìm ra mảng con chứa các phần tử phân biệt có độ dài lớn nhất.
