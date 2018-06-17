module.exports = app => {
    app.listen(app.get("port"), () => console.log(`server listen on port ${app.get("port")}`));
}