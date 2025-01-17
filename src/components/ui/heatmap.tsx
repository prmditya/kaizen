"use client";

import React, { useState, useEffect } from "react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface ContributionData {
  date: string;
  count: number;
}

interface HeatmapProps {
  data?: ContributionData[];
  title?: string;
  view?: number; // Number of months to display (e.g., 3 or 12)
}

const getAllDatesInRange = (startDate: Date, months: number) => {
  const dates: string[] = [];
  const start = new Date(startDate);
  const end = new Date(startDate);
  end.setMonth(end.getMonth() + months);

  // Adjust start to previous Sunday
  start.setDate(start.getDate() - start.getDay());

  const current = new Date(start);
  while (current < end) {
    dates.push(current.toISOString().split("T")[0]);
    current.setDate(current.getDate() + 1);
  }

  return dates;
};

const getMonthHeaders = (dates: string[]) => {
  const months = new Map<string, number>();
  dates.forEach((date, index) => {
    const monthYear = date.substring(0, 7); // YYYY-MM
    if (!months.has(monthYear)) {
      months.set(monthYear, index);
    }
  });
  return Array.from(months.entries()).map(([monthYear, index]) => ({
    name: new Date(`${monthYear}-01`).toLocaleString("default", {
      month: "short",
    }),
    index,
  }));
};

const formatDateRange = (start: Date, months: number) => {
  const end = new Date(start);
  end.setMonth(end.getMonth() + months);
  end.setDate(end.getDate() - 1);

  return `${start.toLocaleString("default", {
    month: "long",
    day: "numeric",
    year: "numeric",
  })} - 
          ${end.toLocaleString("default", {
            month: "long",
            day: "numeric",
            year: "numeric",
          })}`;
};

const getGithubColor = (value: number, maxValue: number): string => {
  const colors = ["#ebedf0", "#9be9a8", "#40c463", "#30a14e", "#216e39"];

  if (value === 0) return colors[0];
  const normalizedValue = value / maxValue;
  const level = Math.ceil(normalizedValue * 4);
  return colors[Math.min(level, 4)];
};

const Heatmap = ({
  data = [],
  title = "Contribution Activity",
  view = 3,
}: HeatmapProps) => {
  const [startDate, setStartDate] = useState(() => {
    const date = new Date();
    date.setDate(1);
    date.setMonth(date.getMonth() - view + 1); // Default view from past months
    return date;
  });

  const [allDates, setAllDates] = useState<string[]>([]);
  useEffect(() => {
    setAllDates(getAllDatesInRange(startDate, view));
  }, [startDate, view]);

  const contributionMap = new Map(data.map((item) => [item.date, item.count]));
  const maxValue = Math.max(...data.map((item) => item.count), 1);

  const weeks: string[][] = [];
  let currentWeek: string[] = [];
  allDates.forEach((date) => {
    const dayOfWeek = new Date(date).getDay(); // 0 (Sunday) to 6 (Saturday)

    if (dayOfWeek === 0 && currentWeek.length > 0) {
      weeks.push(currentWeek);
      currentWeek = [];
    }
    currentWeek.push(date);
  });

  if (currentWeek.length > 0) {
    weeks.push(currentWeek);
  }

  const navigateMonths = (direction: number) => {
    const newDate = new Date(startDate);
    newDate.setMonth(startDate.getMonth() + direction * view);
    setStartDate(newDate);
  };

  return (
    <>
      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle className="text-[24px]">{title}</CardTitle>
          <div className="flex items-center gap-4">
            <span className="text-sm text-gray-500">
              {formatDateRange(startDate, view)}
            </span>
            <div className="flex gap-2">
              <Button
                variant="outline"
                size="icon"
                onClick={() => navigateMonths(-1)}
              >
                <ChevronLeft className="h-4 w-4" />
              </Button>
              <Button
                variant="outline"
                size="icon"
                onClick={() => navigateMonths(1)}
              >
                <ChevronRight className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <TooltipProvider>
          <div className="relative">
            <div className="flex">
              <div className="flex gap-1">
                {weeks.map((week, weekIndex) => (
                  <div key={weekIndex} className="flex flex-col gap-1">
                    {week.map((date) => {
                      const count = contributionMap.get(date) || 0;
                      return (
                        <Tooltip key={date}>
                          <TooltipTrigger>
                            <div
                              className="w-3 h-3 rounded-sm transition-colors"
                              style={{
                                backgroundColor: getGithubColor(
                                  count,
                                  maxValue
                                ),
                              }}
                            />
                          </TooltipTrigger>
                          <TooltipContent>
                            <p className="text-sm">
                              {count} contributions on{" "}
                              {new Date(date).toLocaleDateString("default", {
                                month: "long",
                                day: "numeric",
                                year: "numeric",
                              })}
                            </p>
                          </TooltipContent>
                        </Tooltip>
                      );
                    })}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </TooltipProvider>
        <div className="mt-4 flex items-center gap-2 text-sm text-gray-500">
          <span>Less</span>
          <div className="flex gap-1">
            <div className="w-3 h-3 rounded-sm bg-[#ebedf0]" />
            <div className="w-3 h-3 rounded-sm bg-[#9be9a8]" />
            <div className="w-3 h-3 rounded-sm bg-[#40c463]" />
            <div className="w-3 h-3 rounded-sm bg-[#30a14e]" />
            <div className="w-3 h-3 rounded-sm bg-[#216e39]" />
          </div>
          <span>More</span>
        </div>
      </CardContent>
    </>
  );
};

export { Heatmap };
