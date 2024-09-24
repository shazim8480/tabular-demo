import { useState } from "react";

export const useCheckboxState = (length: number) => {
  const [checkedItems, setCheckedItems] = useState(
    new Array(length).fill(false)
  );
  const [isHeaderChecked, setIsHeaderChecked] = useState(false);

  const handleHeaderCheckboxChange = () => {
    const newCheckedState = !isHeaderChecked;
    setIsHeaderChecked(newCheckedState);
    setCheckedItems(new Array(length).fill(newCheckedState));
  };

  const handleCheckboxChange = (index: number) => {
    const newCheckedItems = [...checkedItems];
    newCheckedItems[index] = !newCheckedItems[index];
    setCheckedItems(newCheckedItems);
    setIsHeaderChecked(newCheckedItems.every((item) => item));
  };

  return {
    checkedItems,
    isHeaderChecked,
    handleHeaderCheckboxChange,
    handleCheckboxChange,
  };
};
