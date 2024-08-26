import { useState } from "react";
import Stats from "./Stats";
import TextaArea from "./TextaArea";
import {
  FACEBOOK_MAX_CHARACTERS,
  INSTAGRAM_MAX_CHARACTERS,
} from "../libs/constants";

export default function Container() {
  const [text, setText] = useState<string>("");

  const stats = {
    numberOfWords: text.split(/\s/).filter((word) => word !== "").length,
    numberOfCharacters: text.length,
    instagramCharactersLeft: INSTAGRAM_MAX_CHARACTERS - text.length,
    facebookCharactersLeft: FACEBOOK_MAX_CHARACTERS - text.length,
  };

  return (
    <main className="flex-col w-[85vw] lg:h-[520px] lg:w-[1050px] bg-white flex lg:flex-row mt-[55px] rounded-lg shadow-xl relative overflow-hidden">
      <TextaArea text={text} setText={setText} />
      <Stats stats={stats} />
    </main>
  );
}
