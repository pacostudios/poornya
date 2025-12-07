"use client";

import { useEffect, useRef, useState } from "react";

export default function MarqueeOnPath({
  text = "JOURNEY ✦ TO ✦ YOUR ✦ EMPOWERMENT ✦ ",
  dur = 15,
  fontSize = 42,
  letterSpacing = 12,
}) {
  const pathRef = useRef(null);
  const measureRef = useRef(null);
  const [longText, setLongText] = useState(null);

  useEffect(() => {
    const pathEl = pathRef.current;
    const measureEl = measureRef.current;
    if (!pathEl || !measureEl) return;

    const pathLen = pathEl.getTotalLength();

    const singleWidth =
      measureEl.getComputedTextLength?.() ||
      measureEl.getBoundingClientRect().width;

    if (!singleWidth || singleWidth === 0) {
      setLongText(text.repeat(10));
      return;
    }

    // MUST BE 3–4 TIMES LONGER TO PREVENT COLLISION
    const repeats = Math.ceil(pathLen / singleWidth) * 4;

    setLongText(Array(repeats).fill(text).join(" "));
  }, [text]);

  return (
    <section className="relative py-20 bg-stone-100 overflow-hidden bg-[url('/FLOWER.png')] bg-no-repeat bg-center">
      <div className=" w-full">
        <svg viewBox="40 0 800 200" className="w-full h-auto block">
          <defs>
            <path
              id="curve"
              ref={pathRef}
              d="M50,80 Q450,140 850,80"
              fill="none"
            />
          </defs>

          {/* Hidden measurement */}
          <text
            ref={measureRef}
            x="-1000"
            y="-1000"
            fontSize={fontSize}
            fontWeight="700"
            letterSpacing={letterSpacing}
            style={{
              whiteSpace: "pre",
            }}
          >
            {text}
          </text>

          {longText && (
            <>
                           {/* SECOND COPY — FIX: SHIFT TO -200% */}
              <text
                fontSize={fontSize}
                fontWeight="700"
                letterSpacing={letterSpacing}
                fill="#003A11"
                // style={{ fontFamily: "system-ui, -apple-system, sans-serif" }}
              >
                <textPath href="#curve" startOffset="-200%">
                  {longText}
                  <animate
                    attributeName="startOffset"
                    values="-200%;0%"
                    dur={`${dur}s`}
                    repeatCount="indefinite"
                  />
                </textPath>
              </text>
            </>
          )}
        </svg>
      </div>
    </section>
  );
}
