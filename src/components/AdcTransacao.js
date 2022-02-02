import React, { useState, useEffect, useContext } from "react";
import {
  Modal,
  Button,
  ButtonGroup,
  ToggleButton,
  InputGroup,
  FormControl,
} from "react-bootstrap";
import { GlobalContext } from "../context/GlobalState";

export const AdcTransacao = () => {
  const [tipo, setTipo] = useState("0");
  const [titulo, setTitulo] = useState("");
  const [valoradc, setValoradc] = useState(0);
  const [isLoading, setLoading] = useState(false);
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  // Tipos de Radios Button
  const radios = [
    { name: "Entrada", color: "success", value: "0" },
    { name: "Saída", color: "danger", value: "1" },
  ];

  const { adicionarTransacoes } = useContext(GlobalContext);

  const handleClick = (e) => {
    e.preventDefault();

    const novaTransacao = {
      id: Math.floor(Math.random() * 100000000),
      tipo,
      titulo,
      valoradc: +valoradc,
    };

    adicionarTransacoes(novaTransacao);
    setLoading(true);
  };

  function simulateNetworkRequest() {
    return new Promise((resolve) => setTimeout(resolve, 500));
  }

  // efeito de Load no botão Adicionar Transação
  useEffect(() => {
    if (isLoading) {
      simulateNetworkRequest().then(() => {
        handleClose();
        setLoading(false);
      });
    }
  }, [isLoading]);

  return (
    <>
      <Button variant="success" onClick={handleShow}>
        +
      </Button>

      <Modal show={show} fullscreen="modal-fullscreen-md-down" onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Adicionar Nova Transação</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form className="mt-3">
            <div>
              <div className="text-center">
                <ButtonGroup>
                  {radios.map((radio, idx) => (
                    <ToggleButton
                      key={idx}
                      id={`radio-${idx}`}
                      type="radio"
                      variant={`outline-${radio.color}`}
                      name="tipo"
                      value={radio.value}
                      checked={tipo === radio.value}
                      onChange={(e) => setTipo(e.target.value)}
                    >
                      {radio.name}
                    </ToggleButton>
                  ))}
                </ButtonGroup>
              </div>
            </div>
            <div>
              <label htmlFor="text">Título</label>
              <input
                type="text"
                value={titulo}
                onChange={(e) => setTitulo(e.target.value)}
                placeholder="Digite algo sobre a transação..."
              />
            </div>
            <div>
              <label htmlFor="amount">Valor</label>
              <InputGroup className="mb-4">
                <InputGroup.Text>R$</InputGroup.Text>
                <FormControl
                  type="number"
                  value={valoradc}
                  onChange={(e) => setValoradc(e.target.value)}
                />
              </InputGroup>
            </div>
            <div className="d-grid gap-2">
              <Button
                variant="success"
                size="lg"
                disabled={isLoading}
                onClick={!isLoading ? handleClick : null}
              >
                {isLoading ? "Enviando…" : "Adicionar Transação"}
              </Button>
            </div>
          </form>
        </Modal.Body>
      </Modal>
    </>
  );
};
