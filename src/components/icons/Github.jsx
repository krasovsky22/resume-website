//@ts-check
import React, { memo } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

export default memo(props => <FontAwesomeIcon icon={faGithub} {...props} />);
