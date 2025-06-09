import React, { useEffect, useState } from 'react';

const Community = () => {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(false);

  const prompts = [
    'a serene mountain landscape',
    'a futuristic city skyline',
    'a vibrant underwater coral reef',
    // Add more prompts as needed
  ];

  const fetchImages = async () => {
    setLoading(true);
    try {
      const fetchedImages = await Promise.all(
        prompts.map(async (prompt) => {
          const encodedPrompt = encodeURIComponent(prompt);
          const url = `https://image.pollinations.ai/prompt/${encodedPrompt}`;
          const response = await fetch(url);
          const blob = await response.blob();
          return URL.createObjectURL(blob);
        })
      );
      setImages(fetchedImages);
    } catch (error) {
      console.error('Error fetching images:', error);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchImages();
  }, []);

  return (
    <div>
      <h1>Community Gallery</h1>
      {loading ? (
        <p>Loading images...</p>
      ) : (
        <div className="image-grid">
          {images.map((src, index) => (
            <img key={index} src={src} alt={`Generated ${index}`} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Community;
