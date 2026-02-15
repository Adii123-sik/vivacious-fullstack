import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import toast from "react-hot-toast";
import axios from "axios";
import { API_BASE_URL } from "../config/apiConfig";

const AddOfflineService = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const isEdit = Boolean(id);

  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [loading, setLoading] = useState(false);

  const [form, setForm] = useState({
    title: "",
    description: "",
    display_order: 0,
    is_active: 1,
  });

  /* LOAD FOR EDIT */
  useEffect(() => {
    if (!isEdit) return;

    const loadService = async () => {
      try {
        const { data } = await axios.get(
          `${API_BASE_URL}/api/offline-services?admin=true`
        );

        const service = data.find((s) => s.id === Number(id));

        if (service) {
          setForm(service);
        }
      } catch {
        toast.error("Failed to load service");
      }
    };

    loadService();
  }, [id, isEdit]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!form.title || !form.description) {
      toast.error("Title & Description required");
      return;
    }

    try {
      setLoading(true);

      if (isEdit) {
        await axios.put(
          `${API_BASE_URL}/api/offline-services/${id}`,
          form
        );
        toast.success("Service updated");
      } else {
        await axios.post(
          `${API_BASE_URL}/api/offline-services`,
          form
        );
        toast.success("Service added");
      }

      navigate("/offline-services");
    } catch {
      toast.error("Operation failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-slate-100">
      <Sidebar open={sidebarOpen} setOpen={setSidebarOpen} />

      <div className="md:ml-64">
        <Navbar onMenuClick={() => setSidebarOpen(true)} />

        <main className="pt-20 px-4 md:px-10">
          <h1 className="text-2xl font-bold mb-6">
            {isEdit ? "Edit Offline Service" : "Add Offline Service"}
          </h1>

          <div className="max-w-2xl bg-white rounded-xl shadow p-6">
            <form onSubmit={handleSubmit} className="space-y-4">

              <input
                placeholder="Title"
                value={form.title}
                onChange={(e) =>
                  setForm({ ...form, title: e.target.value })
                }
                className="input"
              />

              <textarea
                placeholder="Description"
                value={form.description}
                onChange={(e) =>
                  setForm({ ...form, description: e.target.value })
                }
                rows="5"
                className="input"
              />

              <input
                type="number"
                placeholder="Display Order"
                value={form.display_order}
                onChange={(e) =>
                  setForm({
                    ...form,
                    display_order: e.target.value,
                  })
                }
                className="input"
              />

              <select
                value={form.is_active}
                onChange={(e) =>
                  setForm({ ...form, is_active: e.target.value })
                }
                className="input"
              >
                <option value="1">Active</option>
                <option value="0">Inactive</option>
              </select>

              <button
                disabled={loading}
                className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 rounded"
              >
                {loading ? "Saving..." : "Save Service"}
              </button>
            </form>
          </div>
        </main>
      </div>

      <style>{`
        .input {
          width: 100%;
          border: 1px solid #cbd5e1;
          padding: 10px;
          border-radius: 6px;
        }
      `}</style>
    </div>
  );
};

export default AddOfflineService;
