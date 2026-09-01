import { useState } from 'react';

function ImageManager() {
  const [images, setImages] = useState([]);
  const [title, setTitle] = useState('');
  const [imageUrl, setImageUrl] = useState('');
  const [category, setCategory] = useState('');
  const [message, setMessage] = useState('');

  const handleAddImage = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:3000/api/add-image', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ title, url: imageUrl, category }),
      });
      const data = await response.json();
      setMessage(data.message);
      setTitle('');
      setImageUrl('');
      setCategory('');
      handleGetImages();
    } catch (err) {
      console.error("Error:", err);
      setMessage("Data save karne me error aaya!");
    }
  };

  const handleGetImages = async () => {
    try {
      const response = await fetch('http://localhost:3000/api/get-images');
      const data = await response.json();
      setImages(data);
      setMessage("Database se data aa gaya!");
    } catch (err) {
      console.error("Error:", err);
      setMessage("Data laane me error aaya!");
    }
  };

  return (
    <div style={{ maxWidth: '800px', margin: '20px auto', fontFamily: 'Arial' }}>
      <p style={{ color: 'green', fontWeight: 'bold', textAlign: 'center' }}>{message}</p>

      {/* Upload Form */}
      <form onSubmit={handleAddImage} style={{ background: '#f9f9f9', padding: '20px', borderRadius: '8px', boxShadow: '0 2px 5px rgba(0,0,0,0.1)' }}>
        <h3>Upload New Image</h3>
        <div style={{ marginBottom: '15px' }}>
          <input 
            type="text" placeholder="Image Title (e.g., Wedding Shoot)" 
            value={title} onChange={(e) => setTitle(e.target.value)} required
            style={{ width: '100%', padding: '10px', fontSize: '15px', borderRadius: '4px', border: '1px solid #ccc', boxSizing: 'border-box' }}
          />
        </div>
        <div style={{ marginBottom: '15px' }}>
          <input 
            type="text" placeholder="Image URL (e.g., https://images.com/photo.jpg)" 
            value={imageUrl} onChange={(e) => setImageUrl(e.target.value)} required
            style={{ width: '100%', padding: '10px', fontSize: '15px', borderRadius: '4px', border: '1px solid #ccc', boxSizing: 'border-box' }}
          />
        </div>
        <div style={{ marginBottom: '15px' }}>
          <input 
            type="text" placeholder="Category (e.g., Wedding, Wildlife)" 
            value={category} onChange={(e) => setCategory(e.target.value)} required
            style={{ width: '100%', padding: '10px', fontSize: '15px', borderRadius: '4px', border: '1px solid #ccc', boxSizing: 'border-box' }}
          />
        </div>
        <button type="submit" style={{ width: '100%', padding: '12px', fontSize: '16px', cursor: 'pointer', background: '#4CAF50', color: 'white', border: 'none', borderRadius: '5px', fontWeight: 'bold' }}>
          Upload to Database
        </button>
      </form>

      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '40px' }}>
        <h2>Saved Images List:</h2>
        <button onClick={handleGetImages} style={{ padding: '8px 15px', fontSize: '14px', cursor: 'pointer', background: '#008CBA', color: 'white', border: 'none', borderRadius: '5px' }}>
          Refresh List
        </button>
      </div>

      <hr style={{ margin: '15px 0' }} />

      {images.length === 0 ? (
        <p style={{ color: '#777' }}>Abhi koi data show nahi ho raha. Upar form se upload karein ya "Refresh List" dabayein.</p>
      ) : (
        <ul style={{ padding: 0, listStyle: 'none' }}>
          {images.map((img) => (
            <li key={img._id} style={{ margin: '12px 0', background: '#f4f4f4', padding: '15px', borderRadius: '5px', borderLeft: '4px solid #4CAF50' }}>
              <strong>Title:</strong> {img.title} <br />
              <strong>Category:</strong> {img.category} <br />
              <strong>URL:</strong> <a href={img.url} target="_blank" rel="noopener noreferrer">{img.url}</a>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default ImageManager;