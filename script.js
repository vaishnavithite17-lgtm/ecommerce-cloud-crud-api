const API_URL = 'http://localhost:5000/products'

async function getProducts() {
    try {
        const res = await fetch("http://localhost:5000/products")
        const data = await res.json()

        const list = document.getElementById('productList')
        list.innerHTML = ''

        data.forEach(p => {
            const li = document.createElement('li')
            li.innerHTML = `${p.name} - ₹${p.price}
            <button onclick="deleteProduct(${p.id})">Delete</button>
            <button onclick="updateProduct(${p.id})">Update</button>`
            list.appendChild(li)
        })
    } catch (err) {
        console.log(err)
    }
}

async function addProduct() {
    const name = document.getElementById('name').value
    const price = document.getElementById('price').value

    const newProduct = {
        id: Date.now(),
        name,
        price: Number(price)
    }

    await fetch(API_URL, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(newProduct)
    })

    getProducts()
}

async function deleteProduct(id) {
    await fetch(`${API_URL}/${id}`, {
        method: 'DELETE'
    })

    getProducts()
}

async function updateProduct(id) {
    const newName = prompt("Enter new name")
    const newPrice = prompt("Enter new price")

    const updatedData = {}

    if (newName) updatedData.name = newName
    if (newPrice) updatedData.price = Number(newPrice)

    await fetch(`http://localhost:5000/products/${id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(updatedData)
    })

    getProducts()
}

getProducts()