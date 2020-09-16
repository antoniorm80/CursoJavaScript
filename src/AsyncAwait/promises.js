
// Llamada Asíncronas - con Promesas.
function requestHander(req, res) {
    User.findById(req.userId)
    .then(function (user){
        return Tasks.findById(user.taskId)
    })
    .then(function (tasks){
        tasks.completed = true;
        return tasks.save();
    })
    .then(function(){
        res.send('Tasks completed')
    })
    .catch(function (errors){
        res.send(errors)
    })
}
