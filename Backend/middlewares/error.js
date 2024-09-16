module.exports = (err,req,res,next) =>{
    err.statusCode = err.statusCode || 500;

    if (process.env.NODE_ENV == 'Development') {      
        res.status(err.statusCode).json({
            success: false,
            message: err.message,
            stack: err.stack,
            error:err
        })
    }
    if (process.env.NODE_ENV == 'Production'){
        let message = err.message;
        let error = new Error(message);

        if (err.name == "ValidatorError") {
            message = Object.values(err.errors).map(Value => Value.message)
            error = new Error(message)
        }
        if(err.code == 11000){
            let message = `Duplicate ${Object.keys(err.keyValue)} error`
            error = new Error(message)
        }
        res.status(err.statusCode).json({
            success: false,
            message: err.message || 'internal server error',
        })
    }
}