import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import bcrypt from 'bcrypt';



const app = express();
app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 3000;

// MongoDB connection
const MONGO_URI = "mongodb+srv://pramodsupun06:kTxTDdS1ybbKSOV7@cluster0.dgv3yjl.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

mongoose
  .connect(MONGO_URI)
  .then(() => console.log("MongoDB connected successfully"))
  .catch((err) => console.error("MongoDB connection error:", err));

// -------------------- Item Schema --------------------
const itemSchema = new mongoose.Schema({
  title: { type: String, required: true },
  describe: { type: String, required: true },
  price: { type: Number, required: true },
  picture: { type: String, required: true },
});

const Item = mongoose.model("Item", itemSchema);

// Create item
app.post("/api/items", async (req, res) => {
  try {
    const item = new Item(req.body);
    const saved = await item.save();
    res.status(201).json(saved);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// Get all items
app.get("/api/items", async (req, res) => {
  try {
    const items = await Item.find();
    res.json(items);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Get item by ID
app.get("/api/items/:id", async (req, res) => {
  try {
    const item = await Item.findById(req.params.id);
    if (!item) return res.status(404).json({ error: "Item not found" });
    res.json(item);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Update item
app.put("/api/items/:id", async (req, res) => {
  try {
    const updated = await Item.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });
    if (!updated) return res.status(404).json({ error: "Item not found" });
    res.json(updated);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// Delete item
app.delete("/api/items/:id", async (req, res) => {
  try {
    const deleted = await Item.findByIdAndDelete(req.params.id);
    if (!deleted) return res.status(404).json({ error: "Item not found" });
    res.json({ message: "Item deleted" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// -------------------- Chef Schema --------------------
const chefSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    position: { type: String, default: "Chef Master" },
    image: { type: String, required: true },
    social: [
      {
        icon: { type: String, required: true },
        link: { type: String, required: true },
      },
    ],
  },
  { timestamps: true }
);

const Chef = mongoose.model("Chef", chefSchema);

// Create chef
app.post("/api/chefs", async (req, res) => {
  try {
    const newChef = new Chef(req.body);
    const savedChef = await newChef.save();
    res.status(201).json(savedChef);
  } catch (error) {
    res.status(400).json({ error: 'Failed to create chef', details: error.message });
  }
});

// Get all chefs
app.get("/api/chefs", async (req, res) => {
  try {
    const chefs = await Chef.find();
    res.status(200).json(chefs);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch chefs' });
  }
});

// Get single chef
app.get("/api/chefs/:id", async (req, res) => {
  try {
    const chef = await Chef.findById(req.params.id);
    if (!chef) return res.status(404).json({ error: "Chef not found" });
    res.json(chef);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch chef' });
  }
});

// Update chef
app.put("/api/chefs/:id", async (req, res) => {
  try {
    const updatedChef = await Chef.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });
    if (!updatedChef) return res.status(404).json({ error: "Chef not found" });
    res.json(updatedChef);
  } catch (error) {
    res.status(400).json({ error: 'Failed to update chef', details: error.message });
  }
});

// Delete chef
app.delete("/api/chefs/:id", async (req, res) => {
  try {
    const deletedChef = await Chef.findByIdAndDelete(req.params.id);
    if (!deletedChef) return res.status(404).json({ error: "Chef not found" });
    res.json({ message: "Chef deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: 'Failed to delete chef' });
  }
});



// Contact Schema
const contactSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Name is required"],
    trim: true,
  },
  email: {
    type: String,
    required: [true, "Email is required"],
    trim: true,
    lowercase: true,
    match: [/\S+@\S+\.\S+/, "Email is invalid"],
  },
  subject: {
    type: String,
    required: [true, "Subject is required"],
    trim: true,
  },
  message: {
    type: String,
    required: [true, "Message is required"],
    trim: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const Contact = mongoose.model("Contact", contactSchema);

// POST /api/contact
app.post('/api/contacts', async (req, res) => {
  try {
    const { name, email, subject, message } = req.body;

    // Basic validation
    if (!name || !email || !subject || !message) {
      return res.status(400).json({ error: "All fields are required." });
    }

    const newContact = new Contact({ name, email, subject, message });
    await newContact.save();

    res.status(201).json({ message: "Message submitted successfully." });
  } catch (error) {
    console.error("Error saving contact:", error);
    res.status(500).json({ error: "Something went wrong." });
  }
});







// GET request එකක් handle කරන route එක
app.get('/api/contacts', async (req, res) => {
  try {
    // MongoDB එකෙන් Contact collection එකේ සියලුම data ගන්නවා
    const contacts = await Contact.find().sort({ createdAt: -1 }); // අලුත් එක පළමුවෙන්

    // success වුනොත් JSON format එකෙන් response එක client එකට යවයි
    res.status(200).json(contacts);
  } catch (err) {
    // error එකක් අවිස්සෙම console එකට print කරනවා
    console.error("❌ Error fetching contacts:", err);

    // client එකට 500 Internal Server Error එකක් 
    res.status(500).json({ error: "Server error" });
  }
});


// DELETE /api/contacts/:id
app.delete('/api/contacts/:id', async (req, res) => {
  try {
    const { id } = req.params;

    const deletedContact = await Contact.findByIdAndDelete(id);

    if (!deletedContact) {
      return res.status(404).json({ error: "Contact not found." });
    }

    res.status(200).json({ message: "Contact deleted successfully." });
  } catch (error) {
    console.error("Error deleting contact:", error);
    res.status(500).json({ error: "Server error." });
  }
});






// Book A TableBooking
const booktableSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Name is required'],
    trim: true,
  },
  email: {
    type: String,
    required: [true, 'Email is required'],
    trim: true,
    lowercase: true,
    match: [/\S+@\S+\.\S+/, 'Email is invalid'],
  },
  persons: {
    type: Number,
    required: [true, 'Number of persons is required'],
    min: 1,
  },
  phone: {
    type: String,
    required: [true, 'Phone number is required'],
    match: [/^\d{10}$/, 'Phone number must be 10 digits'],
  },
  date: {
    type: Date,
    required: [true, 'Date is required'],
  },
  time: {
    type: String,
    required: [true, 'Time is required'],
  },
  note: {
    type: String,
    trim: true,
  },
}, { timestamps: true });

const Booktable = mongoose.model("Booktable", booktableSchema);





app.post('/api/booktable', async (req, res) => {
  try {
    const { name, email, persons, phone, date, time, note } = req.body;

    if (!name || !email || !persons || !phone || !date || !time) {
      return res.status(400).json({ error: 'Please fill all required fields.' });
    }

    const booking = new Booktable({ name, email, persons, phone, date, time, note });
    await booking.save();

    res.status(201).json({ message: 'Table booked successfully', booking });
  } catch (err) {
    console.error('❌ Server Error:', err);
    res.status(500).json({ error: 'Server error' });
  }
});




// GET: Fetch all reservations
app.get('/api/booktable', async (req, res) => {
  try {
    const reservations = await Booktable.find().sort({ createdAt: -1 });
    res.status(200).json(reservations);
  } catch (error) {
    console.error('❌ Failed to fetch reservations:', error);
    res.status(500).json({ error: 'Server error' });
  }
});

app.delete('/api/booktable/:id', async (req, res) => {
  try {
    const { id } = req.params;

    const reservations = await Booktable.findByIdAndDelete(id);

    if (!reservations) {
      return res.status(404).json({ error: "Reservation not found." });
    }

    res.status(200).json({ message: "Reservation deleted successfully." });
  } catch (error) {
    console.error("Error deleting reservation:", error);
    res.status(500).json({ error: "Server error." });
  }
});



// blog
const blogPostSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, 'Blog title is required'],
      trim: true,
    },
    image: {
      type: String,
      required: [true, 'Image URL is required'],
    },
    excerpt: {
      type: String,
      required: [true, 'Excerpt is required'],
    },
    content: {
      type: String,
      required: [true, 'Content is required'],
    },
    category: {
      type: String,
      required: [true, 'Category is required'],
    },
    comments: {
      type: Number,
      default: 0,
    },
    date: {
      day: {
        type: Number,
        required: true,
      },
      month: {
        type: String,
        required: true,
      },
    },
  },
  { timestamps: true } // This will automatically add createdAt and updatedAt
);

const BlogPost = mongoose.model('BlogPost', blogPostSchema);

// ✅ Create blog
app.post('/api/blogPost', async (req, res) => {
  try {
    const blog = await BlogPost.create(req.body);
    res.status(201).json(blog);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// ✅ Get all blogs
app.get('/api/blogPost', async (req, res) => {
  try {
    const blogs = await BlogPost.find().sort({ createdAt: -1 });
    res.json(blogs);
  } catch (err) {
    res.status(500).json({ error: 'Server Error' });
  }
});

// ✅ Get single blog by ID
app.get('/api/blogPost/:id', async (req, res) => {
  try {
    const blog = await BlogPost.findById(req.params.id);
    if (!blog) return res.status(404).json({ error: 'Blog not found' });
    res.json(blog);
  } catch (err) {
    res.status(400).json({ error: 'Invalid ID' });
  }
});

// ✅ Update blog
app.put('/api/blogPost/:id', async (req, res) => {
  try {
    const blog = await BlogPost.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!blog) return res.status(404).json({ error: 'Blog not found' });
    res.json(blog);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// ✅ Delete blog
app.delete('/api/blogPost/:id', async (req, res) => {
  try {
    const blog = await BlogPost.findByIdAndDelete(req.params.id);
    if (!blog) return res.status(404).json({ error: 'Blog not found' });
    res.json({ message: 'Blog deleted successfully' });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});


// register
const userSchema = new mongoose.Schema(
  {
    firstName: {
      type: String,
      required: [true, 'First name is required'],
      trim: true,
    },
    lastName: {
      type: String,
      required: [true, 'Last name is required'],
      trim: true,
    },
    email: {
      type: String,
      required: [true, 'Email is required'],
      unique: true,
      lowercase: true,
    },
    password: {
      type: String,
      required: [true, 'Password is required'],
      minlength: 6,
    },
  },
  { timestamps: true }
);

// Hash password before saving
userSchema.pre('save', async function (next) {
  if (!this.isModified('password')) return next();
  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
  next();
});

const User = mongoose.model('User', userSchema);

app.post('/api/register', async (req, res) => {
  const { firstName, lastName, email, password } = req.body;

  try {
    // Check if user already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: 'Email already in use' });
    }

    // Create new user
    const newUser = new User({
      firstName,
      lastName,
      email,
      password,
    });

    await newUser.save();

    res.status(201).json({ message: 'User registered successfully' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server error' });
  }
});



// @POST /api/login

userSchema.methods.matchPassword = async function (enteredPassword) {
  return await bcrypt.compare(enteredPassword, this.password);
};

app.post('/api/login', async (req, res) => {
  const { email, password } = req.body;

  try {
    // Find user by email
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ message: 'Invalid email or password' });
    }

    // Check password
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ message: 'Invalid email or password' });
    }

    // Optionally generate a token (e.g., JWT) here

    res.status(200).json({
      message: 'Login successful',
      user: {
        id: user._id,
        firstName: user.firstName,
        lastName: user.lastName,
        email: user.email,
      },
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server error' });
  }
});



// -------------------- Start Server --------------------
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
