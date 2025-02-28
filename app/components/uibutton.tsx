export const buttonVariants = ({ variant }: { variant: "outline" | "filled" | "default" }) => {
  switch (variant) {
    case "outline":
      return "border-2 border-solid text-primary hover:bg-primary hover:text-white transition-all duration-200";
    case "filled":
      return "bg-blue-500 text-white hover:bg-blue-600 hover:scale-105 transition-all duration-200";
    default:
      return "bg-gray-200 text-black hover:bg-gray-300 hover:text-black transition-all duration-200";
  }
};