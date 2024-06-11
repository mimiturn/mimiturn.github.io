"use client";
import { petrixUtility } from "@/utility";
import { useEffect } from "react";

const Cursor = () => {
  useEffect(() => {
    petrixUtility.customMouse();
  }, []);

  return (
    <div id="magic-cursor">
      <div id="ball" />
    </div>
  );
};
export default Cursor;
