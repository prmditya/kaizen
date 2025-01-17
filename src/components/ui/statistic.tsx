"use client";

import { Checkbox } from "@/components/ui/checkbox";
import { Heatmap } from "@/components/ui/heatmap";
import { VerticalProgressBar } from "@/components/ui/vertical-progress-bar";
import React, { useState } from "react";
import { Card } from "./card";

const Statistic = () => {
  const data = [
    { date: "2025-01-01", count: 5 },
    { date: "2025-01-02", count: 10 },
    { date: "2025-01-03", count: 0 },
    { date: "2025-01-04", count: 8 },
    // Add more dates and counts as needed
  ];

  const [progress, setProgress] = useState(50);

  return (
    <div className="grid grid-cols-4 items-center justify-center w-full h-full gap-6">
      <Card className="neu col-span-3 px-[10px]" >
        <Heatmap data={data} title="Heatmap" view={12}/>
      </Card>
      <Card title="Progress" className="col-span-1 neu px-[20px] py-[24px] flex justify-between h-full">
          <div>
            <h1 className="mb-[24px] text-[24px] font-bold">Habits</h1>
            <div className="flex flex-col space-y-2">
              <div className="flex items-center space-x-2">
                <Checkbox id="terms" />
                <label
                  htmlFor="terms"
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  Workout
                </label>
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox id="terms" />
                <label
                  htmlFor="terms"
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  Reading
                </label>
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox id="terms" />
                <label
                  htmlFor="terms"
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  Writing
                </label>
              </div>
            </div>
          </div>
              <VerticalProgressBar
                progress={progress}
                width="30px"
                backgroundColor="white" // Gray
                fillColor="black" // Green
              />
      </Card>
    </div>
  );
};

export { Statistic };
