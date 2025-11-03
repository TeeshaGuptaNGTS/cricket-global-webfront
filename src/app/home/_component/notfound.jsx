import { FileSearch } from "lucide-react";


function NotFound() {
    return (
       <section className="flex flex-col items-center justify-center min-h-screen bg-[#f6f8fc] text-center px-6">
                     <div className="bg-[#e9edff] text-[#4154f1] p-5 rounded-2xl mb-6">
                       <FileSearch size={60} />
                     </div>
                     <h1 className="text-4xl font-bold text-[#0b1441] mb-2">404</h1>
                     <p className="text-gray-600 text-lg mb-6">
                       Oops! The page you’re looking for doesn’t exist.
                     </p>
                     <a
                       href="/"
                       className="bg-[#4154f1] text-white px-6 py-3 rounded-xl font-medium hover:bg-[#2d3ecf] transition"
                     >
                       Go Back Home
                     </a>
                   </section>
    );
}

export default NotFound;