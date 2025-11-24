
import React from 'react';
import { X, Upload } from 'lucide-react';

const FleetImportModal: React.FC<{ onImport: any, onClose: () => void }> = ({ onClose }) => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/60 backdrop-blur-sm p-4">
      <div className="bg-white rounded-xl p-8 max-w-md w-full text-center">
          <div className="mx-auto w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 mb-4">
              <Upload size={32}/>
          </div>
          <h2 className="text-xl font-bold mb-2">Import Fleet Data</h2>
          <p className="text-slate-500 text-sm mb-6">Upload CSV containing VIN, Bus Number, and Driver assignments.</p>
          <button onClick={onClose} className="w-full py-2 bg-slate-100 rounded font-bold text-slate-600">Close Demo</button>
      </div>
    </div>
  );
};

export default FleetImportModal;
