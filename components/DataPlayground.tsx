"use client";

import React, { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Car,
  CloudFog,
  ShoppingBag,
  Trophy,
  Filter,
  TrendingUp,
  BarChart2,
  Sliders,
  AlertTriangle,
  Info,
  CheckCircle2,
  RefreshCw,
  Zap,
} from "lucide-react";

// Tab types
type DatasetKey = "ola-uber" | "delhi-aqi" | "footwear-sales" | "t20-cricket";

export default function DataPlayground() {
  const [activeDataset, setActiveDataset] = useState<DatasetKey>("ola-uber");

  // State for Ola/Uber
  const [vehicleFilter, setVehicleFilter] = useState<string>("all");
  const [timeWindow, setTimeWindow] = useState<"morning" | "afternoon" | "evening" | "night">("evening");
  const [surgeActive, setSurgeActive] = useState<boolean>(true);

  // State for Delhi AQI
  const [selectedMonth, setSelectedMonth] = useState<number>(10); // 10 = Nov (0-indexed: Nov)
  const [humidityLevel, setHumidityLevel] = useState<number>(75);

  // State for Footwear
  const [selectedCategory, setSelectedCategory] = useState<string>("running");
  const [discountPercent, setDiscountPercent] = useState<number>(15);

  // State for Cricket
  const [cricketPhase, setCricketPhase] = useState<"powerplay" | "middle" | "death">("death");
  const [pitchCondition, setPitchCondition] = useState<"slow-turn" | "true-bounce">("slow-turn");

  // Ola / Uber dynamic calculations
  const olaUberData = useMemo(() => {
    const baseRates: Record<string, number> = {
      all: 28.4,
      auto: 38.2,
      mini: 24.1,
      sedan: 18.4,
      bike: 14.7,
    };

    const timeMultipliers = {
      morning: 1.15,
      afternoon: 0.75,
      evening: 1.45,
      night: 0.9,
    };

    let rate = baseRates[vehicleFilter] * timeMultipliers[timeWindow];
    if (surgeActive) rate *= 1.12;

    const finalRate = Math.min(Math.round(rate * 10) / 10, 68.5);
    const etaSensitivity = timeWindow === "evening" ? "High (7.2 min threshold)" : "Moderate (9.5 min)";
    const driverRejection = Math.round(finalRate * 0.62 * 10) / 10;
    const customerCancel = Math.round((finalRate - driverRejection) * 10) / 10;

    const bars = [
      { label: "Driver Abort (Unprofitable Route)", value: driverRejection },
      { label: "Customer (High Wait Time)", value: customerCancel },
      { label: "Traffic Gridlock Rejection", value: Math.round(finalRate * 0.45 * 10) / 10 },
      { label: "Payment / App Glitch", value: 3.2 },
    ];

    return { finalRate, etaSensitivity, driverRejection, customerCancel, bars };
  }, [vehicleFilter, timeWindow, surgeActive]);

  // Delhi AQI dynamic calculations
  const aqiData = useMemo(() => {
    const months = [
      { name: "Jan", temp: 13, baseAqi: 395, pm25: 280, pm10: 410 },
      { name: "Feb", temp: 18, baseAqi: 290, pm25: 195, pm10: 310 },
      { name: "Mar", temp: 24, baseAqi: 215, pm25: 140, pm10: 250 },
      { name: "Apr", temp: 31, baseAqi: 190, pm25: 110, pm10: 240 },
      { name: "May", temp: 36, baseAqi: 175, pm25: 95, pm10: 230 },
      { name: "Jun", temp: 35, baseAqi: 155, pm25: 80, pm10: 190 },
      { name: "Jul", temp: 32, baseAqi: 110, pm25: 55, pm10: 120 },
      { name: "Aug", temp: 30, baseAqi: 95, pm25: 45, pm10: 105 },
      { name: "Sep", temp: 29, baseAqi: 135, pm25: 75, pm10: 150 },
      { name: "Oct", temp: 26, baseAqi: 285, pm25: 185, pm10: 320 },
      { name: "Nov", temp: 19, baseAqi: 445, pm25: 340, pm10: 480 },
      { name: "Dec", temp: 14, baseAqi: 420, pm25: 310, pm10: 460 },
    ];

    const currentMonth = months[selectedMonth];
    const humidityDelta = (humidityLevel - 50) * 0.6;
    const finalAqi = Math.round(Math.min(500, Math.max(50, currentMonth.baseAqi + humidityDelta)));
    const finalPm25 = Math.round(currentMonth.pm25 + humidityDelta * 0.7);

    let status = "Moderate";
    let color = "text-amber-400 border-amber-500/30 bg-amber-500/10";
    if (finalAqi <= 100) {
      status = "Satisfactory";
      color = "text-emerald-400 border-emerald-500/30 bg-emerald-500/10";
    } else if (finalAqi <= 250) {
      status = "Poor / Unhealthy";
      color = "text-amber-400 border-amber-500/30 bg-amber-500/10";
    } else if (finalAqi <= 380) {
      status = "Severe";
      color = "text-rose-400 border-rose-500/30 bg-rose-500/10";
    } else {
      status = "Hazardous Emergency";
      color = "text-purple-400 border-purple-500/30 bg-purple-500/10";
    }

    return { currentMonth, finalAqi, finalPm25, status, color, months };
  }, [selectedMonth, humidityLevel]);

  // Footwear dynamic calculations
  const footwearData = useMemo(() => {
    const categoryDefaults: Record<string, { baseMargin: number; baseVolume: number; aov: number }> = {
      running: { baseMargin: 48, baseVolume: 2200, aov: 4499 },
      lifestyle: { baseMargin: 42, baseVolume: 1750, aov: 3799 },
      training: { baseMargin: 40, baseVolume: 1100, aov: 3299 },
      basketball: { baseMargin: 45, baseVolume: 650, aov: 5999 },
    };

    const current = categoryDefaults[selectedCategory];
    // Elasticity formula: volume increases as discount rises, but net profit margin dips
    const volumeMultiplier = 1 + (discountPercent / 100) * 1.8;
    const projectedUnits = Math.round(current.baseVolume * volumeMultiplier);
    const netDiscountedPrice = current.aov * (1 - discountPercent / 100);
    const grossRevenue = Math.round((projectedUnits * netDiscountedPrice) / 100000); // in Lakhs
    const effectiveMargin = Math.max(12, Math.round(current.baseMargin - discountPercent * 0.95));
    const grossProfitLakhs = Math.round((grossRevenue * (effectiveMargin / 100)) * 10) / 10;

    return { current, projectedUnits, netDiscountedPrice, grossRevenue, effectiveMargin, grossProfitLakhs };
  }, [selectedCategory, discountPercent]);

  // T20 World Cup dynamic calculations
  const cricketData = useMemo(() => {
    const phaseStats = {
      powerplay: {
        runRate: pitchCondition === "slow-turn" ? 6.4 : 8.6,
        boundaryPct: pitchCondition === "slow-turn" ? 14.8 : 22.4,
        wicketRisk: pitchCondition === "slow-turn" ? "1.8 Wickets avg" : "1.1 Wickets avg",
        dotBallPct: pitchCondition === "slow-turn" ? 48.2 : 36.5,
        keyInsight: "New ball swing on slow surfaces created 48% dot balls in overs 1-6.",
      },
      middle: {
        runRate: pitchCondition === "slow-turn" ? 6.1 : 7.9,
        boundaryPct: pitchCondition === "slow-turn" ? 11.2 : 16.8,
        wicketRisk: pitchCondition === "slow-turn" ? "2.6 Wickets avg" : "1.9 Wickets avg",
        dotBallPct: pitchCondition === "slow-turn" ? 41.5 : 32.1,
        keyInsight: "Spinners choked boundary frequency by bowling 68% deliveries into good length.",
      },
      death: {
        runRate: pitchCondition === "slow-turn" ? 8.9 : 11.4,
        boundaryPct: pitchCondition === "slow-turn" ? 21.4 : 31.8,
        wicketRisk: pitchCondition === "slow-turn" ? "3.8 Wickets avg" : "2.9 Wickets avg",
        dotBallPct: pitchCondition === "slow-turn" ? 34.2 : 25.8,
        keyInsight: "Wide yorkers and slow off-cutters curbed death-over scoring to sub-9 RPO on Caribbean pitches.",
      },
    };

    return phaseStats[cricketPhase];
  }, [cricketPhase, pitchCondition]);

  return (
    <section id="playground" className="w-full max-w-6xl mx-auto py-16 px-4 sm:px-6 relative z-10">
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 font-mono text-xs mb-3">
            <Zap size={13} className="text-cyan-400" />
            <span>Interactive Data Analytics Lab</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white flex items-center gap-3">
            Interactive EDA Lab
          </h2>
          <p className="text-zinc-400 text-sm sm:text-base mt-2 max-w-2xl">
            Explore analytical relationships modeled from project datasets. Adjust parameters, filter cohorts, and evaluate statistical distributions.
          </p>
        </div>

        {/* Dataset Switcher Pills */}
        <div className="flex items-center gap-2 p-1.5 rounded-2xl bg-zinc-900/80 border border-zinc-800 backdrop-blur-md overflow-x-auto">
          <button
            onClick={() => setActiveDataset("ola-uber")}
            className={`flex items-center gap-2 px-3 py-2 rounded-xl text-xs font-mono transition-all whitespace-nowrap ${
              activeDataset === "ola-uber"
                ? "bg-cyan-500/20 text-cyan-300 border border-cyan-500/40 shadow-sm shadow-cyan-500/20 font-semibold"
                : "text-zinc-400 hover:text-zinc-200"
            }`}
          >
            <Car size={14} />
            Ola / Uber EDA
          </button>
          <button
            onClick={() => setActiveDataset("delhi-aqi")}
            className={`flex items-center gap-2 px-3 py-2 rounded-xl text-xs font-mono transition-all whitespace-nowrap ${
              activeDataset === "delhi-aqi"
                ? "bg-emerald-500/20 text-emerald-300 border border-emerald-500/40 shadow-sm shadow-emerald-500/20 font-semibold"
                : "text-zinc-400 hover:text-zinc-200"
            }`}
          >
            <CloudFog size={14} />
            Delhi AQI & Weather
          </button>
          <button
            onClick={() => setActiveDataset("footwear-sales")}
            className={`flex items-center gap-2 px-3 py-2 rounded-xl text-xs font-mono transition-all whitespace-nowrap ${
              activeDataset === "footwear-sales"
                ? "bg-purple-500/20 text-purple-300 border border-purple-500/40 shadow-sm shadow-purple-500/20 font-semibold"
                : "text-zinc-400 hover:text-zinc-200"
            }`}
          >
            <ShoppingBag size={14} />
            Footwear Sales
          </button>
          <button
            onClick={() => setActiveDataset("t20-cricket")}
            className={`flex items-center gap-2 px-3 py-2 rounded-xl text-xs font-mono transition-all whitespace-nowrap ${
              activeDataset === "t20-cricket"
                ? "bg-amber-500/20 text-amber-300 border border-amber-500/40 shadow-sm shadow-amber-500/20 font-semibold"
                : "text-zinc-400 hover:text-zinc-200"
            }`}
          >
            <Trophy size={14} />
            T20 World Cup
          </button>
        </div>
      </div>

      {/* Main Interactive Sandbox Card */}
      <div className="rounded-3xl border border-zinc-800/80 bg-zinc-950/70 backdrop-blur-2xl shadow-2xl p-6 sm:p-8 overflow-hidden relative">
        {/* Technical Disclaimer Banner */}
        <div className="flex items-start gap-3 p-3.5 rounded-2xl bg-zinc-900/60 border border-zinc-800 text-xs font-mono text-zinc-400 mb-6">
          <Info size={16} className="text-cyan-400 shrink-0 mt-0.5" />
          <p className="leading-relaxed">
            <strong className="text-zinc-200">Methodology Note:</strong> Interactive demonstration using synthesized data derived from project patterns. Metrics are illustrative and should not be interpreted as production estimates.
          </p>
        </div>

        <AnimatePresence mode="wait">
          {/* TAB 1: OLA / UBER CANCELLATION */}
          {activeDataset === "ola-uber" && (
            <motion.div
              key="ola-uber"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.3 }}
              className="space-y-6"
            >
              {/* Controls bar */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pb-6 border-b border-zinc-800/80">
                {/* Vehicle Filter */}
                <div>
                  <label className="block text-xs font-mono text-zinc-400 mb-2 flex items-center gap-1.5">
                    <Filter size={13} className="text-cyan-400" />
                    Vehicle Category
                  </label>
                  <select
                    value={vehicleFilter}
                    onChange={(e) => setVehicleFilter(e.target.value)}
                    className="w-full bg-zinc-900 border border-zinc-800 rounded-xl px-3 py-2 text-sm text-zinc-200 focus:outline-none focus:border-cyan-500 font-mono"
                  >
                    <option value="all">All Vehicles (Blended)</option>
                    <option value="auto">Auto Rickshaw (Highest Churn)</option>
                    <option value="mini">Mini Hatchback</option>
                    <option value="sedan">Prime Sedan</option>
                    <option value="bike">Bike Taxi</option>
                  </select>
                </div>

                {/* Time Window */}
                <div>
                  <label className="block text-xs font-mono text-zinc-400 mb-2 flex items-center gap-1.5">
                    <TrendingUp size={13} className="text-cyan-400" />
                    Temporal Rush Window
                  </label>
                  <div className="grid grid-cols-4 gap-1 p-1 bg-zinc-900 rounded-xl border border-zinc-800">
                    {(["morning", "afternoon", "evening", "night"] as const).map((t) => (
                      <button
                        key={t}
                        onClick={() => setTimeWindow(t)}
                        className={`py-1 text-[11px] font-mono capitalize rounded-lg transition-all ${
                          timeWindow === t
                            ? "bg-cyan-500/20 text-cyan-300 font-semibold border border-cyan-500/30"
                            : "text-zinc-500 hover:text-zinc-300"
                        }`}
                      >
                        {t === "morning" ? "8-11a" : t === "afternoon" ? "12-4p" : t === "evening" ? "5-9p" : "Night"}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Surge Toggle */}
                <div>
                  <label className="block text-xs font-mono text-zinc-400 mb-2 flex items-center gap-1.5">
                    <Zap size={13} className="text-cyan-400" />
                    Dynamic Price Multiplier
                  </label>
                  <button
                    onClick={() => setSurgeActive(!surgeActive)}
                    className={`w-full py-2 px-3 rounded-xl border text-xs font-mono flex items-center justify-between transition-all ${
                      surgeActive
                        ? "bg-amber-500/10 border-amber-500/40 text-amber-300 font-semibold"
                        : "bg-zinc-900 border-zinc-800 text-zinc-400"
                    }`}
                  >
                    <span>Peak Surge 1.5x - 2.0x</span>
                    <span className="px-2 py-0.5 rounded bg-zinc-800/80 text-[10px]">
                      {surgeActive ? "ACTIVE" : "OFF"}
                    </span>
                  </button>
                </div>
              </div>

              {/* Reactive KPIs */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="p-4 rounded-2xl bg-zinc-900/60 border border-zinc-800/80">
                  <span className="text-zinc-400 text-xs font-mono block mb-1">Calculated Cancellation Rate</span>
                  <div className="text-2xl sm:text-3xl font-bold font-mono text-cyan-400 flex items-baseline gap-1">
                    {olaUberData.finalRate}%
                    <span className="text-xs text-zinc-500 font-normal">of bookings</span>
                  </div>
                </div>

                <div className="p-4 rounded-2xl bg-zinc-900/60 border border-zinc-800/80">
                  <span className="text-zinc-400 text-xs font-mono block mb-1">Driver-Initiated Drop</span>
                  <div className="text-2xl sm:text-3xl font-bold font-mono text-rose-400 flex items-baseline gap-1">
                    {olaUberData.driverRejection}%
                    <span className="text-xs text-zinc-500 font-normal">driver side</span>
                  </div>
                </div>

                <div className="p-4 rounded-2xl bg-zinc-900/60 border border-zinc-800/80">
                  <span className="text-zinc-400 text-xs font-mono block mb-1">Customer Abandonment</span>
                  <div className="text-2xl sm:text-3xl font-bold font-mono text-amber-400 flex items-baseline gap-1">
                    {olaUberData.customerCancel}%
                    <span className="text-xs text-zinc-500 font-normal">wait time drop</span>
                  </div>
                </div>

                <div className="p-4 rounded-2xl bg-zinc-900/60 border border-zinc-800/80">
                  <span className="text-zinc-400 text-xs font-mono block mb-1">ETA Drop-Off Sensitivity</span>
                  <div className="text-sm font-mono font-semibold text-emerald-400 mt-2">
                    {olaUberData.etaSensitivity}
                  </div>
                </div>
              </div>

              {/* Visual Breakdown Bar Chart */}
              <div className="p-5 rounded-2xl bg-zinc-900/40 border border-zinc-800/60 space-y-4">
                <div className="flex items-center justify-between text-xs font-mono text-zinc-400 pb-2 border-b border-zinc-800/50">
                  <span className="flex items-center gap-1.5 text-zinc-300">
                    <BarChart2 size={14} className="text-cyan-400" />
                    Simulated Root-Cause Distribution (Relative Contribution)
                  </span>
                  <span className="text-zinc-500">N = 120,000 Transacted Trips</span>
                </div>

                <div className="space-y-3">
                  {olaUberData.bars.map((bar, idx) => (
                    <div key={idx} className="space-y-1">
                      <div className="flex justify-between text-xs font-mono">
                        <span className="text-zinc-300">{bar.label}</span>
                        <span className="text-cyan-400 font-bold">{bar.value}%</span>
                      </div>
                      <div className="w-full h-3 rounded-full bg-zinc-800 overflow-hidden relative">
                        <motion.div
                          initial={{ width: 0 }}
                          animate={{ width: `${Math.min(100, bar.value * 2)}%` }}
                          transition={{ duration: 0.5, ease: "easeOut" }}
                          className={`h-full rounded-full ${
                            idx === 0
                              ? "bg-gradient-to-r from-cyan-500 to-blue-500"
                              : idx === 1
                              ? "bg-gradient-to-r from-amber-500 to-rose-500"
                              : idx === 2
                              ? "bg-gradient-to-r from-purple-500 to-pink-500"
                              : "bg-zinc-600"
                          }`}
                        />
                      </div>
                    </div>
                  ))}
                </div>

                <div className="flex items-start gap-2 pt-2 text-xs text-zinc-400 bg-cyan-950/20 border border-cyan-900/40 p-3 rounded-xl">
                  <Info size={16} className="text-cyan-400 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-cyan-300">Data-Driven Recommendation:</strong> Implementing localized driver bonus guaranteed zones in 5:30-8:00 PM reduces auto driver cancellation probability by an estimated 14.8%.
                  </div>
                </div>
              </div>
            </motion.div>
          )}

          {/* TAB 2: DELHI AQI & WEATHER */}
          {activeDataset === "delhi-aqi" && (
            <motion.div
              key="delhi-aqi"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.3 }}
              className="space-y-6"
            >
              {/* Controls */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pb-6 border-b border-zinc-800/80">
                {/* Month slider */}
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <label className="text-xs font-mono text-zinc-400 flex items-center gap-1.5">
                      <CloudFog size={14} className="text-emerald-400" />
                      Temporal Timeline: Select Month
                    </label>
                    <span className="text-xs font-mono font-bold text-emerald-400 px-2 py-0.5 rounded bg-emerald-950/60 border border-emerald-800">
                      {aqiData.currentMonth.name} (Avg: {aqiData.currentMonth.temp}°C)
                    </span>
                  </div>
                  <input
                    type="range"
                    min={0}
                    max={11}
                    value={selectedMonth}
                    onChange={(e) => setSelectedMonth(Number(e.target.value))}
                    className="w-full accent-emerald-400 h-2 bg-zinc-800 rounded-lg cursor-pointer"
                  />
                  <div className="flex justify-between text-[10px] font-mono text-zinc-500 mt-1">
                    <span>Jan (Winter)</span>
                    <span>May (Summer)</span>
                    <span>Jul (Monsoon)</span>
                    <span>Nov (Peak Smog)</span>
                  </div>
                </div>

                {/* Humidity Slider */}
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <label className="text-xs font-mono text-zinc-400 flex items-center gap-1.5">
                      <Sliders size={14} className="text-emerald-400" />
                      Relative Humidity Stress
                    </label>
                    <span className="text-xs font-mono font-bold text-emerald-400 px-2 py-0.5 rounded bg-emerald-950/60 border border-emerald-800">
                      {humidityLevel}% RH
                    </span>
                  </div>
                  <input
                    type="range"
                    min={30}
                    max={95}
                    value={humidityLevel}
                    onChange={(e) => setHumidityLevel(Number(e.target.value))}
                    className="w-full accent-emerald-400 h-2 bg-zinc-800 rounded-lg cursor-pointer"
                  />
                  <div className="flex justify-between text-[10px] font-mono text-zinc-500 mt-1">
                    <span>Dry (30%)</span>
                    <span>Normal (55%)</span>
                    <span>Moist Inversion (95%)</span>
                  </div>
                </div>
              </div>

              {/* Reactive Severity Gauge & Cards */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className={`p-5 rounded-2xl border ${aqiData.color} transition-all`}>
                  <span className="text-xs font-mono block opacity-80 mb-1">Simulated AQI Index</span>
                  <div className="text-3xl sm:text-4xl font-bold font-mono flex items-baseline gap-2">
                    {aqiData.finalAqi}
                    <span className="text-xs uppercase font-sans tracking-wide">AQI</span>
                  </div>
                  <div className="mt-2 text-xs font-semibold flex items-center gap-1.5">
                    <AlertTriangle size={14} />
                    Classification: {aqiData.status}
                  </div>
                </div>

                <div className="p-5 rounded-2xl bg-zinc-900/60 border border-zinc-800/80">
                  <span className="text-zinc-400 text-xs font-mono block mb-1">Fine Respirable PM2.5</span>
                  <div className="text-2xl sm:text-3xl font-bold font-mono text-cyan-400 flex items-baseline gap-1">
                    {aqiData.finalPm25}
                    <span className="text-xs text-zinc-500">μg/m³</span>
                  </div>
                  <span className="text-[11px] text-zinc-400 mt-2 block font-mono">
                    WHO Safe Threshold: 15 μg/m³
                  </span>
                </div>

                <div className="p-5 rounded-2xl bg-zinc-900/60 border border-zinc-800/80">
                  <span className="text-zinc-400 text-xs font-mono block mb-1">Thermal Inversion Factor</span>
                  <div className="text-2xl sm:text-3xl font-bold font-mono text-purple-400 flex items-baseline gap-1">
                    -0.78
                    <span className="text-xs text-zinc-500">r-coeff</span>
                  </div>
                  <span className="text-[11px] text-zinc-400 mt-2 block font-mono">
                    Inverse correlation with Ambient Temp
                  </span>
                </div>
              </div>

              {/* 12-Month Sparkline Chart */}
              <div className="p-5 rounded-2xl bg-zinc-900/40 border border-zinc-800/60 space-y-4">
                <div className="flex justify-between items-center text-xs font-mono text-zinc-400">
                  <span>12-Month Annualized AQI Profile & Inversion Peaks</span>
                  <span className="text-emerald-400 font-semibold">Active: {aqiData.currentMonth.name}</span>
                </div>

                {/* Visual Bar chart of months */}
                <div className="grid grid-cols-12 gap-1 sm:gap-2 items-end h-32 pt-4 border-b border-zinc-800">
                  {aqiData.months.map((m, idx) => {
                    const isSelected = idx === selectedMonth;
                    const heightPct = Math.min(100, Math.round((m.baseAqi / 450) * 100));
                    return (
                      <button
                        key={m.name}
                        onClick={() => setSelectedMonth(idx)}
                        className="group flex flex-col items-center h-full justify-end"
                      >
                        <div
                          style={{ height: `${heightPct}%` }}
                          className={`w-full rounded-t-md transition-all ${
                            isSelected
                              ? "bg-emerald-400 shadow-md shadow-emerald-500/50"
                              : m.baseAqi > 300
                              ? "bg-rose-500/60 hover:bg-rose-500"
                              : "bg-zinc-700/60 hover:bg-zinc-600"
                          }`}
                        />
                        <span
                          className={`text-[9px] sm:text-[10px] font-mono mt-1 ${
                            isSelected ? "text-emerald-400 font-bold" : "text-zinc-500"
                          }`}
                        >
                          {m.name}
                        </span>
                      </button>
                    );
                  })}
                </div>
              </div>
            </motion.div>
          )}

          {/* TAB 3: FOOTWEAR SALES */}
          {activeDataset === "footwear-sales" && (
            <motion.div
              key="footwear-sales"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.3 }}
              className="space-y-6"
            >
              {/* Controls */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pb-6 border-b border-zinc-800/80">
                <div>
                  <label className="block text-xs font-mono text-zinc-400 mb-2 flex items-center gap-1.5">
                    <ShoppingBag size={14} className="text-purple-400" />
                    Product Category Taxonomy
                  </label>
                  <div className="grid grid-cols-2 gap-2">
                    {[
                      { id: "running", label: "Running Shoes (Hero Category)" },
                      { id: "lifestyle", label: "Lifestyle / Casual" },
                      { id: "training", label: "Gym & Training" },
                      { id: "basketball", label: "High-Top Basketball" },
                    ].map((cat) => (
                      <button
                        key={cat.id}
                        onClick={() => setSelectedCategory(cat.id)}
                        className={`p-2.5 rounded-xl border text-xs font-mono text-left transition-all ${
                          selectedCategory === cat.id
                            ? "bg-purple-500/20 text-purple-300 border-purple-500/40 font-semibold"
                            : "bg-zinc-900 border-zinc-800 text-zinc-400 hover:text-zinc-200"
                        }`}
                      >
                        {cat.label}
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <div className="flex justify-between items-center mb-2">
                    <label className="text-xs font-mono text-zinc-400 flex items-center gap-1.5">
                      <Sliders size={14} className="text-purple-400" />
                      Discount Depth Simulation (% Off)
                    </label>
                    <span className="text-xs font-mono font-bold text-purple-400 px-2 py-0.5 rounded bg-purple-950/60 border border-purple-800">
                      {discountPercent}% OFF
                    </span>
                  </div>
                  <input
                    type="range"
                    min={0}
                    max={40}
                    step={5}
                    value={discountPercent}
                    onChange={(e) => setDiscountPercent(Number(e.target.value))}
                    className="w-full accent-purple-400 h-2 bg-zinc-800 rounded-lg cursor-pointer"
                  />
                  <div className="flex justify-between text-[10px] font-mono text-zinc-500 mt-1">
                    <span>Full Price (0%)</span>
                    <span>Optimal (15%)</span>
                    <span>Margin Erosion (35%+)</span>
                  </div>
                </div>
              </div>

              {/* Reactive Metrics */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="p-4 rounded-2xl bg-zinc-900/60 border border-zinc-800/80">
                  <span className="text-zinc-400 text-xs font-mono block mb-1">Projected Monthly Units</span>
                  <div className="text-2xl sm:text-3xl font-bold font-mono text-purple-400">
                    {footwearData.projectedUnits.toLocaleString()}
                  </div>
                  <span className="text-[11px] text-zinc-500 mt-1 block">Sell-through velocity</span>
                </div>

                <div className="p-4 rounded-2xl bg-zinc-900/60 border border-zinc-800/80">
                  <span className="text-zinc-400 text-xs font-mono block mb-1">Net Realized Price (AOV)</span>
                  <div className="text-2xl sm:text-3xl font-bold font-mono text-cyan-400">
                    ₹{Math.round(footwearData.netDiscountedPrice).toLocaleString()}
                  </div>
                  <span className="text-[11px] text-zinc-500 mt-1 block">Post-discount average</span>
                </div>

                <div className="p-4 rounded-2xl bg-zinc-900/60 border border-zinc-800/80">
                  <span className="text-zinc-400 text-xs font-mono block mb-1">Gross Margin (%)</span>
                  <div className="text-2xl sm:text-3xl font-bold font-mono text-emerald-400">
                    {footwearData.effectiveMargin}%
                  </div>
                  <span className="text-[11px] text-zinc-500 mt-1 block">Unit profit retention</span>
                </div>

                <div className="p-4 rounded-2xl bg-zinc-900/60 border border-zinc-800/80">
                  <span className="text-zinc-400 text-xs font-mono block mb-1">Net Profit Pool</span>
                  <div className="text-2xl sm:text-3xl font-bold font-mono text-amber-400">
                    ₹{footwearData.grossProfitLakhs}L
                  </div>
                  <span className="text-[11px] text-zinc-500 mt-1 block">From ₹{footwearData.grossRevenue}L GMV</span>
                </div>
              </div>
            </motion.div>
          )}

          {/* TAB 4: ICC T20 WORLD CUP */}
          {activeDataset === "t20-cricket" && (
            <motion.div
              key="t20-cricket"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.3 }}
              className="space-y-6"
            >
              {/* Controls */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pb-6 border-b border-zinc-800/80">
                <div>
                  <label className="block text-xs font-mono text-zinc-400 mb-2 flex items-center gap-1.5">
                    <Trophy size={14} className="text-amber-400" />
                    Tournament Inning Phase
                  </label>
                  <div className="grid grid-cols-3 gap-2">
                    {[
                      { id: "powerplay", label: "Powerplay (1-6)" },
                      { id: "middle", label: "Middle (7-15)" },
                      { id: "death", label: "Death Overs (16-20)" },
                    ].map((p) => (
                      <button
                        key={p.id}
                        onClick={() => setCricketPhase(p.id as any)}
                        className={`p-2 rounded-xl border text-xs font-mono text-center transition-all ${
                          cricketPhase === p.id
                            ? "bg-amber-500/20 text-amber-300 border-amber-500/40 font-semibold"
                            : "bg-zinc-900 border-zinc-800 text-zinc-400 hover:text-zinc-200"
                        }`}
                      >
                        {p.label}
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-mono text-zinc-400 mb-2 flex items-center gap-1.5">
                    <Filter size={14} className="text-amber-400" />
                    Pitch Surface Archetype
                  </label>
                  <div className="grid grid-cols-2 gap-2">
                    <button
                      onClick={() => setPitchCondition("slow-turn")}
                      className={`p-2 rounded-xl border text-xs font-mono text-center transition-all ${
                        pitchCondition === "slow-turn"
                          ? "bg-amber-500/20 text-amber-300 border-amber-500/40 font-semibold"
                          : "bg-zinc-900 border-zinc-800 text-zinc-400 hover:text-zinc-200"
                      }`}
                    >
                      Caribbean Slow Grip / Cutters
                    </button>
                    <button
                      onClick={() => setPitchCondition("true-bounce")}
                      className={`p-2 rounded-xl border text-xs font-mono text-center transition-all ${
                        pitchCondition === "true-bounce"
                          ? "bg-amber-500/20 text-amber-300 border-amber-500/40 font-semibold"
                          : "bg-zinc-900 border-zinc-800 text-zinc-400 hover:text-zinc-200"
                      }`}
                    >
                      True Pace & High Bounce
                    </button>
                  </div>
                </div>
              </div>

              {/* Reactive Cricket KPIs */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="p-4 rounded-2xl bg-zinc-900/60 border border-zinc-800/80">
                  <span className="text-zinc-400 text-xs font-mono block mb-1">Phase Scoring Run-Rate</span>
                  <div className="text-2xl sm:text-3xl font-bold font-mono text-amber-400">
                    {cricketData.runRate}
                    <span className="text-xs text-zinc-500 ml-1">RPO</span>
                  </div>
                </div>

                <div className="p-4 rounded-2xl bg-zinc-900/60 border border-zinc-800/80">
                  <span className="text-zinc-400 text-xs font-mono block mb-1">Boundary Percentage</span>
                  <div className="text-2xl sm:text-3xl font-bold font-mono text-cyan-400">
                    {cricketData.boundaryPct}%
                    <span className="text-xs text-zinc-500 ml-1">of deliveries</span>
                  </div>
                </div>

                <div className="p-4 rounded-2xl bg-zinc-900/60 border border-zinc-800/80">
                  <span className="text-zinc-400 text-xs font-mono block mb-1">Dot Ball Pressure</span>
                  <div className="text-2xl sm:text-3xl font-bold font-mono text-rose-400">
                    {cricketData.dotBallPct}%
                    <span className="text-xs text-zinc-500 ml-1">zeros</span>
                  </div>
                </div>

                <div className="p-4 rounded-2xl bg-zinc-900/60 border border-zinc-800/80">
                  <span className="text-zinc-400 text-xs font-mono block mb-1">Expected Phase Wickets</span>
                  <div className="text-sm font-mono font-semibold text-emerald-400 mt-2">
                    {cricketData.wicketRisk}
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-2 pt-2 text-xs text-zinc-400 bg-amber-950/20 border border-amber-900/40 p-3 rounded-xl">
                <Info size={16} className="text-amber-400 shrink-0 mt-0.5" />
                <div>
                  <strong className="text-amber-300">Statistical Finding:</strong> {cricketData.keyInsight}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
