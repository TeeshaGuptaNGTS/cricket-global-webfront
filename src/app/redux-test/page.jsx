"use client";
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "@/redux/redux-slice/user.slice";

export default function ReduxTest() {
  const dispatch = useDispatch();

  const user = useSelector((state) => state.user.userInfo);
  const token = useSelector((state) => state.user.token);

  console.log("✅ Redux User =", user);
  console.log("✅ Redux Token =", token);

  return (
    <section className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-6">
      <div className="bg-white shadow-lg p-8 rounded-xl max-w-md w-full text-center">
        <h1 className="text-xl font-bold mb-4 text-black">Redux Test Result</h1>

        {user && token ? (
          <div className="bg-green-100 p-4 rounded-md text-green-700 mb-4">
            ✅ <strong>Success!</strong> Redux working properly.
            <br />
            <span className="text-sm">User & Token fetched from Redux.</span>
          </div>
        ) : (
          <div className="bg-red-100 p-4 rounded-md text-red-700 mb-4">
            ❌ Redux Not Working Properly  
            <br />
            <span className="text-sm">Login first or check Redux setup.</span>
          </div>
        )}

        <div className="text-left mb-4">
          <p><strong>User:</strong></p>
          <pre className="text-sm bg-gray-200 p-2 rounded-md">
            {JSON.stringify(user, null, 2)}
          </pre>
        </div>

        <div className="text-left mb-4">
          <p><strong>Token:</strong></p>
          <pre className="text-sm bg-gray-200 p-2 rounded-md">
            {JSON.stringify(token, null, 2)}
          </pre>
        </div>

        <button
          onClick={() => dispatch(logout())}
          className="w-full p-3 bg-red-600 text-white rounded-md font-semibold hover:bg-red-700 transition"
        >
          Logout (Redux + LocalStorage Clear)
        </button>
      </div>
    </section>
  );
}
