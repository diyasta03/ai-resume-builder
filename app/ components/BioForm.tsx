import { useState } from "react";

export default function BioForm() {
  const [bio, setBio] = useState("");
  const [result, setResult] = useState("");

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    const res = await fetch("/api/generate", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ bio }),
    });
    const data = await res.json();
    setResult(data.result);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 max-w-xl mx-auto">
      <textarea
        placeholder="Tulis bio atau deskripsi dirimu"
        className="w-full p-4 border rounded"
        value={bio}
        onChange={(e) => setBio(e.target.value)}
      />
      <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded">
        Gunakan AI
      </button>

      {result && (
        <div className="mt-6 bg-gray-100 p-4 rounded">
          <h3 className="font-bold mb-2">Hasil dari AI:</h3>
          <p>{result}</p>
        </div>
      )}
    </form>
  );
}
