import { useState, useEffect } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { FaRegCopy } from "react-icons/fa6";
import { ToastContainer, toast, Bounce } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { AiFillEdit } from "react-icons/ai";
import { MdDelete } from "react-icons/md";
import { v4 as uuidv4 } from "uuid";

const Manager = () => {
  const [visible, setVisible] = useState(false);
  const [form, setForm] = useState({ site: "", username: "", password: "" });
  const [passwordArr, setPasswordArr] = useState([]);

  useEffect(() => {
    try {
      const passwords = localStorage.getItem("passwords");
      if (passwords) {
        setPasswordArr(JSON.parse(passwords));
      }
    } catch {}
  }, []);

  const savePassword = () => {
    if (
      form.site.length > 5 &&
      form.username.length > 3 &&
      form.password.length > 5
    ) {
      const newPass = { ...form, id: uuidv4() };
      const updated = [...passwordArr, newPass];
      setPasswordArr(updated);
      localStorage.setItem("passwords", JSON.stringify(updated));
      setForm({ site: "", username: "", password: "" });
      toast.success("Password Saved", { transition: Bounce });
    } else {
      toast.error("Please fill all fields properly");
    }
  };

  const deletePassword = (id) => {
    if (window.confirm("Delete this password?")) {
      const updated = passwordArr.filter((item) => item.id !== id);
      setPasswordArr(updated);
      localStorage.setItem("passwords", JSON.stringify(updated));
      toast.success("Password Deleted");
    }
  };

  const editPassword = (id) => {
    const selected = passwordArr.find((item) => item.id === id);
    setForm(selected);
    setPasswordArr(passwordArr.filter((item) => item.id !== id));
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const copyText = (text) => {
    navigator.clipboard.writeText(text);
    toast.success("Copied to clipboard");
  };

  return (
    <>
      <ToastContainer autoClose={2000} theme="light" />

      {/* Main Card */}
      <div className="max-w-4xl mx-auto mt-8 sm:mt-12 bg-white/80 backdrop-blur rounded-2xl shadow-xl p-6 sm:p-8">
        <h1 className="text-3xl sm:text-4xl font-bold text-center">
          <span className="text-black">&lt;Password </span>
          <span className="text-green-600">Manager/&gt;</span>
        </h1>

        <p className="text-center text-gray-600 mt-2 text-sm sm:text-base">
          Simple & Secure Password Manager
        </p>

        {/* Inputs */}
        <div className="mt-8 space-y-5">
          <input
            value={form.site}
            onChange={handleChange}
            placeholder="Website URL"
            className="w-full rounded-lg border px-4 py-2 focus:ring-2 focus:ring-green-400 outline-none"
            name="site"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <input
              value={form.username}
              onChange={handleChange}
              placeholder="Username"
              className="rounded-lg border px-4 py-2 focus:ring-2 focus:ring-green-400 outline-none"
              name="username"
            />

            <div className="relative">
              <input
                type={visible ? "text" : "password"}
                value={form.password}
                onChange={handleChange}
                placeholder="Password"
                className="w-full rounded-lg border px-4 py-2 focus:ring-2 focus:ring-green-400 outline-none"
                name="password"
              />
              <span
                onClick={() => setVisible(!visible)}
                className="absolute right-3 top-2.5 cursor-pointer text-gray-600"
              >
                {visible ? <FaEyeSlash /> : <FaEye />}
              </span>
            </div>
          </div>

          <button
            onClick={savePassword}
            className="w-full bg-green-600 hover:bg-green-500 text-white font-semibold py-2 rounded-lg transition"
          >
            Save Password
          </button>
        </div>
      </div>

      {/* Table */}
      <div className="max-w-4xl mx-auto mt-10 px-2 sm:px-0">
        <h2 className="text-xl sm:text-2xl font-semibold mb-4 text-center">
          Stored Passwords
        </h2>

        {passwordArr.length === 0 && (
          <p className="text-center text-gray-500 text-sm sm:text-base">
            No passwords saved yet
          </p>
        )}

        {passwordArr.length !== 0 && (
          <div className="overflow-x-auto rounded-xl shadow">
            <table className="w-full min-w-[640px] bg-white">
              <thead className="bg-green-600 text-white">
                <tr>
                  <th className="py-3 px-4 text-left">Site</th>
                  <th className="px-4">Username</th>
                  <th className="px-4">Password</th>
                  <th className="px-4">Actions</th>
                </tr>
              </thead>

              <tbody>
                {passwordArr.map((item) => (
                  <tr
                    key={item.id}
                    className="border-b hover:bg-gray-50 align-top"
                  >
                    <td className="py-3 px-4">
                      <div className="flex items-start gap-3 break-all">
                        <a
                          href={item.site}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-blue-600 hover:underline"
                        >
                          {item.site}
                        </a>
                        <FaRegCopy
                          onClick={() => copyText(item.site)}
                          className="cursor-pointer text-gray-500 hover:text-black mt-1"
                        />
                      </div>
                    </td>

                    <td className="py-3 px-4">
                      <div className="flex items-start gap-3 justify-center break-all">
                        <span>{item.username}</span>
                        <FaRegCopy
                          onClick={() => copyText(item.username)}
                          className="cursor-pointer text-gray-500 hover:text-black mt-1"
                        />
                      </div>
                    </td>

                    <td className="py-3 px-4">
                      <div className="flex items-start gap-3 justify-center break-all">
                        <span>{item.password}</span>
                        <FaRegCopy
                          onClick={() => copyText(item.password)}
                          className="cursor-pointer text-gray-500 hover:text-black mt-1"
                        />
                      </div>
                    </td>

                    <td className="py-3 px-4">
                      <div className="flex justify-center gap-4">
                        <AiFillEdit
                          onClick={() => editPassword(item.id)}
                          className="cursor-pointer text-blue-600"
                        />
                        <MdDelete
                          onClick={() => deletePassword(item.id)}
                          className="cursor-pointer text-red-600"
                        />
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </>
  );
};

export default Manager;

