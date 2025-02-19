import React from "react";

export const Sheet = ({ children }: { children: React.ReactNode }) => {
  return <div className="sheet">{children}</div>;
};

export const SheetContent = ({ children }: { children: React.ReactNode }) => {
  return <div className="sheet-content">{children}</div>;
};

export const SheetTrigger = ({ children }: { children: React.ReactNode }) => {
  return <button className="sheet-trigger">{children}</button>;
};
