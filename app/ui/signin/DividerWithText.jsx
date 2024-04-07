const DividerWithText = ({ text }) => {
  return (
    <div className="flex gap-2">
      <div className="flex-1 flex items-center">
        <div className="border flex-1 _borderClassicBetween" />
      </div>
      <span>{text}</span>
      <div className="flex-1 flex items-center">
        <div className="border flex-1 _borderClassicBetween" />
      </div>
    </div>
  );
};

export default DividerWithText;
