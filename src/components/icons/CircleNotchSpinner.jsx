//@ts-check
import React, { memo } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleNotch } from "@fortawesome/free-solid-svg-icons";

export default memo(props => (
  <FontAwesomeIcon icon={faCircleNotch} {...props} spin />
));
