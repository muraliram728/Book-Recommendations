exports.getProducts = (req, res, next) => {
    res.status(200).json({
        success: true,
        message: "this rout show all the product in database"
    })
}