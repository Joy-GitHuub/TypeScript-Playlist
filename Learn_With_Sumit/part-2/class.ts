class Player {
   public name: string;
    public age : number;
    public country: string;

    constructor(name:string, age: number, country: string) {
        this.name = name;
        this.age = age;
        this.country = country;
    };    
    play() {
        console.log(`${this.name} from ${this.country} is playing`);
    };
};


const playersArray:  Player[] = [];
const sakib = new Player("Sakib", 36, "BD");
const mashrafi = new Player("mashrafi", 39, "BD");

playersArray.push(sakib);
playersArray.push(mashrafi);


let myFun: (x: object) => void;
myFun = (x) => {
   console.log(x);
}
for (const obj of playersArray) {
     myFun(obj);
}