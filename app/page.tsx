"use client";
import Image from "next/image";
import { useState } from "react";
import Modal from "./components/Modal";

export default function Home() {
  const [openModal, setOpenModal] = useState(false);
  return (
    <main>
      <button onClick={() => setOpenModal(!openModal)}>
        {openModal ? <p>Close</p> : <p>Open</p>}
      </button>
      {openModal && <Modal />}
    </main>
  );
}
