import React from 'react';

import { Header } from './components/Header';
import { Saldo } from './components/Saldo';
import { RendaeDespesa } from './components/RendaeDespesa';
import { ListadeTransacoes } from './components/ListadeTransacoes';
import { AdcTransacao } from './components/AdcTransacao';

import { GlobalProvider } from './context/GlobalState';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  return (
    <GlobalProvider>
      <Header />
      <div className="container">
        <Saldo />
        <RendaeDespesa />
        <ListadeTransacoes />
        <AdcTransacao />
      </div>
    </GlobalProvider>
  );
}

export default App;
