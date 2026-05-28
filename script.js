const root = document.getElementById("root")
const btn = document.querySelector("button")
const url = "http://127.0.0.1:5000/products"
btn.addEventListener('click', ()=>{
    getProducts(url)
})
async function getProducts(url) {
    try {
        const response = await fetch(url)
        console.log(response)
    } catch (error) {
        console.log(error)
    }
}