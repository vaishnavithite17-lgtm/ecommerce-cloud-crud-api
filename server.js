const fs=require('fs')// this loads the buil-in file system module(fs) in Node.js it gives functions to work with files and directories

const express= require('express') //creates server

const app=express()

const PORT=5000

const cors=require('cors')
app.use(cors())

app.use(express.json()) //allows server to read incoming json data

let products = JSON.parse(fs.readFileSync('data.json'))

app.get('/',(req, res)=>{ // when someone visits URL ,//req->request(what user asks)
    res.send('Server is running-ecommerce-cloud application')// res response(what you should send back)
})

app.get('/products',(req,res)=>{
    res.json(products)
})

app.post('/products',(req,res)=>{
    const newProduct=req.body //req.body data sent by user 
    console.log(req.body)
    products.push(newProduct) //now we are pushing that data in our products array

    fs.writeFileSync('data.json',JSON.stringify(products))

    res.json({ // then this response goes back 
        message:'Product added',
        product: newProduct
    })

})

app.delete('/products/:id',(req,res)=>{// it means we are creating delete API route url pattern: /products/:id  :id- it is a dynamic parameter
    const id=parseInt(req.params.id) // req.params.id -> it gets the id from url and parseInt connverts it from string->number
    products=products.filter(p=>p.id!==id)//deleting logic  what filter does is that it goes through all the products and keep only those that do not match with the id 

    fs.writeFileSync('data.json',JSON.stringify(products)) //converts your JavaScript object/array into JSON text
    //fs.writeFileSync(...) → writes that JSON text into a file on disk

    res.json({
        message:'product deleted'
    })
})

app.put('/products/:id',(req,res)=>{ //used to update data
    const id=parseInt(req.params.id)
    const updatedData=req.body

    products=products.map(p=>{//map() loops and modifies array
        if(p.id===id){
            return{...p,...updatedData}//keep old data overwrites only what is sent
        }
        return p
    })
    fs.writeFileSync('data.json',JSON.stringify(products))

    res.json({
        message: 'product updated'
    })
})



app.listen(PORT, ()=>{// listen(start server)
    console.log(`server running on port ${PORT}`)
})