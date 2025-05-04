export default function Home() {
    return (
      <main className="min-h-screen p-10 bg-gray-100">
        <div className="max-w-3xl mx-auto bg-white rounded-xl shadow-md p-8">
          <h1 className="text-3xl font-bold mb-6 text-center text-blue-600">AI Resume Builder</h1>
  
          <form className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">Nama Lengkap</label>
              <input
                type="text"
                placeholder="Contoh: Agung Nugraha Diyasta"
                className="w-full mt-1 p-2 border border-gray-300 rounded-md"
              />
            </div>
  
            <div>
              <label className="block text-sm font-medium text-gray-700">Deskripsi Diri</label>
              <textarea
                rows={4}
                placeholder="Tulis tentang dirimu..."
                className="w-full mt-1 p-2 border border-gray-300 rounded-md"
              ></textarea>
            </div>
  
            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition"
            >
              Generate Resume
            </button>
          </form>
        </div>
      </main>
    );
  }
  