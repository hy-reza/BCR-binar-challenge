const urlSearchParams = new URLSearchParams(window.location.search)
const params = Object.fromEntries(urlSearchParams.entries())


let cap = urlSearchParams.get('capacity')
let date = urlSearchParams.get('date')

const app = new App()
app.init().then(app)

