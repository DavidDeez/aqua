import { MapPin, AlertTriangle, ShieldCheck, Map as MapIcon } from "lucide-react";
import Link from "next/link";

// Mock Database for the demo
const mockReports = [
  { id: 1, location: "Downtown Canal", condition: "Suspected Cyanobacteria Bloom", risk: "HIGH", fhirCode: "92831-7", time: "2 hours ago" },
  { id: 2, location: "North Park Stream", condition: "Physical Pollution", risk: "MEDIUM", fhirCode: "92831-7", time: "5 hours ago" },
  { id: 3, location: "River Walk", condition: "Healthy Ecosystem Observed", risk: "LOW", fhirCode: "92831-7", time: "1 day ago" },
];

export default function Dashboard() {
  return (
    <div className="min-h-screen bg-slate-50 p-6 md:p-12">
      <div className="max-w-6xl mx-auto space-y-8">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <Link href="/" className="hover:opacity-80 transition-opacity">
               <MapIcon className="w-8 h-8 text-indigo-600" />
            </Link>
            <div>
              <h1 className="text-3xl font-bold text-slate-900">One Health Dashboard</h1>
              <p className="text-slate-600 mt-1">Real-time FHIR environmental risk surveillance</p>
            </div>
          </div>
          <div className="flex gap-4">
            <div className="bg-white px-4 py-2 rounded-lg border border-slate-200 shadow-sm flex items-center gap-2">
              <AlertTriangle className="w-5 h-5 text-red-500" />
              <span className="font-bold text-slate-700">1 Active Alert</span>
            </div>
            <div className="bg-white px-4 py-2 rounded-lg border border-slate-200 shadow-sm flex items-center gap-2">
              <ShieldCheck className="w-5 h-5 text-emerald-500" />
              <span className="font-bold text-slate-700">Systems Online</span>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {mockReports.map((report) => (
            <div key={report.id} className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200 flex flex-col justify-between">
              <div>
                <div className="flex items-start justify-between mb-4">
                  <div className={`px-3 py-1 rounded-full text-xs font-bold ${
                    report.risk === 'HIGH' ? 'bg-red-100 text-red-700' : 
                    report.risk === 'MEDIUM' ? 'bg-amber-100 text-amber-700' : 
                    'bg-emerald-100 text-emerald-700'
                  }`}>
                    {report.risk} RISK
                  </div>
                  <span className="text-xs text-slate-400">{report.time}</span>
                </div>
                <h3 className="font-bold text-lg text-slate-900 mb-1">{report.condition}</h3>
                <div className="flex items-center text-slate-500 text-sm mb-4 mt-2">
                  <MapPin className="w-4 h-4 mr-1 text-slate-400" />
                  {report.location}
                </div>
              </div>
              <div className="pt-4 border-t border-slate-100 mt-4">
                <p className="text-xs text-slate-400 font-mono">FHIR LOINC: {report.fhirCode}</p>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-12 bg-indigo-900 rounded-2xl p-8 text-white shadow-lg overflow-hidden relative">
          <div className="absolute top-0 right-0 p-16 opacity-10">
            <MapPin className="w-64 h-64" />
          </div>
          <div className="relative z-10">
            <h2 className="text-2xl font-bold mb-2">Interoperability Active</h2>
            <p className="text-indigo-200 max-w-xl">
              This dashboard is securely ingesting citizen science observations formatted as standard HL7 FHIR resources, seamlessly linking urban water health with city public health infrastructure.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
