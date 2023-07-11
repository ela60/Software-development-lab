const express = require("express");
const mongoose = require('mongoose');
//const { title } = require("process");

const app = express();

const port = 3008;

app.use(express.json());
app.use(express.urlencoded({extended:true}));

//CRUD => create,read,update,delete

//create product schema
const productsSchema = new mongoose.Schema({
    title:String,
    price: Number,
    description: String,
    createdAt:{
        type: Date,
        default:Date.now,  
    },
});
//create product model
const product = mongoose.model("products", productsSchema);


//connection to database (async function,await better cz jekono jaiga dea call kora jai)
const connectDB = async () => {
    try {
        await mongoose.connect('mongodb://127.0.0.1:27017/testelaDB');
        console.log("DB is connected");
    }
    catch (error) {
        console.log("DB is not connected");
        console.log(error);
        process.exit(1);
    }
    
};

//connection to database
// mongoose
//     .connect('mongodb://127.0.0.1:27017/testelaDB')
//     .then(() => console.log("DB is connected"))
//     .catch((error) => {
//         console.log("DB is not connected");
//         console.log(error);
//         process.exit(1);
//     });

app.get("/", (req, res) => {
    res.send("welcome to homepage");
});

app.post("/products",async (req, res) => {
    try {
        //get data from request body
        
        const newProduct = new product({
            title: req.body.title,
            price: req.body.price,
            description: req.body.description,
        });
        const productData = await newProduct.save();
        
        res.status(201).send(productData);
    } 
    catch (error) {
        res.status(500).send({ message: error.message });
 
    }
});

app.get("/products/:id", async (req, res) => {
    try {
        const id = req.params.id;//id ta kuja pete hoi jevabe
        const products = await product.find({_id:id});
        if (products) {
            res.status(200).send({ 
                success:true,
                message: "return single product",
                    data :product
             });
         
        } else {
            res.status(404).send({
                message: "products not found"
            });
        }
        
    } catch (error) {
        res.status(500).send({ message: error.message });
    }
});

app.get("/products", async (req, res) => {
    try {
        const price = req.query.price;//id ta kuja pete hoi jevabe
        let products;
        if (price) {
            products = await product.find({
                price: {
                    $gt:
                        price
                }
            });
        } else {
            products = await product.find();
        }
        if (products) {
            res.status(200).send({
                success:true,
            })
        }
        
    } catch (error) {
        res.status(500).send({ message: error.message });
    }
});

app.delete("/products/:id",async (req, res) => {
    try {
        const id = req.params.id;
        const products = await product.deleteOne({ _id: id });
        if (products) {
            res.status(200).send({
                success: true,
                message: "return single product",
                data: product
            });
         
        } else {
            res.status(404).send({
                message: "products was not deleted this id ",
            });
        }
    } catch (error) {
        res.status(500).send({ message: error.message });
        
    }
})

app.listen(port,async() => {
    console.log(`server is running successfully.at http://localhost :${port}..`);
    await connectDB();
});
app.put("products/:id", async (req, res) => {
    try {
        const id = req.params.id;
        const updatedProduct = await product.updateOne({ _id: id }, {
            $set: {
                rating: 4.8,
            },
        });
        if (updatedProduct) {
            res.status(200).send({
                success: true,
                message: "return single product",
                data: updatedProduct,
            });
         
        } else {
            res.status(404).send({
                success: false,
                message: "products was not deleted this id ",
            });
        }
    } catch (error) {
        
    }
});