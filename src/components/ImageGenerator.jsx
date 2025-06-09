import React, { useState } from 'react';

const ImageGenerator = () => {

  const [prompt, setPrompt] = useState('');
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(false);

  const generateImages = async () => {
    if (!prompt.trim()) return alert("Please enter a prompt");

    setLoading(true);
    setImages(null);

    try {
      const encodedPrompt = encodeURIComponent("photorealistic " + prompt)
      const imageUrl = `https://image.pollinations.ai/prompt/${encodedPrompt}`;
      setImages([imageUrl])
    } catch (error) {
      console.error("Error generating image:", error);
      alert("Failed to generate image.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-6">
      <div className="flex gap-4 mb-8">
        <input
          type="text"
          placeholder="Enter your image prompt..."
          className="flex-grow border border-gray-300 rounded px-4 py-2 text-lg outline-none focus:ring-2 focus:ring-purple-600"
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === 'Enter') generateImages();
            disabled = { loading }
          }}
        />
        <button
          onClick={generateImages}
          className="bg-purple-700 text-white px-6 rounded hover:bg-purple-800 transition"
          disabled={loading}
        >
          {loading ? 'Generating...' : 'Generate'}
        </button>
      </div>

      {images.length > 0 && (
        <div className="rounded overflow-hidden shadow-lg max-w-md mx-auto">
          <img
            src={images[0]}
            alt="Generated"
            className="w-full h-auto"
            loading="lazy"
            onError={(e) => {
              e.target.onerror = null;
              e.target.src = "https://via.placeholder.com/512x512?text=Image+not+found";
            }}
          />
        </div>
      )}
    </div>
  )
}

export default ImageGenerator