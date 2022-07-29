interface ShapeFooterCardsProps {
  color: string;
}

export function ShapeFooterCards({ color }: ShapeFooterCardsProps) {
  return (
    <svg
      width="76"
      height="30"
      viewBox="0 0 76 30"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M6.98124 4.5323L2.82038 6.6078L5.94103 9.30595L2.82038 9.9286L5.94103 11.589L1 12.2116L5.94103 14.2871L2.04022 15.5324L5.94103 18.4381L2.30027 19.6834L5.94103 22.3816L2.56032 23.6269L4.12065 27.9854L6.98124 25.7024L9.84184 29.0232L12.1823 26.325L13.7426 29.2307L18.4236 26.325L20.504 29.2307L23.1046 25.7024L25.4451 28.4005L28.0456 24.8722L31.4263 29.0232L33.5067 25.7024L35.5872 27.9854L38.1877 24.8722L43.1287 27.9854L45.7293 25.7024L47.5497 27.9854L51.4505 25.7024L55.0912 28.4005L56.9116 26.325L61.3325 28.4005L60.0323 25.7024L68.0939 28.4005L66.7937 25.7024H74.5953L68.614 23.2118L73.295 20.7212L70.1744 19.2683L74.5953 16.9853L70.1744 15.5324L75.1154 13.0418L72.2548 11.589L75.1154 9.30595L72.2548 5.15495L69.3942 7.438L66.7937 3.7021L63.673 6.6078L62.3727 3.7021L58.992 6.6078L56.9116 3.07945L54.3111 6.6078L52.4907 3.7021L49.11 5.7776L47.2896 2.66435L43.9089 5.7776L42.3486 3.7021L39.2279 7.438L35.5872 1.2115L32.7266 5.7776L30.126 1.83415L27.0054 6.6078L24.1448 1.83415L21.0242 5.7776L18.4236 1.83415L15.0429 5.7776L13.7426 1.83415L8.80162 8.06065L6.98124 4.5323Z"
        fill={color}
        stroke={color}
        strokeWidth="0.5"
      />
    </svg>
  );
}