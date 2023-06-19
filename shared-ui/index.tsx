import React from "react";

import { useField } from "remix-validated-form";

export const TextField = () => {
  const { getInputProps } = useField("test");
  return <input {...getInputProps({})} />;
};

export const useTest = () => {
  return <div>test</div>;
};
