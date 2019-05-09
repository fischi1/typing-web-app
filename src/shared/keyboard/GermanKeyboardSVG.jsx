import React from "react";

const pressedColor = "#a1a1a1";
const normalColor = "#ffffff";

const GermanKeyboardSVG  = (props) => {
  
    const { keys } = props;

    
    return <>
    <svg
      version={1.0}
      id="svg2"
      height={300}
      width={900}
    >
      <defs id="defs4">
        <marker
          style={{ overflow: "visible" }}
          id="Arrow1Lend"
          refX={0.0}
          refY={0.0}
          orient="auto"
        >
          <path
            transform="scale(0.8) rotate(180)"
            style={{
              fillRule: "evenodd",
              stroke: "#000000",
              strokeWidth: "1.0pt",
              markerStart: "none"
            }}
            d="M 0.0,0.0 L 5.0,-5.0 L -12.5,0.0 L 5.0,5.0 L 0.0,0.0 z "
            id="path5387"
          />
        </marker>
        <marker
          style={{ overflow: "visible" }}
          id="Arrow1Lstart"
          refX={0.0}
          refY={0.0}
          orient="auto"
        >
          <path
            transform="scale(0.8)"
            style={{
              fillRule: "evenodd",
              stroke: "#000000",
              strokeWidth: "1.0pt",
              markerStart: "none"
            }}
            d="M 0.0,0.0 L 5.0,-5.0 L -12.5,0.0 L 5.0,5.0 L 0.0,0.0 z "
            id="path5390"
          />
        </marker>
        <marker
          style={{ overflow: "visible" }}
          id="Tail"
          refX={0.0}
          refY={0.0}
          orient="auto"
        >
          <g transform="scale(-1.2)" id="g5342">
            <path
              style={{
                fill: "none",
                fillRule: "evenodd",
                stroke: "#000000",
                strokeWidth: "0.8",
                markerStart: "none",
                markerEnd: "none",
                strokeLinecap: "round"
              }}
              d="M -3.8048674,-3.9585227 L 0.54352094,-0.00068114835"
              id="path5344"
            />
            <path
              style={{
                fill: "none",
                fillRule: "evenodd",
                stroke: "#000000",
                strokeWidth: "0.8",
                markerStart: "none",
                markerEnd: "none",
                strokeLinecap: "round"
              }}
              d="M -1.2866832,-3.9585227 L 3.0617053,-0.00068114835"
              id="path5346"
            />
            <path
              style={{
                fill: "none",
                fillRule: "evenodd",
                stroke: "#000000",
                strokeWidth: "0.8",
                markerStart: "none",
                markerEnd: "none",
                strokeLinecap: "round"
              }}
              d="M 1.3053582,-3.9585227 L 5.6537466,-0.00068114835"
              id="path5348"
            />
            <path
              style={{
                fill: "none",
                fillRule: "evenodd",
                stroke: "#000000",
                strokeWidth: "0.8",
                markerStart: "none",
                markerEnd: "none",
                strokeLinecap: "round"
              }}
              d="M -3.8048674,4.1775838 L 0.54352094,0.21974226"
              id="path5350"
            />
            <path
              style={{
                fill: "none",
                fillRule: "evenodd",
                stroke: "#000000",
                strokeWidth: "0.8",
                markerStart: "none",
                markerEnd: "none",
                strokeLinecap: "round"
              }}
              d="M -1.2866832,4.1775838 L 3.0617053,0.21974226"
              id="path5352"
            />
            <path
              style={{
                fill: "none",
                fillRule: "evenodd",
                stroke: "#000000",
                strokeWidth: "0.8",
                markerStart: "none",
                markerEnd: "none",
                strokeLinecap: "round"
              }}
              d="M 1.3053582,4.1775838 L 5.6537466,0.21974226"
              id="path5354"
            />
          </g>
        </marker>
        <marker
          style={{ overflow: "visible" }}
          id="Arrow2Mend"
          refX={0.0}
          refY={0.0}
          orient="auto"
        >
          <path
            transform="scale(0.6) rotate(180) translate(-5,0)"
            d="M 8.7185878,4.0337352 L -2.2072895,0.016013256 L 8.7185884,-4.0017078 C 6.9730900,-1.6296469 6.9831476,1.6157441 8.7185878,4.0337352 z "
            style={{
              fontSize: 12.0,
              fillRule: "evenodd",
              strokeWidth: "0.62500000",
              strokeLinejoin: "round"
            }}
            id="path5363"
          />
        </marker>
        <marker
          style={{ overflow: "visible" }}
          id="Arrow2Lend"
          refX={0.0}
          refY={0.0}
          orient="auto"
        >
          <path
            transform="scale(1.1) rotate(180) translate(-5,0)"
            d="M 8.7185878,4.0337352 L -2.2072895,0.016013256 L 8.7185884,-4.0017078 C 6.9730900,-1.6296469 6.9831476,1.6157441 8.7185878,4.0337352 z "
            style={{
              fontSize: 12.0,
              fillRule: "evenodd",
              strokeWidth: "0.62500000",
              strokeLinejoin: "round"
            }}
            id="path5369"
          />
        </marker>
        <marker
          style={{ overflow: "visible" }}
          id="Arrow1Send"
          refX={0.0}
          refY={0.0}
          orient="auto"
        >
          <path
            transform="scale(0.2) rotate(180)"
            style={{
              fillRule: "evenodd",
              stroke: "#000000",
              strokeWidth: "1.0pt",
              markerStart: "none"
            }}
            d="M 0.0,0.0 L 5.0,-5.0 L -12.5,0.0 L 5.0,5.0 L 0.0,0.0 z "
            id="path5375"
          />
        </marker>
        <marker
          style={{ overflow: "visible" }}
          id="Arrow2Send"
          refX={0.0}
          refY={0.0}
          orient="auto"
        >
          <path
            transform="scale(0.3) rotate(180) translate(-5,0)"
            d="M 8.7185878,4.0337352 L -2.2072895,0.016013256 L 8.7185884,-4.0017078 C 6.9730900,-1.6296469 6.9831476,1.6157441 8.7185878,4.0337352 z "
            style={{
              fontSize: 12.0,
              fillRule: "evenodd",
              strokeWidth: "0.62500000",
              strokeLinejoin: "round"
            }}
            id="path5357"
          />
        </marker>
        <marker
          style={{ overflow: "visible" }}
          id="Arrow1Mend"
          refX={0.0}
          refY={0.0}
          orient="auto"
        >
          <path
            transform="scale(0.4) rotate(180)"
            style={{
              fillRule: "evenodd",
              stroke: "#000000",
              strokeWidth: "1.0pt",
              markerStart: "none"
            }}
            d="M 0.0,0.0 L 5.0,-5.0 L -12.5,0.0 L 5.0,5.0 L 0.0,0.0 z "
            id="path5381"
          />
        </marker>
        <marker
          style={{ overflow: "visible" }}
          id="Arrow2Lstart"
          refX={0.0}
          refY={0.0}
          orient="auto"
        >
          <path
            transform="scale(1.1) translate(-5,0)"
            d="M 8.7185878,4.0337352 L -2.2072895,0.016013256 L 8.7185884,-4.0017078 C 6.9730900,-1.6296469 6.9831476,1.6157441 8.7185878,4.0337352 z "
            style={{
              fontSize: 12.0,
              fillRule: "evenodd",
              strokeWidth: "0.62500000",
              strokeLinejoin: "round"
            }}
            id="path5372"
          />
        </marker>
      </defs>
      <g id="layer1">
        <path
          id="rect2186"
          d="M 0,0 L 60,0 L 60,60 L 0,60 L 0,0 z "
          style={{
            fill: "#ffffff",
            fillOpacity: 1,
            fillRule: "evenodd",
            stroke: "#000000",
            strokeWidth: 1,
            strokeLinecap: "butt",
            strokeLinejoin: "miter",
            strokeMiterlimit: 4,
            strokeDashoffset: 0,
            strokeOpacity: 1
          }}
        />
        <path
          id="rect_1"
          d="m 60,0 h 60 V 60 H 60 Z"
          style={{
            fill: "#ffffff",
            fillOpacity: 1,
            fillRule: "evenodd",
            stroke: "#000000",
            strokeWidth: 1,
            strokeLinecap: "butt",
            strokeLinejoin: "miter",
            strokeMiterlimit: 4,
            strokeDashoffset: 0,
            strokeOpacity: 1
          }}
        />
        <path
          id="rect_2"
          d="m 120,0 h 60 v 60 h -60 z"
          style={{
            fill: "#ffffff",
            fillOpacity: 1,
            fillRule: "evenodd",
            stroke: "#000000",
            strokeWidth: 1,
            strokeLinecap: "butt",
            strokeLinejoin: "miter",
            strokeMiterlimit: 4,
            strokeDashoffset: 0,
            strokeOpacity: 1
          }}
        />
        <path
          id="rect_3"
          d="m 180,0 h 60 v 60 h -60 z"
          style={{
            fill: "#ffffff",
            fillOpacity: 1,
            fillRule: "evenodd",
            stroke: "#000000",
            strokeWidth: 1,
            strokeLinecap: "butt",
            strokeLinejoin: "miter",
            strokeMiterlimit: 4,
            strokeDashoffset: 0,
            strokeOpacity: 1
          }}
        />
        <path
          id="rect_4"
          d="m 240,0 h 60 v 60 h -60 z"
          style={{
            fill: "#ffffff",
            fillOpacity: 1,
            fillRule: "evenodd",
            stroke: "#000000",
            strokeWidth: 1,
            strokeLinecap: "butt",
            strokeLinejoin: "miter",
            strokeMiterlimit: 4,
            strokeDashoffset: 0,
            strokeOpacity: 1
          }}
        />
        <path
          id="rect_5"
          d="m 300,0 h 60 v 60 h -60 z"
          style={{
            fill: "#ffffff",
            fillOpacity: 1,
            fillRule: "evenodd",
            stroke: "#000000",
            strokeWidth: 1,
            strokeLinecap: "butt",
            strokeLinejoin: "miter",
            strokeMiterlimit: 4,
            strokeDashoffset: 0,
            strokeOpacity: 1
          }}
        />
        <path
          id="rect_6"
          d="m 360,0 h 60 v 60 h -60 z"
          style={{
            fill: "#ffffff",
            fillOpacity: 1,
            fillRule: "evenodd",
            stroke: "#000000",
            strokeWidth: 1,
            strokeLinecap: "butt",
            strokeLinejoin: "miter",
            strokeMiterlimit: 4,
            strokeDashoffset: 0,
            strokeOpacity: 1
          }}
        />
        <path
          id="rect_7"
          d="m 420,0 h 60 v 60 h -60 z"
          style={{
            fill: "#ffffff",
            fillOpacity: 1,
            fillRule: "evenodd",
            stroke: "#000000",
            strokeWidth: 1,
            strokeLinecap: "butt",
            strokeLinejoin: "miter",
            strokeMiterlimit: 4,
            strokeDashoffset: 0,
            strokeOpacity: 1
          }}
        />
        <path
          id="rect_8"
          d="m 480,0 h 60 v 60 h -60 z"
          style={{
            fill: "#ffffff",
            fillOpacity: 1,
            fillRule: "evenodd",
            stroke: "#000000",
            strokeWidth: 1,
            strokeLinecap: "butt",
            strokeLinejoin: "miter",
            strokeMiterlimit: 4,
            strokeDashoffset: 0,
            strokeOpacity: 1
          }}
        />
        <path
          id="rect_9"
          d="m 540,0 h 60 v 60 h -60 z"
          style={{
            fill: "#ffffff",
            fillOpacity: 1,
            fillRule: "evenodd",
            stroke: "#000000",
            strokeWidth: 1,
            strokeLinecap: "butt",
            strokeLinejoin: "miter",
            strokeMiterlimit: 4,
            strokeDashoffset: 0,
            strokeOpacity: 1
          }}
        />
        <path
          id="rect_0"
          d="m 600,0 h 60 v 60 h -60 z"
          style={{
            fill: "#ffffff",
            fillOpacity: 1,
            fillRule: "evenodd",
            stroke: "#000000",
            strokeWidth: 1,
            strokeLinecap: "butt",
            strokeLinejoin: "miter",
            strokeMiterlimit: 4,
            strokeDashoffset: 0,
            strokeOpacity: 1
          }}
        />
        <path
          id="rect_ss"
          d="m 660,0 h 60 v 60 h -60 z"
          style={{
            fill: "#ffffff",
            fillOpacity: 1,
            fillRule: "evenodd",
            stroke: "#000000",
            strokeWidth: 1,
            strokeLinecap: "butt",
            strokeLinejoin: "miter",
            strokeMiterlimit: 4,
            strokeDashoffset: 0,
            strokeOpacity: 1
          }}
        />
        <path
          id="rect2246"
          d="M 720,0 L 780,0 L 780,60 L 720,60 L 720,0 z "
          style={{
            fill: "#ffffff",
            fillOpacity: 1,
            fillRule: "evenodd",
            stroke: "#000000",
            strokeWidth: 1,
            strokeLinecap: "butt",
            strokeLinejoin: "miter",
            strokeMiterlimit: 4,
            strokeDashoffset: 0,
            strokeOpacity: 1
          }}
        />
        <path
          id="rect2248"
          d="M 780,0 L 900,0 L 900,60 L 780,60 L 780,0 z "
          style={{
            fill: "#dfdfdf",
            fillOpacity: 1,
            fillRule: "evenodd",
            stroke: "#000000",
            strokeWidth: 1,
            strokeLinecap: "butt",
            strokeLinejoin: "miter",
            strokeMiterlimit: 4,
            strokeDashoffset: 0,
            strokeOpacity: 1
          }}
        />
        <path
          id="rect2250"
          d="M 0,60 L 90,60 L 90,120 L 0,120 L 0,60 z "
          style={{
            fill: "#dfdfdf",
            fillOpacity: 1,
            fillRule: "evenodd",
            stroke: "#000000",
            strokeWidth: 1,
            strokeLinecap: "butt",
            strokeLinejoin: "miter",
            strokeMiterlimit: 4,
            strokeDashoffset: 0,
            strokeOpacity: 1
          }}
        />
        <path
          id="rect_q"
          d="m 90,60 h 60 v 60 H 90 Z"
          style={{
            fill: "#ffffff",
            fillOpacity: 1,
            fillRule: "evenodd",
            stroke: "#000000",
            strokeWidth: 1,
            strokeLinecap: "butt",
            strokeLinejoin: "miter",
            strokeMiterlimit: 4,
            strokeDashoffset: 0,
            strokeOpacity: 1
          }}
        />
        <path
          id="rect_w"
          d="m 150,60 h 60 v 60 h -60 z"
          style={{
            fill: "#ffffff",
            fillOpacity: 1,
            fillRule: "evenodd",
            stroke: "#000000",
            strokeWidth: 1,
            strokeLinecap: "butt",
            strokeLinejoin: "miter",
            strokeMiterlimit: 4,
            strokeDashoffset: 0,
            strokeOpacity: 1
          }}
        />
        <path
          id="rect_e"
          d="m 210,60 h 60 v 60 h -60 z"
          style={{
            fill: "#ffffff",
            fillOpacity: 1,
            fillRule: "evenodd",
            stroke: "#000000",
            strokeWidth: 1,
            strokeLinecap: "butt",
            strokeLinejoin: "miter",
            strokeMiterlimit: 4,
            strokeDashoffset: 0,
            strokeOpacity: 1
          }}
        />
        <path
          id="rect_r"
          d="m 270,60 h 60 v 60 h -60 z"
          style={{
            fill: "#ffffff",
            fillOpacity: 1,
            fillRule: "evenodd",
            stroke: "#000000",
            strokeWidth: 1,
            strokeLinecap: "butt",
            strokeLinejoin: "miter",
            strokeMiterlimit: 4,
            strokeDashoffset: 0,
            strokeOpacity: 1
          }}
        />
        <path
          id="rect_t"
          d="m 330,60 h 60 v 60 h -60 z"
          style={{
            fill: "#ffffff",
            fillOpacity: 1,
            fillRule: "evenodd",
            stroke: "#000000",
            strokeWidth: 1,
            strokeLinecap: "butt",
            strokeLinejoin: "miter",
            strokeMiterlimit: 4,
            strokeDashoffset: 0,
            strokeOpacity: 1
          }}
        />
        <path
          id="rect_z"
          d="m 390,60 h 60 v 60 h -60 z"
          style={{
            fill: "#ffffff",
            fillOpacity: 1,
            fillRule: "evenodd",
            stroke: "#000000",
            strokeWidth: 1,
            strokeLinecap: "butt",
            strokeLinejoin: "miter",
            strokeMiterlimit: 4,
            strokeDashoffset: 0,
            strokeOpacity: 1
          }}
        />
        <path
          id="rect_u"
          d="m 450,60 h 60 v 60 h -60 z"
          style={{
            fill: "#ffffff",
            fillOpacity: 1,
            fillRule: "evenodd",
            stroke: "#000000",
            strokeWidth: 1,
            strokeLinecap: "butt",
            strokeLinejoin: "miter",
            strokeMiterlimit: 4,
            strokeDashoffset: 0,
            strokeOpacity: 1
          }}
        />
        <path
          id="rect_i"
          d="m 510,60 h 60 v 60 h -60 z"
          style={{
            fill: "#ffffff",
            fillOpacity: 1,
            fillRule: "evenodd",
            stroke: "#000000",
            strokeWidth: 1,
            strokeLinecap: "butt",
            strokeLinejoin: "miter",
            strokeMiterlimit: 4,
            strokeDashoffset: 0,
            strokeOpacity: 1
          }}
        />
        <path
          id="rect_o"
          d="m 570,60 h 60 v 60 h -60 z"
          style={{
            fill: "#ffffff",
            fillOpacity: 1,
            fillRule: "evenodd",
            stroke: "#000000",
            strokeWidth: 1,
            strokeLinecap: "butt",
            strokeLinejoin: "miter",
            strokeMiterlimit: 4,
            strokeDashoffset: 0,
            strokeOpacity: 1
          }}
        />
        <path
          id="rect_p"
          d="m 630,60 h 60 v 60 h -60 z"
          style={{
            fill: "#ffffff",
            fillOpacity: 1,
            fillRule: "evenodd",
            stroke: "#000000",
            strokeWidth: 1,
            strokeLinecap: "butt",
            strokeLinejoin: "miter",
            strokeMiterlimit: 4,
            strokeDashoffset: 0,
            strokeOpacity: 1
          }}
        />
        <path
          id="rect_ue"
          d="m 690,60 h 60 v 60 h -60 z"
          style={{
            fill: "#ffffff",
            fillOpacity: 1,
            fillRule: "evenodd",
            stroke: "#000000",
            strokeWidth: 1,
            strokeLinecap: "butt",
            strokeLinejoin: "miter",
            strokeMiterlimit: 4,
            strokeDashoffset: 0,
            strokeOpacity: 1
          }}
        />
        <path
          id="rect_plus"
          d="m 750,60 h 60 v 60 h -60 z"
          style={{
            fill: "#ffffff",
            fillOpacity: 1,
            fillRule: "evenodd",
            stroke: "#000000",
            strokeWidth: 1,
            strokeLinecap: "butt",
            strokeLinejoin: "miter",
            strokeMiterlimit: 4,
            strokeDashoffset: 0,
            strokeOpacity: 1
          }}
        />
        <path
          id="rect2286"
          d="M 0,120 L 105,120 L 105,180 L 0,180 L 0,120 z "
          style={{
            fill: "#dfdfdf",
            fillOpacity: 1,
            fillRule: "evenodd",
            stroke: "#000000",
            strokeWidth: 1,
            strokeLinecap: "butt",
            strokeLinejoin: "miter",
            strokeMiterlimit: 4,
            strokeDashoffset: 0,
            strokeOpacity: 1
          }}
        />
        <path
          id="rect_a"
          d="m 105,120 h 60 v 60 h -60 z"
          style={{
            fill: keys ? pressedColor : normalColor,
            fillOpacity: 1,
            fillRule: "evenodd",
            stroke: "#000000",
            strokeWidth: 1,
            strokeLinecap: "butt",
            strokeLinejoin: "miter",
            strokeMiterlimit: 4,
            strokeDashoffset: 0,
            strokeOpacity: 1
          }}
        />
        <path
          id="rect_s"
          d="m 165,120 h 60 v 60 h -60 z"
          style={{
            fill: "#ffffff",
            fillOpacity: 1,
            fillRule: "evenodd",
            stroke: "#000000",
            strokeWidth: 1,
            strokeLinecap: "butt",
            strokeLinejoin: "miter",
            strokeMiterlimit: 4,
            strokeDashoffset: 0,
            strokeOpacity: 1
          }}
        />
        <path
          id="rect_d"
          d="m 225,120 h 60 v 60 h -60 z"
          style={{
            fill: "#ffffff",
            fillOpacity: 1,
            fillRule: "evenodd",
            stroke: "#000000",
            strokeWidth: 1,
            strokeLinecap: "butt",
            strokeLinejoin: "miter",
            strokeMiterlimit: 4,
            strokeDashoffset: 0,
            strokeOpacity: 1
          }}
        />
        <path
          id="rect_f"
          d="m 285,120 h 60 v 60 h -60 z"
          style={{
            fill: "#ffffff",
            fillOpacity: 1,
            fillRule: "evenodd",
            stroke: "#000000",
            strokeWidth: 1,
            strokeLinecap: "butt",
            strokeLinejoin: "miter",
            strokeMiterlimit: 4,
            strokeDashoffset: 0,
            strokeOpacity: 1
          }}
        />
        <path
          id="rect_g"
          d="m 345,120 h 60 v 60 h -60 z"
          style={{
            fill: "#ffffff",
            fillOpacity: 1,
            fillRule: "evenodd",
            stroke: "#000000",
            strokeWidth: 1,
            strokeLinecap: "butt",
            strokeLinejoin: "miter",
            strokeMiterlimit: 4,
            strokeDashoffset: 0,
            strokeOpacity: 1
          }}
        />
        <path
          id="rect_h"
          d="m 405,120 h 60 v 60 h -60 z"
          style={{
            fill: "#ffffff",
            fillOpacity: 1,
            fillRule: "evenodd",
            stroke: "#000000",
            strokeWidth: 1,
            strokeLinecap: "butt",
            strokeLinejoin: "miter",
            strokeMiterlimit: 4,
            strokeDashoffset: 0,
            strokeOpacity: 1
          }}
        />
        <path
          id="rect_j"
          d="m 465,120 h 60 v 60 h -60 z"
          style={{
            fill: "#ffffff",
            fillOpacity: 1,
            fillRule: "evenodd",
            stroke: "#000000",
            strokeWidth: 1,
            strokeLinecap: "butt",
            strokeLinejoin: "miter",
            strokeMiterlimit: 4,
            strokeDashoffset: 0,
            strokeOpacity: 1
          }}
        />
        <path
          id="rect_k"
          d="m 525,120 h 60 v 60 h -60 z"
          style={{
            fill: "#ffffff",
            fillOpacity: 1,
            fillRule: "evenodd",
            stroke: "#000000",
            strokeWidth: 1,
            strokeLinecap: "butt",
            strokeLinejoin: "miter",
            strokeMiterlimit: 4,
            strokeDashoffset: 0,
            strokeOpacity: 1
          }}
        />
        <path
          id="rect_l"
          d="m 585,120 h 60 v 60 h -60 z"
          style={{
            fill: "#ffffff",
            fillOpacity: 1,
            fillRule: "evenodd",
            stroke: "#000000",
            strokeWidth: 1,
            strokeLinecap: "butt",
            strokeLinejoin: "miter",
            strokeMiterlimit: 4,
            strokeDashoffset: 0,
            strokeOpacity: 1
          }}
        />
        <path
          id="rect_oe"
          d="m 645,120 h 60 v 60 h -60 z"
          style={{
            fill: "#ffffff",
            fillOpacity: 1,
            fillRule: "evenodd",
            stroke: "#000000",
            strokeWidth: 1,
            strokeLinecap: "butt",
            strokeLinejoin: "miter",
            strokeMiterlimit: 4,
            strokeDashoffset: 0,
            strokeOpacity: 1
          }}
        />
        <path
          id="rect_ae"
          d="m 705,120 h 60 v 60 h -60 z"
          style={{
            fill: "#ffffff",
            fillOpacity: 1,
            fillRule: "evenodd",
            stroke: "#000000",
            strokeWidth: 1,
            strokeLinecap: "butt",
            strokeLinejoin: "miter",
            strokeMiterlimit: 4,
            strokeDashoffset: 0,
            strokeOpacity: 1
          }}
        />
        <path
          id="rect2320"
          d="M 825,120 L 810,120 L 810,60 L 900,60 L 900.00045,180 L 824.88972,180 L 825,120 z "
          style={{
            fill: "#dfdfdf",
            fillOpacity: 1,
            fillRule: "evenodd",
            stroke: "#000000",
            strokeWidth: "1.00000048",
            strokeLinecap: "butt",
            strokeLinejoin: "miter",
            strokeMiterlimit: 4,
            strokeDashoffset: 0,
            strokeOpacity: 1
          }}
        />
        <path
          id="rect_shift"
          d="M 3.750996e-7,180 H 75.001511 v 60 H 3.750996e-7 Z"
          style={{
            fill: "#ffffff",
            fillOpacity: 1,
            fillRule: "evenodd",
            stroke: "#000000",
            strokeWidth: "1.00000048",
            strokeLinecap: "butt",
            strokeLinejoin: "miter",
            strokeMiterlimit: 4,
            strokeDashoffset: 0,
            strokeOpacity: 1
          }}
        />
        <path
          id="rect_y"
          d="m 135,180 h 60 v 60 h -60 z"
          style={{
            fill: "#ffffff",
            fillOpacity: 1,
            fillRule: "evenodd",
            stroke: "#000000",
            strokeWidth: 1,
            strokeLinecap: "butt",
            strokeLinejoin: "miter",
            strokeMiterlimit: 4,
            strokeDashoffset: 0,
            strokeOpacity: 1
          }}
        />
        <path
          id="rect_x"
          d="m 195,180 h 60 v 60 h -60 z"
          style={{
            fill: "#ffffff",
            fillOpacity: 1,
            fillRule: "evenodd",
            stroke: "#000000",
            strokeWidth: 1,
            strokeLinecap: "butt",
            strokeLinejoin: "miter",
            strokeMiterlimit: 4,
            strokeDashoffset: 0,
            strokeOpacity: 1
          }}
        />
        <path
          id="rect_c"
          d="m 255,180 h 60 v 60 h -60 z"
          style={{
            fill: "#ffffff",
            fillOpacity: 1,
            fillRule: "evenodd",
            stroke: "#000000",
            strokeWidth: 1,
            strokeLinecap: "butt",
            strokeLinejoin: "miter",
            strokeMiterlimit: 4,
            strokeDashoffset: 0,
            strokeOpacity: 1
          }}
        />
        <path
          id="rect_v"
          d="m 315,180 h 60 v 60 h -60 z"
          style={{
            fill: "#ffffff",
            fillOpacity: 1,
            fillRule: "evenodd",
            stroke: "#000000",
            strokeWidth: 1,
            strokeLinecap: "butt",
            strokeLinejoin: "miter",
            strokeMiterlimit: 4,
            strokeDashoffset: 0,
            strokeOpacity: 1
          }}
        />
        <path
          id="rect_b"
          d="m 375,180 h 60 v 60 h -60 z"
          style={{
            fill: "#ffffff",
            fillOpacity: 1,
            fillRule: "evenodd",
            stroke: "#000000",
            strokeWidth: 1,
            strokeLinecap: "butt",
            strokeLinejoin: "miter",
            strokeMiterlimit: 4,
            strokeDashoffset: 0,
            strokeOpacity: 1
          }}
        />
        <path
          id="rect_n"
          d="m 435,180 h 60 v 60 h -60 z"
          style={{
            fill: "#ffffff",
            fillOpacity: 1,
            fillRule: "evenodd",
            stroke: "#000000",
            strokeWidth: 1,
            strokeLinecap: "butt",
            strokeLinejoin: "miter",
            strokeMiterlimit: 4,
            strokeDashoffset: 0,
            strokeOpacity: 1
          }}
        />
        <path
          id="rect_m"
          d="m 495,180 h 60 v 60 h -60 z"
          style={{
            fill: "#ffffff",
            fillOpacity: 1,
            fillRule: "evenodd",
            stroke: "#000000",
            strokeWidth: 1,
            strokeLinecap: "butt",
            strokeLinejoin: "miter",
            strokeMiterlimit: 4,
            strokeDashoffset: 0,
            strokeOpacity: 1
          }}
        />
        <path
          id="rect_comma"
          d="m 555,180 h 60 v 60 h -60 z"
          style={{
            fill: "#ffffff",
            fillOpacity: 1,
            fillRule: "evenodd",
            stroke: "#000000",
            strokeWidth: 1,
            strokeLinecap: "butt",
            strokeLinejoin: "miter",
            strokeMiterlimit: 4,
            strokeDashoffset: 0,
            strokeOpacity: 1
          }}
        />
        <path
          id="rect_dot"
          d="m 615,180 h 60 v 60 h -60 z"
          style={{
            fill: "#ffffff",
            fillOpacity: 1,
            fillRule: "evenodd",
            stroke: "#000000",
            strokeWidth: 1,
            strokeLinecap: "butt",
            strokeLinejoin: "miter",
            strokeMiterlimit: 4,
            strokeDashoffset: 0,
            strokeOpacity: 1
          }}
        />
        <path
          id="rect_dash"
          d="m 675,180 h 60 v 60 h -60 z"
          style={{
            fill: "#ffffff",
            fillOpacity: 1,
            fillRule: "evenodd",
            stroke: "#000000",
            strokeWidth: 1,
            strokeLinecap: "butt",
            strokeLinejoin: "miter",
            strokeMiterlimit: 4,
            strokeDashoffset: 0,
            strokeOpacity: 1
          }}
        />
        <path
          id="rect2348"
          d="M 735,180 L 900,180 L 900,240 L 735,240 L 735,180 z "
          style={{
            fill: "#dfdfdf",
            fillOpacity: 1,
            fillRule: "evenodd",
            stroke: "#000000",
            strokeWidth: 1,
            strokeLinecap: "butt",
            strokeLinejoin: "miter",
            strokeMiterlimit: 4,
            strokeDashoffset: 0,
            strokeOpacity: 1
          }}
        />
        <path
          id="rect2350"
          d="M 0,240 L 90,240 L 90,300 L 0,300 L 0,240 z "
          style={{
            fill: "#dfdfdf",
            fillOpacity: 1,
            fillRule: "evenodd",
            stroke: "#000000",
            strokeWidth: 1,
            strokeLinecap: "butt",
            strokeLinejoin: "miter",
            strokeMiterlimit: 4,
            strokeDashoffset: 0,
            strokeOpacity: 1
          }}
        />
        <path
          id="rect2352"
          d="M 810,240 L 900,240 L 900,300 L 810,300 L 810,240 z "
          style={{
            fill: "#dfdfdf",
            fillOpacity: 1,
            fillRule: "evenodd",
            stroke: "#000000",
            strokeWidth: 1,
            strokeLinecap: "butt",
            strokeLinejoin: "miter",
            strokeMiterlimit: 4,
            strokeDashoffset: 0,
            strokeOpacity: 1
          }}
        />
        <path
          id="rect2354"
          d="M 150,240 L 240,240 L 240,300 L 150,300 L 150,240 z "
          style={{
            fill: "#dfdfdf",
            fillOpacity: 1,
            fillRule: "evenodd",
            stroke: "#000000",
            strokeWidth: 1,
            strokeLinecap: "butt",
            strokeLinejoin: "miter",
            strokeMiterlimit: 4,
            strokeDashoffset: 0,
            strokeOpacity: 1
          }}
        />
        <path
          id="rect2360"
          d="M 600,240 L 690,240 L 690,300 L 600,300 L 600,240 z "
          style={{
            fill: "#dfdfdf",
            fillOpacity: 1,
            fillRule: "evenodd",
            stroke: "#000000",
            strokeWidth: 1,
            strokeLinecap: "butt",
            strokeLinejoin: "miter",
            strokeMiterlimit: 4,
            strokeDashoffset: 0,
            strokeOpacity: 1
          }}
        />
        <path
          id="rect_space"
          d="m 240,240 h 360 v 60 H 240 Z"
          style={{
            fill: "#ffffff",
            fillOpacity: 1,
            fillRule: "evenodd",
            stroke: "#000000",
            strokeWidth: 1,
            strokeLinecap: "butt",
            strokeLinejoin: "miter",
            strokeMiterlimit: 4,
            strokeDashoffset: 0,
            strokeOpacity: 1
          }}
        />
        <path
          id="rect2364"
          d="M 90,240 L 150,240 L 150,300 L 90,300 L 90,240 z "
          style={{
            fill: "#efefef",
            fillOpacity: 1,
            fillRule: "evenodd",
            stroke: "#000000",
            strokeWidth: 1,
            strokeLinecap: "butt",
            strokeLinejoin: "miter",
            strokeMiterlimit: 4,
            strokeDashoffset: 0,
            strokeOpacity: 1
          }}
        />
        <path
          id="rect2366"
          d="M 690,240 L 750,240 L 750,300 L 690,300 L 690,240 z "
          style={{
            fill: "#efefef",
            fillOpacity: 1,
            fillRule: "evenodd",
            stroke: "#000000",
            strokeWidth: 1,
            strokeLinecap: "butt",
            strokeLinejoin: "miter",
            strokeMiterlimit: 4,
            strokeDashoffset: 0,
            strokeOpacity: 1
          }}
        />
        <path
          id="rect2368"
          d="M 750,240 L 810,240 L 810,300 L 750,300 L 750,240 z "
          style={{
            fill: "#efefef",
            fillOpacity: 1,
            fillRule: "evenodd",
            stroke: "#000000",
            strokeWidth: 1,
            strokeLinecap: "butt",
            strokeLinejoin: "miter",
            strokeMiterlimit: 4,
            strokeDashoffset: 0,
            strokeOpacity: 1
          }}
        />
        <path id="flowRoot4146" style={{}} />
        <path
          id="text5091"
          d="M 75.351563,18.826172 L 74.4375,11.056641 L 74.4375,6.3691406 L 78.046875,6.3691406 L 78.046875,11.056641 L 77.132813,18.826172 L 75.351563,18.826172 M 74.484375,23.630859 L 74.484375,20.173828 L 77.964844,20.173828 L 77.964844,23.630859 L 74.484375,23.630859 M 75.351563,53.630859 L 75.351563,42.158203 L 71.34375,42.158203 L 71.34375,39.802734 L 71.601563,39.802734 C 73.062496,39.802748 74.124995,39.576186 74.789063,39.123047 C 75.460931,38.669937 75.855462,37.912125 75.972656,36.849609 L 78.65625,36.849609 L 78.65625,53.630859 L 75.351563,53.630859"
          style={{
            fontSize: 24,
            fontStyle: "normal",
            fontVariant: "normal",
            fontWeight: "bold",
            fontStretch: "normal",
            textAlign: "center",
            lineHeight: "125%",
            writingMode: "lr-tb",
            textAnchor: "middle",
            fill: "#000000",
            fillOpacity: 1,
            stroke: "none",
            strokeWidth: 1,
            strokeLinecap: "butt",
            strokeLinejoin: "miter",
            strokeOpacity: 1,
            fontFamily: "Swis721 BT"
          }}
        />
        <path
          id="text5127"
          d="M 135.57344,6.7792969 L 137.82344,6.7792969 L 137.82344,13.330078 L 135.57344,13.330078 L 135.57344,6.7792969 M 131.75313,6.7792969 L 134.00313,6.7792969 L 134.00313,13.330078 L 131.75313,13.330078 L 131.75313,6.7792969 M 128.56563,53.630859 C 128.58125,52.130861 128.90156,50.861331 129.52657,49.822266 C 130.15156,48.775395 131.26094,47.716803 132.85469,46.646484 C 133.09687,46.482429 133.44844,46.255867 133.90938,45.966797 C 136.01875,44.615243 137.07343,43.314463 137.07344,42.064453 C 137.07343,41.322278 136.85078,40.736341 136.40547,40.306641 C 135.96015,39.876967 135.35078,39.662123 134.57735,39.662109 C 133.73359,39.662123 133.08125,39.927748 132.62032,40.458984 C 132.16719,40.982435 131.94062,41.732434 131.94063,42.708984 L 131.94063,42.849609 L 128.84688,42.849609 C 128.84688,40.927747 129.3625,39.44728 130.39375,38.408203 C 131.425,37.369157 132.89375,36.849626 134.8,36.849609 C 136.52656,36.849626 137.90546,37.322282 138.93672,38.267578 C 139.96796,39.205093 140.48358,40.455091 140.4836,42.017578 C 140.48358,43.134776 140.21405,44.103525 139.675,44.923828 C 139.13593,45.744149 138.09296,46.677741 136.5461,47.724609 C 136.21796,47.951178 135.76484,48.248052 135.18672,48.615234 C 133.71797,49.560551 132.88984,50.2793 132.70235,50.771484 L 140.31953,50.771484 L 140.31953,53.630859 L 128.56563,53.630859"
          style={{
            fontSize: 24,
            fontStyle: "normal",
            fontVariant: "normal",
            fontWeight: "bold",
            fontStretch: "normal",
            textAlign: "center",
            lineHeight: "125%",
            writingMode: "lr-tb",
            textAnchor: "middle",
            fill: "#000000",
            fillOpacity: 1,
            stroke: "none",
            strokeWidth: 1,
            strokeLinecap: "butt",
            strokeLinejoin: "miter",
            strokeOpacity: 1,
            fontFamily: "Swis721 BT"
          }}
        />
        <path
          id="text5139"
          d="M 190.07813,48.521484 L 193.30078,48.521484 C 193.30859,49.458989 193.53515,50.166019 193.98047,50.642578 C 194.42578,51.111331 195.08593,51.345705 195.96094,51.345703 C 196.80468,51.345705 197.45312,51.126956 197.90625,50.689453 C 198.36718,50.244144 198.59765,49.607426 198.59766,48.779297 C 198.59765,47.951178 198.32812,47.326178 197.78906,46.904297 C 197.2578,46.474617 196.46484,46.259773 195.41016,46.259766 C 195.35546,46.259773 195.26953,46.263679 195.15234,46.271484 C 195.04296,46.279304 194.96093,46.28321 194.90625,46.283203 L 194.90625,43.962891 L 195.26953,43.962891 C 196.23827,43.9629 196.95312,43.7754 197.41406,43.400391 C 197.8828,43.017589 198.11718,42.435558 198.11719,41.654297 C 198.11718,41.005872 197.91796,40.494154 197.51953,40.119141 C 197.1289,39.736342 196.59374,39.544936 195.91406,39.544922 C 195.17187,39.544936 194.59765,39.763686 194.19141,40.201172 C 193.78515,40.638685 193.58203,41.259778 193.58203,42.064453 L 193.58203,42.205078 L 190.41797,42.205078 C 190.45703,40.486341 190.96094,39.169936 191.92969,38.255859 C 192.90625,37.334001 194.28125,36.873064 196.05469,36.873047 C 197.73437,36.873064 199.0664,37.283219 200.05078,38.103516 C 201.03514,38.923843 201.52733,40.02931 201.52734,41.419922 C 201.52733,42.154308 201.35936,42.798839 201.02344,43.353516 C 200.68749,43.908213 200.18358,44.365244 199.51172,44.724609 C 200.37108,45.099618 201.01952,45.619149 201.45703,46.283203 C 201.90233,46.93946 202.12499,47.724615 202.125,48.638672 C 202.12499,50.318363 201.57421,51.650393 200.47266,52.634766 C 199.37108,53.619141 197.86718,54.111328 195.96094,54.111328 C 194.07812,54.111328 192.625,53.634766 191.60156,52.681641 C 190.58594,51.720705 190.07812,50.357425 190.07813,48.591797 L 190.07813,48.521484"
          style={{
            fontSize: 24,
            fontStyle: "normal",
            fontVariant: "normal",
            fontWeight: "bold",
            fontStretch: "normal",
            textAlign: "center",
            lineHeight: "125%",
            writingMode: "lr-tb",
            textAnchor: "middle",
            fill: "#000000",
            fillOpacity: 1,
            stroke: "none",
            strokeWidth: 1,
            strokeLinecap: "butt",
            strokeLinejoin: "miter",
            strokeOpacity: 1,
            fontFamily: "Swis721 BT"
          }}
        />
        <path
          id="text5145"
          d="M 254.46094,21.451172 C 255.10155,21.365237 255.58984,21.134768 255.92578,20.759766 C 256.26171,20.384769 256.42968,19.884769 256.42969,19.259766 C 256.42968,18.705083 256.26952,18.248052 255.94922,17.888672 C 255.63671,17.52149 255.14062,17.236335 254.46094,17.033203 L 254.46094,21.451172 M 253.06641,13.435547 L 253.06641,9.4511719 C 252.45703,9.529311 251.99218,9.7402483 251.67188,10.083984 C 251.35156,10.419935 251.1914,10.87306 251.19141,11.443359 C 251.1914,11.919934 251.33984,12.318371 251.63672,12.638672 C 251.9414,12.958995 252.41796,13.22462 253.06641,13.435547 M 253.06641,26.267578 L 253.06641,24.017578 C 251.30078,23.908203 249.98047,23.396485 249.10547,22.482422 C 248.23047,21.568361 247.79297,20.24805 247.79297,18.521484 L 250.93359,18.521484 C 250.97265,19.365239 251.16796,20.033207 251.51953,20.525391 C 251.8789,21.009768 252.39453,21.318362 253.06641,21.451172 L 253.06641,16.599609 C 251.2539,16.138679 249.96484,15.537117 249.19922,14.794922 C 248.43359,14.052744 248.05078,13.03712 248.05078,11.748047 C 248.05078,10.318373 248.5039,9.1660301 249.41016,8.2910156 C 250.32422,7.4160318 251.54296,6.959001 253.06641,6.9199219 L 253.06641,5.4199219 L 254.46094,5.4199219 L 254.46094,6.9199219 C 255.98437,6.9980635 257.17186,7.4590005 258.02344,8.3027344 C 258.87499,9.1386864 259.34374,10.318373 259.42969,11.841797 L 256.24219,11.841797 C 256.18749,11.115247 256.01171,10.56056 255.71484,10.177734 C 255.42577,9.7871232 255.0078,9.5683734 254.46094,9.5214844 L 254.46094,13.787109 C 256.39062,14.388681 257.74999,15.07618 258.53906,15.849609 C 259.32811,16.623054 259.72264,17.642584 259.72266,18.908203 C 259.72264,20.400394 259.26171,21.591799 258.33984,22.482422 C 257.42577,23.373047 256.1328,23.892578 254.46094,24.041016 L 254.46094,26.267578 L 253.06641,26.267578 M 254.64844,47.419922 L 254.64844,40.236328 L 250.08984,47.419922 L 254.64844,47.419922 M 254.57813,53.630859 L 254.57813,50.009766 L 247.5,50.009766 L 247.5,47.056641 L 253.6875,37.330078 L 257.84766,37.330078 L 257.84766,47.337891 L 259.79297,47.337891 L 259.79297,50.009766 L 257.84766,50.009766 L 257.84766,53.630859 L 254.57813,53.630859"
          style={{
            fontSize: 24,
            fontStyle: "normal",
            fontVariant: "normal",
            fontWeight: "bold",
            fontStretch: "normal",
            textAlign: "center",
            lineHeight: "125%",
            writingMode: "lr-tb",
            textAnchor: "middle",
            fill: "#000000",
            fillOpacity: 1,
            stroke: "none",
            strokeWidth: 1,
            strokeLinecap: "butt",
            strokeLinejoin: "miter",
            strokeOpacity: 1,
            fontFamily: "Swis721 BT"
          }}
        />
        <path
          id="text5151"
          d="M 320.42578,19.740234 C 320.42577,20.263675 320.60155,20.705081 320.95313,21.064453 C 321.30467,21.416018 321.73827,21.591799 322.25391,21.591797 C 322.75389,21.591799 323.18358,21.412112 323.54297,21.052734 C 323.90233,20.68555 324.08201,20.24805 324.08203,19.740234 C 324.08201,19.240239 323.90233,18.814458 323.54297,18.462891 C 323.19139,18.103521 322.7617,17.923834 322.25391,17.923828 C 321.73827,17.923834 321.30467,18.099615 320.95313,18.451172 C 320.60155,18.794927 320.42577,19.224614 320.42578,19.740234 M 317.88281,19.740234 C 317.8828,18.521489 318.30468,17.494147 319.14844,16.658203 C 319.99217,15.822273 321.02733,15.404305 322.25391,15.404297 C 323.45701,15.404305 324.48045,15.830086 325.32422,16.681641 C 326.17576,17.525397 326.60154,18.544927 326.60156,19.740234 C 326.60154,20.943362 326.17576,21.974611 325.32422,22.833984 C 324.47264,23.685547 323.4492,24.111328 322.25391,24.111328 C 321.02733,24.111328 319.99217,23.689453 319.14844,22.845703 C 318.30468,22.001955 317.8828,20.9668 317.88281,19.740234 M 311.07422,24.111328 L 321.08203,6.8496094 L 322.96875,6.8496094 L 312.96094,24.111328 L 311.07422,24.111328 M 310.04297,11.220703 C 310.04297,11.73634 310.21484,12.169933 310.55859,12.521484 C 310.91015,12.873058 311.34375,13.048839 311.85938,13.048828 C 312.36718,13.048839 312.79687,12.873058 313.14844,12.521484 C 313.50781,12.162121 313.68749,11.728528 313.6875,11.220703 C 313.68749,10.720716 313.50781,10.294935 313.14844,9.9433594 C 312.79687,9.5839984 312.36718,9.4043111 311.85938,9.4042969 C 311.34375,9.4043111 310.91015,9.5800922 310.55859,9.9316406 C 310.21484,10.275404 310.04297,10.705091 310.04297,11.220703 M 307.5,11.220703 C 307.5,10.001967 307.92187,8.9707178 308.76563,8.1269531 C 309.60937,7.275407 310.64062,6.8496262 311.85938,6.8496094 C 313.06249,6.8496262 314.08593,7.2793132 314.92969,8.1386719 C 315.78124,8.990249 316.20702,10.017592 316.20703,11.220703 C 316.20702,12.423839 315.78124,13.451182 314.92969,14.302734 C 314.08593,15.146493 313.06249,15.568367 311.85938,15.568359 C 310.63281,15.568367 309.59765,15.150399 308.75391,14.314453 C 307.91797,13.478526 307.5,12.447277 307.5,11.220703 M 310.85156,49.119141 L 314.13281,49.119141 C 314.1875,49.853519 314.43359,50.423831 314.87109,50.830078 C 315.30859,51.228518 315.89453,51.427737 316.62891,51.427734 C 317.53515,51.427737 318.22655,51.162112 318.70313,50.630859 C 319.18749,50.099613 319.42968,49.337895 319.42969,48.345703 C 319.42968,47.416022 319.18358,46.685554 318.69141,46.154297 C 318.19921,45.615242 317.51952,45.345711 316.65234,45.345703 C 316.16796,45.345711 315.74218,45.443368 315.375,45.638672 C 315.00781,45.833992 314.69531,46.123054 314.4375,46.505859 L 311.41406,46.330078 L 312.50391,37.330078 L 322.14844,37.330078 L 322.14844,40.166016 L 314.87109,40.166016 L 314.4375,43.529297 C 314.80468,43.240245 315.22656,43.025401 315.70313,42.884766 C 316.17968,42.736339 316.71093,42.66212 317.29688,42.662109 C 318.96874,42.66212 320.3164,43.169932 321.33984,44.185547 C 322.37108,45.20118 322.88671,46.53321 322.88672,48.181641 C 322.88671,49.986332 322.3203,51.427737 321.1875,52.505859 C 320.05468,53.576172 318.53515,54.111328 316.62891,54.111328 C 314.89453,54.111328 313.51172,53.669922 312.48047,52.787109 C 311.45703,51.896486 310.91406,50.673831 310.85156,49.119141"
          style={{
            fontSize: 24,
            fontStyle: "normal",
            fontVariant: "normal",
            fontWeight: "bold",
            fontStretch: "normal",
            textAlign: "center",
            lineHeight: "125%",
            writingMode: "lr-tb",
            textAnchor: "middle",
            fill: "#000000",
            fillOpacity: 1,
            stroke: "none",
            strokeWidth: 1,
            strokeLinecap: "butt",
            strokeLinejoin: "miter",
            strokeOpacity: 1,
            fontFamily: "Swis721 BT"
          }}
        />
        <path
          d="M 372.85547,16.095703 L 371.96484,16.740234 C 371.60546,16.990241 371.33593,17.291022 371.15625,17.642578 C 370.97656,17.994146 370.88671,18.388677 370.88672,18.826172 C 370.88671,19.490239 371.11328,20.048832 371.56641,20.501953 C 372.01953,20.955081 372.58593,21.181643 373.26563,21.181641 C 373.76562,21.181643 374.24218,21.080081 374.69531,20.876953 C 375.15624,20.666019 375.58202,20.361331 375.97266,19.962891 L 372.85547,16.095703 M 373.79297,12.404297 L 374.20313,12.111328 C 374.57812,11.853527 374.85546,11.564465 375.03516,11.244141 C 375.21483,10.923841 375.30468,10.556654 375.30469,10.142578 C 375.30468,9.744155 375.17968,9.427749 374.92969,9.193359 C 374.68749,8.958999 374.35546,8.841812 373.93359,8.841797 C 373.5039,8.841812 373.16406,8.962905 372.91406,9.205078 C 372.66406,9.439467 372.53906,9.75978 372.53906,10.166016 C 372.53906,10.384779 372.59765,10.62306 372.71484,10.880859 C 372.83984,11.138684 373.01562,11.412122 373.24219,11.701172 L 373.79297,12.404297 M 371.15625,13.962891 L 370.47656,13.072266 C 370.125,12.603527 369.87109,12.166027 369.71484,11.759766 C 369.5664,11.345715 369.49218,10.912122 369.49219,10.458984 C 369.49218,9.208999 369.89062,8.216812 370.6875,7.482422 C 371.49218,6.740251 372.58203,6.369158 373.95703,6.369141 C 375.27733,6.369158 376.3203,6.709001 377.08594,7.388672 C 377.85155,8.068375 378.23436,8.986343 378.23438,10.142578 C 378.23436,11.017591 378.0078,11.802746 377.55469,12.498047 C 377.10936,13.185557 376.40624,13.833994 375.44531,14.443359 L 377.91797,17.490234 C 378.15233,17.107428 378.33593,16.677741 378.46875,16.201172 C 378.60936,15.724617 378.70702,15.193368 378.76172,14.607422 L 381.80859,14.607422 C 381.72264,15.623055 381.5117,16.56446 381.17578,17.431641 C 380.83983,18.298833 380.37889,19.091801 379.79297,19.810547 L 382.93359,23.630859 L 378.94922,23.630859 L 377.77734,22.189453 C 377.08983,22.822266 376.33202,23.302735 375.50391,23.630859 C 374.68359,23.951172 373.82421,24.111328 372.92578,24.111328 C 371.33203,24.111328 370.02734,23.638672 369.01172,22.693359 C 368.0039,21.748049 367.5,20.541019 367.5,19.072266 C 367.5,17.978521 367.78125,17.037116 368.34375,16.248047 C 368.90625,15.458993 369.84375,14.697275 371.15625,13.962891"
          style={{
            fontSize: 24,
            fontStyle: "normal",
            fontVariant: "normal",
            fontWeight: "bold",
            fontStretch: "normal",
            textAlign: "center",
            lineHeight: "125%",
            writingMode: "lr-tb",
            textAnchor: "middle",
            fill: "black",
            fillOpacity: 1,
            stroke: "none",
            strokeWidth: 1,
            strokeLinecap: "butt",
            strokeLinejoin: "miter",
            strokeOpacity: 1,
            fontFamily: "Swis721 BT"
          }}
          id="path3073"
        />
        <path
          id="text5163"
          d="M 434.66016,53.630859 L 431.15625,53.630859 C 431.28125,51.341799 431.83203,49.07227 432.80859,46.822266 C 433.79296,44.572275 435.19531,42.361339 437.01563,40.189453 L 428.76563,40.189453 L 428.76563,37.330078 L 440.66016,37.330078 L 440.66016,39.849609 C 438.8164,41.880871 437.39843,44.029306 436.40625,46.294922 C 435.42187,48.560552 434.83984,51.005862 434.66016,53.630859"
          style={{
            fontSize: 24,
            fontStyle: "normal",
            fontVariant: "normal",
            fontWeight: "bold",
            fontStretch: "normal",
            textAlign: "center",
            lineHeight: "125%",
            writingMode: "lr-tb",
            textAnchor: "middle",
            fill: "#000000",
            fillOpacity: 1,
            stroke: "none",
            strokeWidth: 1,
            strokeLinecap: "butt",
            strokeLinejoin: "miter",
            strokeOpacity: 1,
            fontFamily: "Swis721 BT"
          }}
        />
        <path
          id="path3094"
          d="M 763.5,73.212891 L 761.4375,76.119141 L 759.44531,74.724609 L 761.69531,71.900391 L 758.41406,70.986328 L 759.17578,68.607422 L 762.32813,69.732422 L 762.32813,66.369141 L 764.64844,66.369141 L 764.64844,69.732422 L 767.80078,68.630859 L 768.58594,71.009766 L 765.30469,71.900391 L 767.53125,74.701172 L 765.49219,76.166016 L 763.5,73.212891"
          style={{
            fontSize: 24,
            fontStyle: "normal",
            fontVariant: "normal",
            fontWeight: "bold",
            fontStretch: "normal",
            textAlign: "center",
            lineHeight: "125%",
            writingMode: "lr-tb",
            textAnchor: "middle",
            fill: "black",
            fillOpacity: 1,
            stroke: "none",
            strokeWidth: 1,
            strokeLinecap: "butt",
            strokeLinejoin: "miter",
            strokeOpacity: 1,
            fontFamily: "Swis721 BT"
          }}
        />
        <path
          d="M 490.875,48.755859 C 490.875,49.576176 491.10156,50.208988 491.55469,50.654297 C 492.01562,51.099612 492.67187,51.322268 493.52344,51.322266 C 494.33593,51.322268 494.97265,51.095706 495.43359,50.642578 C 495.90233,50.189457 496.13671,49.560551 496.13672,48.755859 C 496.13671,47.982428 495.89843,47.361334 495.42188,46.892578 C 494.9453,46.423835 494.31249,46.189461 493.52344,46.189453 C 492.73437,46.189461 492.09374,46.427742 491.60156,46.904297 C 491.11718,47.380866 490.875,47.998053 490.875,48.755859M 491.14453,41.560547 C 491.14453,42.208996 491.34765,42.708995 491.75391,43.060547 C 492.16015,43.404307 492.74218,43.576182 493.5,43.576172 C 494.2578,43.576182 494.83984,43.400401 495.24609,43.048828 C 495.66015,42.697277 495.86718,42.201183 495.86719,41.560547 C 495.86718,40.93556 495.65624,40.443373 495.23438,40.083984 C 494.81249,39.724623 494.23437,39.544936 493.5,39.544922 C 492.78124,39.544936 492.20703,39.72853 491.77734,40.095703 C 491.35546,40.462904 491.14453,40.951185 491.14453,41.560547M 489.9375,44.818359 C 489.23437,44.427744 488.72656,43.970713 488.41406,43.447266 C 488.10156,42.923839 487.94531,42.255871 487.94531,41.443359 C 487.94531,40.005873 488.4375,38.876968 489.42188,38.056641 C 490.40625,37.236345 491.76562,36.826189 493.5,36.826172 C 495.24999,36.826189 496.61718,37.236345 497.60156,38.056641 C 498.59374,38.869155 499.08983,39.998061 499.08984,41.443359 C 499.08983,42.216808 498.92186,42.888683 498.58594,43.458984 C 498.24999,44.021494 497.74608,44.474619 497.07422,44.818359 C 497.89452,45.20118 498.51171,45.73243 498.92578,46.412109 C 499.33983,47.083991 499.54686,47.904303 499.54688,48.873047 C 499.54686,50.505862 499.0078,51.787111 497.92969,52.716797 C 496.85936,53.646484 495.3828,54.111328 493.5,54.111328 C 491.59375,54.111328 490.11328,53.650391 489.05859,52.728516 C 488.0039,51.806642 487.47656,50.521487 487.47656,48.873047 C 487.47656,47.912115 487.67187,47.107428 488.0625,46.458984 C 488.46094,45.802742 489.08594,45.255868 489.9375,44.818359"
          style={{
            fontSize: 24,
            fontStyle: "normal",
            fontVariant: "normal",
            fontWeight: "bold",
            fontStretch: "normal",
            textAlign: "center",
            lineHeight: "125%",
            writingMode: "lr-tb",
            textAnchor: "middle",
            fill: "black",
            fillOpacity: 1,
            stroke: "none",
            strokeWidth: 1,
            strokeLinecap: "butt",
            strokeLinejoin: "miter",
            strokeOpacity: 1,
            fontFamily: "Swis721 BT"
          }}
          id="path3092"
        />
        <path
          id="path3112"
          d="M 497.85938,6.3691406 C 496.78124,8.1347811 495.98046,9.9316543 495.45703,11.759766 C 494.93359,13.587901 494.67187,15.505868 494.67188,17.513672 C 494.67187,19.513676 494.93359,21.427737 495.45703,23.255859 C 495.98046,25.083983 496.78124,26.880856 497.85938,28.646484 L 495.38672,28.646484 C 494.01953,26.779294 492.98046,24.904296 492.26953,23.021484 C 491.5664,21.130862 491.21484,19.294926 491.21484,17.513672 C 491.21484,15.73243 491.5664,13.896494 492.26953,12.005859 C 492.98046,10.115248 494.01953,8.2363435 495.38672,6.3691406 L 497.85938,6.3691406"
          style={{
            fontSize: 24,
            fontStyle: "normal",
            fontVariant: "normal",
            fontWeight: "bold",
            fontStretch: "normal",
            textAlign: "center",
            lineHeight: "125%",
            writingMode: "lr-tb",
            textAnchor: "middle",
            fill: "black",
            fillOpacity: 1,
            stroke: "none",
            strokeWidth: 1,
            strokeLinecap: "butt",
            strokeLinejoin: "miter",
            strokeOpacity: 1,
            fontFamily: "Swis721 BT"
          }}
        />
        <path
          d="M 556.06641,42.685547 C 556.0664,41.724621 555.82421,40.96681 555.33984,40.412109 C 554.86327,39.849623 554.21093,39.568373 553.38281,39.568359 C 552.60156,39.568373 551.99218,39.837904 551.55469,40.376953 C 551.125,40.916028 550.91015,41.669934 550.91016,42.638672 C 550.91015,43.544932 551.13671,44.251963 551.58984,44.759766 C 552.04296,45.267586 552.67968,45.521492 553.5,45.521484 C 554.30468,45.521492 554.93359,45.271493 555.38672,44.771484 C 555.83983,44.271494 556.0664,43.576182 556.06641,42.685547M 556.125,47.056641 C 555.73437,47.447272 555.27343,47.74024 554.74219,47.935547 C 554.21093,48.130865 553.61327,48.228521 552.94922,48.228516 C 551.30078,48.228521 549.98047,47.732428 548.98828,46.740234 C 547.99609,45.748055 547.5,44.419931 547.5,42.755859 C 547.5,40.990247 548.03906,39.564467 549.11719,38.478516 C 550.19531,37.392594 551.61718,36.849626 553.38281,36.849609 C 555.42968,36.849626 556.98436,37.556657 558.04688,38.970703 C 559.11718,40.376966 559.65233,42.431652 559.65234,45.134766 C 559.65233,48.041021 559.08202,50.267581 557.94141,51.814453 C 556.80077,53.361328 555.16015,54.134765 553.01953,54.134766 C 551.54296,54.134765 550.35156,53.751953 549.44531,52.986328 C 548.53906,52.212892 548.04297,51.162112 547.95703,49.833984 L 551.34375,49.845703 C 551.42187,50.384769 551.63281,50.787112 551.97656,51.052734 C 552.32031,51.318362 552.80468,51.451174 553.42969,51.451172 C 554.27343,51.451174 554.91796,51.083987 555.36328,50.349609 C 555.80858,49.615238 556.06249,48.517583 556.125,47.056641"
          style={{
            fontSize: 24,
            fontStyle: "normal",
            fontVariant: "normal",
            fontWeight: "bold",
            fontStretch: "normal",
            textAlign: "center",
            lineHeight: "125%",
            writingMode: "lr-tb",
            textAnchor: "middle",
            fill: "black",
            fillOpacity: 1,
            stroke: "none",
            strokeWidth: 1,
            strokeLinecap: "butt",
            strokeLinejoin: "miter",
            strokeOpacity: 1,
            fontFamily: "Swis721 BT"
          }}
          id="path3110"
        />
        <path
          id="path3121"
          d="M 549.375,6.3691406 L 551.87109,6.3691406 C 553.23046,8.228531 554.26171,10.103529 554.96484,11.994141 C 555.66796,13.876963 556.01952,15.716805 556.01953,17.513672 C 556.01952,19.302739 555.66796,21.142581 554.96484,23.033203 C 554.26171,24.923827 553.23046,26.794919 551.87109,28.646484 L 549.375,28.646484 C 550.46094,26.873044 551.26562,25.072264 551.78906,23.244141 C 552.32031,21.408205 552.58593,19.498051 552.58594,17.513672 C 552.58593,15.521492 552.32031,13.611338 551.78906,11.783203 C 551.26562,9.9550918 550.46094,8.1504061 549.375,6.3691406"
          style={{
            fontSize: 24,
            fontStyle: "normal",
            fontVariant: "normal",
            fontWeight: "bold",
            fontStretch: "normal",
            textAlign: "center",
            lineHeight: "125%",
            writingMode: "lr-tb",
            textAnchor: "middle",
            fill: "black",
            fillOpacity: 1,
            stroke: "none",
            strokeWidth: 1,
            strokeLinecap: "butt",
            strokeLinejoin: "miter",
            strokeOpacity: 1,
            fontFamily: "Swis721 BT"
          }}
        />
        <path
          d="M 610.98047,45.474609 C 610.98046,47.513678 611.18359,48.994145 611.58984,49.916016 C 612.0039,50.837893 612.66015,51.29883 613.55859,51.298828 C 614.45702,51.29883 615.11327,50.833987 615.52734,49.904297 C 615.9414,48.974614 616.14843,47.498053 616.14844,45.474609 C 616.14843,43.44337 615.9414,41.966809 615.52734,41.044922 C 615.11327,40.12306 614.45702,39.662123 613.55859,39.662109 C 612.66015,39.662123 612.0039,40.12306 611.58984,41.044922 C 611.18359,41.958996 610.98046,43.435557 610.98047,45.474609M 607.5,45.474609 C 607.5,42.591808 608,40.43556 609,39.005859 C 610.00781,37.568375 611.52734,36.849626 613.55859,36.849609 C 615.58202,36.849626 617.09765,37.572282 618.10547,39.017578 C 619.12108,40.455091 619.62889,42.615245 619.62891,45.498047 C 619.62889,48.380865 619.12499,50.533206 618.11719,51.955078 C 617.11718,53.376953 615.59765,54.08789 613.55859,54.087891 C 611.52734,54.08789 610.00781,53.373047 609,51.943359 C 608,50.513675 607.5,48.357427 607.5,45.474609"
          style={{
            fontSize: 24,
            fontStyle: "normal",
            fontVariant: "normal",
            fontWeight: "bold",
            fontStretch: "normal",
            textAlign: "center",
            lineHeight: "125%",
            writingMode: "lr-tb",
            textAnchor: "middle",
            fill: "black",
            fillOpacity: 1,
            stroke: "none",
            strokeWidth: 1,
            strokeLinecap: "butt",
            strokeLinejoin: "miter",
            strokeOpacity: 1,
            fontFamily: "Swis721 BT"
          }}
          id="path3119"
        />
        <path
          id="text5187"
          d="M 682.5,206.90039 L 694.5,206.90039 L 694.5,209.29102 L 682.5,209.29102 L 682.5,206.90039 M 685.20703,228.84961 L 685.20703,225.63867 L 691.79297,225.63867 L 691.79297,228.84961 L 685.20703,228.84961"
          style={{
            fontSize: 24,
            fontStyle: "normal",
            fontVariant: "normal",
            fontWeight: "bold",
            fontStretch: "normal",
            textAlign: "center",
            lineHeight: "125%",
            writingMode: "lr-tb",
            textAnchor: "middle",
            fill: "black",
            fillOpacity: 1,
            stroke: "none",
            strokeWidth: 1,
            strokeLinecap: "butt",
            strokeLinejoin: "miter",
            strokeOpacity: 1,
            fontFamily: "Swis721 BT"
          }}
        />
        <path
          id="path2908"
          d="M 763.33594,99.322266 L 765.70313,99.322266 L 765.70313,105.29883 L 771.53906,105.29883 L 771.53906,107.63086 L 765.70313,107.63086 L 765.70313,113.63086 L 763.33594,113.63086 L 763.33594,107.63086 L 757.5,107.63086 L 757.5,105.29883 L 763.33594,105.29883 L 763.33594,99.322266"
          style={{
            fontSize: 24,
            fontStyle: "normal",
            fontVariant: "normal",
            fontWeight: "bold",
            fontStretch: "normal",
            textAlign: "center",
            lineHeight: "125%",
            writingMode: "lr-tb",
            textAnchor: "middle",
            fill: "black",
            fillOpacity: 1,
            stroke: "none",
            strokeWidth: 1,
            strokeLinecap: "butt",
            strokeLinejoin: "miter",
            strokeOpacity: 1,
            fontFamily: "Swis721 BT"
          }}
        />
        <path
          d="M 607.5,17.818359 L 621.53906,17.818359 L 621.53906,20.150391 L 607.5,20.150391 L 607.5,17.818359 M 607.5,12.779297 L 621.53906,12.779297 L 621.53906,15.111328 L 607.5,15.111328 L 607.5,12.779297"
          style={{
            fontSize: 24,
            fontStyle: "normal",
            fontVariant: "normal",
            fontWeight: "bold",
            fontStretch: "normal",
            textAlign: "center",
            lineHeight: "125%",
            writingMode: "lr-tb",
            textAnchor: "middle",
            fill: "black",
            fillOpacity: 1,
            stroke: "none",
            strokeWidth: 1,
            strokeLinecap: "butt",
            strokeLinejoin: "miter",
            strokeOpacity: 1,
            fontFamily: "Swis721 BT"
          }}
          id="path2906"
        />
        <g transform="translate(0,12.353516)" id="g3468">
          <path
            style={{
              fill: "none",
              fillOpacity: "0.75",
              fillRule: "evenodd",
              stroke: "#000000",
              strokeWidth: 3,
              strokeLinecap: "butt",
              strokeLinejoin: "miter",
              strokeMiterlimit: 4,
              strokeOpacity: 1
            }}
            d="M 840,17.646484 L 797.02608,17.646484"
            id="path5439"
          />
          <path
            style={{
              fill: "#000000",
              fillOpacity: 1,
              fillRule: "evenodd",
              stroke: "none",
              strokeWidth: 1,
              strokeLinecap: "butt",
              strokeLinejoin: "miter",
              strokeOpacity: 1
            }}
            d="M 802.5,25.146484 L 802.5,10.146484 L 787.5,17.646484 L 802.5,25.146484 z"
            id="path5441"
          />
        </g>
        <g transform="translate(-28.49997,7.5)" id="g5459">
          <path
            id="path5453"
            d="M 82.50003,75 L 54.020182,75"
            style={{
              fill: "none",
              fillOpacity: "0.75",
              fillRule: "evenodd",
              stroke: "#000000",
              strokeWidth: "3.00000024",
              strokeLinecap: "butt",
              strokeLinejoin: "miter",
              strokeMiterlimit: 4,
              strokeDasharray: "none",
              strokeOpacity: 1
            }}
          />
          <path
            id="path5455"
            d="M 60,82.5 L 60,67.5 L 45,75 L 60,82.5 z"
            style={{
              fill: "#000000",
              fillOpacity: 1,
              fillRule: "evenodd",
              stroke: "none",
              strokeWidth: 1,
              strokeLinecap: "butt",
              strokeLinejoin: "miter",
              strokeOpacity: 1
            }}
          />
          <path
            style={{
              fill: "none",
              fillOpacity: "0.75",
              fillRule: "evenodd",
              stroke: "#000000",
              strokeWidth: 3,
              strokeLinecap: "butt",
              strokeLinejoin: "miter",
              strokeMiterlimit: 4,
              strokeDasharray: "none",
              strokeOpacity: 1
            }}
            d="M 45,67.5 C 45,82.5 45,82.5 45,82.5"
            id="path5457"
          />
        </g>
        <g transform="matrix(-1,0,0,-1,99.00003,172.5)" id="g5464">
          <path
            style={{
              fill: "none",
              fillOpacity: "0.75",
              fillRule: "evenodd",
              stroke: "#000000",
              strokeWidth: "3.00000024",
              strokeLinecap: "butt",
              strokeLinejoin: "miter",
              strokeMiterlimit: 4,
              strokeDasharray: "none",
              strokeOpacity: 1
            }}
            d="M 82.50003,75 L 54.020182,75"
            id="path5466"
          />
          <path
            style={{
              fill: "#000000",
              fillOpacity: 1,
              fillRule: "evenodd",
              stroke: "none",
              strokeWidth: 1,
              strokeLinecap: "butt",
              strokeLinejoin: "miter",
              strokeOpacity: 1
            }}
            d="M 60,82.5 L 60,67.5 L 45,75 L 60,82.5 z"
            id="path5468"
          />
          <path
            id="path5470"
            d="M 45,67.5 C 45,82.5 45,82.5 45,82.5"
            style={{
              fill: "none",
              fillOpacity: "0.75",
              fillRule: "evenodd",
              stroke: "#000000",
              strokeWidth: 3,
              strokeLinecap: "butt",
              strokeLinejoin: "miter",
              strokeMiterlimit: 4,
              strokeDasharray: "none",
              strokeOpacity: 1
            }}
          />
        </g>
        <path
          id="text5474"
          d="M 107.0625,80.560547 L 105.23438,78.779297 L 107.17969,76.763672 L 109.05469,78.591797 C 109.30467,78.123052 109.49608,77.587897 109.62891,76.986328 C 109.7617,76.384773 109.82811,75.728524 109.82813,75.017578 C 109.82811,73.119151 109.40233,71.646496 108.55078,70.599609 C 107.69921,69.544936 106.5078,69.017593 104.97656,69.017578 C 103.46093,69.017593 102.28124,69.54103 101.4375,70.587891 C 100.59374,71.634778 100.17187,73.111339 100.17188,75.017578 C 100.17187,76.916022 100.59374,78.392583 101.4375,79.447266 C 102.28124,80.494144 103.46093,81.017581 104.97656,81.017578 C 105.36718,81.017581 105.73436,80.978518 106.07813,80.900391 C 106.42968,80.822268 106.7578,80.708987 107.0625,80.560547 M 109.55859,82.916016 C 108.97264,83.306641 108.28905,83.603516 107.50781,83.806641 C 106.73436,84.009765 105.89061,84.111328 104.97656,84.111328 C 102.39843,84.111328 100.34765,83.291016 98.824219,81.650391 C 97.308592,80.009769 96.55078,77.798834 96.550781,75.017578 C 96.55078,72.228527 97.308592,70.017592 98.824219,68.384766 C 100.34765,66.744158 102.39843,65.923846 104.97656,65.923828 C 107.55468,65.923846 109.60545,66.744158 111.12891,68.384766 C 112.66014,70.025404 113.42576,72.23634 113.42578,75.017578 C 113.42576,76.236336 113.26951,77.353522 112.95703,78.369141 C 112.64451,79.376957 112.18358,80.259769 111.57422,81.017578 L 113.44922,82.810547 L 111.52734,84.826172 L 109.55859,82.916016"
          style={{
            fontSize: 24,
            fontStyle: "normal",
            fontVariant: "normal",
            fontWeight: "bold",
            fontStretch: "normal",
            textAlign: "center",
            lineHeight: "125%",
            writingMode: "lr-tb",
            textAnchor: "middle",
            fill: "#000000",
            fillOpacity: 1,
            stroke: "none",
            strokeWidth: 1,
            strokeLinecap: "butt",
            strokeLinejoin: "miter",
            strokeOpacity: 1,
            fontFamily: "Swis721 BT"
          }}
        />
        <path
          id="text5482"
          d="M 158.94141,83.630859 L 153.99609,66.369141 L 157.67578,66.369141 L 160.62891,78.544922 L 163.125,66.369141 L 166.91016,66.369141 L 169.40625,78.544922 L 172.35938,66.369141 L 176.00391,66.369141 L 171.07031,83.630859 L 167.68359,83.630859 L 165.01172,70.412109 L 162.32813,83.630859 L 158.94141,83.630859"
          style={{
            fontSize: 24,
            fontStyle: "normal",
            fontVariant: "normal",
            fontWeight: "bold",
            fontStretch: "normal",
            textAlign: "center",
            lineHeight: "125%",
            writingMode: "lr-tb",
            textAnchor: "middle",
            fill: "#000000",
            fillOpacity: 1,
            stroke: "none",
            strokeWidth: 1,
            strokeLinecap: "butt",
            strokeLinejoin: "miter",
            strokeOpacity: 1,
            fontFamily: "Swis721 BT"
          }}
        />
        <path
          id="text5492"
          d="M 218.52539,83.630859 L 218.52539,66.369141 L 231.05273,66.369141 L 231.05273,69.369141 L 222.0293,69.369141 L 222.0293,73.048828 L 230.2793,73.048828 L 230.2793,76.001953 L 222.0293,76.001953 L 222.0293,80.443359 L 231.47461,80.443359 L 231.47461,83.630859 L 218.52539,83.630859"
          style={{
            fontSize: 24,
            fontStyle: "normal",
            fontVariant: "normal",
            fontWeight: "bold",
            fontStretch: "normal",
            textAlign: "center",
            lineHeight: "125%",
            writingMode: "lr-tb",
            textAnchor: "middle",
            fill: "#000000",
            fillOpacity: 1,
            stroke: "none",
            strokeWidth: 1,
            strokeLinecap: "butt",
            strokeLinejoin: "miter",
            strokeOpacity: 1,
            fontFamily: "Swis721 BT"
          }}
        />
        <path
          id="text5500"
          d="M 281.4375,73.916016 L 285.60938,73.916016 C 286.51561,73.916025 287.17968,73.732432 287.60156,73.365234 C 288.03124,72.998058 288.24608,72.419933 288.24609,71.630859 C 288.24608,70.880872 288.03905,70.314466 287.625,69.931641 C 287.21093,69.54103 286.59374,69.345717 285.77344,69.345703 L 281.4375,69.345703 L 281.4375,73.916016 M 277.88672,83.630859 L 277.88672,66.369141 L 286.25391,66.369141 C 288.13671,66.369158 289.53124,66.771501 290.4375,67.576172 C 291.34373,68.380875 291.79686,69.611342 291.79688,71.267578 C 291.79686,72.322277 291.5742,73.201182 291.12891,73.904297 C 290.69139,74.607431 290.05858,75.087899 289.23047,75.345703 C 289.98045,75.611336 290.5117,76.017586 290.82422,76.564453 C 291.14452,77.111335 291.32811,77.962896 291.375,79.119141 L 291.44531,81.158203 C 291.4453,81.173831 291.4453,81.197268 291.44531,81.228516 C 291.46873,82.259767 291.69139,82.884766 292.11328,83.103516 L 292.11328,83.630859 L 288.22266,83.630859 C 288.09764,83.388672 287.99999,83.091797 287.92969,82.740234 C 287.86718,82.380861 287.82811,81.95508 287.8125,81.462891 L 287.76563,79.646484 C 287.72655,78.576177 287.52343,77.853521 287.15625,77.478516 C 286.79686,77.103522 286.14452,76.916022 285.19922,76.916016 L 281.4375,76.916016 L 281.4375,83.630859 L 277.88672,83.630859"
          style={{
            fontSize: 24,
            fontStyle: "normal",
            fontVariant: "normal",
            fontWeight: "bold",
            fontStretch: "normal",
            textAlign: "center",
            lineHeight: "125%",
            writingMode: "lr-tb",
            textAnchor: "middle",
            fill: "#000000",
            fillOpacity: 1,
            stroke: "none",
            strokeWidth: 1,
            strokeLinecap: "butt",
            strokeLinejoin: "miter",
            strokeOpacity: 1,
            fontFamily: "Swis721 BT"
          }}
        />
        <path
          id="text5504"
          d="M 343.24219,83.630859 L 343.24219,69.451172 L 338.12109,69.451172 L 338.12109,66.369141 L 351.87891,66.369141 L 351.87891,69.451172 L 346.79297,69.451172 L 346.79297,83.630859 L 343.24219,83.630859"
          style={{
            fontSize: 24,
            fontStyle: "normal",
            fontVariant: "normal",
            fontWeight: "bold",
            fontStretch: "normal",
            textAlign: "center",
            lineHeight: "125%",
            writingMode: "lr-tb",
            textAnchor: "middle",
            fill: "#000000",
            fillOpacity: 1,
            stroke: "none",
            strokeWidth: 1,
            strokeLinecap: "butt",
            strokeLinejoin: "miter",
            strokeOpacity: 1,
            fontFamily: "Swis721 BT"
          }}
        />
        <path
          id="text5518"
          d="M 152.06836,203.63086 L 148.51758,203.63086 L 148.51758,197.19727 L 142.24805,186.36914 L 146.5957,186.36914 L 150.28711,193.81055 L 153.69727,186.36914 L 157.75195,186.36914 L 152.06836,197.19727 L 152.06836,203.63086"
          style={{
            fontSize: 24,
            fontStyle: "normal",
            fontVariant: "normal",
            fontWeight: "bold",
            fontStretch: "normal",
            textAlign: "center",
            lineHeight: "125%",
            writingMode: "lr-tb",
            textAnchor: "middle",
            fill: "black",
            fillOpacity: 1,
            stroke: "none",
            strokeWidth: 1,
            strokeLinecap: "butt",
            strokeLinejoin: "miter",
            strokeOpacity: 1,
            fontFamily: "Swis721 BT"
          }}
        />
        <path
          id="text5522"
          d="M 458.08594,66.105469 L 461.67188,66.105469 L 461.67188,76.933594 C 461.67187,78.269536 461.93749,79.246098 462.46875,79.863281 C 462.99999,80.472659 463.84374,80.777346 465,80.777344 C 466.17187,80.777346 467.02343,80.472659 467.55469,79.863281 C 468.09374,79.25391 468.36327,78.277349 468.36328,76.933594 L 468.36328,66.105469 L 471.91406,66.105469 L 471.91406,77.320313 C 471.91405,79.437504 471.3203,81.062502 470.13281,82.195313 C 468.95311,83.328125 467.24999,83.894531 465.02344,83.894531 C 462.78124,83.894531 461.0625,83.332031 459.86719,82.207031 C 458.67969,81.074221 458.08594,79.445316 458.08594,77.320313 L 458.08594,66.105469"
          style={{
            fontSize: 24,
            fontStyle: "normal",
            fontVariant: "normal",
            fontWeight: "bold",
            fontStretch: "normal",
            textAlign: "center",
            lineHeight: "125%",
            writingMode: "lr-tb",
            textAnchor: "middle",
            fill: "#000000",
            fillOpacity: 1,
            stroke: "none",
            strokeWidth: 1,
            strokeLinecap: "butt",
            strokeLinejoin: "miter",
            strokeOpacity: 1,
            fontFamily: "Swis721 BT"
          }}
        />
        <path
          id="text5526"
          d="M 523.22461,83.630859 L 523.22461,66.369141 L 526.77539,66.369141 L 526.77539,83.630859 L 523.22461,83.630859"
          style={{
            fontSize: 24,
            fontStyle: "normal",
            fontVariant: "normal",
            fontWeight: "bold",
            fontStretch: "normal",
            textAlign: "center",
            lineHeight: "125%",
            writingMode: "lr-tb",
            textAnchor: "middle",
            fill: "#000000",
            fillOpacity: 1,
            stroke: "none",
            strokeWidth: 1,
            strokeLinecap: "butt",
            strokeLinejoin: "miter",
            strokeOpacity: 1,
            fontFamily: "Swis721 BT"
          }}
        />
        <path
          id="text5530"
          d="M 580.18359,75 C 580.18359,76.898444 580.60546,78.375005 581.44922,79.429688 C 582.29296,80.476566 583.47265,81.000003 584.98828,81 C 586.51952,81.000003 587.71093,80.476566 588.5625,79.429688 C 589.41405,78.375005 589.83983,76.898444 589.83984,75 C 589.83983,73.101573 589.41405,71.628918 588.5625,70.582031 C 587.71093,69.527358 586.51952,69.000015 584.98828,69 C 583.47265,69.000015 582.29296,69.523452 581.44922,70.570313 C 580.60546,71.617199 580.18359,73.093761 580.18359,75 M 576.5625,75 C 576.5625,72.210949 577.32031,70.000014 578.83594,68.367188 C 580.35937,66.726579 582.41015,65.906268 584.98828,65.90625 C 587.56639,65.906268 589.61717,66.726579 591.14063,68.367188 C 592.67186,70.007826 593.43748,72.218761 593.4375,75 C 593.43748,77.781256 592.67186,79.992191 591.14063,81.632813 C 589.61717,83.273438 587.56639,84.09375 584.98828,84.09375 C 582.41015,84.09375 580.35937,83.273438 578.83594,81.632813 C 577.32031,79.992191 576.5625,77.781256 576.5625,75"
          style={{
            fontSize: 24,
            fontStyle: "normal",
            fontVariant: "normal",
            fontWeight: "bold",
            fontStretch: "normal",
            textAlign: "center",
            lineHeight: "125%",
            writingMode: "lr-tb",
            textAnchor: "middle",
            fill: "#000000",
            fillOpacity: 1,
            stroke: "none",
            strokeWidth: 1,
            strokeLinecap: "butt",
            strokeLinejoin: "miter",
            strokeOpacity: 1,
            fontFamily: "Swis721 BT"
          }}
        />
        <path
          id="text5534"
          d="M 641.97656,74.361328 L 645.41016,74.361328 C 646.33983,74.361337 647.01561,74.166025 647.4375,73.775391 C 647.85936,73.376963 648.0703,72.740245 648.07031,71.865234 C 648.0703,71.044934 647.86327,70.423841 647.44922,70.001953 C 647.03515,69.580092 646.41796,69.369155 645.59766,69.369141 L 641.97656,69.369141 L 641.97656,74.361328 M 641.95313,77.490234 L 641.95313,83.630859 L 638.40234,83.630859 L 638.40234,66.369141 L 646.07813,66.369141 C 647.89061,66.369158 649.26171,66.841814 650.19141,67.787109 C 651.12889,68.724624 651.59764,70.103529 651.59766,71.923828 C 651.59764,73.705088 651.14061,75.080087 650.22656,76.048828 C 649.31249,77.009772 648.0078,77.490241 646.3125,77.490234 L 641.95313,77.490234"
          style={{
            fontSize: 24,
            fontStyle: "normal",
            fontVariant: "normal",
            fontWeight: "bold",
            fontStretch: "normal",
            textAlign: "center",
            lineHeight: "125%",
            writingMode: "lr-tb",
            textAnchor: "middle",
            fill: "#000000",
            fillOpacity: 1,
            stroke: "none",
            strokeWidth: 1,
            strokeLinecap: "butt",
            strokeLinejoin: "miter",
            strokeOpacity: 1,
            fontFamily: "Swis721 BT"
          }}
        />
        <path
          id="text5641"
          d="M 119.9707,129.82617 L 117.58008,137.17383 L 122.37305,137.17383 L 119.9707,129.82617 M 117.9082,126.36914 L 122.00977,126.36914 L 128.23242,143.63086 L 124.50586,143.63086 L 123.33398,140.08008 L 116.64258,140.08008 L 115.50586,143.63086 L 111.76758,143.63086 L 117.9082,126.36914"
          style={{
            fontSize: 24,
            fontStyle: "normal",
            fontVariant: "normal",
            fontWeight: "bold",
            fontStretch: "normal",
            textAlign: "center",
            lineHeight: "125%",
            writingMode: "lr-tb",
            textAnchor: "middle",
            fill: "#000000",
            fillOpacity: 1,
            stroke: "none",
            strokeWidth: 1,
            strokeLinecap: "butt",
            strokeLinejoin: "miter",
            strokeOpacity: 1,
            fontFamily: "Swis721 BT"
          }}
        />
        <path
          id="text5645"
          d="M 172.98047,138.29297 L 176.48438,138.29297 C 176.61718,139.23829 177.0039,139.94141 177.64453,140.40234 C 178.28515,140.85547 179.21093,141.08203 180.42188,141.08203 C 181.45312,141.08203 182.23046,140.89844 182.75391,140.53125 C 183.27733,140.16407 183.53905,139.6211 183.53906,138.90234 C 183.53905,137.85547 182.03515,136.98829 179.02734,136.30078 C 178.98827,136.29298 178.95312,136.28516 178.92188,136.27734 C 178.84374,136.26173 178.72265,136.23438 178.55859,136.19531 C 176.94921,135.84376 175.80078,135.44923 175.11328,135.01172 C 174.5039,134.6211 174.03906,134.09767 173.71875,133.44141 C 173.39844,132.77735 173.23828,131.99611 173.23828,131.09766 C 173.23828,129.41798 173.80859,128.13283 174.94922,127.24219 C 176.08984,126.34377 177.73828,125.89455 179.89453,125.89453 C 181.91015,125.89455 183.48436,126.37111 184.61719,127.32422 C 185.7578,128.27736 186.35936,129.62111 186.42188,131.35547 L 183.01172,131.35547 C 182.94921,130.51954 182.6289,129.88283 182.05078,129.44531 C 181.47265,129.00783 180.64843,128.78908 179.57813,128.78906 C 178.64843,128.78908 177.92968,128.97267 177.42188,129.33984 C 176.92187,129.69923 176.67187,130.21486 176.67188,130.88672 C 176.67187,131.80079 177.65234,132.48439 179.61328,132.9375 C 180.14452,133.06251 180.55859,133.16017 180.85547,133.23047 C 182.11327,133.55079 183.0039,133.80079 183.52734,133.98047 C 184.05858,134.16017 184.51952,134.35938 184.91016,134.57813 C 185.61327,134.96876 186.14061,135.48829 186.49219,136.13672 C 186.84374,136.77735 187.01952,137.54688 187.01953,138.44531 C 187.01952,140.24219 186.41405,141.63672 185.20313,142.62891 C 183.99218,143.61328 182.28515,144.10547 180.08203,144.10547 C 177.91015,144.10547 176.20703,143.60156 174.97266,142.59375 C 173.73828,141.58594 173.07422,140.15235 172.98047,138.29297"
          style={{
            fontSize: 24,
            fontStyle: "normal",
            fontVariant: "normal",
            fontWeight: "bold",
            fontStretch: "normal",
            textAlign: "center",
            lineHeight: "125%",
            writingMode: "lr-tb",
            textAnchor: "middle",
            fill: "#000000",
            fillOpacity: 1,
            stroke: "none",
            strokeWidth: 1,
            strokeLinecap: "butt",
            strokeLinejoin: "miter",
            strokeOpacity: 1,
            fontFamily: "Swis721 BT"
          }}
        />
        <path
          id="text5649"
          d="M 236.16211,140.51367 L 239.00977,140.51367 C 240.65819,140.51367 241.8496,140.08399 242.58398,139.22461 C 243.32616,138.35743 243.69725,136.95508 243.69727,135.01758 C 243.69725,133.0879 243.3535,131.66993 242.66602,130.76367 C 241.9785,129.85744 240.90429,129.40431 239.44336,129.4043 L 236.16211,129.4043 L 236.16211,140.51367 M 232.68164,143.63086 L 232.68164,126.36914 L 239.44336,126.36914 C 242.09179,126.36916 244.06444,127.084 245.36133,128.51367 C 246.666,129.94337 247.31834,132.11134 247.31836,135.01758 C 247.31834,136.59571 247.07616,137.98633 246.5918,139.18945 C 246.11522,140.39258 245.41991,141.36133 244.50586,142.0957 C 243.81835,142.64258 243.0371,143.03711 242.16211,143.2793 C 241.2871,143.51367 240.06054,143.63086 238.48242,143.63086 L 232.68164,143.63086"
          style={{
            fontSize: 24,
            fontStyle: "normal",
            fontVariant: "normal",
            fontWeight: "bold",
            fontStretch: "normal",
            textAlign: "center",
            lineHeight: "125%",
            writingMode: "lr-tb",
            textAnchor: "middle",
            fill: "#000000",
            fillOpacity: 1,
            stroke: "none",
            strokeWidth: 1,
            strokeLinecap: "butt",
            strokeLinejoin: "miter",
            strokeOpacity: 1,
            fontFamily: "Swis721 BT"
          }}
        />
        <path
          id="text5653"
          d="M 293.97656,143.63086 L 293.97656,126.36914 L 306.02344,126.36914 L 306.02344,129.36914 L 297.48047,129.36914 L 297.48047,133.2832 L 304.96875,133.2832 L 304.96875,136.2832 L 297.48047,136.2832 L 297.48047,143.63086 L 293.97656,143.63086"
          style={{
            fontSize: 24,
            fontStyle: "normal",
            fontVariant: "normal",
            fontWeight: "bold",
            fontStretch: "normal",
            textAlign: "center",
            lineHeight: "125%",
            writingMode: "lr-tb",
            textAnchor: "middle",
            fill: "#000000",
            fillOpacity: 1,
            stroke: "none",
            strokeWidth: 1,
            strokeLinecap: "butt",
            strokeLinejoin: "miter",
            strokeOpacity: 1,
            fontFamily: "Swis721 BT"
          }}
        />
        <path
          id="text5657"
          d="M 365.17969,141.57422 C 364.53905,142.44141 363.80858,143.07813 362.98828,143.48438 C 362.17577,143.89062 361.21874,144.09375 360.11719,144.09375 C 357.70312,144.09375 355.74609,143.25781 354.24609,141.58594 C 352.7539,139.90625 352.00781,137.70313 352.00781,134.97656 C 352.00781,132.22657 352.7539,130.02736 354.24609,128.37891 C 355.73828,126.73049 357.72656,125.90627 360.21094,125.90625 C 362.37499,125.90627 364.14061,126.4258 365.50781,127.46484 C 366.87498,128.49611 367.68748,129.91798 367.94531,131.73047 L 364.32422,131.73047 C 364.10546,130.83204 363.65624,130.14845 362.97656,129.67969 C 362.30468,129.21095 361.42577,128.97658 360.33984,128.97656 C 358.89452,128.97658 357.75781,129.50783 356.92969,130.57031 C 356.10937,131.62501 355.69921,133.08595 355.69922,134.95313 C 355.69921,136.82813 356.1289,138.29688 356.98828,139.35938 C 357.84765,140.42188 359.02734,140.95313 360.52734,140.95313 C 361.65233,140.95313 362.59374,140.6211 363.35156,139.95703 C 364.10936,139.29297 364.57811,138.38282 364.75781,137.22656 L 360.84375,137.22656 L 360.84375,134.27344 L 367.99219,134.27344 L 367.99219,143.61328 L 365.61328,143.61328 L 365.17969,141.57422"
          style={{
            fontSize: 24,
            fontStyle: "normal",
            fontVariant: "normal",
            fontWeight: "bold",
            fontStretch: "normal",
            textAlign: "center",
            lineHeight: "125%",
            writingMode: "lr-tb",
            textAnchor: "middle",
            fill: "#000000",
            fillOpacity: 1,
            stroke: "none",
            strokeWidth: 1,
            strokeLinecap: "butt",
            strokeLinejoin: "miter",
            strokeOpacity: 1,
            fontFamily: "Swis721 BT"
          }}
        />
        <path
          id="text5661"
          d="M 412.86328,143.63086 L 412.86328,126.36914 L 416.4375,126.36914 L 416.4375,132.80273 L 423.5625,132.80273 L 423.5625,126.36914 L 427.13672,126.36914 L 427.13672,143.63086 L 423.5625,143.63086 L 423.5625,135.97852 L 416.4375,135.97852 L 416.4375,143.63086 L 412.86328,143.63086"
          style={{
            fontSize: 24,
            fontStyle: "normal",
            fontVariant: "normal",
            fontWeight: "bold",
            fontStretch: "normal",
            textAlign: "center",
            lineHeight: "125%",
            writingMode: "lr-tb",
            textAnchor: "middle",
            fill: "#000000",
            fillOpacity: 1,
            stroke: "none",
            strokeWidth: 1,
            strokeLinecap: "butt",
            strokeLinejoin: "miter",
            strokeOpacity: 1,
            fontFamily: "Swis721 BT"
          }}
        />
        <path
          id="text5665"
          d="M 474.48047,136.95703 L 477.91406,136.95703 L 477.91406,139.04297 C 477.91406,139.64453 478.09375,140.10547 478.45313,140.42578 C 478.8125,140.73828 479.32812,140.89453 480,140.89453 C 480.73437,140.89453 481.24609,140.70313 481.53516,140.32031 C 481.82421,139.9375 481.96874,139.21875 481.96875,138.16406 L 481.96875,126.12891 L 485.51953,126.12891 L 485.51953,138.32813 C 485.51952,139.42188 485.45311,140.22657 485.32031,140.74219 C 485.1953,141.25 484.98436,141.69922 484.6875,142.08984 C 484.23436,142.66797 483.61327,143.10938 482.82422,143.41406 C 482.03515,143.71875 481.10937,143.87109 480.04688,143.87109 C 479.07031,143.87109 478.20703,143.73828 477.45703,143.47266 C 476.70703,143.20703 476.08203,142.8125 475.58203,142.28906 C 475.18359,141.86719 474.89844,141.39844 474.72656,140.88281 C 474.5625,140.35938 474.48047,139.5 474.48047,138.30469 L 474.48047,136.95703"
          style={{
            fontSize: 24,
            fontStyle: "normal",
            fontVariant: "normal",
            fontWeight: "bold",
            fontStretch: "normal",
            textAlign: "center",
            lineHeight: "125%",
            writingMode: "lr-tb",
            textAnchor: "middle",
            fill: "#000000",
            fillOpacity: 1,
            stroke: "none",
            strokeWidth: 1,
            strokeLinecap: "butt",
            strokeLinejoin: "miter",
            strokeOpacity: 1,
            fontFamily: "Swis721 BT"
          }}
        />
        <path
          id="text5669"
          d="M 532.32422,143.63086 L 532.32422,126.36914 L 535.875,126.36914 L 535.875,133.45898 L 542.61328,126.36914 L 547.05469,126.36914 L 540.16406,133.35352 L 547.67578,143.63086 L 543.33984,143.63086 L 537.71484,135.73242 L 535.875,137.56055 L 535.875,143.63086 L 532.32422,143.63086"
          style={{
            fontSize: 24,
            fontStyle: "normal",
            fontVariant: "normal",
            fontWeight: "bold",
            fontStretch: "normal",
            textAlign: "center",
            lineHeight: "125%",
            writingMode: "lr-tb",
            textAnchor: "middle",
            fill: "#000000",
            fillOpacity: 1,
            stroke: "none",
            strokeWidth: 1,
            strokeLinecap: "butt",
            strokeLinejoin: "miter",
            strokeOpacity: 1,
            fontFamily: "Swis721 BT"
          }}
        />
        <path
          id="text5673"
          d="M 594.01172,143.63086 L 594.01172,126.36914 L 597.5625,126.36914 L 597.5625,140.44336 L 605.98828,140.44336 L 605.98828,143.63086 L 594.01172,143.63086"
          style={{
            fontSize: 24,
            fontStyle: "normal",
            fontVariant: "normal",
            fontWeight: "bold",
            fontStretch: "normal",
            textAlign: "center",
            lineHeight: "125%",
            writingMode: "lr-tb",
            textAnchor: "middle",
            fill: "#000000",
            fillOpacity: 1,
            stroke: "none",
            strokeWidth: 1,
            strokeLinecap: "butt",
            strokeLinejoin: "miter",
            strokeOpacity: 1,
            fontFamily: "Swis721 BT"
          }}
        />
        <path
          id="text5679"
          d="M 398.15039,83.63086 L 398.15039,80.63086 L 407.53711,69.49805 L 398.33789,69.49805 L 398.33789,66.36914 L 411.84961,66.36914 L 411.84961,69.36914 L 402.43945,80.51367 L 411.63867,80.51367 L 411.63867,83.63086 L 398.15039,83.63086"
          style={{
            fontSize: 24,
            fontStyle: "normal",
            fontVariant: "normal",
            fontWeight: "bold",
            fontStretch: "normal",
            textAlign: "center",
            lineHeight: "125%",
            writingMode: "lr-tb",
            textAnchor: "middle",
            fill: "black",
            fillOpacity: 1,
            stroke: "none",
            strokeWidth: 1,
            strokeLinecap: "butt",
            strokeLinejoin: "miter",
            strokeOpacity: 1,
            fontFamily: "Swis721 BT"
          }}
        />
        <path
          id="text5683"
          d="M 202.37109,203.63086 L 207.79688,194.81836 L 202.37109,186.36914 L 206.47266,186.36914 L 210,192.4043 L 213.50391,186.36914 L 217.62891,186.36914 L 212.20313,194.79492 L 217.62891,203.63086 L 213.52734,203.63086 L 210,197.6543 L 206.47266,203.63086 L 202.37109,203.63086"
          style={{
            fontSize: 24,
            fontStyle: "normal",
            fontVariant: "normal",
            fontWeight: "bold",
            fontStretch: "normal",
            textAlign: "center",
            lineHeight: "125%",
            writingMode: "lr-tb",
            textAnchor: "middle",
            fill: "#000000",
            fillOpacity: 1,
            stroke: "none",
            strokeWidth: 1,
            strokeLinecap: "butt",
            strokeLinejoin: "miter",
            strokeOpacity: 1,
            fontFamily: "Swis721 BT"
          }}
        />
        <path
          id="text5687"
          d="M 277.875,197.68359 C 277.74217,199.64454 276.98436,201.20313 275.60156,202.35938 C 274.22655,203.51563 272.42968,204.09375 270.21094,204.09375 C 267.65624,204.09375 265.66796,203.29688 264.24609,201.70313 C 262.83203,200.10938 262.125,197.87501 262.125,195 C 262.125,192.06251 262.84765,189.81251 264.29297,188.25 C 265.73828,186.68752 267.8164,185.90627 270.52734,185.90625 C 272.73046,185.90627 274.46874,186.44533 275.74219,187.52344 C 277.02342,188.59377 277.72655,190.10939 277.85156,192.07031 L 274.34766,192.07031 C 274.19921,191.09376 273.80077,190.35158 273.15234,189.84375 C 272.50389,189.32814 271.6289,189.07033 270.52734,189.07031 C 268.96484,189.07033 267.77734,189.57423 266.96484,190.58203 C 266.15234,191.58986 265.74609,193.06251 265.74609,195 C 265.74609,196.87501 266.14843,198.32422 266.95313,199.34766 C 267.76562,200.3711 268.91796,200.88282 270.41016,200.88281 C 271.48827,200.88282 272.37108,200.60938 273.05859,200.0625 C 273.74608,199.50782 274.19139,198.71485 274.39453,197.68359 L 277.875,197.68359"
          style={{
            fontSize: 24,
            fontStyle: "normal",
            fontVariant: "normal",
            fontWeight: "bold",
            fontStretch: "normal",
            textAlign: "center",
            lineHeight: "125%",
            writingMode: "lr-tb",
            textAnchor: "middle",
            fill: "#000000",
            fillOpacity: 1,
            stroke: "none",
            strokeWidth: 1,
            strokeLinecap: "butt",
            strokeLinejoin: "miter",
            strokeOpacity: 1,
            fontFamily: "Swis721 BT"
          }}
        />
        <path
          id="text5691"
          d="M 328.33594,203.63086 L 322.38281,186.36914 L 326.32031,186.36914 L 329.98828,199.2832 L 333.72656,186.36914 L 337.61719,186.36914 L 331.73438,203.63086 L 328.33594,203.63086"
          style={{
            fontSize: 24,
            fontStyle: "normal",
            fontVariant: "normal",
            fontWeight: "bold",
            fontStretch: "normal",
            textAlign: "center",
            lineHeight: "125%",
            writingMode: "lr-tb",
            textAnchor: "middle",
            fill: "#000000",
            fillOpacity: 1,
            stroke: "none",
            strokeWidth: 1,
            strokeLinecap: "butt",
            strokeLinejoin: "miter",
            strokeOpacity: 1,
            fontFamily: "Swis721 BT"
          }}
        />
        <path
          id="text5695"
          d="M 386.32031,200.51367 L 390.52734,200.51367 C 391.51952,200.51367 392.24218,200.33399 392.69531,199.97461 C 393.14843,199.61524 393.37499,199.04883 393.375,198.27539 C 393.37499,197.47071 393.15233,196.89258 392.70703,196.54102 C 392.26171,196.18165 391.52733,196.00196 390.50391,196.00195 L 386.32031,196.00195 L 386.32031,200.51367 M 386.32031,193.04883 L 390.375,193.04883 C 391.24999,193.04884 391.89061,192.9004 392.29688,192.60352 C 392.70311,192.29884 392.90624,191.82228 392.90625,191.17383 C 392.90624,190.54103 392.70702,190.084 392.30859,189.80273 C 391.91796,189.51369 391.26561,189.36915 390.35156,189.36914 L 386.32031,189.36914 L 386.32031,193.04883 M 382.92188,203.63086 L 382.92188,186.36914 L 391.05469,186.36914 C 392.8203,186.36916 394.16405,186.74416 395.08594,187.49414 C 396.01561,188.23634 396.48045,189.31837 396.48047,190.74023 C 396.48045,191.61525 396.30858,192.34571 395.96484,192.93164 C 395.62108,193.51759 395.10545,193.97071 394.41797,194.29102 C 395.30858,194.6504 395.97264,195.16993 396.41016,195.84961 C 396.85545,196.52149 397.07811,197.36133 397.07813,198.36914 C 397.07811,200.04883 396.53123,201.34571 395.4375,202.25977 C 394.34374,203.17383 392.79296,203.63086 390.78516,203.63086 L 382.92188,203.63086"
          style={{
            fontSize: 24,
            fontStyle: "normal",
            fontVariant: "normal",
            fontWeight: "bold",
            fontStretch: "normal",
            textAlign: "center",
            lineHeight: "125%",
            writingMode: "lr-tb",
            textAnchor: "middle",
            fill: "#000000",
            fillOpacity: 1,
            stroke: "none",
            strokeWidth: 1,
            strokeLinecap: "butt",
            strokeLinejoin: "miter",
            strokeOpacity: 1,
            fontFamily: "Swis721 BT"
          }}
        />
        <path
          id="text5699"
          d="M 442.88672,203.63086 L 442.88672,186.36914 L 446.60156,186.36914 L 453.60938,198.22852 L 453.60938,186.36914 L 457.11328,186.36914 L 457.11328,203.63086 L 453.44531,203.63086 L 446.39063,191.77148 L 446.39063,203.63086 L 442.88672,203.63086"
          style={{
            fontSize: 24,
            fontStyle: "normal",
            fontVariant: "normal",
            fontWeight: "bold",
            fontStretch: "normal",
            textAlign: "center",
            lineHeight: "125%",
            writingMode: "lr-tb",
            textAnchor: "middle",
            fill: "#000000",
            fillOpacity: 1,
            stroke: "none",
            strokeWidth: 1,
            strokeLinecap: "butt",
            strokeLinejoin: "miter",
            strokeOpacity: 1,
            fontFamily: "Swis721 BT"
          }}
        />
        <path
          id="text5703"
          d="M 501.32813,203.63086 L 501.32813,186.36914 L 506.57813,186.36914 L 510.01172,199.50586 L 513.39844,186.36914 L 518.67188,186.36914 L 518.67188,203.63086 L 515.34375,203.63086 L 515.34375,189.70898 L 511.83984,203.63086 L 508.20703,203.63086 L 504.65625,189.70898 L 504.65625,203.63086 L 501.32813,203.63086"
          style={{
            fontSize: 24,
            fontStyle: "normal",
            fontVariant: "normal",
            fontWeight: "bold",
            fontStretch: "normal",
            textAlign: "center",
            lineHeight: "125%",
            writingMode: "lr-tb",
            textAnchor: "middle",
            fill: "#000000",
            fillOpacity: 1,
            stroke: "none",
            strokeWidth: 1,
            strokeLinecap: "butt",
            strokeLinejoin: "miter",
            strokeOpacity: 1,
            fontFamily: "Swis721 BT"
          }}
        />
        <g transform="translate(0,15.5)" id="g3476">
          <path
            id="path5745"
            d="M 861,112.5 L 861,97.5 L 846,105 L 861,112.5 z"
            style={{
              fill: "#000000",
              fillOpacity: 1,
              fillRule: "evenodd",
              stroke: "none",
              strokeWidth: 1,
              strokeLinecap: "butt",
              strokeLinejoin: "miter",
              strokeOpacity: 1
            }}
          />
          <path
            style={{
              fill: "none",
              fillOpacity: "0.75",
              fillRule: "evenodd",
              stroke: "#000000",
              strokeWidth: 3,
              strokeLinecap: "butt",
              strokeLinejoin: "miter",
              strokeMiterlimit: 4,
              strokeDasharray: "none",
              strokeOpacity: 1
            }}
            d="M 883.5,90 L 883.5,105 L 853.5,105"
            id="path5747"
          />
        </g>
        <path
          style={{
            fill: "none",
            fillOpacity: 1,
            fillRule: "evenodd",
            stroke: "#000000",
            strokeWidth: 2,
            strokeLinecap: "butt",
            strokeLinejoin: "miter",
            strokeMiterlimit: 4,
            strokeDasharray: "none",
            strokeOpacity: 1
          }}
          d="M 27.25,196.5 L 16,211.5 L 23.5,211.5 L 23.5,219 L 31,219 L 31,211.5 L 38.5,211.5 L 27.25,196.5 z"
          id="path5757"
        />
        <path
          id="path5801"
          d="M 754.75,196.5 L 743.5,211.5 L 751,211.5 L 751,219 L 758.5,219 L 758.5,211.5 L 766,211.5 L 754.75,196.5 z"
          style={{
            fill: "none",
            fillOpacity: 1,
            fillRule: "evenodd",
            stroke: "#000000",
            strokeWidth: 2,
            strokeLinecap: "butt",
            strokeLinejoin: "miter",
            strokeMiterlimit: 4,
            strokeDasharray: "none",
            strokeOpacity: 1
          }}
        />
        <path
          d="M 673.44727,18.61523 C 673.44726,18.5293 673.44335,18.41602 673.43555,18.27539 C 673.42773,18.12696 673.42382,18.01758 673.42383,17.94727 C 673.42382,17.25977 673.49804,16.68946 673.64648,16.23633 C 673.79492,15.7754 674.0332,15.34571 674.36133,14.94727 C 674.61132,14.6504 674.98242,14.31056 675.47461,13.92773 C 675.9746,13.54493 676.29882,13.26759 676.44727,13.0957 C 676.75976,12.74415 676.9746,12.42775 677.0918,12.14648 C 677.20898,11.86525 677.26757,11.55665 677.26758,11.2207 C 677.26757,10.47853 677.06054,9.9004 676.64648,9.48633 C 676.23241,9.07228 675.65429,8.86525 674.91211,8.86523 C 674.16992,8.86525 673.58398,9.11525 673.1543,9.61523 C 672.73242,10.10744 672.50195,10.80275 672.46289,11.70117 L 669.1582,11.70117 L 669.1582,11.33789 C 669.1582,9.68947 669.67773,8.37697 670.7168,7.40039 C 671.76367,6.41603 673.16992,5.92385 674.93555,5.92383 C 676.74023,5.92385 678.17382,6.38869 679.23633,7.31836 C 680.30663,8.24025 680.84178,9.47853 680.8418,11.0332 C 680.84178,11.58009 680.77928,12.07228 680.6543,12.50977 C 680.5371,12.93946 680.3535,13.33399 680.10352,13.69336 C 679.78319,14.14649 679.2871,14.63868 678.61523,15.16992 C 677.95116,15.69337 677.54882,16.01759 677.4082,16.14258 C 677.11132,16.43165 676.89648,16.73634 676.76367,17.05664 C 676.63866,17.37696 676.57616,17.75977 676.57617,18.20508 C 676.57616,18.24415 676.58007,18.31055 676.58789,18.4043 C 676.59569,18.49805 676.5996,18.56836 676.59961,18.61523 L 673.44727,18.61523 M 673.2832,23.63086 L 673.2832,20.19727 L 676.74023,20.19727 L 676.74023,23.63086 L 673.2832,23.63086"
          style={{
            fontSize: 24,
            fontStyle: "normal",
            fontVariant: "normal",
            fontWeight: "bold",
            fontStretch: "normal",
            textAlign: "center",
            lineHeight: "125%",
            writingMode: "lr-tb",
            textAnchor: "middle",
            fill: "black",
            fillOpacity: 1,
            stroke: "none",
            strokeWidth: 1,
            strokeLinecap: "butt",
            strokeLinejoin: "miter",
            strokeOpacity: 1,
            fontFamily: "Swis721 BT"
          }}
          id="path3083"
        />
        <path
          id="text5819"
          d="M 431.31445,25.85742 L 437.12695,5.92383 L 438.73242,5.92383 L 432.89648,25.85742 L 431.31445,25.85742"
          style={{
            fontSize: 24,
            fontStyle: "normal",
            fontVariant: "normal",
            fontWeight: "bold",
            fontStretch: "normal",
            textAlign: "center",
            lineHeight: "125%",
            writingMode: "lr-tb",
            textAnchor: "middle",
            fill: "black",
            fillOpacity: 1,
            stroke: "none",
            strokeWidth: 1,
            strokeLinecap: "butt",
            strokeLinejoin: "miter",
            strokeOpacity: 1,
            fontFamily: "Swis721 BT"
          }}
        />
        <path
          d="M 372.15234,48.298828 C 372.15234,49.25977 372.39062,50.021488 372.86719,50.583984 C 373.35156,51.146487 374.00781,51.427737 374.83594,51.427734 C 375.60937,51.427737 376.21484,51.154299 376.65234,50.607422 C 377.08983,50.06055 377.30858,49.298832 377.30859,48.322266 C 377.30858,47.423834 377.08202,46.724616 376.62891,46.224609 C 376.17577,45.724617 375.53905,45.474618 374.71875,45.474609 C 373.91406,45.474618 373.28515,45.724617 372.83203,46.224609 C 372.3789,46.724616 372.15234,47.416022 372.15234,48.298828M 372.10547,43.916016 C 372.48828,43.525401 372.94921,43.232432 373.48828,43.037109 C 374.02734,42.833995 374.6289,42.732433 375.29297,42.732422 C 376.93358,42.732433 378.24608,43.232432 379.23047,44.232422 C 380.22264,45.23243 380.71874,46.56446 380.71875,48.228516 C 380.71874,49.994144 380.17968,51.419924 379.10156,52.505859 C 378.02343,53.591797 376.60155,54.134765 374.83594,54.134766 C 372.79687,54.134765 371.24609,53.431641 370.18359,52.025391 C 369.1289,50.619144 368.60156,48.560552 368.60156,45.849609 C 368.60156,42.935558 369.16797,40.708997 370.30078,39.169922 C 371.43359,37.623063 373.0664,36.849626 375.19922,36.849609 C 376.68358,36.849626 377.8789,37.236345 378.78516,38.009766 C 379.69921,38.783218 380.19921,39.830092 380.28516,41.150391 L 376.88672,41.150391 C 376.80858,40.611341 376.59765,40.205092 376.25391,39.931641 C 375.91015,39.658217 375.42968,39.521498 374.8125,39.521484 C 373.96874,39.521498 373.32031,39.888686 372.86719,40.623047 C 372.41406,41.349622 372.16015,42.447277 372.10547,43.916016"
          style={{
            fontSize: 24,
            fontStyle: "normal",
            fontVariant: "normal",
            fontWeight: "bold",
            fontStretch: "normal",
            textAlign: "center",
            lineHeight: "125%",
            writingMode: "lr-tb",
            textAnchor: "middle",
            fill: "black",
            fillOpacity: 1,
            stroke: "none",
            strokeWidth: 1,
            strokeLinecap: "butt",
            strokeLinejoin: "miter",
            strokeOpacity: 1,
            fontFamily: "Swis721 BT"
          }}
          id="path3060"
        />
        <path
          id="text6955"
          style={{
            fontSize: 24,
            fontStyle: "normal",
            fontVariant: "normal",
            fontWeight: "bold",
            fontStretch: "normal",
            textAlign: "center",
            lineHeight: "125%",
            writingMode: "lr-tb",
            textAnchor: "middle",
            fill: "#000000",
            fillOpacity: 1,
            stroke: "none",
            strokeWidth: 1,
            strokeLinecap: "butt",
            strokeLinejoin: "miter",
            strokeOpacity: 1,
            fontFamily: "Matrix Unicode"
          }}
        />
        <path
          id="rect10188"
          d="M 765,120 L 825,120 L 825,180 L 765,180 L 765,120 z "
          style={{
            fill: "#ffffff",
            fillOpacity: 1,
            fillRule: "evenodd",
            stroke: "#000000",
            strokeWidth: 1,
            strokeLinecap: "butt",
            strokeLinejoin: "miter",
            strokeMiterlimit: 4,
            strokeDashoffset: 0,
            strokeOpacity: 1
          }}
        />
        <path
          d="M 779.08551,163.69336 L 778.05426,166.55273 L 780.99567,166.55273 L 782.00348,163.69336 L 779.08551,163.69336 M 779.08551,156.47461 L 781.67535,156.47461 L 779.96442,161.33789 L 782.80035,161.33789 L 784.53473,156.47461 L 787.12457,156.47461 L 785.3902,161.33789 L 788.7066,161.33789 L 787.83942,163.69336 L 784.55817,163.69336 L 783.57379,166.5293 L 786.97223,166.5293 L 786.1402,168.87305 L 782.73004,168.87305 L 780.99567,173.74805 L 778.40582,173.74805 L 780.1402,168.87305 L 777.28082,168.87305 L 775.53473,173.74805 L 772.9566,173.74805 L 774.66754,168.87305 L 771.30426,168.87305 L 772.19489,166.5293 L 775.49957,166.5293 L 776.50739,163.69336 L 773.00348,163.69336 L 773.87067,161.33789 L 777.35114,161.33789 L 779.08551,156.47461"
          style={{
            fontSize: 24,
            fontStyle: "normal",
            fontVariant: "normal",
            fontWeight: "bold",
            fontStretch: "normal",
            textAlign: "center",
            lineHeight: "125%",
            writingMode: "lr-tb",
            textAnchor: "middle",
            fill: "black",
            fillOpacity: 1,
            stroke: "none",
            strokeWidth: 1,
            strokeLinecap: "butt",
            strokeLinejoin: "miter",
            strokeOpacity: 1,
            fontFamily: "Swis721 BT"
          }}
          id="path2915"
        />
        <path
          id="rect10196"
          d="M 75,180 L 135,180 L 135,240 L 75,240 L 75,180 z "
          style={{
            fill: "#ffffff",
            fillOpacity: 1,
            fillRule: "evenodd",
            stroke: "#000000",
            strokeWidth: 1,
            strokeLinecap: "butt",
            strokeLinejoin: "miter",
            strokeMiterlimit: 4,
            strokeDashoffset: 0,
            strokeOpacity: 1
          }}
        />
        <path
          d="M 196.40625,17.91797 C 196.71874,17.73829 196.95312,17.53907 197.10938,17.32031 C 197.26562,17.10157 197.34374,16.86719 197.34375,16.61719 C 197.34374,16.31251 197.2539,16.0547 197.07422,15.84375 C 196.89452,15.62501 196.52343,15.3711 195.96094,15.08203 L 192.85547,13.47656 C 192.55078,13.65626 192.3164,13.85938 192.15234,14.08594 C 191.99609,14.31251 191.91797,14.5547 191.91797,14.8125 C 191.91797,15.1172 192.03125,15.38673 192.25781,15.62109 C 192.49218,15.84766 193.0039,16.16407 193.79297,16.57031 L 196.40625,17.91797M 190.03125,21.75 L 192.92578,21.75 C 192.98828,22.35938 193.16796,22.8125 193.46484,23.10938 C 193.76953,23.40625 194.19921,23.55469 194.75391,23.55469 C 195.26952,23.55469 195.67968,23.43359 195.98438,23.19141 C 196.28905,22.94141 196.4414,22.60547 196.44141,22.18359 C 196.4414,21.83985 196.32812,21.54297 196.10156,21.29297 C 195.87499,21.03516 195.42577,20.74219 194.75391,20.41406 L 191.95313,18.99609 C 191.0625,18.55079 190.39844,18.03907 189.96094,17.46094 C 189.52344,16.88282 189.30469,16.23438 189.30469,15.51563 C 189.30469,14.82032 189.47266,14.21095 189.80859,13.6875 C 190.15234,13.15626 190.65625,12.71485 191.32031,12.36328 C 190.92969,12.01173 190.64062,11.62892 190.45313,11.21484 C 190.26562,10.79298 190.17187,10.32814 190.17188,9.82031 C 190.17187,8.64845 190.57422,7.70705 191.37891,6.99609 C 192.18359,6.27736 193.2539,5.91799 194.58984,5.91797 C 195.96484,5.91799 197.04296,6.26955 197.82422,6.97266 C 198.60546,7.6758 199.0078,8.64845 199.03125,9.89063 L 196.26563,9.89063 C 196.24999,9.3672 196.09374,8.96876 195.79688,8.69531 C 195.50781,8.42189 195.08984,8.28517 194.54297,8.28516 C 194.05859,8.28517 193.68359,8.39064 193.41797,8.60156 C 193.16015,8.81251 193.03125,9.10939 193.03125,9.49219 C 193.03125,9.8047 193.18359,10.09767 193.48828,10.37109 C 193.80078,10.63673 194.35937,10.95704 195.16406,11.33203 L 197.13281,12.24609 C 198.1328,12.72267 198.87108,13.25392 199.34766,13.83984 C 199.82421,14.41798 200.06249,15.08595 200.0625,15.84375 C 200.06249,16.55469 199.8828,17.17579 199.52344,17.70703 C 199.17186,18.23047 198.66405,18.63672 198,18.92578 C 198.45312,19.32422 198.79296,19.76563 199.01953,20.25 C 199.24608,20.73438 199.35936,21.26563 199.35938,21.84375 C 199.35936,23.04688 198.92968,24.03906 198.07031,24.82031 C 197.21093,25.60937 196.10546,26.0039 194.75391,26.00391 C 193.26953,26.0039 192.1289,25.64453 191.33203,24.92578 C 190.53515,24.20703 190.10156,23.14844 190.03125,21.75"
          style={{
            fontSize: 24,
            fontStyle: "normal",
            fontVariant: "normal",
            fontWeight: "bold",
            fontStretch: "normal",
            textAlign: "center",
            lineHeight: "125%",
            writingMode: "lr-tb",
            textAnchor: "middle",
            fill: "black",
            fillOpacity: 1,
            stroke: "none",
            strokeWidth: 1,
            strokeLinecap: "butt",
            strokeLinejoin: "miter",
            strokeOpacity: 1,
            fontFamily: "Swis721 BT"
          }}
          id="path3131"
        />
        <path
          id="text6073"
          d="M 668.97656,53.625 L 668.97656,40.59375 C 668.97656,39.29689 669.48047,38.25002 670.48828,37.45313 C 671.49609,36.64845 672.83984,36.24611 674.51953,36.24609 C 676.23046,36.24611 677.5703,36.63674 678.53906,37.41797 C 679.5078,38.19923 679.99217,39.27345 679.99219,40.64063 C 679.99217,41.48439 679.84764,42.17579 679.55859,42.71484 C 679.27733,43.25392 678.83983,43.66798 678.24609,43.95703 C 679.16796,44.32423 679.85936,44.86329 680.32031,45.57422 C 680.78905,46.28516 681.02342,47.16016 681.02344,48.19922 C 681.02342,49.94922 680.51952,51.36328 679.51172,52.44141 C 678.5039,53.51953 677.18358,54.05859 675.55078,54.05859 C 675.32421,54.05859 675.0703,54.04687 674.78906,54.02344 C 674.51562,54 674.21874,53.96484 673.89844,53.91797 L 673.89844,51.17578 C 673.99999,51.19141 674.10156,51.20313 674.20313,51.21094 C 674.31249,51.21875 674.47265,51.22266 674.68359,51.22266 C 675.60546,51.22266 676.3164,50.96875 676.81641,50.46094 C 677.3164,49.94532 677.5664,49.21485 677.56641,48.26953 C 677.5664,47.35548 677.29296,46.66016 676.74609,46.18359 C 676.20702,45.70704 675.41796,45.46876 674.37891,45.46875 L 674.0625,45.46875 L 674.07422,43.06641 C 674.12109,43.07423 674.17187,43.08204 674.22656,43.08984 C 674.28124,43.08985 674.36327,43.08985 674.47266,43.08984 C 675.16796,43.08985 675.6953,42.91798 676.05469,42.57422 C 676.42187,42.22267 676.60546,41.71486 676.60547,41.05078 C 676.60546,40.38673 676.41405,39.88283 676.03125,39.53906 C 675.65624,39.18751 675.10546,39.01173 674.37891,39.01172 C 673.70703,39.01173 673.19531,39.20705 672.84375,39.59766 C 672.49218,39.98048 672.3164,40.54298 672.31641,41.28516 L 672.31641,53.625 L 668.97656,53.625"
          style={{
            fontSize: 24,
            fontStyle: "normal",
            fontVariant: "normal",
            fontWeight: "bold",
            fontStretch: "normal",
            textAlign: "center",
            lineHeight: "125%",
            writingMode: "lr-tb",
            textAnchor: "middle",
            fill: "black",
            fillOpacity: 1,
            stroke: "none",
            strokeWidth: 1,
            strokeLinecap: "butt",
            strokeLinejoin: "miter",
            strokeOpacity: 1,
            fontFamily: "Swis721 BT"
          }}
        />
        <path
          d="M 628.22461,194.6543 L 628.22461,191.10352 L 631.77539,191.10352 L 631.77539,194.6543 L 628.22461,194.6543M 628.22461,203.63086 L 628.22461,200.10352 L 631.77539,200.10352 L 631.77539,203.63086 L 628.22461,203.63086"
          style={{
            fontSize: 24,
            fontStyle: "normal",
            fontVariant: "normal",
            fontWeight: "bold",
            fontStretch: "normal",
            textAlign: "center",
            lineHeight: "125%",
            writingMode: "lr-tb",
            textAnchor: "middle",
            fill: "black",
            fillOpacity: 1,
            stroke: "none",
            strokeWidth: 1,
            strokeLinecap: "butt",
            strokeLinejoin: "miter",
            strokeOpacity: 1,
            fontFamily: "Swis721 BT"
          }}
          id="path2750"
        />
        <path
          d="M 568.24805,194.6543 L 568.24805,191.10352 L 571.77539,191.10352 L 571.77539,194.6543 L 568.24805,194.6543M 568.24805,207.68555 L 568.24805,206.31445 C 568.90429,206.12695 569.38867,205.83789 569.70117,205.44727 C 570.01367,205.05664 570.16992,204.54883 570.16992,203.92383 L 570.16992,203.63086 L 568.22461,203.63086 L 568.22461,200.10352 L 571.77539,200.10352 L 571.77539,203.49023 C 571.77539,204.66211 571.47851,205.59961 570.88477,206.30273 C 570.29101,207.01367 569.41211,207.47461 568.24805,207.68555"
          style={{
            fontSize: 24,
            fontStyle: "normal",
            fontVariant: "normal",
            fontWeight: "bold",
            fontStretch: "normal",
            textAlign: "center",
            lineHeight: "125%",
            writingMode: "lr-tb",
            textAnchor: "middle",
            fill: "black",
            fillOpacity: 1,
            stroke: "none",
            strokeWidth: 1,
            strokeLinecap: "butt",
            strokeLinejoin: "miter",
            strokeOpacity: 1,
            fontFamily: "Swis721 BT"
          }}
          id="path2746"
        />
        <path
          id="text5803"
          d="M 568.21875,237.68555 L 568.21875,236.31445 C 568.875,236.12695 569.35937,235.83789 569.67188,235.44727 C 569.98437,235.05664 570.14062,234.54883 570.14063,233.92383 L 570.14063,233.63086 L 568.21875,233.63086 L 568.21875,230.10352 L 571.76953,230.10352 L 571.76953,233.49023 C 571.76953,234.6543 571.46875,235.59179 570.86719,236.30273 C 570.27343,237.01367 569.39062,237.47461 568.21875,237.68555"
          style={{
            fontSize: 24,
            fontStyle: "normal",
            fontVariant: "normal",
            fontWeight: "bold",
            fontStretch: "normal",
            textAlign: "center",
            lineHeight: "125%",
            writingMode: "lr-tb",
            textAnchor: "middle",
            fill: "black",
            fillOpacity: 1,
            stroke: "none",
            strokeWidth: 1,
            strokeLinecap: "butt",
            strokeLinejoin: "miter",
            strokeOpacity: 1,
            fontFamily: "Swis721 BT"
          }}
        />
        <path
          id="text5813"
          d="M 628.21875,233.63086 L 628.21875,230.10352 L 631.74609,230.10352 L 631.74609,233.63086 L 628.21875,233.63086"
          style={{
            fontSize: 24,
            fontStyle: "normal",
            fontVariant: "normal",
            fontWeight: "bold",
            fontStretch: "normal",
            textAlign: "center",
            lineHeight: "125%",
            writingMode: "lr-tb",
            textAnchor: "middle",
            fill: "#000000",
            fillOpacity: 1,
            stroke: "none",
            strokeWidth: 1,
            strokeLinecap: "butt",
            strokeLinejoin: "miter",
            strokeOpacity: 1,
            fontFamily: "Swis721 BT"
          }}
        />
        <path
          id="path2737"
          d="M 96.90234,219.63867 L 96.90234,222.20508 L 86.4375,226.48242 L 96.90234,230.74805 L 96.90234,233.31445 L 83.09766,227.63086 L 83.09766,225.29883 L 96.90234,219.63867"
          style={{
            fontSize: 24,
            fontStyle: "normal",
            fontVariant: "normal",
            fontWeight: "bold",
            fontStretch: "normal",
            textAlign: "center",
            lineHeight: "125%",
            writingMode: "lr-tb",
            textAnchor: "middle",
            fill: "black",
            fillOpacity: 1,
            stroke: "none",
            strokeWidth: 1,
            strokeLinecap: "butt",
            strokeLinejoin: "miter",
            strokeOpacity: 1,
            fontFamily: "Swis721 BT"
          }}
        />
        <path
          id="path2742"
          d="M 83.09766,189.63867 L 96.90234,195.29883 L 96.90234,197.63086 L 83.09766,203.31445 L 83.09766,200.74805 L 93.58594,196.48242 L 83.09766,192.20508 L 83.09766,189.63867"
          style={{
            fontSize: 24,
            fontStyle: "normal",
            fontVariant: "normal",
            fontWeight: "bold",
            fontStretch: "normal",
            textAlign: "center",
            lineHeight: "125%",
            writingMode: "lr-tb",
            textAnchor: "middle",
            fill: "black",
            fillOpacity: 1,
            stroke: "none",
            strokeWidth: 1,
            strokeLinecap: "butt",
            strokeLinejoin: "miter",
            strokeOpacity: 1,
            fontFamily: "Swis721 BT"
          }}
        />
        <path
          id="text6003"
          d="M 719.9707,129.82617 L 717.58008,137.17383 L 722.37305,137.17383 L 719.9707,129.82617 M 717.9082,126.36914 L 722.00977,126.36914 L 728.23242,143.63086 L 724.50586,143.63086 L 723.33398,140.08008 L 716.64258,140.08008 L 715.50586,143.63086 L 711.76758,143.63086 L 717.9082,126.36914 M 720.70898,124.16602 L 720.70898,121.2832 L 723.35742,121.2832 L 723.35742,124.16602 L 720.70898,124.16602 M 716.63086,124.16602 L 716.63086,121.2832 L 719.2793,121.2832 L 719.2793,124.16602 L 716.63086,124.16602"
          style={{
            fontSize: 24,
            fontStyle: "normal",
            fontVariant: "normal",
            fontWeight: "bold",
            fontStretch: "normal",
            textAlign: "center",
            lineHeight: "125%",
            writingMode: "lr-tb",
            textAnchor: "middle",
            fill: "black",
            fillOpacity: 1,
            stroke: "none",
            strokeWidth: 1,
            strokeLinecap: "butt",
            strokeLinejoin: "miter",
            strokeOpacity: 1,
            fontFamily: "Swis721 BT"
          }}
        />
        <path
          id="text6023"
          d="M 698.08594,66.322266 L 701.67188,66.322266 L 701.67188,77.150391 C 701.67187,78.486333 701.93749,79.462895 702.46875,80.080078 C 702.99999,80.689456 703.84374,80.994143 705,80.994141 C 706.17187,80.994143 707.02343,80.689456 707.55469,80.080078 C 708.09374,79.470707 708.36327,78.494146 708.36328,77.150391 L 708.36328,66.322266 L 711.91406,66.322266 L 711.91406,77.537109 C 711.91405,79.654301 711.3203,81.279299 710.13281,82.412109 C 708.95311,83.544922 707.24999,84.111328 705.02344,84.111328 C 702.78124,84.111328 701.0625,83.548828 699.86719,82.423828 C 698.67969,81.291018 698.08594,79.662113 698.08594,77.537109 L 698.08594,66.322266 M 705.73828,64.166016 L 705.73828,61.283203 L 708.38672,61.283203 L 708.38672,64.166016 L 705.73828,64.166016 M 701.66016,64.166016 L 701.66016,61.283203 L 704.30859,61.283203 L 704.30859,64.166016 L 701.66016,64.166016"
          style={{
            fontSize: 24,
            fontStyle: "normal",
            fontVariant: "normal",
            fontWeight: "bold",
            fontStretch: "normal",
            textAlign: "center",
            lineHeight: "125%",
            writingMode: "lr-tb",
            textAnchor: "middle",
            fill: "black",
            fillOpacity: 1,
            stroke: "none",
            strokeWidth: 1,
            strokeLinecap: "butt",
            strokeLinejoin: "miter",
            strokeOpacity: 1,
            fontFamily: "Swis721 BT"
          }}
        />
        <path
          id="text6041"
          d="M 655.18359,135.01758 C 655.18359,136.91602 655.60546,138.39258 656.44922,139.44727 C 657.29296,140.49414 658.47265,141.01758 659.98828,141.01758 C 661.51952,141.01758 662.71093,140.49414 663.5625,139.44727 C 664.41405,138.39258 664.83983,136.91602 664.83984,135.01758 C 664.83983,133.11915 664.41405,131.6465 663.5625,130.59961 C 662.71093,129.54494 661.51952,129.01759 659.98828,129.01758 C 658.47265,129.01759 657.29296,129.54103 656.44922,130.58789 C 655.60546,131.63478 655.18359,133.11134 655.18359,135.01758 M 651.5625,135.01758 C 651.5625,132.22853 652.32031,130.01759 653.83594,128.38477 C 655.35937,126.74416 657.41015,125.92385 659.98828,125.92383 C 662.56639,125.92385 664.61717,126.74416 666.14063,128.38477 C 667.67186,130.0254 668.43748,132.23634 668.4375,135.01758 C 668.43748,137.79883 667.67186,140.00977 666.14063,141.65039 C 664.61717,143.29102 662.56639,144.11133 659.98828,144.11133 C 657.41015,144.11133 655.35937,143.29102 653.83594,141.65039 C 652.32031,140.00977 651.5625,137.79883 651.5625,135.01758 M 660.72656,124.16602 L 660.72656,121.2832 L 663.375,121.2832 L 663.375,124.16602 L 660.72656,124.16602 M 656.64844,124.16602 L 656.64844,121.2832 L 659.29688,121.2832 L 659.29688,124.16602 L 656.64844,124.16602"
          style={{
            fontSize: 24,
            fontStyle: "normal",
            fontVariant: "normal",
            fontWeight: "bold",
            fontStretch: "normal",
            textAlign: "center",
            lineHeight: "125%",
            writingMode: "lr-tb",
            textAnchor: "middle",
            fill: "black",
            fillOpacity: 1,
            stroke: "none",
            strokeWidth: 1,
            strokeLinecap: "butt",
            strokeLinejoin: "miter",
            strokeOpacity: 1,
            fontFamily: "Swis721 BT"
          }}
        />
        <path
          id="path2919"
          d="M 778.88672,126.7793 L 781.13672,126.7793 L 781.13672,133.33008 L 778.88672,133.33008 L 778.88672,126.7793"
          style={{
            fontSize: 24,
            fontStyle: "normal",
            fontVariant: "normal",
            fontWeight: "bold",
            fontStretch: "normal",
            textAlign: "center",
            lineHeight: "125%",
            writingMode: "lr-tb",
            textAnchor: "middle",
            fill: "black",
            fillOpacity: 1,
            stroke: "none",
            strokeWidth: 1,
            strokeLinecap: "butt",
            strokeLinejoin: "miter",
            strokeOpacity: 1,
            fontFamily: "Swis721 BT"
          }}
        />
        <path
          id="text6099"
          d="M 738.39844,35.0332 L 734.73047,39.36914 L 733.06641,39.36914 L 735.375,35.0332 L 738.39844,35.0332"
          style={{
            fontSize: 24,
            fontStyle: "normal",
            fontVariant: "normal",
            fontWeight: "bold",
            fontStretch: "normal",
            textAlign: "center",
            lineHeight: "125%",
            writingMode: "lr-tb",
            textAnchor: "middle",
            fill: "red",
            fillOpacity: 1,
            stroke: "none",
            strokeWidth: 1,
            strokeLinecap: "butt",
            strokeLinejoin: "miter",
            strokeOpacity: 1,
            fontFamily: "Swis721 BT"
          }}
        />
        <path
          id="text5103"
          d="M 731.98828,5.033203 L 735.01172,5.033203 L 737.32031,9.369141 L 735.65625,9.369141 L 731.98828,5.033203"
          style={{
            fontSize: 24,
            fontStyle: "normal",
            fontVariant: "normal",
            fontWeight: "bold",
            fontStretch: "normal",
            textAlign: "center",
            lineHeight: "125%",
            writingMode: "lr-tb",
            textAnchor: "middle",
            fill: "red",
            fillOpacity: 1,
            stroke: "none",
            strokeWidth: 1,
            strokeLinecap: "butt",
            strokeLinejoin: "miter",
            strokeOpacity: 1,
            fontFamily: "Swis721 BT"
          }}
        />
        <path
          d="M 15,7.98633 C 14.42968,7.98634 13.9414,8.18556 13.53516,8.58398 C 13.13672,8.98244 12.9375,9.4629 12.9375,10.02539 C 12.9375,10.60353 13.13672,11.09181 13.53516,11.49023 C 13.93359,11.88868 14.42187,12.0879 15,12.08789 C 15.5625,12.0879 16.04296,11.88478 16.44141,11.47852 C 16.83984,11.07228 17.03906,10.5879 17.03906,10.02539 C 17.03906,9.4629 16.83984,8.98244 16.44141,8.58398 C 16.04296,8.18556 15.5625,7.98634 15,7.98633 M 15,6.47461 C 15.98437,6.47463 16.82031,6.82619 17.50781,7.5293 C 18.20312,8.22462 18.55077,9.06447 18.55078,10.04883 C 18.55077,11.0254 18.20312,11.86134 17.50781,12.55664 C 16.81249,13.25196 15.96875,13.59962 14.97656,13.59961 C 13.99218,13.59962 13.15625,13.25587 12.46875,12.56836 C 11.78906,11.88087 11.44922,11.04103 11.44922,10.04883 C 11.44922,9.05666 11.79297,8.21291 12.48047,7.51758 C 13.17578,6.82228 14.01562,6.47463 15,6.47461"
          style={{
            fontSize: 24,
            fontStyle: "normal",
            fontVariant: "normal",
            fontWeight: "bold",
            fontStretch: "normal",
            textAlign: "center",
            lineHeight: "125%",
            writingMode: "lr-tb",
            textAnchor: "middle",
            fill: "black",
            fillOpacity: 1,
            stroke: "none",
            strokeWidth: 1,
            strokeLinecap: "butt",
            strokeLinejoin: "miter",
            strokeOpacity: 1,
            fontFamily: "Swis721 BT"
          }}
          id="path3403"
        />
        <path
          id="text6091"
          d="M 13.13672,36.521484 L 16.08984,36.521484 L 21.72656,43.095703 L 18.97266,43.095703 L 14.625,38.748047 L 10.25391,43.095703 L 7.5,43.095703 L 13.13672,36.521484"
          style={{
            fontSize: 24,
            fontStyle: "normal",
            fontVariant: "normal",
            fontWeight: "bold",
            fontStretch: "normal",
            textAlign: "center",
            lineHeight: "125%",
            writingMode: "lr-tb",
            textAnchor: "middle",
            fill: "red",
            fillOpacity: 1,
            stroke: "none",
            strokeWidth: 1,
            strokeLinecap: "butt",
            strokeLinejoin: "miter",
            strokeOpacity: 1,
            fontFamily: "Swis721 BT"
          }}
        />
        <path
          style={{
            fill: "none",
            fillOpacity: 1,
            fillRule: "evenodd",
            stroke: "#000000",
            strokeWidth: 2,
            strokeLinecap: "butt",
            strokeLinejoin: "miter",
            strokeMiterlimit: 4,
            strokeDasharray: "none",
            strokeOpacity: 1
          }}
          d="M 27.25,165.75 L 38.5,150.75 L 31,150.75 L 31,143.25 L 23.5,143.25 L 23.5,150.75 L 16,150.75 L 27.25,165.75 z"
          id="path2585"
        />
        <text
          xmlSpace="preserve"
          style={{
            fontStyle: "normal",
            fontVariant: "normal",
            fontWeight: "bold",
            fontStretch: "normal",
            lineHeight: "0%",
            fontFamily: '"Swis721 BT"',
            InkscapeFontSpecification: '"Swis721 BT Bold"',
            textAlign: "center",
            writingMode: "lr-tb",
            textAnchor: "middle",
            fill: "#000000",
            fillOpacity: 1,
            stroke: "none",
            strokeWidth: 1,
            strokeLinecap: "butt",
            strokeLinejoin: "miter",
            strokeOpacity: 1
          }}
          x="30.1875"
          y="276.01126"
          id="text2601"
        >
          <tspan y="276.01126" x="30.1875" id="tspan2605">
            Strg
          </tspan>
        </text>
        <text
          xmlSpace="preserve"
          style={{
            fontStyle: "normal",
            fontVariant: "normal",
            fontWeight: "bold",
            fontStretch: "normal",
            lineHeight: "0%",
            fontFamily: '"Swis721 BT"',
            InkscapeFontSpecification: '"Swis721 BT Bold"',
            textAlign: "center",
            writingMode: "lr-tb",
            textAnchor: "middle",
            fill: "#000000",
            fillOpacity: 1,
            stroke: "none",
            strokeWidth: 1,
            strokeLinecap: "butt",
            strokeLinejoin: "miter",
            strokeOpacity: 1
          }}
          x="832.6875"
          y="276.01126"
          id="text3449"
        >
          <tspan y="276.01126" x="832.6875" id="tspan3451">
            Strg
          </tspan>
        </text>
        <text
          transform="scale(1.0000081,0.9999919)"
          xmlSpace="preserve"
          style={{
            fontStyle: "normal",
            fontVariant: "normal",
            fontWeight: "bold",
            fontStretch: "normal",
            lineHeight: "0%",
            fontFamily: '"Swis721 BT"',
            InkscapeFontSpecification: '"Swis721 BT Bold"',
            textAlign: "center",
            writingMode: "lr-tb",
            textAnchor: "middle",
            fill: "#000000",
            fillOpacity: 1,
            stroke: "none",
            strokeWidth: 1,
            strokeLinecap: "butt",
            strokeLinejoin: "miter",
            strokeOpacity: 1
          }}
          x="167.73302"
          y="275.70285"
          id="text3456"
        >
          <tspan y="275.70285" x="167.73302" id="tspan3460">
            Alt
          </tspan>
        </text>
        <text
          xmlSpace="preserve"
          style={{
            fontStyle: "normal",
            fontVariant: "normal",
            fontWeight: "bold",
            fontStretch: "normal",
            lineHeight: "0%",
            fontFamily: '"Swis721 BT"',
            InkscapeFontSpecification: '"Swis721 BT Bold"',
            textAlign: "center",
            writingMode: "lr-tb",
            textAnchor: "middle",
            fill: "#0000ff",
            fillOpacity: 1,
            stroke: "none",
            strokeWidth: 1,
            strokeLinecap: "butt",
            strokeLinejoin: "miter",
            strokeOpacity: 1
          }}
          x="629.3125"
          y="275.98969"
          id="text3462"
        >
          <tspan y="275.98969" x="629.3125" id="tspan3466">
            Alt Gr
          </tspan>
        </text>
        <text
          xmlSpace="preserve"
          style={{
            fontStyle: "normal",
            fontVariant: "normal",
            fontWeight: "bold",
            fontStretch: "normal",
            lineHeight: "0%",
            fontFamily: '"Swis721 BT"',
            InkscapeFontSpecification: '"Swis721 BT Bold"',
            textAlign: "center",
            writingMode: "lr-tb",
            textAnchor: "middle",
            fill: "#000000",
            fillOpacity: 1,
            stroke: "none",
            strokeWidth: 1,
            strokeLinecap: "butt",
            strokeLinejoin: "miter",
            strokeOpacity: 1
          }}
          x="120.01563"
          y="275.69626"
          id="text3480"
        >
          <tspan y="275.69626" x="120.01563" id="tspan3484">
            (Win)
          </tspan>
        </text>
        <text
          xmlSpace="preserve"
          style={{
            fontStyle: "normal",
            fontVariant: "normal",
            fontWeight: "bold",
            fontStretch: "normal",
            lineHeight: "0%",
            fontFamily: '"Swis721 BT"',
            InkscapeFontSpecification: '"Swis721 BT Bold"',
            textAlign: "center",
            writingMode: "lr-tb",
            textAnchor: "middle",
            fill: "#000000",
            fillOpacity: 1,
            stroke: "none",
            strokeWidth: 1,
            strokeLinecap: "butt",
            strokeLinejoin: "miter",
            strokeOpacity: 1
          }}
          x="720.01562"
          y="275.69626"
          id="text3486"
        >
          <tspan y="275.69626" x="720.01562" id="tspan3488">
            (Win)
          </tspan>
        </text>
        <text
          xmlSpace="preserve"
          style={{
            fontStyle: "normal",
            fontVariant: "normal",
            fontWeight: "bold",
            fontStretch: "normal",
            lineHeight: "0%",
            fontFamily: '"Swis721 BT"',
            InkscapeFontSpecification: '"Swis721 BT Bold"',
            textAlign: "center",
            writingMode: "lr-tb",
            textAnchor: "middle",
            fill: "#000000",
            fillOpacity: 1,
            stroke: "none",
            strokeWidth: 1,
            strokeLinecap: "butt",
            strokeLinejoin: "miter",
            strokeOpacity: 1
          }}
          x="779.90314"
          y="275.69626"
          id="text3492"
        >
          <tspan y="275.69626" x="779.90314" id="tspan3496">
            (Menu)
          </tspan>
        </text>
      </g>
    </svg>
    
    </>;
}

export default GermanKeyboardSVG;