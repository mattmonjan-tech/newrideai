
import React from 'react';
import { DollarSign } from 'lucide-react';

const BudgetPlanner: React.FC<{ initialData: any }> = () => {
  return (
    <div className="p-6 h-full bg-white rounded-xl shadow-sm border border-slate-200">
        <h2 className="text-2xl font-bold text-slate-800 mb-4 flex items-center gap-2"><DollarSign className="text-green-600"/> Budget Planner</h2>
        <p className="text-slate-500">Financial modules loaded.</p>
    </div>
  );
};

export default BudgetPlanner;
