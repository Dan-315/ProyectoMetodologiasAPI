import moment from 'moment-timezone'
import chalk from 'chalk';

const info=chalk.bold.cyan;
const error=chalk.bold.red;
const warn=chalk.bold.yellow;
const normal=chalk.bold.white;
const tz=process.env.TZ||'America/Mexico_City'
moment.locale('es') 

class UtilService{

    log(origen:String,message:String,type?:"error"|"info"|"warn"){
        let typ,premess
        if(type=="error"){
            premess=`--ERROR:`
            typ=error
        }else if(type=="info"){
            premess=`--INFO:`
            typ=info
        }else if(type=="warn"){
            premess=`--WARNING:`
            typ=warn
        }else {
            premess=``
            typ=normal
        } 
        
        if(type)console.log(typ("////////////////////////////////////////////////////////////////////////////////////////"));
        console.log(premess+`\n${this.getFecha(true)}`);
        console.log(`[${origen}]-->     ${message}`);
        if(type)console.log(typ("////////////////////////////////////////////////////////////////////////////////////////"));
    
        
    }
    getFecha(fromat:boolean,date?:string){
        let aux=date?moment(new Date(date)).tz(tz):moment().tz(tz)
        return fromat? 
            aux.format("DD/MMMM/YYYY - HH:mm:ss")  :  aux.toString()
    }
    getHora(time?:string){ 
        let aux = time?moment(new Date("Jan 01 2000 "+time),):moment.utc()
        return aux.tz(tz).format("HH:mm:ss")
    }

}

export const utilServ = new UtilService()


