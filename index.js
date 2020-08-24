window.addEventListener("load", function() {
    console.log(1111);
    const data1 = [
        { name: 'alex chan', money: 568932 },
        { name: 'melon chan', money: 698756 },
        { name: 'English chan', money: 457896 },
        { name: 'Clare Langner', money: 292489 },
        { name: 'Abigail Rice', money: 953957 },
        { name: 'Clarice Dias', money: 168472 },
        { name: 'Vernon Lucas', money: 718225 },
        { name: 'Nina Schmidt', money: 889147 },
    ]
    const add = document.querySelector('.add')
    const double = document.querySelector('.double')
    const check = document.querySelector('.check')
    const rank = document.querySelector('.rank')
    const sum = document.querySelector('.sum')
    const login = document.querySelector('.login')
    const login_box = document.querySelector('.login-box')
    const shadow = document.querySelector(".shadow")
    const nav_btn = document.querySelector('.nav-btn')
    const ul = document.querySelector('.info-list')
    const wow = document.querySelector('.wow')
    let result = document.querySelector('.result')
    let lis = ul.querySelectorAll('li')
    let newArr = []
    let num = 0
    add.addEventListener("click", function() {
        console.log(data1[num].name);
        console.log(data1[num].money);
        newArr.push(data1[num])
        let li = document.createElement('li')
        li.innerHTML = `<span class='per'>${data1[num].name}</span><span class='weal'>$${data1[num].money}</span>`
        ul.appendChild(li)
        num++
        if (num === data1.length) {
            num = 0
        }
        lis = ul.querySelectorAll('li')
    })
    double.addEventListener("click", function() {
        lis.forEach(function(ele, index) {
            // console.log(ele);
            let money = ele.children[1].innerText.slice(1)
            console.log(money);
            ele.children[1].innerText = `$${parseInt(money) * 2}`
            newArr[index].money = parseInt(money) * 2
        })
    })
    nav_btn.addEventListener("click", function() {
        wow.classList.toggle('slide')
    })

    check.addEventListener("click", function() {
        let richman = []
        console.log(newArr);
        richman = newArr.filter(ele => ele.money >= 1000000)
        console.log(richman);
        ul.innerHTML = ''
        richman.forEach(function(ele, index) {
            console.log(ele);
            let li = document.createElement('li')
            li.innerHTML = `<span class='per'>${ele.name}</span><span class='weal'>$${ele.money}</span>`
            ul.appendChild(li)
        })
    })


    rank.addEventListener("click", function() {
        let rankStr = []
        lis = ul.querySelectorAll('li');
        lis.forEach(function(ele, index) {
            console.log(ele);
            rankStr.push(ele)
        })
        console.log(rankStr);
        rankStr.sort(function(a, b) {
            console.log(a.children[1].innerText.slice(1), b.children[1].innerText.slice(1));
            return b.children[1].innerText.slice(1) - a.children[1].innerText.slice(1)
        });
        console.log(rankStr);
        // 因为我们插入的js节点已经存在于当前的文档树，因此这个节点首先会从原先的位置删除，再插入到新的位置。
        for (let i = 0; i < rankStr.length; i++) {
            ul.appendChild(rankStr[i]);
        }
    })
    sum.addEventListener("click", function() {
        let lis = document.querySelector('.info-list').querySelectorAll('li')
        console.log(lis);
        let sumStr = []
        lis.forEach(function(ele, index) {
                console.log(ele.children[1].innerText.slice(1));
                sumStr.push(ele.children[1].innerText.slice(1))
                console.log(sumStr);
            })
            //累加函数
        function getSum(total, num) {
            return parseFloat(total) + parseFloat(num);
        }
        console.log(sumStr.reduce(getSum));
        let realsum = sumStr.reduce(getSum)
        result.innerHTML = `$${realsum}`
    })
    login.addEventListener("click", function() {
        shadow.style.display = "block"
        login_box.style.display = "block"

    })
    shadow.addEventListener("click", function() {
        shadow.style.display = "none"
        login_box.style.display = "none"
    })
})