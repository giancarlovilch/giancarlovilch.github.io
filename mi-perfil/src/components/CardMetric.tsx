// src/components/CardMetric.tsx
import React, { useState } from "react";

interface CardMetricProps {
  title: string;
  value: number;
  onUpdate: (newValue: number) => void;
}

const CardMetric: React.FC<CardMetricProps> = ({ title, value, onUpdate }) => {
  const [editValue, setEditValue] = useState<number>(value);

  const handleBlur = () => {
    if (editValue !== value) onUpdate(editValue);
  };

  return (
    <div className="card-metric">
      <h3>{title}</h3>
      <input
        type="number"
        value={editValue}
        onChange={(e) => setEditValue(Number(e.target.value))}
        onBlur={handleBlur}
      />
      <span>horas</span>
    </div>
  );
};

export default CardMetric;