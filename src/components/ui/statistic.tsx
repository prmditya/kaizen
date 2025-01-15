import { Checkbox } from "@/components/ui/checkbox";

const Statistic = () => {
  return (
    <div className="flex items-center justify-center w-full h-full gap-6">
      <div className="neu px-[20px] py-[15px]">
        <h1 className="mb-[10px]">Heatmaps</h1>
      </div>
      <div className="neu px-[20px] py-[15px]">
        <h1 className="mb-[10px]">Habits</h1>
        <div className="flex flex-col space-y-2">
        <div className="flex items-center space-x-2">
          <Checkbox id="terms" />
          <label
            htmlFor="terms"
            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
          >
            Accept terms and conditions
          </label>
        </div>
        <div className="flex items-center space-x-2">
          <Checkbox id="terms" />
          <label
            htmlFor="terms"
            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
          >
            Accept terms and conditions
          </label>
        </div>
        <div className="flex items-center space-x-2">
          <Checkbox id="terms" />
          <label
            htmlFor="terms"
            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
          >
            Accept terms and conditions
          </label>
        </div>
        </div>
      </div>
    </div>
  );
};

export { Statistic };
