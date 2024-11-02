//import { capitalize } from 'lodash';
import promptSync from 'prompt-sync';
const input = promptSync();
export class Hero{
    
    constructor(name,age,type){
        this.name = name
        this.age = age
        this.type = type

    }
    message(){
        console.log("Como posso lhe chamar?");
        this.name = input("Digite aqui: ");
        console.log();
        console.log("Qual é sua idade?");
        this.age = parseInt(input("Digite aqui: "));
    }
    message1(){
        let resp
        do{
        console.log("Qual sera o tipo do seu heroi?");
        console.log("1--->Guerreiro");
        console.log("2--->Ninja");
        console.log("3--->Mago");
        console.log("4--->Monge");
        resp = parseInt(input("Digite aqui: "));
        if(resp!=1 && resp!= 2 && resp!= 3 && resp!= 4){
            console.log("\nDigite um herói valido!");
        }
    }while(resp!=1 && resp!= 2 && resp!= 3 && resp!= 4);
        this.tipo(resp);
        
    }
    tipo(resp){
        switch(resp){ 

            case 1:
                this.type = "Guerreiro";
                break;

            case 2:
                this.type = "Ninja";
                break;

            case 3:

                this.type = "Mago";
                break;
            case 4:
                this.type = "Monge";
            break;

            default:
            return `Personagem Inválido`;
    }
    //this.attack(); Provavelmente nao vai usar
    }
    attack(){
        let atacar
        
        switch(this.type){
            case "Mago":
                atacar = "magia";
                break;
            case "Monge":
                atacar = "artes marciais";
                break;
            case "Ninja":
                atacar = "shuriken";
                break;
            case "Guerreiro":
                atacar = "espada";
                break;
        }
        console.log(`O ${this.type} atacou usando ${atacar}.`);  
        }


cleanType(){
         
     this.name =this.name[0].toUpperCase()+this.name.substr(1);
         
        
    
    }
    AllMethods(){
        this.message();
        console.log();
        this.cleanType();
        if(this.age>=12){
            this.message1();
            console.log();
            this.attack();
        }else{
            console.log(`Infelizmente ${this.name} voce não tem idade suficiente para jogar!
                        \nSua idade: ${this.age}`);
        }
        
        
    }
}

        
        

    
