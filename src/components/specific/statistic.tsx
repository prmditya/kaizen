"use client";

import { useState } from "react";
import { Checkbox } from "@/components/ui/checkbox";
import { Heatmap } from "@/components/ui/heatmap";
import { VerticalProgressBar } from "@/components/ui/vertical-progress-bar";
import { Card } from "../ui/card";

interface HabitData {
  date: string;
  count: number;
}

interface Habit {
  id: string;
  label: string;
}

const HABITS: Habit[] = [
  { id: "1", label: "Workout" },
  { id: "2", label: "Reading" },
  { id: "3", label: "Writing" },
];

const SAMPLE_DATA: HabitData[] = [
  { date: "2025-01-01", count: 5 },
  { date: "2025-01-02", count: 10 },
  { date: "2025-01-03", count: 0 },
  { date: "2025-01-04", count: 8 },
];

const HabitCheckbox = ({
  habit,
  checked,
  onToggle,
}: {
  habit: Habit;
  checked: boolean;
  onToggle: (id: string) => void;
}) => (
  <div className="flex items-center space-x-2">
    <Checkbox
      className="shadow-none peer border-2"
      id={habit.id}
      checked={checked}
      onClick={() => onToggle(habit.id)}
    />
    <label
      htmlFor={habit.id}
      className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
    >
      {habit.label}
    </label>
  </div>
);

const ProgressSection = ({
  habits,
  checkedItems,
  onHabitToggle,
}: {
  habits: Habit[];
  checkedItems: Record<string, boolean>;
  onHabitToggle: (id: string) => void;
}) => {
  const progress =
    (Object.values(checkedItems).filter(Boolean).length * 100) / habits.length;

  return (
    <Card className="col-span-1 neu px-7 py-6 flex justify-between h-full">
      <div>
        <h1 className="mb-6 text-2xl font-bold">Habits</h1>
        <div className="flex flex-col space-y-4">
          {habits.map((habit) => (
            <HabitCheckbox
              key={habit.id}
              habit={habit}
              checked={checkedItems[habit.id] || false}
              onToggle={onHabitToggle}
            />
          ))}
        </div>
      </div>
      <VerticalProgressBar
        progress={progress}
        width="30px"
        backgroundColor="white"
        fillColor="black"
      />
    </Card>
  );
};

const Statistic = () => {
  const [checkedItems, setCheckedItems] = useState<Record<string, boolean>>(
    HABITS.reduce((acc, habit) => ({ ...acc, [habit.id]: false }), {})
  );

  const handleCheckboxChange = (id: string) => {
    setCheckedItems((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  return (
    <div className="grid grid-cols-4 items-center justify-center w-full h-full gap-6">
      <Card className="neu col-span-3 px-2.5">
        <Heatmap data={SAMPLE_DATA} title="Habits Heatmap" />
      </Card>
      <ProgressSection
        habits={HABITS}
        checkedItems={checkedItems}
        onHabitToggle={handleCheckboxChange}
      />
    </div>
  );
};

export { Statistic };
