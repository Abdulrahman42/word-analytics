import Stats from "./Stats";
import TextaArea from "./TextaArea";

export default function Container() {
  return (
    <main className="h-[520px] w-[1050px] bg-white flex mt-[55px] rounded-lg shadow-xl relative overflow-hidden">
      <TextaArea />
      <Stats />
    </main>
  );
}
