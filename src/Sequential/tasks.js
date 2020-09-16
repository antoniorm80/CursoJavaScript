const util = require('util');
const { throws } = require('assert');
const sleep = util.promisify(setTimeout);

// setTimeOut: Es un método o función asincrona mediante Callbacks.
// Util: Nos ayuda a convertir codigo a funciones Callbacks a Promesas ó Async-Await.
// Promisify: convierte a Asyn-Await el método o función.
// throw new / Break: Nos ayuda a interrumpir la ejecución del código y crea un error.

module.exports = {

    async taskOne() {
        try {
            throw new Error('Hay un problema en task One');
            await sleep(3000);        
            return 'One Value'
        } catch (e) {
            console.log(e)
        }        
    },

    async taskTwo(){
        try {
            // throw new Error('Hay un problema en task Two');
            await sleep(2000);
            return 'Two Value'
        } catch (e) {
            console.log(e)
        }
    }
}