//@ts-check
import React, { memo } from "react";
import { CircleNotchSpinner as Spinner } from "@icons";

export default memo(() => (
  <div className="text-center">
    <Spinner size="5x" />
  </div>
));
