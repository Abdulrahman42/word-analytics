export default function Warning({ message }: { message: string }) {
  return (
    <p className="absolute bottom-[15px] left-[35px] text-red-500 text-sm mt-[5px] ml-[5px]">
      {message}
    </p>
  );
}
