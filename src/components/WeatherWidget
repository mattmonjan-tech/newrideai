
import React from 'react';
import { CloudSun, Wind, Droplets, Thermometer, AlertTriangle, CheckCircle2 } from 'lucide-react';

const WeatherWidget: React.FC = () => {
    // Mock Data - In production, fetch from OpenWeatherMap
    const weather = {
        temp: 84,
        condition: 'Partly Cloudy',
        wind: 12, // mph
        humidity: 18, // %
        alert: null // 'Flash Flood Warning'
    };

    // Calculate a "Road Safety Index" based on weather
    const safetyIndex = 100 - (weather.wind > 20 ? 10 : 0) - (weather.alert ? 30 : 0);
    const safetyStatus = safetyIndex > 90 ? 'Excellent' : safetyIndex > 70 ? 'Caution' : 'Hazardous';

    return (
        <div className="bg-gradient-to-r from-sky-500 to-blue-600 rounded-xl p-6 text-white shadow-lg mb-6 flex flex-col md:flex-row items-center justify-between relative overflow-hidden">
            {/* Background Elements */}
            <CloudSun className="absolute -right-10 -top-10 w-48 h-48 text-white/10" />
            
            <div className="flex items-center gap-6 z-10">
                <div className="bg-white/20 p-4 rounded-full backdrop-blur-sm">
                    <CloudSun size={32} className="text-yellow-300" />
                </div>
                <div>
                    <div className="flex items-end gap-2">
                        <h3 className="text-4xl font-bold">{weather.temp}°F</h3>
                        <span className="text-lg font-medium opacity-90 mb-1">{weather.condition}</span>
                    </div>
                    <p className="text-sm text-blue-100">Tucson, AZ • District HQ</p>
                </div>
            </div>

            <div className="flex gap-8 mt-4 md:mt-0 z-10">
                <div className="text-center">
                    <div className="flex items-center justify-center gap-1 text-blue-200 text-xs font-bold uppercase mb-1">
                        <Wind size={12} /> Wind
                    </div>
                    <p className="font-bold text-lg">{weather.wind} <span className="text-xs font-normal">mph</span></p>
                </div>
                <div className="text-center">
                    <div className="flex items-center justify-center gap-1 text-blue-200 text-xs font-bold uppercase mb-1">
                        <Thermometer size={12} /> RealFeel
                    </div>
                    <p className="font-bold text-lg">{weather.temp + 2}°</p>
                </div>
                <div className="text-center">
                    <div className="flex items-center justify-center gap-1 text-blue-200 text-xs font-bold uppercase mb-1">
                        <Droplets size={12} /> Humidity
                    </div>
                    <p className="font-bold text-lg">{weather.humidity}<span className="text-xs font-normal">%</span></p>
                </div>
            </div>

            <div className="mt-4 md:mt-0 pl-0 md:pl-8 border-l-0 md:border-l border-white/20 z-10 w-full md:w-auto">
                <div className="bg-black/20 rounded-lg p-3 backdrop-blur-sm">
                    <p className="text-[10px] uppercase tracking-wider font-bold text-blue-200 mb-1 flex items-center gap-1">
                        Road Safety Index
                    </p>
                    <div className="flex items-center gap-2">
                        {safetyStatus === 'Excellent' ? (
                            <CheckCircle2 size={20} className="text-green-400" />
                        ) : (
                            <AlertTriangle size={20} className="text-yellow-400" />
                        )}
                        <span className="text-xl font-bold">{safetyStatus} ({safetyIndex})</span>
                    </div>
                    <p className="text-xs text-blue-100 mt-1 opacity-80">
                        Dry roads. Standard braking distance applies.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default WeatherWidget;
