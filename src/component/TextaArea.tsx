import { useState } from "react";
import Warning from "./Warning";

type TextaAreaProps = {
  text: string;
  setText: (text: string) => void;
};

export default function TextaArea({ text, setText }: TextaAreaProps) {
  const [warningText, setWarningText] = useState<string>("");

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    let newText = e.target.value;
    if (newText.includes("<script>")) {
      setWarningText("No script tag allowed!");
      newText = newText.replace("<script>", "");
    } else if (newText.includes("@")) {
      setWarningText("No @ tag allowed!");
      newText = newText.replace("<script>", "");
    } else {
      setWarningText("");
    }
    setText(newText);
  };
  return (
    <div className="resize py-[30px] px-[40px] text-[22px] flex-[2] placeholder:font-medium placeholder:text-[#959c9f]">
      <textarea
        className="h-full w-full"
        value={text}
        onChange={handleChange}
        placeholder="Enter your text"
        spellCheck={false}
      />
      <Warning message={warningText} />
    </div>
  );
}
