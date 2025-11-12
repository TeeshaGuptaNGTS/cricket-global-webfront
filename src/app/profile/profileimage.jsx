"use client";
import authInstance from "@/api/auth/auth.api";
import { getUserLocal, setUserLocal } from "@/utils/localStorage.util";
import { toast } from "react-toastify";
import { useRef, useState } from "react";
import { Plus } from "lucide-react";

export default function ProfileImageUpload() {
  const [image, setImage] = useState(null);
  const [preview, setPreview] = useState("");

  const fileRef = useRef(null);

  //  File Choose Handler
  const handleFileChange = (e) => {
    let file = e.target.files[0];
    setImage(file);
    setPreview(URL.createObjectURL(file));
  };

  //  Trigger file input on + icon click
  const handleOpenPicker = () => {
    fileRef.current.click();
  };

  //  Upload to API
  const handleUpload = async () => {
    if (!image) return toast("Please select an image!");

    const formData = new FormData();
    formData.append("folderName", "userprofile"); // ✅ add normally

    formData.append("file", image);

    try {
      const res = await authInstance.profileImage(formData);
      console.log("res of upload images:", res);
    
      // setUserLocal(res?.data?.user);

      //  Merge old user with new image URL
const oldUser = getUserLocal();

const updatedUser = {
  ...oldUser,
  profileImage: res.data,  // S3 image URL
};

// ✅ Save updated user into cookies
setUserLocal(updatedUser);

toast("Profile Image Updated ");

    } catch (err) {
      toast("❌ Upload Failed");
    }
  };

  return (
    <div className="flex items-center gap-6 flex-wrap">
      <div className="relative w-28 h-28">
        <img
          src={preview || "/default-user.png"}
          className="w-28 h-28 rounded-full shadow-md object-cover border border-gray-200"
        />

        <button
          onClick={handleOpenPicker}
          className="absolute bottom-0 right-0 bg-[#3E63DD] hover:bg-[#3557C2] 
          text-white p-2 rounded-full shadow-md transition-all active:scale-90"
        >
          <Plus size={16} />
        </button>

        <input
          ref={fileRef}
          type="file"
          className="hidden"
          onChange={handleFileChange}
        />
      </div>

      {/* Upload Button */}
      <div className="flex flex-col gap-3">
        <button
          onClick={handleUpload}
          className="bg-[#3E63DD] hover:bg-[#3557C2] text-white px-5 py-2 rounded-lg shadow-sm text-sm active:scale-95 transition"
        >
          Upload
        </button>
      </div>
    </div>
  );
}
