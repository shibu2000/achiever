"use client";
import { useState } from "react";
import { Fade } from "react-awesome-reveal";
import { RiFilter2Fill } from "react-icons/ri";

const Filter = () => {
  const [isClicked, setIsClicked] = useState(false);
  return (
    <div className="relative">
      <button
        className="px-2 py-1 _bgGold _textClassic hover:_bgGoldSoft rounded flex items-center gap-1"
        onClick={() => (isClicked ? setIsClicked(false) : setIsClicked(true))}
      >
        <RiFilter2Fill />
        Filter
      </button>
      {isClicked && (
        <button
          className="inset-0 fixed w-full h-full cursor-default"
          onClick={() => (isClicked ? setIsClicked(false) : setIsClicked(true))}
        ></button>
      )}
      {isClicked && (
        <Fade direction="up" duration={700}>
          <div className="absolute mt-2 p-1 left-0 _bgClassicSoft rounded  shadow-sm shadow-slate-800 text-xs">
            <h3 className="text-center _bgClassic rounded py-1">Type</h3>
            <div className="p-1 flex flex-col">
              <div className="flex gap-2">
                <input
                  type="radio"
                  name="postType"
                  id="job"
                  value="job"
                  
                />
                <label htmlFor="job">Job</label>
              </div>
              <div className="flex gap-2">
                <input
                  type="radio"
                  name="postType"
                  id="internship"
                  value="internship"
                />
                <label htmlFor="internship">Internship</label>
              </div>
            </div>

            <h3 className="text-center _bgClassic rounded py-1">Sort by</h3>
            <div className="p-1 flex flex-col">
              <div className="flex gap-2">
                <input type="radio" name="sortBy" id="name" value="name" />
                <label htmlFor="name">Name</label>
              </div>
              <div className="flex gap-2">
                <input type="radio" name="sortBy" id="date" value="date" />
                <label htmlFor="date">Date Created</label>
              </div>
              <div className="flex gap-2">
                <input
                  type="radio"
                  name="sortBy"
                  id="aplications"
                  value="aplications"
                />
                <label htmlFor="aplications">Aplications</label>
              </div>
            </div>
          </div>
        </Fade>
      )}
    </div>
  );
};

export default Filter;
