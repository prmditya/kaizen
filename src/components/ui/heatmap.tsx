"use client";

import React, { useState, useEffect } from "react";
import { CardHeader, CardTitle, CardContent } from "@/components/ui/card";
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
  defaultView?: number;
}

const useWindowSize = () => {
  const [windowSize, setWindowSize] = useState({
    width: 1024, // Default width for SSR
  });

  useEffect(() => {
    function handleResize() {
      setWindowSize({
        width: window.innerWidth,
      });
    }

    // Only add event listener on client side
    if (typeof window !== 'undefined') {
      handleResize(); // Set initial size
      window.addEventListener('resize', handleResize);
      
      return () => window.removeEventListener('resize', handleResize);
    }
  }, []);

  return windowSize;
};

const getResponsiveView = (width: number) => {
  if (width < 640) return 2;      // Mobile
  if (width < 768) return 3;      // Small tablets
  if (width < 1024) return 6;     // Tablets
  if (width < 1280) return 9;     // Small desktop
  return 12;                      // Large desktop
};

const getAllDatesInRange = (startDate: Date, months: number) => {
  const dates: string[] = [];
  const start = new Date(startDate);
  const end = new Date(startDate);
  end.setMonth(end.getMonth() + months);

  start.setDate(start.getDate() - start.getDay());

  const current = new Date(start);
  while (current < end) {
    dates.push(current.toISOString().split("T")[0]);
    current.setDate(current.getDate() + 1);
  }

  return dates;
};

const formatDateRange = (start: Date, months: number) => {
  const end = new Date(start);
  end.setMonth(end.getMonth() + months);
  end.setDate(end.getDate() - 1);

  return `${start.toLocaleString("default", {
    month: "long",
    day: "numeric",
    year: "numeric",
  })} - ${end.toLocaleString("default", {
    month: "long",
    day: "numeric",
    year: "numeric",
  })}`;
};

const getGithubColor = (value: number, maxValue: number): string => {
  const colors = ["#ebedf0", "rgba(6,6,10,0.2)", "rgba(6,6,10,0.4)", "#06060A"];
  if (value === 0) return colors[0];
  const normalizedValue = value / maxValue;
  const level = Math.ceil(normalizedValue * 3);
  return colors[Math.min(level, 3)];
};

const Heatmap = ({
  data = [],
  title = "Contribution Activity",
  defaultView = 3,
}: HeatmapProps) => {
  const { width } = useWindowSize();
  const [mounted, setMounted] = useState(false);
  
  useEffect(() => {
    setMounted(true);
  }, []);

  const [startDate, setStartDate] = useState(() => {
    const date = new Date();
    date.setDate(1);
    date.setMonth(date.getMonth() - defaultView + 1);
    return date;
  });

  const responsiveView = getResponsiveView(width);
  const [allDates, setAllDates] = useState<string[]>([]);

  useEffect(() => {
    setAllDates(getAllDatesInRange(startDate, responsiveView));
  }, [startDate, responsiveView]);

  const contributionMap = new Map(data.map((item) => [item.date, item.count]));
  const maxValue = Math.max(...data.map((item) => item.count), 1);

  const weeks: string[][] = [];
  let currentWeek: string[] = [];
  allDates.forEach((date) => {
    const dayOfWeek = new Date(date).getDay();
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
    newDate.setMonth(startDate.getMonth() + direction * responsiveView);
    setStartDate(newDate);
  };

  // Don't render until after mounting to avoid hydration issues
  if (!mounted) {
    return null;
  }

  return (
    <>
      <CardHeader>
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <CardTitle className="text-[24px]">{title}</CardTitle>
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
            <span className="text-sm text-gray-500">
              {formatDateRange(startDate, responsiveView)}
            </span>
            <div className="flex gap-2">
              <Button
                className="border-black border-[2px]"
                variant="outline"
                size="icon"
                onClick={() => navigateMonths(-1)}
              >
                <ChevronLeft className="h-4 w-4" />
              </Button>
              <Button
                className="border-black border-[2px]"
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
          <div className="relative overflow-x-auto">
            <div className="flex min-w-fit">
              <div className="flex gap-1">
                {weeks.map((week, weekIndex) => (
                  <div key={weekIndex} className="flex flex-col gap-1">
                    {week.map((date) => {
                      const count = contributionMap.get(date) || 0;
                      return (
                        <Tooltip key={date}>
                          <TooltipTrigger>
                            <div
                              className="w-2 h-2 sm:w-3 sm:h-3 rounded-sm transition-colors"
                              style={{
                                backgroundColor: getGithubColor(count, maxValue),
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
            <div className="w-2 h-2 sm:w-3 sm:h-3 rounded-sm bg-[#ebedf0]" />
            <div className="w-2 h-2 sm:w-3 sm:h-3 rounded-sm bg-[rgba(6,6,10,0.2)]" />
            <div className="w-2 h-2 sm:w-3 sm:h-3 rounded-sm bg-[rgba(6,6,10,0.4)]" />
            <div className="w-2 h-2 sm:w-3 sm:h-3 rounded-sm bg-[#06060A]" />
          </div>
          <span>More</span>
        </div>
      </CardContent>
    </>
  );
};

export { Heatmap };