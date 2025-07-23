import React, { useEffect, useState } from "react";
import axios from "axios";

const BASE_URL = "http://localhost:3000"; // Replace with your actual backend port

function ChefManagement() {
  const [chefs, setChefs] = useState([]);
  const [form, setForm] = useState({
    name: "",
    position: "Chef Master",
    image: "",
    social: [{ icon: "", link: "" }],
  });
  const [editingId, setEditingId] = useState(null);

  // Fetch all chefs
  const fetchChefs = async () => {
    try {
      const res = await axios.get(`${BASE_URL}/api/chefs`);
      setChefs(res.data || []);
    } catch (err) {
      console.error("Error fetching chefs:", err);
    }
  };

  useEffect(() => {
    fetchChefs();
  }, []);

  // Handle input change
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // Handle social input
  const handleSocialChange = (index, field, value) => {
    const updated = [...form.social];
    updated[index][field] = value;
    setForm({ ...form, social: updated });
  };

  const addSocial = () => {
    setForm({ ...form, social: [...form.social, { icon: "", link: "" }] });
  };

  const removeSocial = (index) => {
    const updated = [...form.social];
    updated.splice(index, 1);
    setForm({ ...form, social: updated });
  };

  // Create or Update
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (editingId) {
        await axios.put(`${BASE_URL}/api/chefs/${editingId}`, form);
      } else {
        await axios.post(`${BASE_URL}/api/chefs`, form);
      }
      setForm({ name: "", position: "Chef Master", image: "", social: [{ icon: "", link: "" }] });
      setEditingId(null);
      fetchChefs();
    } catch (err) {
      console.error("Error saving chef:", err);
    }
  };

  // Edit
  const handleEdit = (chef) => {
    setForm(chef);
    setEditingId(chef._id);
  };

  // Delete
  const handleDelete = async (id) => {
    if (!window.confirm("Are you sure you want to delete this chef?")) return;
    try {
      await axios.delete(`${BASE_URL}/api/chefs/${id}`);
      fetchChefs();
    } catch (err) {
      console.error("Error deleting chef:", err);
    }
  };

  return (
    <div className="max-w-5xl mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4">{editingId ? "Edit Chef" : "Add New Chef"}</h2>

      <form onSubmit={handleSubmit} className="space-y-4 mb-8">
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={form.name}
          onChange={handleChange}
          className="w-full p-2 border rounded"
          required
        />
        <input
          type="text"
          name="position"
          placeholder="Position"
          value={form.position}
          onChange={handleChange}
          className="w-full p-2 border rounded"
        />
        <input
          type="text"
          name="image"
          placeholder="Image URL"
          value={form.image}
          onChange={handleChange}
          className="w-full p-2 border rounded"
          required
        />

        <div>
          <label className="block font-medium mb-1">Social Links</label>
          {form.social.map((social, index) => (
            <div key={index} className="flex gap-4 mb-2">
              <input
                type="text"
                placeholder="Icon class (e.g., fab fa-facebook)"
                value={social.icon}
                onChange={(e) => handleSocialChange(index, "icon", e.target.value)}
                className="w-1/2 p-2 border rounded"
                required
              />
              <input
                type="text"
                placeholder="Link"
                value={social.link}
                onChange={(e) => handleSocialChange(index, "link", e.target.value)}
                className="w-1/2 p-2 border rounded"
                required
              />
              {form.social.length > 1 && (
                <button
                  type="button"
                  onClick={() => removeSocial(index)}
                  className="text-red-500 text-sm"
                >
                  Remove
                </button>
              )}
            </div>
          ))}
          <button
            type="button"
            onClick={addSocial}
            className="text-sm text-blue-600 hover:underline"
          >
            + Add Social Link
          </button>
        </div>

        <button type="submit" className="bg-green-600 text-white px-4 py-2 rounded">
          {editingId ? "Update Chef" : "Add Chef"}
        </button>
      </form>

      <h3 className="text-xl font-semibold mb-2">Chef List</h3>
      {chefs.length === 0 ? (
        <p>No chefs found.</p>
      ) : (
        <table className="w-full border text-center">
          <thead>
            <tr className="bg-gray-200">
              <th className="p-2 border">Image</th>
              <th className="p-2 border">Name</th>
              <th className="p-2 border">Position</th>
              <th className="p-2 border">Social</th>
              <th className="p-2 border">Actions</th>
            </tr>
          </thead>
          <tbody>
            {chefs.map((chef) => (
              <tr key={chef._id}>
                <td className="p-2 border">
                  <img src={chef.image} alt={chef.name} className="h-16 mx-auto rounded" />
                </td>
                <td className="p-2 border">{chef.name}</td>
                <td className="p-2 border">{chef.position}</td>
                <td className="p-2 border">
                  <div className="flex justify-center gap-2">
                    {chef.social.map((s, i) => (
                      <a
                        key={i}
                        href={s.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-700 hover:text-orange-500"
                      >
                        <i className={s.icon}></i>
                      </a>
                    ))}
                  </div>
                </td>
                <td className="p-2 border">
                  <button
                    onClick={() => handleEdit(chef)}
                    className="bg-blue-500 text-white px-2 py-1 rounded mr-2"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => handleDelete(chef._id)}
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

export default ChefManagement;
