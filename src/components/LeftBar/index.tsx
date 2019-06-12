import * as React from "react";

import Drawer from "@material-ui/core/Drawer";

interface IProps {
  open: boolean;
  onClose: () => void;
}

const LeftBar = ({ open, onClose }: IProps) => (
  <Drawer open={open} onClose={onClose} anchor="left">
    kuku
  </Drawer>
);

export default LeftBar;
