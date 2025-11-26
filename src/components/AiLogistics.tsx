import React, { useState } from 'react';
import { analyzeLogistics } from '../services/geminiService';
import { BusRoute, LogEntry, AiInsight, MaintenanceTicket } from '../types';
import { Sparkles, RefreshCw, ShieldCheck, TrendingUp, Wrench } from 'lucide-react';

interface AiLogisticsProps {
  routes: BusRoute[];
  logs: LogEntry[];
  tickets?: MaintenanceTicket[];
}

const AiLogistics: React.FC<AiLogisticsProps> = ({ routes, logs, tickets = [] }) => {
  const [insights, setInsights] = useState<AiInsight[]>([]);
  const [loading, setLoading] = useState(false);
  const [lastUpdated, setLastUpdated] = useState<Date | null>(null);

  const handleAnalyze = async () => {
    setLoading(true);
    try {
        const results = await analyzeLogistics(routes, logs, tickets);
        setInsights(results);
        setLastUpdated(new Date());
    } catch (e) {
        console.error(e);
    } finally {
        setLoading(false);
    }
  };

  return (
    <div className="bg-gradient-to-br from-indigo-900 to-slate-900 rounded-xl p-6 text-white shadow-xl overflow-hidden relative">
        <div className="absolute top-0 right-0 -mt-10 -mr-10 w-40 h-40 bg-blue-500 rounded-full blur-3xl opacity-20"></div>
        <div className="absolute bottom-0 left-0 -mb-10 -ml-10 w-40 h-40 bg-purple-500 rounded-full blur-3xl opacity-20"></div>

        <div className="relative z-10">
            <div className="flex justify-between items-center mb-6">
                <div className="flex items-center gap-3">
                    <div className="p-2 bg-indigo-500/20 rounded-lg border border-indigo-400/30">
                        <Sparkles className="text-yellow-400" size={24} />
                    </div>
                    <div>
                        <h2 className="text-xl font-bold">AI Logistics Analyst</h2>
                        <p className="text-indigo-200 text-xs">Powered by Gemini 2.5 Flash</p>
                    </div>
                </div>
                <button 
                    onClick={handleAnalyze}
                    disabled={loading}
                    className={`flex items-center gap-2 px-4 py-2 rounded-lg bg-indigo-500 hover:bg-indigo-400 transition-colors text-sm font-medium disabled:opacity-50 ${loading ? 'animate-pulse' : ''}`}
                >
                    <RefreshCw size={16} className={loading ? 'animate-spin' : ''} />
                    {loading ? 'Analyzing...' : 'Generate Report'}
                </button>
            </div>

            {insights.length === 0 && !loading ? (
                <div className="text-center py-10 border border-dashed border-indigo-700/50 rounded-xl bg-indigo-950/30">
                    <p className="text-indigo-300">Click "Generate Report" to analyze real-time fleet and rider data for optimization opportunities.</p>
                </div>
            ) : (
                <div className="space-y-4">
                     {lastUpdated && (
                        <div className="text-right text-xs text-indigo-300 mb-2">
                            Last analysis: {lastUpdated.toLocaleTimeString()}
                        </div>
                    )}
                    {insights.map((insight, idx) => (
                        <div key={idx} className="bg-white/5 border border-white/10 p-4 rounded-lg hover:bg-white/10 transition-colors">
                            <div className="flex justify-between items-start mb-2">
                                <div className="flex items-center gap-2">
                                    {insight.type === 'safety' && <ShieldCheck className="text-red-400" size={18} />}
                                    {insight.type === 'optimization' && <TrendingUp className="text-emerald-400" size={18} />}
                                    {insight.type === 'maintenance' && <Wrench className="text-orange-400" size={18} />}
                                    <h3 className="font-semibold text-white">{insight.title}</h3>
                                </div>
                                <span className="text-xs font-mono bg-black/20 px-2 py-1 rounded text-indigo-200">
                                    {insight.confidence}% Conf.
                                </span>
                            </div>
                            <p className="text-sm text-indigo-100 leading-relaxed">{insight.description}</p>
                        </div>
                    ))}
                </div>
            )}
        </div>
    </div>
  );
};

export default AiLogistics;
