// import {a,b,c,hello} from"./oop.js"
// console.log(a)
// console.log(b)
// console.log(c.name)
// console.log(c.age)
// console.log(c.title)
// console.log(hello())

//=========================================================
//=========================================================

//================JAVASCRIPT FORM BEGINNING================

//=====Concatenation============
// let name = 'omar';
// let age =22;
// let country = 'egypt'
// console.log(`My name is: ${name} and Iam: ${age}years old  and From: ${country}`)

//==========================================================

// let nums = [1,2,3,50,10,55,90]
// console.log(Math.max(1,2,3,50,10,55,90))
// console.log(Math.min(1,2,3,50,10,55,90))

//==========================================================

//===== Number To String============= 
// let x = 100;
// console.log(x.toString())
// console.log(String(x))

//===========================================================

//=====String=======
// let name = 'omar'
// console.log(name[0]) //==> will print Letter of Number
// console.log(name.charAt(0)) //==> will print Letter of Number

// let text = 'i love java script'
// console.log(text.slice(1,6))

//==========================================================

//=========Switch========

// let role = prompt('Enter Role');
// switch(role){
//     case"admin":
//         document.write('control');
//         break;
//     case"editor":
//         document.write('edit');
//         break;
//     case"user":
//         document.write('hello user');
//         break;
// }

//==========================================================

// function calc(...numbers){
//     let result =0;
//     for(let i =0 ; i<numbers.length ; i++){
//         result += numbers[i]
//     }
//     console.log(result)
// }
// calc(10,10,10,101)

//==========================================================

// let user = {
//     name: "omar",
//     age : 22,
//     country: "egypt",
//     skills:{
//         first:"html",
//         second:"css",
//         third:"java script"
//     },
//     getAge:function(){
//         if(user.age >= 18){
//             console.log('hello')
//         }else{
//             console.log('can not accsess')
//         }
//     }
// }

// console.log(user.getAge())

//==========================================================

//==========CARDS=============

// let names = ['omar','amr','ali','mohamed','karem','sayed','mostafa','hany']
// let age = [23,20,21,30,25,24,26,28];
// let image = ["../imgs/cced.png","../imgs/ali_maaloul.jpg",'../imgs/shenawy.jpg',"../imgs/abo_trika_al_ahly.jpg","../imgs/amr_elsolia.jpg","../imgs/walid_soliman.jpg","../imgs/harryed.jpg","../imgs/ahly trophy.jpg"]
// let container = document.createElement('div');
// container.className = 'container'
// function cards(names,age,image){
//     //create element
//     let card = document.createElement('div');
//     let title = document.createElement('h2');
//     let info = document.createElement('p');
//     let img = document.createElement('img');

//     //create content
//     let head = document.createTextNode(names);
//     let inf = document.createTextNode(age);
//     img.src= image;

//     title.appendChild(head);
//     info.appendChild(inf);
//     card.className = 'card';

//     card.append(title);
//     card.appendChild(info);
//     card.appendChild(img);

//     container.appendChild(card);

//     document.body.appendChild(container)
// }
// for(let i = 0; i<8 ; i++){
//     cards(names[i],age[i],image[i])
// }

//============================================================

// let btn1 = document.querySelector(".btn1")
// let btn2 = document.querySelector(".btn2")

// if(localStorage.length >0){
//     document.body.style.background = localStorage.getItem('color')
// }

// function color(color){
//     localStorage.setItem('color',color);
//     document.body.style.background = color
// }

//=============================================================

//====SPLIT=====

// let a = 'i love java script'
// console.log(a.split())
// console.log(a.split(""))
// console.log(a.split(" "))
// console.log(a.split(" ",2))

//============================================================

//====GENERATE YEARS=====

// function years(start,end){
//     for(let i = start ; i<= end ; i++){
//         console.log(i)
//     }
// }
// years(1990,2023)

//============================================================


// function info(username="un" , age="nu", sallary="un", show="yes",...skills){
//     document.write(`<h1> Hello: ${username}</h1>`);
//     document.write(`<h2> Your age is: ${age}</h2>`);
//     document.write(`<h2> Your Sallary is: ${sallary}</h2>`);
//     if(show === "yes"){
//         if(skills.length >0){
//             document.write(`<h2> Skills is: ${skills.join(' || ')}</h2>`)
//         }else{
//             document.write(`<h2> There is no skills</h2>`)
//         }
//     }else{
//         document.write(`<h2>skills is hidden</h2>`)
//     }
// }
// info('omar',23,8000,'yes','html','css','java script')

//==============================================================

//=====Spread Operator=======
// console.log('omar')
// console.log(...'omar')
// console.log([...'omar'])

// let a1 = [1,2,3]
// let a2 = [3,4,5]
// console.log([...a1,...a2])

// let fri = ['omar','ali','mohamed']
// let now = ['karem','sayed','ismail']
// fri.push(...now)
// console.log(fri)

//============================================================

//=====REGULAR EXPRESSION=====

// let string = 'i love java script and css and html'
// let stringRe = /css/g;
// console.log(string.match(stringRe))


// let x = 'com org net web site'
// let xRe = /(com|net)/ig;  //==> com and net
// console.log(x.match(xRe))

// let nums ='12345678910'
// let numsRe = /[0-4]/ig;   //==> nums from 0 to 4
// console.log(nums.match(numsRe))

// let nums = '12345678910'
// let numsRe = /[^0-4]/ig;  //==> do not get nums from 0 to 4
// console.log(nums.match(numsRe))

// let mix = '12!@34#$56%&789'
// let mixRe = /[^0-9]/ig;  //==> get only symbols
// console.log(mix.match(mixRe))


// let mix = 'om1 om12om omar om8ar om2om'
// let mixRe = /om[0-9]om/ig; //==> get only om[one number]om
// console.log(mix.match(mixRe));

// let string = 'abc123DEF567'
// let stringRe = /[a-z]/g; //==> get only small letters
// console.log(string.match(stringRe))

// let string = 'omar MARO 123 _ .... !@#'
// let word = /\w/g; //==>get only big and small letters and nums
// let wordRe = /\W/g; //==> get dots,spaces and special character
// console.log(string.match(word))
// console.log(string.match(wordRe))

// let url = 'o@o.com a@@y.com A@o..com c@c.net z@E.org'
// let urlRe = /\w@\w.(com|org)/g; //==>letter @ letter .com and org
// console.log(url.match(urlRe))

// let name = 'oamr 1spam 2spam 3spam spam4 spam spam6 amr'
// let nameRe = /\bspam|spam\b/g;
// console.log(name.match(nameRe))

// let url = 'o@o.com o@Aa.net oo@m.org oo@oo.web'
// let urlRe = /\w@\w.(com|net)/ig;
// let urlRe2 = /\w+@\w.(org|web)/ig;
// let urlRe3 = /\w+@\w+.(com|org|web|net)/ig;
// console.log(url.match(urlRe))
// console.log(url.match(urlRe2))
// console.log(url.match(urlRe3))

// let nums = '0110 20 50 30 000 120 350'
// let numsRe = /0\d*0/ig; //==>start with 0 and end with 0 and in between there is numbers or not
// console.log(nums.match(numsRe))

// let url = 'https://www.google.com http://website.net'
// let urlRe = /https?:\/\/(www.)?\w+.(com|net)/ig;
// console.log(url.match(urlRe))

// let serial = 's100s s30000s s5000s s950000s'
// let serialRe = /s\d{3}s/ig; //==> three numbers only
// let serialRee = /s\d{4,5}s/ig; //==> from 4:5 numbers
// let serialReee = /s\d{4,}s/ig; //==> at least 4 numbers
// console.log(serial.match(serialRe))
// console.log(serial.match(serialRee))
// console.log(serial.match(serialReee))

//===============================================================

//====FORM VALIDATION========

// let form = document.getElementById('register');

// form.onsubmit = function(){
//     let phone = document.getElementById('phone').value;
//     let phoneRe = /\(\d{4}\)\s\d{3}-\d{4}/;
//     let validation =phoneRe.test(phone);
//     if(validation === false){
//         return false
//     }
//     return true;
// }

//===============================================================

//=====CONSTRUCTION FUNCTION=========

// class user  {
//     constructor(id,username){
//         this.i = id;
//         this.u = username
//     }
//     hello(){
//         return `Hello ${this.u}`
//     }
//     updateName(newName){
//         this.u = newName;
//     }
// }
// let userOne = new user(100,'omar')
// userOne.updateName('amr')
// console.log(userOne.hello())


//==STATIC METHOD AND PROPERITES==

// class User {
//     static count = 0;
//     constructor(id,username,sallary){
//         this.i = id;
//         this.u = username;
//         this.s = sallary;
//         User.count++ //==> because it is class property
//     }
//     hello(){
//         return `Hello ${this.u} , Your id id: ${this.i}`
//     }
//     static membersCount(){
//         return `${this.count} Members created`
//     }
//     updateName(newName){
//         this.u = newName
//     }
// }
// let userOne = new User(1,'omar',8000)
// let usertwo = new User(1,'omar',8000)
// let userthree = new User(1,'omar',8000)
// userOne.updateName('amr')
// console.log(userOne);
// console.log(User.membersCount())

//==INHERITANCE==

// class User {
//     constructor(id,username){
//         this.i = id;
//         this.u = username
//     }
//     hello(){
//         return `Hello ${this.u}`
//     }
// }

// class Admin extends User{
//     constructor(id,username,sallary){
//         super(id,username);
//         this.s = sallary;
//     }
// }

// let adminOne = new Admin(100,'omar',8000)
// console.log(adminOne.i)
// console.log(adminOne.u)
// console.log(adminOne.s)
// console.log(adminOne.hello())

//==ENCAPSULATION==

// class User {
//     #e;
//     constructor(id,username,esallary){
//         this.i = id;
//         this.u = username;
//         this.#e = esallary
//     }
//     hello(){
//         return `Hello ${this.u}`
//     }
//     sallary(){
//         return parseInt(this.#e)
//     }
// }
// let userOne = new User(1,'omar','8000 gneh')
// console.log(userOne.sallary())

//==============================================================

//========PROTOTYPE===========

//===Add To Chain===

// class User{
//     constructor(id,username){
//         this.i = id;
//         this.u = username;
//     }
//     hello(){
//         return `Hello ${this.u}`
//     }
// }

// User.prototype.id = function(){
//     return `Your ID is: ${this.i}`
// }

// let userOne = new User(1,'omar')
// console.log(userOne.id())

//===========================================================

//=========OBJECT META DATA AND DESCRIPTOR=============

//==Add one Prop In Object==

// let myobject = {
//     a:1,
//     b:2
// }

// Object.defineProperty(myobject,'k',{
//     writable:true,
//     enumerable:true,
//     configurable:true,
//     value:3,
// })
// console.log(myobject)

// for(let prop in myobject){
//     console.log(prop,myobject[prop])
// }

//==Add more than Prop In Object==

// Object.defineProperties(myobject,{
//     c:{
//         configurable:true,
//         enumerable:true,
//         value:3
//     },
//     d:{
//         configurable:true,
//         enumerable:true,
//         value:4,
//     }
// })
// console.log(myobject)
// for(let prop in myobject){
//     console.log(prop,myobject[prop])
// }

//================================================================

//===========DATA AND TIME================

// let date = new Date() //==> get now date and time
// console.log(date)

// let date = Date.now()
// console.log(date) 


//===SET DATE AND TIME===

// let dateNow = new Date();
// dateNow.setDate(31)
// console.log(dateNow)

// let dateNow = new Date();
// dateNow.setFullYear(2023,3,20)
// console.log(dateNow)

//==================================================================

//=========GENERATOR FUNCTION=============

// function* generate(){
//     yield 1;
//     yield 2;
//     yield 3;
//     yield 4;
// }
// let gen = generate();
// console.log(gen.next().value)
// console.log(gen.next().value)
// console.log(gen.next().value)
// console.log(gen.next().value)
// console.log(gen.next().done)

//==DELEGATE GENERATOR==

// function* genletter(){
//     yield 'a';
//     yield 'b';
//     yield 'c';
// }

// function* gentnums(){
//     yield 1;
//     yield 2;
//     yield 3;
// }

// function* genAll(){
//     yield* genletter();
//     yield*gentnums();
//     yield* [4,5,6]
// }
// let gen = genAll();
// console.log(gen.next())
// console.log(gen.next())
// console.log(gen.next())
// console.log(gen.next())
// console.log(gen.next())
// console.log(gen.next())
// console.log(gen.next())
// console.log(gen.next())
// console.log(gen.next())
// console.log(gen.next())

//=============================================================

//==============JSON=================

// let jsonFromServer = `{"username":"omar" , "age":23}` //==>JSON Object
// console.log(jsonFromServer)

// let object = JSON.parse(jsonFromServer) //==> Converted from Json Obj to Js Obj

// object.username = "mora";
// object.age = 22;

// let JsonObject = JSON.stringify(object) //==> Converted From Js Obj to JSON Obj

// console.log(JsonObject)

//===============================================================

//==============PROMISE===============

// let mypromise = new Promise((resolve, reject) => {
//     let connect = true;
//     if(connect){
//         resolve('connected')
//     }else{
//         reject('can not connect')
//     }
// })

// mypromise.then(
//     (resolveValue) => console.log(resolveValue),
//     (rejectValue) => console.log(rejectValue)
// )
// console.log(mypromise)

//==ALL==
// let first = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve('first')
//     }, 5000);
// })

// let second = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve('second')
//     }, 3000);
// })

// let third = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve('third')
//     }, 2000);
// })

// Promise.all([first,second,third]).then(
//     (resolveValue)=>console.log(resolveValue),
//     (rejectValue)=>console.log(rejectValue)
// )

// //==allSEttled==
// let first = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve('first')
//     }, 5000);
// })

// let second = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve('second')
//     }, 3000);
// })

// let third = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve('third')
//     }, 2000);
// })

// Promise.allSettled([first,second,third]).then(
//     (resolveValue)=>console.log(resolveValue),
//     (rejectValue)=>console.log(rejectValue)
// )

//==race==
// let first = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve('first')
//     }, 5000);
// })

// let second = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve('second')
//     }, 3000);
// })

// let third = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve('third')
//     }, 2000);
// })

// Promise.race([first,second,third]).then(
//     (resolveValue)=>console.log(resolveValue),
//     (rejectValue)=>console.log(rejectValue)
// )

//===========================================================

//==================ASYNC=====================

// function data(){
//     return new Promise((resolve, reject) => {
//         let user = ["omar"];
//         if(user.length>0){
//             resolve("User Found")
//         }else{
//             reject("User Not Found")
//         }
//     })
// }

// data().then(
//     (resolveValue)=>console.log(resolveValue),
//     (rejectValue)=>console.log(rejectValue)
// )
//==Another way to write==

// function data(){
//     let user = ["omar"];
//     if(user.length>0){
//         return Promise.resolve("User Found")
//     }else{
//         return Promise.reject("User Not Found")
//     }   
// }
// data().then(
//     (resolveValue)=>console.log(resolveValue),
//     (rejectValue)=>console.log(rejectValue)
// )

//==WRITE WITH ASYNC==

// async function data(){
//     let user = ['oamr'];
//     if(user.length>0){
//         return "User Found"
//     }else{
//         throw new Error('User Not Found')
//     }
// }

// data().then(
//     (resolveValue)=>console.log(resolveValue),
//     (rejectValue)=>console.log(rejectValue)
// )

//=======AWAIT=======

// let myPromise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve('Good')
//     }, 3000);
// })

// function data(){
//     console.log('first')
//     myPromise.then((resovleValue)=>console.log(resovleValue))
//     console.log("second")
// }
// data()

//==WRITE ASYNC WITH AWAIT===

// let myPromise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve('Good')
//     }, 3000);
// })

// async function data(){
//     console.log('first')
//     console.log(await myPromise)
//     console.log("second")
// }
// data()


// let myPromise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         reject('Good')
//     }, 3000);
// })

// async function data(){
//     console.log('first')
//     console.log(await myPromise.catch((err)=>err))
//     console.log("second")
// }
// data()

//==========================================================



let questions = [
    {
        numb:1,
        question:"What was the first feature-length animated movie ever released?",
        answer:"Snow White and the Seven Dwarfs",
        options:[
            "Lion King",
            "PORCO ROSSO",
            "Snow White and the Seven Dwarfs",
            "THE CASTLE OF CAGLIOSTRO"
        ]
    },


    {
        numb:2,
        question:"For what movie did Tom Hanks score his first Academy Award nomination?",
        answer:"Big",
        options:[
            "Cast Away",
            "Big",
            "saving private ryan",
            "captain phillips"
        ]
    },


    {
        numb:3,
        question:"Who played Juror Number 8 in 12 Angry Men?",
        answer:"Henry Fonda",
        options:[
            "Henry Fonda",
            "John Fiedler",
            "Jack Klugman",
            "Jack Warden"
        ]
    },


    {
        numb:4,
        question:" In the action thriller Speed, why is Annie (Sandra Bullock)'s driver's license suspended?",
        answer:"She was speeding",
        options:[
            "moved while the traffic light was red",
            "hit someone with a car",
            "She was drunk",
            "She was speeding"
        ]
    },


    {
        numb:5,
        question:"The Euro 2000 final between France and Italy was decided by Golden Goal. Which player scored the goal?",
        answer:"David Trezeguet",
        options:[
            "Alan Shearer",
            "David Trezeguet",
            "Michel Platini",
            "Zidane"
        ]
    },
    {
        numb:6,
        question:"Which team won the first Premier League title?",
        answer:"Manchester United",
        options:[
            "Manchester city",
            "Manchester United",
            "Arsenal",
            "Aston Villa"
        ]
    },
    {
        numb:7,
        question:"The fastest goal scored in Premier League history came in 7.69 seconds. Who scored it?",
        answer:"Shane Long",
        options:[
            "Alan Shearer",
            "Sadio Mane",
            "Shane Long",
            "Harry Kane"
        ]
    },
    {
        numb:8,
        question:"Sally is 54 years old and her mother is 80, how many years ago was Sally’s mother times her age?",
        answer:"41 years ago",
        options:[
            "39 years ago",
            "41 years ago",
            "12 years ago",
            "33 years ago"
        ]
    },
    {
        numb:9,
        question:"Look at this series: 36, 34, 30, 28, 24, … What number should come next?",
        answer:"22",
        options:[
            "22",
            "20",
            "18",
            "15"
        ]
    },
    {
        numb:10,
        question:"Rangers tried to sign which superstar after Alex McLeish was alerted to his ability through popular video game Football Manager?",
        answer:"Lionel Messi",
        options:[
            "Ronaldo R9",
            "Ronaldinho",
            "Lionel Messi",
            "Zidane"
        ]
    },

    
]

















