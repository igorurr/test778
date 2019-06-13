import * as React from "react";

const expandWrapper = (Component: any) => (props: any) => {
  const [expanded, setExpanded] = React.useState(false);

  const toggleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Component
      {...props}
      expanded={expanded}
      setExpanded={setExpanded}
      toggleExpandClick={toggleExpandClick}
    />
  );
};
export default expandWrapper;
