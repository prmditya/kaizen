const RecentHistory = () => {
  return (
    <>
      <h1 className="my-[20px]">History</h1>
      <div className="flex flex-col gap-y-5">
        <div className="neu paddings-history flex items-center justify-between">
          <span>Date</span>
          <span>Note</span>
          <span>Habits</span>
        </div>
        <div className="neu paddings-history flex items-center justify-between">
          <span>Date</span>
          <span>Note</span>
          <span>Habits</span>
        </div>
      </div>
    </>
  );
};

export { RecentHistory };
