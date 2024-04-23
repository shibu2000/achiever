"use client";
import { useEffect, useMemo, useRef, useState } from "react";
import { useDebounce } from "use-debounce";

const InputWithSuggestion = ({
  id,
  text,
  name = "",
  type = "text",
  placeholder = "",
}) => {
  const [suggestionList, setSuggestionList] = useState([
    "HTML",
    "CSS",
    "Javascript",
    "Bootstrap",
    "TailwindCSS",
    "React",
    "Next.js",
    "MongoDB",
    "Java",
    "Python",
  ]);
  const [query, setQuery] = useState("");
  const [qry] = useDebounce(query, 700);

  const [skillList, setSkillList] = useState([]);

  const [isFocused, setIsFocused] = useState(false);
  const inputSkillListRef = useRef();
  const inputRef = useRef();

  const filterItems = () => {
    setIsFocused(true);
    setQuery(inputRef.current.value);
  };

  const filteredItems = suggestionList.filter((item) => {
    return item.toLowerCase().includes(qry.toLowerCase());
  });

  const handleSuggestionClick = (item) => {
    setIsFocused(false);
    let data = skillList?.filter((data) => {
      return data.toLowerCase() !== item.toLowerCase();
    });
    setSkillList([...data, item]);
    inputRef.current.value = "";
  };

  const addNew = () => {
    setIsFocused(false);
    let item = inputRef.current.value;
    let data = skillList?.filter((data) => {
      return data.toLowerCase() !== item.toLowerCase();
    });

    setSkillList([...data, inputRef.current.value]);
    inputRef.current.value = "";
  };

  return (
    <div className="input-group relative">
      {text && (
        <label className="px-1" htmlFor={id}>
          {text}:
        </label>
      )}

      <input
        id={id}
        type={type}
        className={`input-field`}
        placeholder={placeholder}
        ref={inputRef}
        onChange={filterItems}
        onBlur={() => {
          setTimeout(() => {
            setIsFocused(false);
          }, 10000);
        }}
      />
      <input
        hidden
        type="text"
        name={name}
        defaultValue={JSON.stringify(skillList)}
      />

      {isFocused && (
        <div>
          <ul className="absolute border w-full _bgClassicSoft rounded max-h-80 overflow-y-auto no-scrollbar">
            {filteredItems.map((item, index) => {
              return (
                <li
                  key={index}
                  className="p-2 hover:_bgClassicBetween"
                  onClick={() => handleSuggestionClick(item)}
                >
                  {item}
                </li>
              );
            })}
            <li className="p-2 hover:_bgClassicBetween" onClick={addNew}>
              Add new
            </li>
          </ul>
        </div>
      )}
      {skillList.length > 0 && (
        <div className="flex gap-2 flex-wrap m-2">
          {skillList.map((item) => {
            return (
              <span
                key={item}
                className="uppercase text-xs _bgGold _textClassic px-2 py-1 rounded-3xl"
              >
                {item}
              </span>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default InputWithSuggestion;
