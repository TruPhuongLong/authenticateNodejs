module.exports = app => {
    app.get('/', (req, res)=>{
        res.send('<h1>hi im index api</h1>')
    })
}