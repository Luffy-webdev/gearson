const path = require('path');
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');
const router = express.Router();
const app = express();
const dotenv=require('dotenv');
const axios = require('axios');

dotenv.config();

//Middleware
app.use(express.json());
const PORT = process.env.PORT || 1114;

const Data = require('./models/data');

require('dotenv').config();
const nodemailer = require('nodemailer');
const MONGO_URL = process.env.MONGO_URI;


app.use(express.urlencoded({ extended: false }));

app.use(express.static("client/build"));
app.get('*', (req,res) =>{
    res.sendFile(path.join(__dirname+'/client/build/index.html'));
});
if (process.env.NODE_ENV === 'production') {
    app.use(express.static('/home/devang/Desktop/website/client/build'));
}

mongoose.connect(MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

let transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 465,
    secure: true,
    auth: {
        user: process.env.EMAIL,
        pass: process.env.PASSWORD 
    }
});

app.post('/contactDetails', (req, res) => {
    // try{
    let mailOptions = {
        from: req.body.email, 
        to:process.env.EMAIL, 
        subject: 'New Responce Recived',
        text: `
            Someone tried to contact you.
            Details:
            ${req.body.name} 
            ${req.body.email}
        `
    };
    transporter.sendMail(mailOptions, (err, data) => {
        if (err) {
            return console.log('Error occurs');
        }
        return console.log('Email sent!!!');
    });
    res.send({
        success: true,
        message: 'It works'
      });

      const details = Data.email({
          name:req.body.name,
          email:req.body.email
      });
      details.save().then(data => {
        res.json(data);
        console.log(data);
    }).catch(err => {
        res.json({message: err})
    });
});

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });
  






mongoose.connection.on('connected', () => {
    console.log("Database is connected!!");
});

app.use(cors());
app.use(bodyParser.json()); //middleware


app.get('/', (req, res) => {
    res.send(`
    <h1>
        <b>
            Gears'On!
        <b>
    </h1>
    <h2>
        Routes => 
        <ul>
            <li>/data => Landing page<li>
        </ul>   
    </h2>`
    )
});

app.post('/dropLinks', (req, res) => {
    const dropdownLinks = new Data.dropLinks({
        title:req.body.title,
        link:req.body.link
    });
    dropdownLinks.save().then(data => {
        res.json(data);
        console.log(data);
    }).catch(err => {
        res.json({message: err})
    });
});

app.post('/navLinks', (req, res) => {
    const navbarLinks = new Data.navLinks({
        title:req.body.title,
        link:req.body.link
    });
    navbarLinks.save().then(data => {
        res.json(data);
        console.log(data);
    }).catch(err => {
        res.json({message: err})
    });
});
app.post('/solverLinks', (req, res) => {
    const solverLinks = new Data.solverLinks({
        title:req.body.title,
        link:req.body.link
    });
    solverLinks.save().then(data => {
        res.json(data);
        console.log(data);
    }).catch(err => {
        res.json({message: err})
    });
});

app.post('/queries', (req, res) => {
    const query = new Data.queries({
        query:req.body.query,
        reply:req.body.reply
    });
    query.save().then(data => {
        res.json(data);
        console.log(data);
    }).catch(err => {
        res.json({message: err})
    });
});

app.post('/docsMaterials', (req, res) => {
    const docsMaterials = new Data.docsMaterial({
        Material:req.body.Material,
    MaterialNo:req.body.MaterialNo,
    TS:req.body.TS,
    E:req.body.E,
    D:req.body.D,
    hardness:req.body.hardness,
    Characteristics:req.body.Characteristics
    });
    docsMaterials.save().then(data => {
        res.json(data);
        console.log(data);
    }).catch(err => {
        res.json({message: err})
    });
});


app.post('/gearprocesses', (req, res) => {
    const process = new Data.gearProcesses({
        value:req.body.value,
        label:req.body.label
    });
    process.save().then(data => {
        res.json(data);
        console.log(data);
    }).catch(err => {
        res.json({message: err})
    });
});

app.post('/gearmaterials', (req, res) => {
    const material = new Data.gearMaterials({
        value:req.body.value,
        label:req.body.label
    });
    material.save().then(data => {
        res.json(data);
        console.log(data);
    }).catch(err => {
        res.json({message: err})
    });
});
app.post('/shaftSurfaceFinish', (req, res) => {
    const process = new Data.shaftSurfaceFinish({
        value:req.body.value,
        label:req.body.label
    });
    process.save().then(data => {
        res.json(data);
        console.log(data);
    }).catch(err => {
        res.json({message: err})
    });
});

app.get('/dropLinks', (req, res) => {
    Data.dropLinks.find({ }).then(data => res.json(data));
})
app.get('/shaftSurfaceFinish', (req, res) => {
    Data.shaftSurfaceFinish.find({ }).then(data => res.json(data));
})
app.get('/navLinks', (req, res) => {
    Data.navLinks.find({ }).then(data => res.json(data));
})
app.get('/solverLinks', (req, res) => {
    Data.solverLinks.find({ }).then(data => res.json(data));
})
app.get('/queries', (req, res) => {
    Data.queries.find({ }).then(data => res.json(data));
})
app.get('/gearprocesses', (req, res) => {
    Data.gearProcesses.find({ }).then(data => res.json(data));
})
app.get('/gearmaterials', (req, res) => {
    Data.gearMaterials.find({ }).then(data => res.json(data));
})
app.get('/docsMaterials', (req, res) => {
    Data.docsMaterial.find({ }).then(data => res.json(data));
})

app.get('/downloadInvoluteFile', (req, res) => {
    const file = `/home/devang/Downloads/karl-lee-sLthh9NfhPo-unsplash.jpg`;
    res.download(file);
});
app.listen(PORT, console.log(`server started at ${PORT}`));