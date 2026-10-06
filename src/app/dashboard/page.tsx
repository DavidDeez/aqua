import { MapPin, Shield, CheckCircle, Database } from "lucide-react";
import Link from "next/link";

// Mock Database representing verified on-chain reports
const mockReports = [
  { id: 1, location: "Downtown Canal", condition: "Suspected Cyanobacteria Bloom", risk: "HIGH", txHash: "0x3f8a...9c21", block: "18501243", time: "12 mins ago" },
  { id: 2, location: "North Park Stream", condition: "Physical Pollution", risk: "MEDIUM", txHash: "0x7b21...4f0a", block: "18500912", time: "1 hour ago" },
  { id: 3, location: "River Walk", condition: "Healthy Ecosystem Observed", risk: "LOW", txHash: "0x1a9c...88e4", block: "18498822", time: "5 hours ago" },
];

export default function Dashboard() {
  return (
    <div className="min-h-screen bg-gray-50 p-6 md:p-12 font-sans">
      <div className="max-w-6xl mx-auto space-y-10">
        
        {/* Header Section */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 border-b border-gray-200 pb-6">
          <div className="flex items-center gap-4">
            <Link href="/" className="hover:opacity-80 transition-opacity">
               <Database className="w-8 h-8 text-slate-800" />
            </Link>
            <div>
              <h1 className="text-2xl font-semibold text-slate-900 tracking-tight">Environmental Data Ledger</h1>
              <p className="text-sm text-slate-500 mt-1">Immutable, AI-verified climate monitoring records.</p>
            </div>
          </div>
          <div className="flex items-center gap-3 bg-white px-4 py-2 border border-gray-200 rounded-full shadow-sm text-sm">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
            </span>
            <span className="font-medium text-slate-700">Ledger Status: Active</span>
          </div>
        </div>

        {/* Info Banner */}
        <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm flex gap-4 items-start">
          <Shield className="w-6 h-6 text-slate-700 flex-shrink-0 mt-1" />
          <div>
            <h2 className="text-sm font-semibold text-slate-900">Decentralized Climate Transparency</h2>
            <p className="text-sm text-slate-600 mt-1 max-w-3xl leading-relaxed">
              All environmental observations processed by this system are mapped to standard FHIR records via AI, and their cryptographic hashes are anchored to a public blockchain. This ensures that climate data cannot be retroactively altered, maintaining perfect transparency for carbon markets and policymakers.
            </p>
          </div>
        </div>

        {/* Data Grid */}
        <div>
          <h2 className="text-lg font-semibold text-slate-900 tracking-tight mb-4">Recent Verified Reports</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {mockReports.map((report) => (
              <div key={report.id} className="bg-white p-6 rounded-xl shadow-sm border border-gray-200 flex flex-col justify-between hover:border-gray-300 transition-colors">
                <div>
                  <div className="flex items-start justify-between mb-4">
                    <div className={`px-2.5 py-0.5 rounded text-[10px] uppercase font-bold tracking-wider ${
                      report.risk === 'HIGH' ? 'bg-red-50 text-red-700 border border-red-100' : 
                      report.risk === 'MEDIUM' ? 'bg-amber-50 text-amber-700 border border-amber-100' : 
                      'bg-emerald-50 text-emerald-700 border border-emerald-100'
                    }`}>
                      {report.risk} Risk
                    </div>
                    <span className="text-[11px] text-gray-400">{report.time}</span>
                  </div>
                  <h3 className="font-medium text-slate-900 mb-2 leading-tight">{report.condition}</h3>
                  <div className="flex items-center text-slate-500 text-xs mb-5">
                    <MapPin className="w-3.5 h-3.5 mr-1.5 text-gray-400" />
                    {report.location}
                  </div>
                </div>
                <div className="pt-4 border-t border-gray-100 space-y-2">
                  <div className="flex justify-between items-center text-[11px]">
                    <span className="text-gray-500 font-medium">Tx Hash</span>
                    <span className="text-slate-700 font-mono">{report.txHash}</span>
                  </div>
                  <div className="flex justify-between items-center text-[11px]">
                    <span className="text-gray-500 font-medium">Block</span>
                    <span className="text-slate-700 font-mono">#{report.block}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}
