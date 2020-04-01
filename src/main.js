const divScreen = document.querySelector("#screen");
const btnCreateNumber = document.querySelector("#createNumber");
const btnCallNumber = document.querySelector("#callNumber");
const spanNewNumber = document.querySelector("#newNumber");
const spanQueue = document.querySelector("#queue");

let n = 0;
let queue = [];

btnCreateNumber.onclick = () => {
    n += 1;
    //queue.push(n);进入队列
    queue.push.call(queue, n);
    spanNewNumber.innerText = n;//在span里打印出n
    spanQueue.innerText = JSON.stringify(queue);
};

btnCallNumber.onclick = () => {
    if (queue.length === 0) {
        alert("叫个屁啊");
        return;
    }
    //const m = queue.shift();取出队列
    const m = queue.shift.call(queue);
    divScreen.innerText = `请${m}号就餐`//在screen里打印
    spanQueue.innerText = JSON.stringify(queue);
}; 