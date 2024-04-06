import { MdFormatListBulletedAdd } from "react-icons/md";
import { TbCoinRupee } from "react-icons/tb";

export const FormGroupHeader = ({ text = "", addBtn = false }) => {
  if (addBtn) {
    return (
      <div className="flex justify-between border-b border-sky-950 pb-2">
        <h2 className="text-2xl _textGold">{text}</h2>
        <AddNewBtn />
      </div>
    );
  }
  return (
    <h2 className="border-b border-sky-950 pb-2 text-2xl _textGold">{text}</h2>
  );
};

export const InputGroup = ({
  id,
  text,
  type = "text",
  placeholder = "",
  coins,
}) => {
  return (
    <div className="input-group">
      <div className="flex items-end justify-between px-1">
        <label htmlFor={id}>{text}:</label>
        <div className="text-sm flex items-center gap-2">
          <TbCoinRupee className="text-yellow-500" />
          {coins}
        </div>
      </div>

      <input
        id={id}
        type={type}
        className="input-field"
        placeholder={placeholder}
      />
    </div>
  );
};

export const SelectInputGroup = ({ id, text, coins, options }) => {
  return (
    <div className="input-group">
      <div className="flex items-end justify-between px-1">
        <label htmlFor={id}>{text}:</label>
        <div className="text-sm flex items-center gap-2">
          <TbCoinRupee className="text-yellow-500" />
          <span>{coins}</span>
        </div>
      </div>
      <select
        name="projectType"
        id={id}
        className="input-field text-slate-400"
        defaultValue={"default"}
      >
        <option hidden value="default">
          Select type
        </option>

        {options.map((optn) => {
          return (
            <option key={optn} value={optn} className="capitalize">
              {optn}
            </option>
          );
        })}
      </select>
    </div>
  );
};

export const AddNewBtn = () => {
  return (
    <button className="flex gap-1 items-center text-xs mr-3 _bgGold hover:bg-orange-300 text-slate-950 font-semibold px-2 rounded-md">
      <MdFormatListBulletedAdd /> Add new
    </button>
  );
};