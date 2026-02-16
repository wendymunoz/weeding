import React, { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { motion } from "framer-motion";

export default function BodaWendySebastian() {
  const [codigo, setCodigo] = useState("");
  const [confirmado, setConfirmado] = useState(null);

  const handleConfirmacion = () => {
    if (codigo.trim() !== "") {
      setConfirmado("Gracias por confirmar tu asistencia 💚");
    }
  };

  return (
    <div className="min-h-screen bg-[#f6fbf7] text-gray-700 font-serif">
      {/* HERO */}
      <section className="flex flex-col items-center justify-center text-center py-24 px-6 bg-gradient-to-b from-[#dbeadf] to-[#f6fbf7]">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-5xl md:text-6xl font-light mb-6"
        >
          Wendy & Sebastián
        </motion.h1>
        <p className="text-xl mb-4">17 de julio</p>
        <p className="italic text-lg max-w-xl">
          "Y sobre todas estas cosas vestíos de amor, que es el vínculo perfecto." – Colosenses 3:14
        </p>
      </section>

      {/* NUESTRA HISTORIA */}
      <section className="py-20 px-6 max-w-5xl mx-auto grid md:grid-cols-2 gap-10 items-center">
        <div>
          <img
            src="https://via.placeholder.com/500x600"
            alt="Nosotros"
            className="rounded-2xl shadow-lg"
          />
        </div>
        <div>
          <h2 className="text-3xl mb-6">Nuestra Historia</h2>
          <p className="leading-relaxed">
            Dios escribió nuestra historia con amor, paciencia y propósito. Hoy queremos celebrar contigo el inicio de esta nueva etapa.
          </p>
        </div>
      </section>

      {/* DETALLES DEL EVENTO */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-8">
          <Card className="rounded-2xl shadow-md">
            <CardContent className="p-6">
              <h3 className="text-xl mb-3">Ceremonia</h3>
              <p>Lugar: [Nombre del lugar]</p>
              <p>Hora: 4:00 PM</p>
              <p>Dirección: [Dirección completa]</p>
            </CardContent>
          </Card>
          <Card className="rounded-2xl shadow-md">
            <CardContent className="p-6">
              <h3 className="text-xl mb-3">Recepción</h3>
              <p>Lugar: [Nombre del salón]</p>
              <p>Hora: 6:00 PM</p>
            </CardContent>
          </Card>
          <Card className="rounded-2xl shadow-md">
            <CardContent className="p-6">
              <h3 className="text-xl mb-3">Código de Vestimenta</h3>
              <p>Elegante – tonos naturales y pasteles</p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* CRONOGRAMA */}
      <section className="py-20 px-6 bg-[#eef7f1]">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl mb-10">Cronograma</h2>
          <ul className="space-y-4 text-lg">
            <li>4:00 PM – Ceremonia</li>
            <li>5:30 PM – Sesión de fotos</li>
            <li>6:00 PM – Recepción</li>
            <li>7:00 PM – Cena</li>
            <li>9:00 PM – Primer baile</li>
          </ul>
        </div>
      </section>

      {/* LISTA DE REGALOS */}
      <section className="py-20 px-6 bg-white text-center">
        <h2 className="text-3xl mb-6">Lista de Regalos</h2>
        <p className="mb-6">Tu presencia es nuestro mejor regalo, pero si deseas bendecirnos:</p>
        <div className="space-y-4">
          <Button className="rounded-2xl">Ver lista de regalos</Button>
          <p>Cuenta bancaria: [Banco – Número de cuenta]</p>
        </div>
      </section>

      {/* CONFIRMACION */}
      <section className="py-20 px-6 bg-[#dbeadf] text-center">
        <h2 className="text-3xl mb-6">Confirmar Asistencia</h2>
        <p className="mb-4">Ingresa tu código de invitado</p>
        <div className="flex flex-col items-center gap-4">
          <Input
            placeholder="Código único"
            className="max-w-xs rounded-2xl"
            value={codigo}
            onChange={(e) => setCodigo(e.target.value)}
          />
          <Button onClick={handleConfirmacion} className="rounded-2xl">
            Confirmar asistencia
          </Button>
          {confirmado && <p className="mt-4">{confirmado}</p>}
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-10 text-center bg-white text-sm">
        <p>Con amor, Wendy & Sebastián – 17 de julio</p>
      </footer>
    </div>
  );
}
