
const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors=require("cors")
const dbrl =
"mongodb+srv://Admin:Admin@cluster0.ummc3.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";

const app = express();

app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

app.use(bodyParser.json());

app.use(cors())
app.use(bodyParser.json())

mongoose
  .connect(dbrl, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log("Connected to the database");
  })
  .catch((res) => {
    console.log("Could not connect to database");
    process.exit();
  });

  // Schema part============================================================
const StudentSchema = mongoose.Schema(
  {
    roll: "",
    name: "",
    courses: "",
    email: "",
    date:[]
  },
  {
    timestamps: true,
  }
);
const TeacherSchema = mongoose.Schema(
  {
    Srno: "",
    name: "",
    subject: "",
  },
  {
    timestamps: true,
  }
);
const UserSchema = mongoose.Schema(
  {
    name: "",
    email: "",
    password: "",
    role:""
  },
  {
    timestamps: true,
  }
);

const FeedSchema  = mongoose.Schema(
  {
    
    name: "",
    email: "",
    rating:"",
    comments:"",
  },
  {
    timestamps: true,
  }
);
const ContactSchema  = mongoose.Schema(
  {
    
    name: "",
    email: "",
    message:"",
    
  },
  {
    timestamps: true,
  }
);

// model part=======================================

const Student = mongoose.model("Student", StudentSchema);
const Teacher = mongoose.model("Teacher", TeacherSchema);
const User = mongoose.model("Users", UserSchema);
const Feedback=mongoose.model("Feedback",FeedSchema);
const Contact=mongoose.model("Contact", ContactSchema)



app.get("/teachers", (req, res) => {
  Teacher.find()
    .then((teachers) => {
      res.send(teachers);
    })
    .catch((err) => {
      res.send({
        message: "some error happened",
      });
    });
});

app.get("/students", (req, res) => {
  Student.find()
    .then((students) => {
      res.send(students);
    })
    .catch((err) => {
      res.send({
        message: " error ",
      });
    });
});
app.post("/teachers", (req, res) => {
  const teacher = new Teacher({
    Srno: req.body.Srno,
    name: req.body.name,
    subject: req.body.subject,
  });
  teacher
    .save()
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.send({
        message: "some error happened",
      });
    });
});
app.post("/students", (req, res) => {
  console.log("posting data")
  const student = new Student({
    roll: req.body.roll,
    name: req.body.name,
    courses: req.body.courses,
    email: req.body.email,
  });
  console.log(student)
  student
    .save()
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.send({
        message: "Unbale to add",
      });
    });
});
app.post("/users", (req, res) => {
 
  const user = new User({
       name: req.body.fullname,
        email: req.body.email,
        password: req.body.password,
        role:req.body.role
  });
  console.log(user)
  user
    .save()
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.send({
        message: "Unbale to add",
      });
    });
});
app.get('/login',(req,res)=>{
  User.find()
  .then((users) => {
    res.send(users);
  })
  .catch((err) => {
    res.send({
      message: " error ",
    });
  });

})
app.post("/feedback", (req, res) => {
  const feedback = new Feedback({
    name: req.body.name,
    email: req.body.email,
    rating:req.body.rating,
    comments: req.body.comments,
  });
  console.log(feedback)
  feedback
    .save()
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.send({
        message: "some error happened",
      });
    });
});
app.post("/contacts", (req, res) => {
  const contact = new Contact({
    name: req.body.name,
    email: req.body.email,
    message: req.body.message,
  });
  
  contact
    .save()
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.send({
        message: "some error happened",
      });
    });
});

app.put("/students/:id",(req,res)=>{
  console.log("put is felling ",req.body.date)
   
  Student.findByIdAndUpdate(req.params.id,{
    roll:req.body.roll,
    name:req.body.name,
    courses:req.body.courses,
    email:req.body.email,
    date:req.body.date

  },{new: true}).then(student=>{
    res.send(student)
  }).catch((err)=>{
    res.send({
      message:"error"
    })
  })
})

app.get("/students/:roll", (req, res) => {
  
  Student.findOne({roll:req.params.roll})
    .then((students) => {
      res.send(students);
    })
    .catch((err) => {
      res.send({
        message: " error ",
      });
    });
});

app.delete("/students/:id",(req,res)=>{
  console.log("deleting ",req.params.id)
  Student.findByIdAndRemove(req.params.id).then(student => {
    Student.find().then(students => {
        res.send(students)
    }).catch((err) => {
        res.send({
            message: "some error happened"
        })
    })
}).catch((err) => {
    res.send({
        message: "some error happened"
    })
})
})

app.get("/feedback", (req, res) => {
  Feedback.find()
    .then((teachers) => {
      res.send(teachers);
    })
    .catch((err) => {
      res.send({
        message: "some error happened",
      });
    });
});


app.listen(4000, () => {
  console.log("App Server Run");
});















