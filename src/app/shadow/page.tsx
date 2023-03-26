"use client";

import { useEffect, useState } from "react";

export default function ShadowsPage() {
  const [offsetX, setOffsetX] = useState(0);
  const [offsetY, setOffsetY] = useState(0);
  const [blur, setBlur] = useState(0);
  const [color, setColor] = useState("grey");

  const css = `${offsetX}px ${offsetY}px ${blur}px ${color}`;

  return (
    <div>
      <h1 className="text-4xl font-black">CSS Shadow generator</h1>
      <div className="grid md:grid-cols-2 gap-8 pt-8">
        <div
          className="w-80 h-80 border-2 rounded-lg"
          style={{
            boxShadow: css,
          }}
        ></div>
        <div>
          <label className="flex items-center gap-4">
            Offset-X
            <input
              type="range"
              value={offsetX}
              onChange={(e) => {
                setOffsetX(+e.target.value);
              }}
            />
          </label>
          <label className="flex items-center gap-4">
            Offset-Y
            <input
              type="range"
              value={offsetY}
              onChange={(e) => {
                setOffsetY(+e.target.value);
              }}
            />
          </label>
          <label className="flex items-center gap-4">
            Blur
            <input
              type="range"
              value={blur}
              onChange={(e) => {
                setBlur(+e.target.value);
              }}
            />
          </label>
          <label className="flex items-center gap-4">
            Color
            <input
              type="color"
              value={color}
              onChange={(e) => {
                setColor(e.target.value);
              }}
            />
          </label>
          <div className="p-4 bg-zinc-800 text-white rounded-lg mt-4 flex items-center justify-between">
            <span>{`box-shadow: ${css};`}</span>
            <button
              className="bg-emerald-500 py-2 px-4 rounded-lg text-sm"
              onClick={() => {
                navigator.clipboard.writeText(`box-shadow: ${css};`);
              }}
            >
              Copy
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
