export default class{
    constructor(obj){
        this.name = obj.name;
        this.age = obj.age;
        
    }
    fn(){
        console.log(this.name);
    }
}