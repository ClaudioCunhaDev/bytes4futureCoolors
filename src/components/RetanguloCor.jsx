import React from "react";
import styles from "../styles/RetanguloCor.module.css";

export const RetanguloCor = (props) => {
  function trancar() {
    props.setLocked();
  }

  return (
    <div>
      <div
        style={{
          width: "15rem",
          height: "3rem",
          borderRadius: "8px",
          border: "2px solid gray",
          display: "flex",
          gap: "3rem",
          alignItems: "center",
          justifyContent: "space-between",
          cursor: "pointer",
        }}
        onClick={() => {
          navigator.clipboard.writeText(props.texto.slice(1));
        }}
        className={styles.hover}
      >
        <div
          style={{
            width: "3rem",
            height: "3rem",
            background: props.colorBorder,
            borderRadius: "8px",
          }}
        ></div>
        <div
          style={{
            fontFamily: "Inter,sans-serif",
            fontWeight: "bold",
            display: "flex",
            gap: "2rem",
            fontSize: "20px",
          }}
        >
          {props.texto}
          <div style={{ fontSize: "20px" }} onClick={trancar}>
            {props.isLocked ? <div>🔒</div> : <div>🔓</div>}
          </div>
        </div>
      </div>
    </div>
  );
};
