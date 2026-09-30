"use client";
import { useState } from "react";
import { CheckCircle2, Send, Activity } from "lucide-react";

export default function CitizenPortal() {
  const [observation, setObservation] = useState("");
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<any>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await fetch("/api/analyze", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ text: observation }),
      });
      const data = await res.json();
      setResult(data);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 p-6 md:p-12">
      <div className="max-w-2xl mx-auto space-y-8">
        <div className="flex items-center space-x-4 mb-8 cursor-pointer" onClick={() => window.location.href='/'}>
          <Activity className="w-8 h-8 text-emerald-500" />
          <h1 className="text-3xl font-bold text-slate-900">New Observation</h1>
        </div>

        <form onSubmit={handleSubmit} className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200">
          <label className="block text-sm font-medium text-slate-700 mb-2">
            What did you see at the stream today?
          </label>
          <textarea
            className="w-full p-4 border border-slate-300 rounded-xl focus:ring-2 focus:ring-emerald-500 outline-none text-slate-900 min-h-[150px]"
            placeholder="e.g., The water looks very green and murky, and there's a strong smell of sulfur near the bridge."
            value={observation}
            onChange={(e) => setObservation(e.target.value)}
            required
          />
          <button
            type="submit"
            disabled={loading || !observation}
            className="mt-4 w-full bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-3 px-6 rounded-xl transition-colors flex items-center justify-center disabled:opacity-50"
          >
            {loading ? "Analyzing with AI..." : "Submit Observation"}
            {!loading && <Send className="w-5 h-5 ml-2" />}
          </button>
        </form>

        {result && (
          <div className="bg-white p-6 rounded-2xl shadow-sm border border-emerald-200 space-y-4 animate-in fade-in slide-in-from-bottom-4">
            <div className="flex items-center space-x-3 text-emerald-700">
              <CheckCircle2 className="w-6 h-6" />
              <h2 className="text-lg font-bold">Successfully Processed</h2>
            </div>
            <p className="text-slate-600 text-sm">
              The AI has converted your report into a standard FHIR resource for public health officials. 
              <br/><br/>
              <strong>Detected Condition:</strong> {result.condition} <br/>
              <strong>Risk Level:</strong> <span className="font-bold text-red-600">{result.riskLevel}</span>
            </p>
            <div className="bg-slate-900 text-emerald-400 p-4 rounded-xl overflow-x-auto text-xs font-mono mt-4">
              <pre>{JSON.stringify(result.fhir, null, 2)}</pre>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
