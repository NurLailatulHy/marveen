// components/Button.tsx

interface ButtonProps {
  children: React.ReactNode;
  className?: string;
}

export default function Button({ children, className = "" }: ButtonProps) {
  return (
    <button
      className={`flex items-center justify-center rounded-full bg-n500 text-btn2 text-base ${className}`}
    >
      {children}
    </button>
  );
}
// export default function Button({
//   children,
// }: {
//   children: React.ReactNode;
// }) {
//   return (
//     <button className="flex items-center justify-center h-[45px] rounded-full bg-n500 text-base">
//       {children}
//     </button>
//   );
// }
