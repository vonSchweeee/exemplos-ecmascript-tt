// Top level await
// Código modificado do ES2020/7-promiseAllSettled.js

const promiseResolve1000Ms = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Resolved after 1000ms");
  }, 1000);
});

const promiseReject2000Ms = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject("Rejected after 2000ms");
  }, 2000);
});

const promiseResolve3000Ms = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Resolved after 3000ms");
  }, 3000);
});

// Não funciona no node 20
const results = await Promise.allSettled([
  promiseResolve1000Ms,
  promiseReject2000Ms,
  promiseResolve3000Ms,
]);
results.forEach((result) => console.log(result));