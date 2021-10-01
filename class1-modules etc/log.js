
function app(msg)
{
    console.log(msg);
}

function login(msg)
{
    console.log(msg);
}


//module.exports = app;
/*module.exports ={
    app,
    login
}*/

/*let obj = {
    app1:app,
    login1:login
}
module.exports = obj;*/

exports.app1=app;