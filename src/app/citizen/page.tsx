"use client";
import { useState } from "react";
import { CheckCircle2, Send, Activity, Link2, Database, Lock } from "lucide-react";

export default function CitizenPortal() {
  const [observation, setObservation] = useState("");
  const [loadingState, setLoadingState] = useState<"idle" | "analyzing" | "minting">("idle");
  const [result, setResult] = useState<any>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoadingState("analyzing");
    try {
      const res = await fetch("/api/analyze", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ text: observation }),
      });
      
      setLoadingState("minting");
      // Artificial delay to show the minting step
      await new Promise(r => setTimeout(r, 1200));
      
      const data = await res.json();
      setResult(data);
    } catch (err) {
      console.error(err);
    } finally {
      setLoadingState("idle");
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 p-6 md:p-12 font-sans">
      <div className="max-w-3xl mx-auto space-y-8">
        <div className="flex justify-between items-center mb-8 border-b border-gray-200 pb-4">
          <div 
            className="flex items-center space-x-3 cursor-pointer hover:opacity-80 transition-opacity" 
            onClick={() => window.location.href='/'}
          >
            <Database className="w-6 h-6 text-slate-800" />
            <h1 className="text-2xl font-semibold text-slate-900 tracking-tight">Data Submission Portal</h1>
          </div>
          <div className="flex items-center text-xs font-medium text-slate-500 bg-white px-3 py-1.5 border border-gray-200 rounded-full">
            <Lock className="w-3 h-3 mr-1.5" /> E2E Encrypted & Anchored
          </div>
        </div>

        <form onSubmit={handleSubmit} className="bg-white p-8 rounded-xl shadow-sm border border-gray-200">
          <label className="block text-sm font-medium text-slate-700 mb-3">
            Enter Environmental Observation
          </label>
          <textarea
            className="w-full p-4 border border-gray-300 rounded-lg focus:ring-1 focus:ring-slate-900 focus:border-slate-900 outline-none text-slate-800 min-h-[140px] text-sm resize-y"
            placeholder="Describe the current state of the water ecosystem..."
            value={observation}
            onChange={(e) => setObservation(e.target.value)}
            required
            disabled={loadingState !== "idle"}
          />
          <div className="mt-6 flex justify-end">
            <button
              type="submit"
              disabled={loadingState !== "idle" || !observation}
              className="bg-slate-900 hover:bg-slate-800 text-white font-medium py-2.5 px-6 rounded-lg transition-colors flex items-center justify-center disabled:opacity-70 min-w-[200px]"
            >
              {loadingState === "analyzing" && "Processing via AI..."}
              {loadingState === "minting" && "Anchoring to Ledger..."}
              {loadingState === "idle" && (
                <>Submit Record <Send className="w-4 h-4 ml-2" /></>
              )}
            </button>
          </div>
        </form>

        {result && result.blockchain && (
          <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-200 space-y-6 animate-in fade-in slide-in-from-bottom-4">
            <div className="flex items-center justify-between border-b border-gray-100 pb-4">
              <div className="flex items-center space-x-3 text-emerald-700">
                <CheckCircle2 className="w-5 h-5" />
                <h2 className="text-base font-semibold">Record Successfully Anchored</h2>
              </div>
              <span className="text-xs font-mono text-gray-400">Block #{result.blockchain.blockNumber}</span>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <div>
                  <h3 className="text-xs uppercase tracking-wider text-gray-500 font-semibold mb-1">Detected Condition</h3>
                  <p className="text-sm text-slate-900 font-medium">{result.condition}</p>
                </div>
                <div>
                  <h3 className="text-xs uppercase tracking-wider text-gray-500 font-semibold mb-1">Assessed Risk</h3>
                  <span className="inline-flex items-center px-2 py-1 rounded text-xs font-medium bg-gray-100 text-gray-800 border border-gray-200">
                    {result.riskLevel}
                  </span>
                </div>
              </div>

              <div className="bg-gray-50 p-4 rounded-lg border border-gray-100 space-y-3">
                <div>
                  <h3 className="text-[10px] uppercase tracking-wider text-gray-500 font-semibold mb-1">Transaction Hash</h3>
                  <div className="flex items-center text-xs font-mono text-slate-700 break-all">
                    <Link2 className="w-3 h-3 mr-1.5 flex-shrink-0 text-gray-400" />
                    {result.blockchain.txHash}
                  </div>
                </div>
                <div>
                  <h3 className="text-[10px] uppercase tracking-wider text-gray-500 font-semibold mb-1">Data Payload Hash (SHA-256)</h3>
                  <p className="text-xs font-mono text-slate-700 break-all">
                    {result.blockchain.dataHash}
                  </p>
                </div>
              </div>
            </div>

            <div className="pt-4">
              <h3 className="text-xs uppercase tracking-wider text-gray-500 font-semibold mb-2">FHIR Payload (Standardized)</h3>
              <div className="bg-slate-900 text-gray-300 p-4 rounded-lg overflow-x-auto text-[11px] font-mono leading-relaxed">
                <pre>{JSON.stringify(result.fhir, null, 2)}</pre>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
