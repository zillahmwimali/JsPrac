function Details(first_name,last_name,age,gender,location) {
    return {
    statement() {
        return `I am ${first_name} ${last_name}, ${age}years old, from ${location}`
      }
    }
  }
  const details = new Details("Nasasira","Sandra",17,"Other","Kisumu")
  console.log(details.statement())


/*class Details{
    constructor(){
       this.first_name="Nasasira";
        this.last_name="Sandra";
        this.age=17;
        this.gender="Other";
        this.location="Kisumu";


    }
  getPatientDetails(){
      return `${this.first_name} ${this.last_name} ${this.age},${this.gender} from ${this.location}`
  }
}
var details=new Details("Nasasira","Sandra",17,"Other","Kisumu");
console.log(details.getPatientDetails());*/

var symptoms=["Headache","Stomachache","Nervoursness"]
console.log(`I feel ${symptoms[0]},${symptoms[1]} and ${symptoms[2]}`)

function durationOfSymptoms(days){

console.log(`i have been sick for ${days} days`);
}
durationOfSymptoms(3);
durationOfSymptoms(7)

function alergies(alergy){
    console.log(`I have ${alergy} alergies ` )

}
alergies("skin and eggs")


function bookDoctor(words,callback){
    console.log(`${words}`);
    callback();
}
function selCounty(){
    console.log("Kisumu");

}
bookDoctor("I would like to book a doctor from",selCounty)
function getDoctor(availability){
    if (availability==="Present"){
            console.log("Book now");
        }
    
        else if(availability==="booked before"){
            console.log("Already booked");
        }
        else if (availability==="Half day"){
            console.log("Come before 1pm");
        }
        else{
            console.log("waiting")
        }
    
    }
    getDoctor("Present");

    var meds={
        Panadol:"2*2",
        Argumentin:"1*1",
        Franol:"2*4",
        Ranferon:"6*6"
        
    }
    for (let[key,value]of Object.entries(meds)){
        console.log(`${key}:${value}`)
    }
    for (let key in meds){
        console.log(`${key}=>${meds[key]}`)
    }
    



