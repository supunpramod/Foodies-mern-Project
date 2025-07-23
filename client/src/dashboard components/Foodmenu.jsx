import React, { useEffect, useState } from "react";
import axios from "axios";

const BASE_URL = "http://localhost:3000"; // <-- Your backend port here

function ItemManagement() {
  const [items, setItems] = useState([]);
  const [form, setForm] = useState({ title: "", describe: "", price: "", picture: "" });
  const [editingId, setEditingId] = useState(null);

  // Fetch all items
  const fetchItems = async () => {
    try {
      const res = await axios.get(`${BASE_URL}/api/items`);
      if (Array.isArray(res.data)) {
        setItems(res.data);
      } else {
        setItems([]);
      }
    } catch (err) {
      console.error("Error fetching items:", err);
    }
  };

  useEffect(() => {
    fetchItems();
  }, []);

  // Handle input
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // Create or Update item
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (editingId) {
        await axios.put(`${BASE_URL}/api/items/${editingId}`, form);
      } else {
        await axios.post(`${BASE_URL}/api/items`, form);
      }
      setForm({ title: "", describe: "", price: "", picture: "" });
      setEditingId(null);
      fetchItems();
    } catch (err) {
      console.error("Error saving item:", err);
    }
  };

  // Edit
  const handleEdit = (item) => {
    setForm(item);
    setEditingId(item._id);
  };

  // Delete
  const handleDelete = async (id) => {
    if (!window.confirm("Are you sure you want to delete this item?")) return;
    try {
      await axios.delete(`${BASE_URL}/api/items/${id}`);
      fetchItems();
    } catch (err) {
      console.error("Error deleting item:", err);
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4">{editingId ? "Edit Item" : "Add New Item"}</h2>

      <form onSubmit={handleSubmit} className="space-y-4 mb-8">
        <input
          type="text"
          name="title"
          placeholder="Title"
          value={form.title}
          onChange={handleChange}
          className="w-full p-2 border rounded"
          required
        />
        <input
          type="text"
          name="describe"
          placeholder="Description"
          value={form.describe}
          onChange={handleChange}
          className="w-full p-2 border rounded"
          required
        />
        <input
          type="number"
          name="price"
          placeholder="Price"
          value={form.price}
          onChange={handleChange}
          className="w-full p-2 border rounded"
          required
        />
        <input
          type="text"
          name="picture"
          placeholder="Image URL"
          value={form.picture}
          onChange={handleChange}
          className="w-full p-2 border rounded"
          required
        />
        <button type="submit" className="bg-green-500 text-white px-4 py-2 rounded">
          {editingId ? "Update Item" : "Add Item"}
        </button>
      </form>

      <h3 className="text-xl font-semibold mb-2">Item List</h3>
      {items.length === 0 ? (
        <p>No items found.</p>
      ) : (
        <table className="w-full border">
          <thead>
            <tr className="bg-gray-200">
              <th className="p-2 border">Image</th>
              <th className="p-2 border">Title</th>
              <th className="p-2 border">Description</th>
              <th className="p-2 border">Price</th>
              <th className="p-2 border">Actions</th>
            </tr>
          </thead>
          <tbody>
            {items.map((item) => (
              <tr key={item._id} className="text-center">
                <td className="p-2 border">
                  <img src={item.picture} alt={item.title} className="h-16 mx-auto" />
                </td>
                <td className="p-2 border">{item.title}</td>
                <td className="p-2 border">{item.describe}</td>
                <td className="p-2 border">Rs. {item.price}</td>
                <td className="p-2 border">
                  <button
                    onClick={() => handleEdit(item)}
                    className="bg-blue-500 text-white px-2 py-1 rounded mr-2"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => handleDelete(item._id)}
                    className="bg-red-500 text-white px-2 py-1 rounded"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default ItemManagement;
