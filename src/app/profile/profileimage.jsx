// "use client";
// import authInstance from "@/api/auth/auth.api";
// import { getUserLocal, setUserLocal } from "@/utils/localStorage.util";
// import { toast } from "react-toastify";
// import { useRef, useState } from "react";
// import { Plus } from "lucide-react";

// export default function ProfileImageUpload() {
//   const [image, setImage] = useState(null);
//   const [preview, setPreview] = useState("");

//   const fileRef = useRef(null);

//   //  File Choose Handler
//   const handleFileChange = (e) => {
//     let file = e.target.files[0];
//     setImage(file);
//     setPreview(URL.createObjectURL(file));
//   };

//   //  Trigger file input on + icon click
//   const handleOpenPicker = () => {
//     fileRef.current.click();
//   };

//   //  Upload to API
//   const handleUpload = async () => {
//     if (!image) return toast("Please select an image!");

//     const formData = new FormData();
//     formData.append("folderName", "userprofile"); //  add normally

//     formData.append("file", image);

//     try {
//       const res = await authInstance.profileImage(formData);
//       console.log("res of upload images:", res);
    
//       // setUserLocal(res?.data?.user);

//       //  Merge old user with new image URL
// const oldUser = getUserLocal();

// const updatedUser = {
//   ...oldUser,
//   profileImage: res.data,  // S3 image URL
// };

// //  Save updated user into cookies
// setUserLocal(updatedUser);

// toast("Profile Image Updated ");

//     } catch (err) {
//       toast("❌ Upload Failed");
//     }
//   };

//   return (
//     <div className="flex items-center gap-6 flex-wrap">
//       <div className="relative w-28 h-28">
//         <img
//           src={preview || "/default-user.png"}
//           className="w-28 h-28 rounded-full shadow-md object-cover border border-gray-200"
//         />

//         <button
//           onClick={handleOpenPicker}
//           className="absolute bottom-0 right-0 bg-[#3E63DD] hover:bg-[#3557C2] 
//           text-white p-2 rounded-full shadow-md transition-all active:scale-90"
//         >
//           <Plus size={16} />
//         </button>

//         <input
//           ref={fileRef}
//           type="file"
//           className="hidden"
//           onChange={handleFileChange}
//         />
//       </div>

//       {/* Upload Button */}
//       <div className="flex flex-col gap-3">
//         <button
//           onClick={handleUpload}
//           className="bg-[#3E63DD] hover:bg-[#3557C2] text-white px-5 py-2 rounded-lg shadow-sm text-sm active:scale-95 transition"
//         >
//           Upload
//         </button>
//       </div>
//     </div>
//   );
// }
"use client";
import { useRef, useState, useEffect } from "react";
import { toast } from "react-toastify";
import { Plus } from "lucide-react";
import { FaUserCircle } from "react-icons/fa";
import authInstance from "@/api/auth/auth.api";
import { getUserLocal, setUserLocal } from "@/utils/localStorage.util";

export default function ProfileImageUpload() {
  const [image, setImage] = useState(null);
  const [preview, setPreview] = useState("");
  const fileRef = useRef(null);

  //  Load existing image from local storage on mount
  useEffect(() => {
    const user = getUserLocal();
    if (user?.profileImage) {
      setPreview(user.profileImage);
    }
  }, []);

  // 📸 Handle File Selection
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    //  Only allow image files
    if (!file.type.startsWith("image/")) {
      toast("Please upload a valid image file!");
      e.target.value = "";
      return;
    }

    //  Optional size limit (2MB)
    if (file.size > 2 * 1024 * 1024) {
      toast("File size should be less than 2MB!");
      e.target.value = "";
      return;
    }

    setImage(file);
    setPreview(URL.createObjectURL(file));
  };

  // 🎯 Trigger File Picker
  const handleOpenPicker = () => {
    fileRef.current?.click();
  };

  // ☁️ Upload Handler
  const handleUpload = async () => {
    if (!image) return toast("Please select an image first!");

    const formData = new FormData();
    formData.append("folderName", "userprofile");
    formData.append("file", image);

    try {
      const res = await authInstance.profileImage(formData);
      console.log("res of upload images:", res);

      const oldUser = getUserLocal();
      const updatedUser = {
        ...oldUser,
        profileImage: res?.data, // assuming backend returns image URL
      };

      setUserLocal(updatedUser);
      toast(" Profile Image Updated Successfully!");
      setPreview(res?.data); // instantly show uploaded image
      setImage(null);
    } catch (err) {
      console.error("Upload failed:", err);
      toast(" Upload Failed. Please try again.");
    }
  };

  return (
    <div className="flex items-center gap-6 flex-wrap">
      {/* 🖼️ Image or Icon */}
      <div className="relative w-28 h-28 flex items-center justify-center">
        {preview ? (
          <img
            src={preview}
            alt="Profile Preview"
            className="w-28 h-28 rounded-full shadow-md object-cover border border-gray-200"
          />
        ) : (
          <FaUserCircle size={110} className="text-gray-300" />
        )}

        {/* ➕ Image Picker Button */}
        <button
          type="button"
          onClick={handleOpenPicker}
          className="absolute bottom-0 right-0 bg-[#00a63e] hover:bg-[#26b95c] 
          text-white p-2 rounded-full shadow-md transition-all active:scale-90"
          title="Choose Image"
        >
          <Plus size={16} />
        </button>

        <input
          ref={fileRef}
          type="file"
          accept="image/*"
          className="hidden"
          onChange={handleFileChange}
        />
      </div>

      {/* ☁️ Upload Button */}
      <div className="flex flex-col gap-3">
        <button
          type="button"
          onClick={handleUpload}
          disabled={!image}
          className={`${
            image ? "bg-[#00a63e] hover:bg-[#26b95c]" : "bg-[#26b95c] "
          } text-white px-5 py-2 rounded-lg shadow-sm text-sm active:scale-95 transition`}
        >
          Save Profile Image
        </button>
      </div>
    </div>
  );
}


