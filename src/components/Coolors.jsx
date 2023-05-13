import React, { useEffect, useState } from "react";
import { Paleta } from "./Paleta";
import { RetanguloCor } from "./RetanguloCor";
import styles from "../styles/Coolors.module.css";

export const Coolors = (props) => {
  const [colors, setColors] = useState({
    color1: rgbToHex(),
    color2: rgbToHex(),
    color3: rgbToHex(),
    color4: rgbToHex(),
    color5: rgbToHex(),
  });

  const [locked, setLocked] = useState({
    color1: false,
    color2: false,
    color3: false,
    color4: false,
    color5: false,
  });

  useEffect(() => {
    function handleKeyPress(event) {
      console.log(event);
      if (event.keyCode === 32) {
        console.log("PRESSED SPACE");
        handleChange();
      }
    }
    document.addEventListener("keypress", handleKeyPress);

    return () => document.removeEventListener("keypress", handleKeyPress);
  }, [locked]);

  function trancar(campo) {
    setLocked((pl) => {
      return { ...pl, [campo]: !pl[campo] };
    });
  }

  function gerarRgb() {
    return Math.floor(Math.random() * 256);
  }

  function rgbToHex() {
    const componentToHex = (c) => {
      const hex = c.toString(16);
      return hex.length === 1 ? "0" + hex : hex;
    };

    const red = componentToHex(gerarRgb());
    const green = componentToHex(gerarRgb());
    const blue = componentToHex(gerarRgb());

    return `#${red}${green}${blue}`;
  }

  function handleChange() {
    console.log(colors.color1);
    const cores = {
      color1: locked.color1 === true ? colors.color1 : rgbToHex(),
      color2: locked.color2 === true ? colors.color2 : rgbToHex(),
      color3: locked.color3 === true ? colors.color3 : rgbToHex(),
      color4: locked.color4 === true ? colors.color4 : rgbToHex(),
      color5: locked.color5 === true ? colors.color5 : rgbToHex(),
    };

    setColors(cores);
  }

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "1rem",
        height: "100vh",
        justifyContent: "center",
      }}
    >
      <div
        style={{
          display: "flex",
          gap: "10rem",
        }}
      >
        <Paleta {...colors} />
        <div style={{ display: "flex", flexDirection: "column", gap: "2rem" }}>
          <RetanguloCor
            colorBorder={colors.color1}
            texto={colors.color1.toUpperCase()}
            setLocked={() => trancar("color1")}
            isLocked={locked.color1}
          />
          <RetanguloCor
            colorBorder={colors.color2}
            texto={colors.color2.toUpperCase()}
            setLocked={() => trancar("color2")}
            isLocked={locked.color2}
          />
          <RetanguloCor
            colorBorder={colors.color3}
            texto={colors.color3.toUpperCase()}
            setLocked={() => trancar("color3")}
            isLocked={locked.color3}
          />
          <RetanguloCor
            colorBorder={colors.color4}
            texto={colors.color4.toUpperCase()}
            setLocked={() => trancar("color4")}
            isLocked={locked.color4}
          />
          <RetanguloCor
            colorBorder={colors.color5}
            texto={colors.color5.toUpperCase()}
            setLocked={() => trancar("color5")}
            isLocked={locked.color5}
          />
        </div>
      </div>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <button
          className={styles.glowOnHover}
          style={{
            fontFamily: "Inter,sans-serif",
            fontWeight: "bold",
            fontSize: "16px",
          }}
          onClick={() => handleChange()}
        >
          CHANGE COLORS
        </button>
      </div>
    </div>
  );
};
