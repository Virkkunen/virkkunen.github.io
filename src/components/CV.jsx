import React from "react";
import Button from "./Button";

export default function CV() {
  return (
    <div className="box hidden">
      <h1>Curriculum</h1>
      <div className="buttons">
        <Button
          name="🇧🇷 Currículo"
          color="green-bold"
          link="https://github.com/Virkkunen/virkkunen.github.io/raw/master/assets/files/cv_ptBR.pdf"
        />
        <Button
          name="🇬🇧 Curriculum Vitae"
          color="blue-bold"
          link="https://github.com/Virkkunen/virkkunen.github.io/raw/master/assets/files/cv_enGB.pdf"
        />
      </div>
    </div>
  );
}
