import Image from "next/image";
import React, { useEffect, useState } from "react";
import { StyledMessageModal } from "./styles";

const MessageModal = ({ message, setMessage }) => {
  const [text, setText] = useState({ title: "", subtitle: "" });

  useEffect(() => {
    switch (message) {
      case "auth/invalid-email":
        setText({
          title: "E-mail ou senha inválido",
          subtitle: "Se não conseguir se lembrar, tente resetar a senha!",
        });
    }
  }, [message]);

  return (
    text.title && (
      <StyledMessageModal>
        <div className="content">
          <div>
            <Image src="/icons/error.svg" width={24} height={24} alt="icon" />
          </div>
          <div className="text">
            <h2 className="title">{text.title}</h2>
            <p className="subtitle">{text.subtitle}</p>
          </div>
        </div>
        <div>
          <Image
            onClick={() => setMessage("")}
            className="btn-cancel"
            src="/icons/cancel.svg"
            width={32}
            height={32}
            alt="icon"
          />
        </div>
      </StyledMessageModal>
    )
  );
};

export default MessageModal;
