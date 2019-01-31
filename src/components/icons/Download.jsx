//@ts-check
import React, { memo } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDownload } from "@fortawesome/free-solid-svg-icons";

export default memo(props => <FontAwesomeIcon icon={faDownload} {...props} />);
