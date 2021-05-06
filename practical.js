/*//the if statement
var account_balance =500;
const price=750;
if (account_balance>=price){
    console.log("You can purchase the item");
}else{
    console.log("Sorry you have insufficient balance to purchase the item");
}
//for loop statement
for (var i=0;i<=9;i++){
    console.log(i);
}
//while loop statement
var i=9;
while (i>0){
    console.log(i);
    i--
}
// do while loop statement
do{
    console.log(i);
    i--;

}while (i>0);
//functions
 function myName(){
     var name="Zillah";
     var name2="Mwimali";
     var bothNames=name+ name2;
     console.log(bothNames);
 }
 myName();
 */

 /*a="Hello world";
 typeof a;*/
 
/*//objects
var item={
    mango:20,
    orange:30,
    apple:40

}
console.log("I am buying 2 apples for" +item.apple*2 +"sh" );
//objects
var fruits={
    pineapple:250,
    avocado:40,
    orange:25
    
    }

console.log(`I am buying 2 pineapples for ${fruits.pineapple*2}`)

//the return statement
function identity(name1,name2){
    return name1+" "+ name2

}
console.log(identity("Zillah","Mwimali"));
//functions as values
/*var selection=function choice(items){
    return items
}
console.log(selection)*/

/*var x=(function goo(a,b){
    return a+b
    
})(2,4);
console.log(x)
//objects
var myItems={
    mango:30,
    tomato:20,
    onion:40,
    orange:10,
    biscuits:34,
    total:function(){
        return this.biscuits +" "+this.mango+this.onion+this.orange;
    }
    
    
};
console.log(total)*/
//Basic data types,declaring and assigning 
var name="JavaScript";//String
var numberOfElements=10;//Number
var confirm=true;//Boolean
var whty;
console.log(name);
console.log(numberOfElements);
console.log(confirm);
console.log(whty);//undefined because it hasn't been assigned any value
 //string concatination(adding a value to another)
 var name2=name+" "+"Language";
 console.log(name2);
//Arrays
var fruits=["Mango","Kiwi Fruit","Avocado","Berry","Orange"]//Array (list)
console.log(fruits);  //to access all elemets in my array
console.log(fruits.length);
console.log(fruits[0]+" "+fruits[3]); 
fruits.push("Banana");
fruits.push("Pineapple"); 
console.log (fruits);
fruits.splice(3 ,3,"Coconut");
console.log(fruits);
fruits.splice(1,1);
fruits.sort();
console.log(fruits);
fruits.reverse();
console.log(fruits);
console.log(fruits.indexOf("Avocado"));
//array concatination
 var vegetables=["Kales","Spinach","Managu","Brocolli"]
  var groceries=fruits.concat(vegetables).sort();
  console.log(groceries);
  let check=vegetables.includes("Sukumawiki");//checking the presence of sukumaWiki in the  array
  console.log(check); 
  //objects
  var clothes={name:"Dress",price:4000};
  var shoes={name:"Vans",price:3000};
  shoes.color="Red";//adding a new property in my object
  console.log(shoes);
var keys= Object.keys(shoes);
    console.log(keys);
var vals=Object.values(clothes);
console.log(vals);
 console.log("I am buying"+" "+shoes.name+" "+"for"+" "+shoes.price+"sh")
 txt=""
for (x in clothes){
    txt+=clothes[x];
}
console.log(txt);
/*Functions/parameters and if else statement
function getPrice(item){
    if (item==="dress"){
            console.log(5000);
        }
    
        else if(item==="Trousers"){
            console.log(500);
        }
        else if (item==="Hoodie"){
            console.log(900);
        }
        else{
            console.log("Not Available")
        }
    
    }
    
getPrice("Suit");
var item={
    name:"Mango",
    quantity:1,
    price:30,
    getCost=function(){
        `return 
    }
}

*/
function prepare(ingridients,callback){
    console.log(`Preparing ${ingridients}`);
    callback();
}
function chop(){
    console.log("Chopping");
}
prepare("Tomatoes and onions",chop);

const posts=[
    {
        title:"Born a a crime",
        author:"Trevor Noah"
    },
    {
        title:"Think Big",
        author:"Ben Carson"
    }
]
function getPosts(){
    setTimeout(()=>{
        let output="";
        posts.forEach((post)=>{
            output+=`${post.title}`
    });
    console.log(output);
},1000);
}



function createPosts(post,callback){
    setTimeout(()=>{
        posts.push(post);
        callback();
    },2000);
}
getPosts();
createPosts({title:"To kill a Mockingbird",
            author:`Haper Lee`},getPosts);


function addQuote(words,callback){
    console.log(`Zealous ${words}`);
    callback();
}
function statement(){
    console.log(`She leads,she serves`);

}
addQuote(",zestful,Zillah!",statement);


function welcomingClause(word,callback){
    console.log(`Welcome,${word}`);
    callback();
}
function addClause(){
    console.log("Click and Eat!");

}
welcomingClause(" "+ "to Mashakura,just...",addClause);


const counties=[
    {
        Nairobi:042,
        places:"Inti_NIkkei"
    },
        
    {
        Mombasa:001,
        places:["Sarova_white_sands","Diani_sands","English_point"]

    },
    {
        Kakamega:001,
        places:["Golf","Hamptons","Jamindas","Savona"]

    }
]

function county(countyN,callback){
    return `${countyN}`;
    callback();
}
/*function getCounty(){
    setTimeout(()=>{
        let outputs="";
        county.forEach((county)=>{
            output+=`${county.places}`
    });
    console.log(outputs);
},);
}county("NAI",getCounty);
*/

function foot(){
    console.log("Uganda");
}
function display(){
    console.log("Hallo");
    

}
function clause(display){
    console.log("World");
    display();
}
clause(display)
