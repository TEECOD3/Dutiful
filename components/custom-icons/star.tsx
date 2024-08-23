import React from "react";
import type { SVGProps } from "react";

export function Star(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      viewBox="0 0 24 24"
      {...props}
    >
      <path
        fill="#FCC945"
        d="M11.334 3.549c.21-.645 1.122-.645 1.332 0L14.2 8.272a.7.7 0 0 0 .666.483h4.966c.678 0 .96.868.411 1.267l-4.017 2.918a.7.7 0 0 0-.254.783l1.534 4.723c.21.645-.529 1.18-1.077.782l-4.017-2.918a.7.7 0 0 0-.823 0L7.57 19.228c-.548.399-1.287-.137-1.077-.782l1.534-4.723a.7.7 0 0 0-.254-.783l-4.017-2.918c-.549-.399-.267-1.267.411-1.267h4.966a.7.7 0 0 0 .666-.483z"
      ></path>
    </svg>
  );
}
