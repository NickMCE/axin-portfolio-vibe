const RetroGrid = () => {
  return (
    <div className="absolute inset-0 -z-50 h-full w-full overflow-hidden">
      <div className="relative h-full w-full">
        <div 
          className="absolute h-full w-full bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_110%)]"
          style={{
            animation: "scroll 25s linear infinite",
          }}
        />
      </div>
    </div>
  );
};

export default RetroGrid;