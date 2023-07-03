import React from "react";
import Button from "./Button";

export default function CV() {
  return (
    <div className="box hidden">
      <h1 className="hidden">Curriculum</h1>
      <div className="buttons">
        <Button
          name="🇧🇷 In Portuguese"
          color="green"
          link="https://github.com/Virkkunen/virkkunen.github.io/raw/master/assets/files/cv_br.pdf"
        />
        <Button
          name="🇬🇧 In English"
          color="blue"
          link="https://github.com/Virkkunen/virkkunen.github.io/raw/master/assets/files/cv_en.pdf"
        />
      </div>
    </div>
  );
}
