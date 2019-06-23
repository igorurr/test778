import * as React from "react";

const useExpand = (
  defExpanded: boolean = false,
): [boolean, React.Dispatch<React.SetStateAction<boolean>>, () => void] => {
  const [expanded, setExpanded] = React.useState(defExpanded);

  const toggleExpandClick = () => {
    setExpanded(!expanded);
  };

  return [expanded, setExpanded, toggleExpandClick];
};
export default useExpand;
