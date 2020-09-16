const { taskOne, taskTwo } = require('./tasks');

async function Main() {
    try {
        // Console.time y Console.timeEnd: Nos ayuda a medir el tiempo de ejecución que se tarda las tareas.
        //
        // Ejcución Secuencial - Se ejecuta la segunda tarea al terminar la primera. 
        // console.time('Measuring Time');
        // const valueOne = await taskOne();
        // const valueTwo = await taskTwo();
        // console.timeEnd('Measuring Time');

        // console.log('Task one returned', valueOne);
        // console.log('Task two returned', valueTwo);

        // Ejcución Paralela - Se ejecuta la segunda al mismo tiempo es decir; en paralelo. 
        console.time('Measuring Time');
        const results =  await Promise.all([taskOne(), taskTwo()])
        console.timeEnd('Measuring Time');

        console.log('Task one returned', results[0]);
        console.log('Task two returned', results[1]);
    } catch (e) {
        console.log(e)
    }   
}

Main();