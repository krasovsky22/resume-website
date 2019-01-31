//@ts-check
import React, { memo } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";

export default memo(props => <FontAwesomeIcon icon={faTwitter} {...props} />);
