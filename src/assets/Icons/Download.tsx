import React from "react";
import { IconProps } from "./types";

const DownloadIcon = ({ fill, size }: IconProps) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M5.52667 8.85992C5.46418 8.92189 5.41459 8.99563 5.38074 9.07687C5.34689 9.15811 5.32947 9.24524 5.32947 9.33325C5.32947 9.42126 5.34689 9.5084 5.38074 9.58964C5.41459 9.67088 5.46418 9.74461 5.52667 9.80658L7.52667 11.8066C7.58864 11.8691 7.66238 11.9187 7.74362 11.9525C7.82486 11.9864 7.91199 12.0038 8 12.0038C8.08801 12.0038 8.17515 11.9864 8.25638 11.9525C8.33762 11.9187 8.41136 11.8691 8.47333 11.8066L10.4733 9.80658C10.5989 9.68105 10.6694 9.51079 10.6694 9.33325C10.6694 9.15572 10.5989 8.98545 10.4733 8.85992C10.3478 8.73438 10.1775 8.66386 10 8.66386C9.82247 8.66386 9.6522 8.73438 9.52667 8.85992L8.66667 9.72658V1.99992C8.66667 1.82311 8.59643 1.65354 8.4714 1.52851C8.34638 1.40349 8.17681 1.33325 8 1.33325C7.82319 1.33325 7.65362 1.40349 7.5286 1.52851C7.40357 1.65354 7.33333 1.82311 7.33333 1.99992V9.72658L6.47333 8.85992C6.41136 8.79743 6.33762 8.74784 6.25638 8.71399C6.17515 8.68014 6.08801 8.66272 6 8.66272C5.91199 8.66272 5.82486 8.68014 5.74362 8.71399C5.66238 8.74784 5.58864 8.79743 5.52667 8.85992ZM12 5.99992H10.6667C10.4899 5.99992 10.3203 6.07016 10.1953 6.19518C10.0702 6.3202 10 6.48977 10 6.66658C10 6.8434 10.0702 7.01297 10.1953 7.13799C10.3203 7.26301 10.4899 7.33325 10.6667 7.33325H12C12.1768 7.33325 12.3464 7.40349 12.4714 7.52851C12.5964 7.65354 12.6667 7.82311 12.6667 7.99992V12.6666C12.6667 12.8434 12.5964 13.013 12.4714 13.138C12.3464 13.263 12.1768 13.3333 12 13.3333H4C3.82319 13.3333 3.65362 13.263 3.5286 13.138C3.40357 13.013 3.33333 12.8434 3.33333 12.6666V7.99992C3.33333 7.82311 3.40357 7.65354 3.5286 7.52851C3.65362 7.40349 3.82319 7.33325 4 7.33325H5.33333C5.51014 7.33325 5.67971 7.26301 5.80474 7.13799C5.92976 7.01297 6 6.8434 6 6.66658C6 6.48977 5.92976 6.3202 5.80474 6.19518C5.67971 6.07016 5.51014 5.99992 5.33333 5.99992H4C3.46957 5.99992 2.96086 6.21063 2.58579 6.5857C2.21071 6.96078 2 7.46949 2 7.99992V12.6666C2 13.197 2.21071 13.7057 2.58579 14.0808C2.96086 14.4559 3.46957 14.6666 4 14.6666H12C12.5304 14.6666 13.0391 14.4559 13.4142 14.0808C13.7893 13.7057 14 13.197 14 12.6666V7.99992C14 7.46949 13.7893 6.96078 13.4142 6.5857C13.0391 6.21063 12.5304 5.99992 12 5.99992Z"
        fill={fill}
      />
    </svg>
  );
};

export default DownloadIcon;