//@ts-check
import React, { memo } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome } from "@fortawesome/free-solid-svg-icons";

export default memo(props => <FontAwesomeIcon icon={faHome} {...props} />);
