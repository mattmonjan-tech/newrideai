
import React from 'react';

const YearlyReport: React.FC<{ tenantName: string }> = ({ tenantName }) => {
  return <div className="p-8 text-white">Yearly Report for {tenantName}</div>;
};

export default YearlyReport;
