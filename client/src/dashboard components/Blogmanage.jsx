import React, { useState, useEffect } from 'react';
import axios from 'axios';

const BlogManage = () => {
  const [blogs, setBlogs] = useState([]);
  const [formData, setFormData] = useState({
    title: '',
    image: '',
    excerpt: '',
    content: '',
    category: '',
    date: { day: '', month: '' },
  });
  const [isEditing, setIsEditing] = useState(false);
  const [editId, setEditId] = useState(null);

  const API = 'http://localhost:3000/api/blogPost';

  const fetchBlogs = async () => {
    const res = await axios.get(API);
    setBlogs(res.data);
  };

  useEffect(() => {
    fetchBlogs();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === 'day' || name === 'month') {
      setFormData((prev) => ({
        ...prev,
        date: { ...prev.date, [name]: value },
      }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (isEditing) {
      await axios.put(`${API}/${editId}`, formData);
      alert('Blog updated!');
    } else {
      await axios.post(API, formData);
      alert('Blog created!');
    }
    resetForm();
    fetchBlogs();
  };

  const handleEdit = (blog) => {
    setFormData(blog);
    setEditId(blog._id);
    setIsEditing(true);
  };

  const handleDelete = async (id) => {
    if (window.confirm('Are you sure you want to delete this blog?')) {
      await axios.delete(`${API}/${id}`);
      fetchBlogs();
    }
  };

  const resetForm = () => {
    setFormData({
      title: '',
      image: '',
      excerpt: '',
      content: '',
      category: '',
      date: { day: '', month: '' },
    });
    setIsEditing(false);
    setEditId(null);
  };

  return (
    <div className="container mx-auto px-4 py-6 max-w-3xl">
      <h1 className="text-3xl font-bold mb-4 text-center">📝 Blog Manager</h1>

      <form onSubmit={handleSubmit} className="space-y-3 border p-4 rounded shadow mb-6">
        <h2 className="text-xl font-semibold">{isEditing ? '✏️ Edit Blog' : '➕ Create Blog'}</h2>
        <input name="title" placeholder="Title" value={formData.title} onChange={handleChange} className="w-full p-2 border rounded" required />
        <input name="image" placeholder="Image URL" value={formData.image} onChange={handleChange} className="w-full p-2 border rounded" required />
        <textarea name="excerpt" placeholder="Excerpt" value={formData.excerpt} onChange={handleChange} className="w-full p-2 border rounded" required />
        <textarea name="content" placeholder="Content" value={formData.content} onChange={handleChange} className="w-full p-2 border rounded" required />
        <input name="category" placeholder="Category" value={formData.category} onChange={handleChange} className="w-full p-2 border rounded" required />
        <div className="flex gap-2">
          <input name="day" type="number" placeholder="Day" value={formData.date.day} onChange={handleChange} className="w-full p-2 border rounded" required />
          <input name="month" placeholder="Month" value={formData.date.month} onChange={handleChange} className="w-full p-2 border rounded" required />
        </div>
        <div className="flex gap-3">
          <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded">
            {isEditing ? 'Update Blog' : 'Create Blog'}
          </button>
          {isEditing && (
            <button type="button" onClick={resetForm} className="bg-gray-500 text-white px-4 py-2 rounded">
              Cancel
            </button>
          )}
        </div>
      </form>

      <h2 className="text-2xl font-semibold mb-2">📚 All Blogs</h2>
      {blogs.map((blog) => (
        <div key={blog._id} className="border p-4 mb-4 rounded shadow">
          <h3 className="text-xl font-bold">{blog.title}</h3>
          <img src={blog.image} alt={blog.title} className="w-full h-60 object-cover rounded my-2" />
          <p>{blog.excerpt}</p>
          <p><strong>Category:</strong> {blog.category}</p>
          <p><strong>Date:</strong> {blog.date.day} {blog.date.month}</p>
          <div className="flex gap-2 mt-2">
            <button onClick={() => handleEdit(blog)} className="bg-yellow-500 text-white px-3 py-1 rounded">Edit</button>
            <button onClick={() => handleDelete(blog._id)} className="bg-red-600 text-white px-3 py-1 rounded">Delete</button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default BlogManage;
