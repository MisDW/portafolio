export default class Message{
    constructor(obj){
        this.obj = obj
    }

    print(){
        let code = `This code is in CDN: ${this.obj}`
        console.log(code);
    }
}
