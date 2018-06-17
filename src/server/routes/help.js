module.exports = app => {
    app.get('/help', (req, res)=>{
        res.send('<h1>hi im help api</h1>')
    })
}