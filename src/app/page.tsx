import Link from "next/link";
import { Droplet, Activity, Map } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen bg-slate-50 flex flex-col items-center justify-center p-6">
      <div className="max-w-3xl w-full text-center space-y-8">
        <div className="flex justify-center mb-6">
          <div className="p-4 bg-blue-100 rounded-full">
            <Droplet className="w-16 h-16 text-blue-600" />
          </div>
        </div>
        <h1 className="text-5xl font-extrabold tracking-tight text-slate-900">
          Aqua<span className="text-blue-600">FHIR</span>
        </h1>
        <p className="text-xl text-slate-600">
          From streams to systems: turning citizen science into actionable One Health intelligence.
        </p>

        <div className="grid md:grid-cols-2 gap-6 mt-12">
          <Link href="/citizen" className="group p-8 bg-white rounded-2xl shadow-sm hover:shadow-md transition-all border border-slate-200 text-left cursor-pointer">
            <Activity className="w-10 h-10 text-emerald-500 mb-4 group-hover:scale-110 transition-transform" />
            <h2 className="text-2xl font-bold text-slate-900 mb-2">Citizen Portal</h2>
            <p className="text-slate-600">Report water conditions in natural language and let AI do the rest.</p>
          </Link>
          
          <Link href="/dashboard" className="group p-8 bg-white rounded-2xl shadow-sm hover:shadow-md transition-all border border-slate-200 text-left cursor-pointer">
            <Map className="w-10 h-10 text-indigo-500 mb-4 group-hover:scale-110 transition-transform" />
            <h2 className="text-2xl font-bold text-slate-900 mb-2">Health Dashboard</h2>
            <p className="text-slate-600">View FHIR-standardized environmental data and early warnings.</p>
          </Link>
        </div>
      </div>
    </div>
  );
}
