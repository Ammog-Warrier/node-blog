const express=require("express");
const morgan= require("morgan");
const mongoose=require("mongoose");
const { MongoClient, ServerApiVersion } = require("mongodb");

const blogRoutes=require("./routes/blogRoutes");


//setting up ana express app
const app =express();

//connect to mongoDB
const uri = 'mongodb+srv://nodeuser:test12345@cluster0.kic7m.mongodb.net/nodetuts?retryWrites=true&w=majority&appName=Cluster0'
mongoose.connect(uri)
  .then(() => app.listen(3000))
  .catch((err) => console.log("DB Connection Error:", err));








//register view engien for our usage
app.set('view engine','ejs');
app.set("views",__dirname);//ideally create a views folder and pt everyuthing underneath that

app.use(express.urlencoded({ extended: true }));


app.use(express.static('public'));

app.use((req, res, next) => {
  console.log('new request made:');
  console.log('host: ', req.hostname);
  console.log('path: ', req.path);
  console.log('method: ', req.method);
  next();
});

app.use((req, res, next) => {
  console.log('in the next middleware');
  next();
});

app.use(morgan('dev'));


app.get('/',(req,res)=>{
    res.redirect('/blogs');
})
/* const path = require("path");

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "..", "index.html"));
});
*/

app.get('/about',(req,res)=>{
    res.render('about',{title:'About'});
})
app.get('/about-us',(req,res)=>{
    res.redirect("/about");
})

app.use(blogRoutes);



app.use((req,res)=>{
    res.status(404).render('404',{title:'404'});
})
