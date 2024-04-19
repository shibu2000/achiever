"use client";
import { useEffect, useRef, useState } from "react";
import { MdCancel, MdFormatBold } from "react-icons/md";
import { MdFormatListBulleted } from "react-icons/md";
import { AiOutlineOrderedList } from "react-icons/ai";
import { FaEraser } from "react-icons/fa6";
import { BsQuestionDiamond } from "react-icons/bs";

const Editor = ({ id, text = "", name = "", placeholder = "" }) => {
  const editorRef = useRef();
  const [filterData, setFilterData] = useState([]);
  const [textPreview, setTextPreview] = useState(false);
  const formatPattern = ["**", "/tc", "/tj", "/ul", "/ol"];

  const handleEditorText = (e) => {
    e.preventDefault();
    if (editorRef.current.value.trim().length > 0) setTextPreview(true);
    let text = editorRef.current.value;
    let textArr = text.split(`/eop`);

    setFilterData(
      textArr.map((item) => {
        return item.replaceAll("\n", "").trim();
      })
    );
  };

  function insertBoldText(e) {
    e.preventDefault();
    editorRef.current.value += "** Insert bold text here **/eop\n";
  }

  function insertUlList(e) {
    e.preventDefault();
    editorRef.current.value +=
      "/ul\n Insert UL seperated by\n# list 1\n# list 2\n ul//eop\n";
  }
  function insertOlList(e) {
    e.preventDefault();
    editorRef.current.value +=
      "/ol\n Insert OL seperated by\n# list 1\n# list 2\n ol//eop\n";
  }
  function eraseContent(e) {
    e.preventDefault();
    editorRef.current.value = "";
  }

  return (
    <div className="container mx-auto">
      <div className="space-y-5">
        <div className="flex items-end justify-between p-1">
          <label htmlFor={id}>{text}:</label>
          <div className="flex gap-3">
            <button
              title="Bold"
              className="p-2 rounded _bgClassicBetween active:_bgClassicSoft"
              onClick={insertBoldText}
            >
              <MdFormatBold />
            </button>
            <button
              title="Unorder list"
              className="p-2 rounded _bgClassicBetween active:_bgClassicSoft"
              onClick={insertUlList}
            >
              <MdFormatListBulleted />
            </button>
            <button
              title="Order list"
              className="p-2 rounded _bgClassicBetween active:_bgClassicSoft"
              onClick={insertOlList}
            >
              <AiOutlineOrderedList />
            </button>
            <button
              title="Clear"
              className="p-2 rounded _bgClassicBetween active:_bgClassicSoft"
              onClick={eraseContent}
            >
              <FaEraser />
            </button>

            <div className="relative">
              <div className="p-2 rounded _bgClassicBetween active:_bgClassicSoft peer/question">
                <BsQuestionDiamond />
              </div>
              <div className="w-max mt-2 absolute right-0 hidden peer-hover/question:block _bgClassic p-2 rounded text-xs">
                <p>** insert bold text here **</p>
                <p>/ul insert unorder list here ul/</p>
                <p>/ol insert order list here ol/</p>
                <p>/eop - to end a single paragraph and list</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="rounded-md _bgClassicSoft p-2 focus-within:shadow-sm focus-within:shadow-sky-200 text-right">
        <textarea
          id={id}
          ref={editorRef}
          name={name}
          className="w-full resize-y min-h-52 _bgClassicSoft rounded outline-none no-scrollbar"
          placeholder={placeholder}
        />
        <button
          className="p-0 rounded text-xs font-mono"
          onClick={handleEditorText}
        >
          Preview
        </button>
      </div>

      {textPreview && (
        <div className="fixed inset-0 w-full h-full _bgClassicSoftAlpha flex justify-center items-center ">
          <div className="w-1/2 h-2/3 overflow-auto _bgClassicBetween border border-slate-500 shadow-sm shadow-sky-200 p-5 rounded-xl">
            <div className="flex justify-end">
              <button onClick={() => setTextPreview(false)}>
                <MdCancel />
              </button>
            </div>
            <div className="break-words">
              {filterData.map((item, index) => {
                if (item.startsWith(formatPattern[0])) {
                  let data = item.replaceAll("**", "");
                  return (
                    <p key={index} className="font-bold">
                      {data}
                    </p>
                  );
                } else if (item.startsWith("/tc")) {
                  let data = item.replaceAll("/tc", "");
                  data = data.replaceAll("tc/", "");
                  return (
                    <p key={index} className="text-center">
                      {data}
                    </p>
                  );
                } else if (item.startsWith("/tj")) {
                  let data = item.replaceAll("/tj", "");
                  data = data.replaceAll("tj/", "");
                  return (
                    <p key={index} className="text-justify">
                      {data}
                    </p>
                  );
                } else if (item.startsWith("/ul")) {
                  let data = item.replaceAll("/ul", "");
                  data = data.replaceAll("ul/", "");
                  return (
                    <ul key={index} className="list-disc list-inside">
                      {data.split("#").map((list, index) => {
                        return (
                          list.length > 0 && (
                            <li key={`${list}${index}`}>{list}</li>
                          )
                        );
                      })}
                    </ul>
                  );
                } else if (item.startsWith("/ol")) {
                  let data = item.replaceAll("/ol", "");
                  data = data.replaceAll("ol/", "");
                  return (
                    <ol key={index} className="list-decimal list-inside">
                      {data.split("#").map((list, index) => {
                        return (
                          list.length > 0 && (
                            <li key={`${list}${index}`}>{list}</li>
                          )
                        );
                      })}
                    </ol>
                  );
                } else {
                  return (
                    <p key={index} className="whitespace-normal">
                      {item}
                    </p>
                  );
                }
              })}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Editor;
