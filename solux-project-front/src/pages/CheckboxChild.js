import React, { useState } from "react";

const CheckboxChild = ({ item, checkedItemHandler, checkedItem }) => {
  const [isChecked, setIschecked] = useState(false); // 체크여부

  // target은 event의 디스트럭처링
  const checkHandler = ({ target }) => {
    setIschecked(!isChecked);
    console.log(target.value, "target");
    console.log(target.parentNode, "node"); //해당 상위 label element
    console.log(target.checked, "checked"); //해당 체크를 확인(boolean값으로 출력)
    const { checked } = target;
    checkedItemHandler(item.id, checked);
  };
  console.log(checkedItem, "III");
  return (
    <>
      <input
        key={item.id}
        type="checkbox"
        value={item.name}
        onChange={(e) => checkHandler(e)}
      />
      <div>{checkedItem}</div>
    </>
  );
};

export default CheckboxChild;