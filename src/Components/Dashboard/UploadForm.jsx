import React, { useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";
import UseAxiosSecure from "../Hook/UseAxiosSecure";

const UploadForm = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [keywords, setKeywords] = useState("");
  const [images, setImages] = useState([]);
  const [uploading, setUploading] = useState(false);
  const [uploadedData, setUploadedData] = useState(null);
  const axiosSecure = UseAxiosSecure()

  const handleImageChange = (e) => {
    const files = Array.from(e.target.files).slice(0, 4);
    setImages(files);
  };

  // ✅ Convert [[text|url]] into clickable anchor tags
  const formatDescription = (text) => {
    return text.replace(
      /\[\[(.*?)\|(.*?)\]\]/g,
      (_, linkText, linkUrl) =>
        `<a href="${linkUrl}" target="_blank" rel="noopener noreferrer" class="text-blue-500 underline">${linkText}</a>`
    );
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!title || !description || !keywords || images.length === 0) {
      return toast.success("Please fill out all fields.");
    }

    setUploading(true);
    const uploadedUrls = [];

    for (const image of images) {
      const formData = new FormData();
      formData.append("image", image);

      try {
        const res = await axios.post(
          `https://api.imgbb.com/1/upload?key=baffc540f8e3a0c67d29b78ade05c0b4`,
          formData
        );
        uploadedUrls.push(res.data.data.url);
      } catch (err) {
        console.error("Image upload failed:", err);
        setUploading(false);
        return;
      }
    }

    const formattedDescription = formatDescription(description);
    const keywordArray = keywords
      .split(",")
      .map((kw) => kw.trim())
      .filter((kw) => kw.length > 0);

    const payload = {
      title,
      description: formattedDescription,
      images: uploadedUrls,
      keywords: keywordArray,
    };

    try {
      await axiosSecure.post("/blogs", payload);
      toast.success("Uploaded successfully!");

      setUploadedData(payload);
      setTitle("");
      setDescription("");
      setKeywords("");
      setImages([]);
    } catch (err) {
      console.error("DB save failed:", err);
    }

    setUploading(false);
  };

  const handleAddLink = () => {
    const textarea = document.getElementById("desc-textarea");
    const start = textarea.selectionStart;
    const end = textarea.selectionEnd;

    if (start === end) {
      alert("Please select some text to add a link.");
      return;
    }

    const selectedText = description.slice(start, end);
    const url = prompt("Enter the URL for the link:");
    if (!url) return;

    const linkSyntax = `[[${selectedText}|${url}]]`;

    const newText =
      description.substring(0, start) +
      linkSyntax +
      description.substring(end);

    setDescription(newText);
    setTimeout(() => {
      textarea.focus();
      textarea.selectionStart = textarea.selectionEnd =
        start + linkSyntax.length;
    }, 0);
  };

  return (
    <div className="mt-2">
      <form onSubmit={handleSubmit}>
        <input
          className="w-full p-2 border rounded mb-2"
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
        <br />

        <div className="relative">
          <textarea
            id="desc-textarea"
            className="w-full p-2 border rounded"
            placeholder="Description (select text and click 'Add Link')"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            maxLength={5200}
            required
            rows={5}
          ></textarea>
          <button
            type="button"
            onClick={handleAddLink}
            className="text-sm text-blue-600 font-semibold absolute right-2 top-2"
          >
            Add Link
          </button>
          {description.trim() === "" && (
            <h4 className="absolute right-2 bottom-2 text-sm text-gray-500">
              upto 5200 characters
            </h4>
          )}
        </div>

        <br />
       <div>
       <input
          className="w-full p-2 border rounded mb-2"
          type="text"
          placeholder="Keywords (comma separated)"
          value={keywords}
          onChange={(e) => setKeywords(e.target.value)}
          required
        />
        <br />
        <input
        className=""
          type="file"
          multiple
          accept="image/*"
          onChange={handleImageChange}
        />
        <h3 className="text-red-600">Upto 4 Images</h3>
       </div>
        <br />
        <button
          className="px-4 py-2 rounded bg-[#1a3c3d] text-white"
          type="submit"
          disabled={uploading}
        >
          {uploading ? "Uploading..." : "Upload Blog"}
        </button>
      </form>

      {/* ✅ Preview Section */}
      {uploadedData && (
        <div
          style={{
            marginTop: "30px",
            borderTop: "1px solid #ddd",
            paddingTop: "20px",
          }}
        >
          <h2>{uploadedData.title}</h2>
          <div
            dangerouslySetInnerHTML={{ __html: uploadedData.description }}
          />
          <div style={{ margin: "10px 0" }}>
            {uploadedData.images.map((img, idx) => (
              <img
                key={idx}
                src={img}
                alt={`uploaded-${idx}`}
                width={150}
                style={{ marginRight: "10px", borderRadius: "8px" }}
              />
            ))}
          </div>
          <div>
            {uploadedData.keywords.map((kw, idx) => (
              <span
                key={idx}
                style={{
                  marginRight: "10px",
                  color: "#0ea5e9",
                  fontWeight: "500",
                }}
              >
                #{kw}
              </span>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default UploadForm;