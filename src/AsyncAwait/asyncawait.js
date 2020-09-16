// Llamada Asíncronas - con Async -Await

async function requestHandler(req, res) {
    // Manejo de los errores con un try {} catch {}
    try 
    {
        const user = await User.findById(req.userId)
        const tasks = await Tasks.findById(user.tasksId);
        tasks.completed = true;
        await tasks.save();
        res.send('Task Completed')
    } 
    catch (e) {
        res.send(e);
        
    }

    
}