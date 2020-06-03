var cancel = function () { };
var timer;
var sleep = function (timeout) {
    var resolveFn;
    var promise = new Promise(function (resolve, reject) {
        resolveFn = resolve;
        timer = setTimeout(resolve, timeout);
    });
    cancel = function () {
        clearTimeout(timer);
        resolveFn();
    };
    return promise;
};
var sp = sleep(3000);
// console.time('sleep')
// sp.then(() => {
// console.log('done')
// console.timeEnd('sleep')
// })
// cancel()
var startTime = Date.now();
sp.then(function () {
    console.log(Date.now() - startTime);
});
cancel();
