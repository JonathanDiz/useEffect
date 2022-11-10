import React, { useState, useEffect } from 'react';

function RelojTitulo({ hora }) {
  return <h2>{hora}</h2>
}
  
export default function Reloj() {
  const [hora, setHora] = useState(new Date().toLocaleTimeString());
  const [visible, setVisible] = useState(false);

    useEffect(() => {
        let contador;
        visible ? (contador = setInterval(() => {
          setHora(new Date().toLocaleTimeString())
          }, 1000))
        : clearInterval(contador);
        
        return () => {
          clearInterval(contador);
        }
        }, [visible])

        return (
            <>
              <h2>Reloj</h2>
              {visible && <RelojTitulo hora={hora} />}
              <button onClick={() => setVisible(true)}>Mostrar</button>
              <button onClick={() => setVisible(false)}>Ocultar</button>
            </>
        )
      }