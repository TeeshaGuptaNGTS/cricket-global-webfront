"use client";
import authInstance from "@/api/auth/auth.api";
import Image from "next/image";
import React, { useState } from "react";
import { logoimg } from "@/shared/images";
import { toast } from "react-toastify";

// ✅ Redux imports
import { useDispatch } from "react-redux";
import { updateUser, updateToken } from "@/redux/redux-slice/user.slice";
import { setTokenLocal, setUserLocal } from "@/utils/localStorage.util";
import { useRouter } from "next/navigation";

export default function Signup() {
  const dispatch = useDispatch();
  const router = useRouter();

  const countries = [
  { code: "", name: "Select your country" },

  //  TOP 12 CRICKET NATIONS — added at top
  { code: "GB", name: "United Kingdom (England)" },
  { code: "IN", name: "India" },
  { code: "AU", name: "Australia" },
  { code: "PK", name: "Pakistan" },
  { code: "NZ", name: "New Zealand" },
  { code: "ZA", name: "South Africa" },
  { code: "SL", name: "Sri Lanka" },
  { code: "BD", name: "Bangladesh" },
  { code: "AF", name: "Afghanistan" },
  { code: "IE", name: "Ireland" },
  { code: "ZW", name: "Zimbabwe" },
  { code: "WI", name: "West Indies" }, // manually added (not a country)

  //  DIVIDER — optional

  //  Rest of your original list (unchanged)
  { code: "AL", name: "Albania" },
  { code: "DZ", name: "Algeria" },
  { code: "AD", name: "Andorra" },
  { code: "AO", name: "Angola" },
  { code: "AG", name: "Antigua and Barbuda" },
  { code: "AR", name: "Argentina" },
  { code: "AM", name: "Armenia" },
  { code: "AT", name: "Austria" },
  { code: "AZ", name: "Azerbaijan" },
  { code: "BS", name: "Bahamas" },
  { code: "BH", name: "Bahrain" },
  { code: "BB", name: "Barbados" },
  { code: "BY", name: "Belarus" },
  { code: "BE", name: "Belgium" },
  { code: "BZ", name: "Belize" },
  { code: "BJ", name: "Benin" },
  { code: "BT", name: "Bhutan" },
  { code: "BO", name: "Bolivia" },
  { code: "BA", name: "Bosnia and Herzegovina" },
  { code: "BW", name: "Botswana" },
  { code: "BR", name: "Brazil" },
  { code: "BN", name: "Brunei" },
  { code: "BG", name: "Bulgaria" },
  { code: "BF", name: "Burkina Faso" },
  { code: "BI", name: "Burundi" },
  { code: "KH", name: "Cambodia" },
  { code: "CM", name: "Cameroon" },
  { code: "CA", name: "Canada" },
  { code: "CV", name: "Cape Verde" },
  { code: "CF", name: "Central African Republic" },
  { code: "TD", name: "Chad" },
  { code: "CL", name: "Chile" },
  { code: "CN", name: "China" },
  { code: "CO", name: "Colombia" },
  { code: "KM", name: "Comoros" },
  { code: "CG", name: "Congo" },
  { code: "CD", name: "Congo, Democratic Republic of the" },
  { code: "CR", name: "Costa Rica" },
  { code: "CI", name: "Côte d’Ivoire" },
  { code: "HR", name: "Croatia" },
  { code: "CU", name: "Cuba" },
  { code: "CY", name: "Cyprus" },
  { code: "CZ", name: "Czech Republic" },
  { code: "DK", name: "Denmark" },
  { code: "DJ", name: "Djibouti" },
  { code: "DM", name: "Dominica" },
  { code: "DO", name: "Dominican Republic" },
  { code: "EC", name: "Ecuador" },
  { code: "EG", name: "Egypt" },
  { code: "SV", name: "El Salvador" },
  { code: "GQ", name: "Equatorial Guinea" },
  { code: "ER", name: "Eritrea" },
  { code: "EE", name: "Estonia" },
  { code: "SZ", name: "Eswatini" },
  { code: "ET", name: "Ethiopia" },
  { code: "FJ", name: "Fiji" },
  { code: "FI", name: "Finland" },
  { code: "FR", name: "France" },
  { code: "GA", name: "Gabon" },
  { code: "GM", name: "Gambia" },
  { code: "GE", name: "Georgia" },
  { code: "DE", name: "Germany" },
  { code: "GH", name: "Ghana" },
  { code: "GR", name: "Greece" },
  { code: "GD", name: "Grenada" },
  { code: "GT", name: "Guatemala" },
  { code: "GN", name: "Guinea" },
  { code: "GW", name: "Guinea-Bissau" },
  { code: "GY", name: "Guyana" },
  { code: "HT", name: "Haiti" },
  { code: "HN", name: "Honduras" },
  { code: "HU", name: "Hungary" },
  { code: "IS", name: "Iceland" },
  { code: "ID", name: "Indonesia" },
  { code: "IR", name: "Iran" },
  { code: "IQ", name: "Iraq" },
  { code: "IL", name: "Israel" },
  { code: "IT", name: "Italy" },
  { code: "JM", name: "Jamaica" },
  { code: "JP", name: "Japan" },
  { code: "JO", name: "Jordan" },
  { code: "KZ", name: "Kazakhstan" },
  { code: "KE", name: "Kenya" },
  { code: "KI", name: "Kiribati" },
  { code: "KR", name: "South Korea" },
  { code: "KW", name: "Kuwait" },
  { code: "KG", name: "Kyrgyzstan" },
  { code: "LA", name: "Laos" },
  { code: "LV", name: "Latvia" },
  { code: "LB", name: "Lebanon" },
  { code: "LS", name: "Lesotho" },
  { code: "LR", name: "Liberia" },
  { code: "LY", name: "Libya" },
  { code: "LI", name: "Liechtenstein" },
  { code: "LT", name: "Lithuania" },
  { code: "LU", name: "Luxembourg" },
  { code: "MG", name: "Madagascar" },
  { code: "MW", name: "Malawi" },
  { code: "MY", name: "Malaysia" },
  { code: "MV", name: "Maldives" },
  { code: "ML", name: "Mali" },
  { code: "MT", name: "Malta" },
  { code: "MH", name: "Marshall Islands" },
  { code: "MR", name: "Mauritania" },
  { code: "MU", name: "Mauritius" },
  { code: "MX", name: "Mexico" },
  { code: "FM", name: "Micronesia" },
  { code: "MD", name: "Moldova" },
  { code: "MC", name: "Monaco" },
  { code: "MN", name: "Mongolia" },
  { code: "ME", name: "Montenegro" },
  { code: "MA", name: "Morocco" },
  { code: "MZ", name: "Mozambique" },
  { code: "MM", name: "Myanmar (Burma)" },
  { code: "NA", name: "Namibia" },
  { code: "NR", name: "Nauru" },
  { code: "NP", name: "Nepal" },
  { code: "NI", name: "Nicaragua" },
  { code: "NE", name: "Niger" },
  { code: "NG", name: "Nigeria" },
  { code: "NO", name: "Norway" },
  { code: "OM", name: "Oman" },
  { code: "PW", name: "Palau" },
  { code: "PA", name: "Panama" },
  { code: "PG", name: "Papua New Guinea" },
  { code: "PY", name: "Paraguay" },
  { code: "PE", name: "Peru" },
  { code: "PH", name: "Philippines" },
  { code: "PL", name: "Poland" },
  { code: "PT", name: "Portugal" },
  { code: "QA", name: "Qatar" },
  { code: "RO", name: "Romania" },
  { code: "RU", name: "Russia" },
  { code: "RW", name: "Rwanda" },
  { code: "KN", name: "Saint Kitts and Nevis" },
  { code: "LC", name: "Saint Lucia" },
  { code: "VC", name: "Saint Vincent and the Grenadines" },
  { code: "WS", name: "Samoa" },
  { code: "SM", name: "San Marino" },
  { code: "ST", name: "São Tomé and Príncipe" },
  { code: "SA", name: "Saudi Arabia" },
  { code: "SN", name: "Senegal" },
  { code: "RS", name: "Serbia" },
  { code: "SC", name: "Seychelles" },
  { code: "SG", name: "Singapore" },
  { code: "SK", name: "Slovakia" },
  { code: "SI", name: "Slovenia" },
  { code: "SB", name: "Solomon Islands" },
  { code: "SO", name: "Somalia" },
  { code: "ES", name: "Spain" },
  { code: "SD", name: "Sudan" },
  { code: "SR", name: "Suriname" },
  { code: "SE", name: "Sweden" },
  { code: "CH", name: "Switzerland" },
  { code: "SY", name: "Syria" },
  { code: "TW", name: "Taiwan" },
  { code: "TJ", name: "Tajikistan" },
  { code: "TZ", name: "Tanzania" },
  { code: "TH", name: "Thailand" },
  { code: "TG", name: "Togo" },
  { code: "TO", name: "Tonga" },
  { code: "TT", name: "Trinidad and Tobago" },
  { code: "TN", name: "Tunisia" },
  { code: "TR", name: "Turkey" },
  { code: "TM", name: "Turkmenistan" },
  { code: "TV", name: "Tuvalu" },
  { code: "UG", name: "Uganda" },
  { code: "UA", name: "Ukraine" },
  { code: "AE", name: "United Arab Emirates" },
  { code: "UY", name: "Uruguay" },
  { code: "UZ", name: "Uzbekistan" },
  { code: "VU", name: "Vanuatu" },
  { code: "VA", name: "Vatican City" },
  { code: "VE", name: "Venezuela" },
  { code: "VN", name: "Vietnam" },
  { code: "YE", name: "Yemen" },
  { code: "ZM", name: "Zambia" },
];



  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [gender, setGender] = useState("");
  const [country, setCountry] = useState("");
  const [email, setEmail] = useState("");
  const [dateOfBirth, setDateOfBirth] = useState("");
  const [emailError, setEmailError] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const [dobError, setDobError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      setError("Passwords do not match ❌");
      return;
    }

    setError("");
    setLoading(true);

    const reqBody = {
      firstName,
      lastName,
      gender,
      country,
      email,
      password,
      dateOfBirth,
    };

    try {
      const res = await authInstance.signup(reqBody);

      console.log("res of signup api", res, res?.data);
      setLoading(false);

      if (res?.status === "Success") {
        toast.success(res?.message);
        dispatch(updateUser(res?.data?.user));
        dispatch(updateToken(res?.data?.token));

        // ✅ LocalStorage save
        // setUserLocal(res?.data?.user);
        // setTokenLocal(res?.data?.token);

        // ✅ Redux save

        router.back()

        return;
      }
    } catch (err) {
      console.error("API Error:", err);

      // Extract backend message safely
      const backendMessage =
        err?.response?.data?.message ||
        err?.data?.message ||
        err?.message ||
        "Something went wrong";

      toast.error(backendMessage); //  show specific backend error
      setLoading(false);
    }

  };

  return (
    <section className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-xl shadow-lg w-full max-w-2xl text-center">
        <Image src={logoimg.logoImg} className="w-36 mx-auto mb-2" alt="Logo" />
        <h3 className="text-xl font-semibold text-black mb-6">SIGN UP</h3>

        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <div className="text-left">
              <label className="block font-semibold mb-1 text-sm text-black">FIRSTNAME</label>
              <input
                type="text"
                placeholder="Enter your first name"
                className="w-full p-2 border border-gray-300 rounded-md outline-none"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                required
              />
            </div>

            <div className="text-left">
              <label className="block font-semibold mb-1 text-sm text-black">LASTNAME</label>
              <input
                type="text"
                placeholder="Enter your last name"
                className="w-full p-2 border border-gray-300 rounded-md outline-none"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                required
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <div className="text-left">
              <label className="block font-semibold mb-1 text-sm text-black">GENDER</label>
              <select
                className="w-full p-2 border border-gray-300 rounded-md outline-none"
                value={gender}
                onChange={(e) => setGender(e.target.value)}
                required
              >
                <option value="">Select gender</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option>
              </select>
            </div>

            <div className="text-left">
              <label className="block font-semibold mb-1 text-sm text-black">COUNTRY</label>
              <select
                className="w-full p-2 border border-gray-300 rounded-md outline-none"
                value={country}
                onChange={(e) => setCountry(e.target.value)}
                required
              >
                {countries.map((c) => (
                  <option key={c.code} value={c.code}>
                    {c.name}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <div className="text-left">
              <label className="block font-semibold mb-1 text-sm text-black">PASSWORD</label>
              <input
                type="password"
                placeholder="Create a password"
                className="w-full p-2 border border-gray-300 rounded-md outline-none"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>

            <div className="text-left">
              <label className="block font-semibold mb-1 text-sm text-black">CONFIRM PASSWORD</label>
              <input
                type="password"
                placeholder="Confirm password"
                className="w-full p-2 border border-gray-300 rounded-md outline-none"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                required
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <div className="text-left">
              <label className="block font-semibold mb-1 text-sm text-black">EMAIL</label>
              <input
                type="email"
                placeholder="Enter email"
                className={`w-full p-2 border rounded-md outline-none ${emailError ? "border-red-500" : "border-gray-300"
                  }`}
                value={email}
                onChange={(e) => {
                  const val = e.target.value.trim().toLowerCase();
                  setEmail(val);
                  const regex =
                    /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
                  setEmailError(
                    !regex.test(val)
                      ? "Please enter a valid email"
                      : ""
                  );
                }}
                required
              />
              {emailError && (
                <p className="text-red-500 text-xs">{emailError}</p>
              )}
            </div>

            <div className="text-left">
              <label className="block font-semibold mb-1 text-sm text-black">
                Date of Birth
              </label>
              <input
                type="date"
                placeholder="Select date of birth"
                className={`w-full p-2 border rounded-md outline-none ${dobError ? "border-red-500" : "border-gray-300"
                  }`}
                value={dateOfBirth}
                onChange={(e) => {
                  const val = e.target.value;
                  setDateOfBirth(val);
                }}
                required
              />
              {dobError && (
                <p className="text-red-500 text-xs">{dobError}</p>
              )}
            </div>
          </div>

          {error && <p className="text-red-500 text-sm mb-2">{error}</p>}

          <button
            type="submit"
            className="w-full p-3 bg-green-600 text-white rounded-md font-semibold hover:bg-green-700 transition"
            disabled={loading}
          >
            {loading ? "Processing..." : "Sign Up"}
          </button>

          <p className="mt-3 text-sm">
            ALREADY HAVE AN ACCOUNT?{" "}
            <a href="/login" className="text-green-600 font-semibold">
              LOGIN
            </a>
          </p>
        </form>
      </div>
    </section>
  );
}
