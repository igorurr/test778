import * as React from "react";

const useExpand = (
  defExpanded: boolean = false,
): [boolean, () => void] => {
  const [expanded, setExpanded] = React.useState(defExpanded);

  const toggleExpandClick = () => {
    setExpanded(!expanded);
  };

  return [expanded, toggleExpandClick];
};
export default useExpand;
