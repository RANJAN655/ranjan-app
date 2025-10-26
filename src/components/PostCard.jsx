import React from "react";
import appwriteService from "../appwrite/config";
import { Link } from "react-router-dom";

function PostCard({ $id, title, featuredImage, content }) {
  const previewUrl = appwriteService.getFileDownload(featuredImage); // full file URL
  // append mode=admin if needed
  const imageUrl = previewUrl.includes("?")
    ? previewUrl + "&mode=admin"
    : previewUrl + "?mode=admin";

  return (
    <Link to={`/post/${$id}`}>
      <div className="w-full bg-gray-100 rounded-xl p-4">
        <div className="w-full justify-center mb-4">
          <img src={imageUrl} className="rounded-xl" alt={title} />
        </div>
        <h2 className="text-xl font-bold">{title}</h2>
      </div>
    </Link>
  );
}

export default PostCard;
