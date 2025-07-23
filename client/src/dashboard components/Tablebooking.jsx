import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Tablebooking = () => {
  const [reservations, setReservations] = useState([]);
  const [loading, setLoading] = useState(true);
    const [deletingId, setDeletingId] = useState(null);

  useEffect(() => {
    const fetchReservations = async () => {
      try {
        const response = await axios.get('http://localhost:3000/api/booktable');
        setReservations(response.data);
      } catch (error) {
        console.error('❌ Error fetching reservations:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchReservations();
  }, []);


  const handleDelete = async (id) => {
  if (!window.confirm("Are you sure you want to delete this reservation?")) return;

  try {
    setDeletingId(id);
    await axios.delete(`http://localhost:3000/api/booktable/${id}`);
    setReservations((prev) => prev.filter((res) => res._id !== id));
  } catch (err) {
    console.error("Error deleting reservation:", err);
    alert("Failed to delete reservation");
  } finally {
    setDeletingId(null);
  }
};



  if (loading) return <p className="text-center">Loading reservations...</p>;

  return (
    <div className="max-w-4xl mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4">Table Reservations</h2>
      {reservations.length === 0 ? (
        <p>No reservations found.</p>
      ) : (
        <div className="space-y-4">
          {reservations.map((res) => (
            <div key={res._id} className="p-4 border border-gray-300 rounded-lg shadow-sm">
              <p><strong>Name:</strong> {res.name}</p>
              <p><strong>Email:</strong> {res.email}</p>
              <p><strong>Phone:</strong> {res.phone}</p>
              <p><strong>Persons:</strong> {res.persons}</p>
              <p><strong>Date:</strong> {new Date(res.date).toLocaleDateString()}</p>
              <p><strong>Time:</strong> {res.time}</p>
              <p><strong>Note:</strong> {res.note || 'No note'}</p>
              <p className="text-sm text-gray-500">Booked at: {new Date(res.createdAt).toLocaleString()}</p>
               <button
  onClick={() => handleDelete(res._id)}
  disabled={deletingId === res._id}
  className="mt-2 bg-orange-500 hover:bg-red-600 text-white px-3 py-1 rounded w-20 h-10"
>
  {deletingId === res._id ? "Deleting..." : "Delete"}
</button>

            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Tablebooking;
