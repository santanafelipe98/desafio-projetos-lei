import React, { useCallback, useState } from 'react';
import './App.css';

import Layout from './components/Layout';
import useProjetosLei from './hooks/useProjetosLei';
import { saveProjetoLei } from './actions/saveProjetoLei';
import ListProjetoLei from './pages/ListProjetoLei';
import NewProjetoLei from './pages/NewProjetoLei';
import { ProjetoLei } from './interfaces/ProjetoLei';

const App = () => {
  const { data, isLoading, refresh } = useProjetosLei();
  const [ view, setView ] = useState<'list' | 'create'>('list');
  const [ error, setError ] = useState<string | undefined>(undefined);

  const handleSubmit = useCallback((data:ProjetoLei) => {
    saveProjetoLei(data)
      .then((projetoLei) => {
        refresh();

        setView('list');

      }).catch(() => {
        setError('Existem errors');
      })
  }, [setView, refresh, setError]);

  return (
    <div className="App">
      <Layout title={`${view === 'list' ? 'Listagem' : 'Novo projeto'}`}>
        {
          view === 'list'
            ? <ListProjetoLei
                data={data}
                isLoading={isLoading}
                onNewProjetoLeiClick={ () => setView('create') } />
            : <NewProjetoLei
                onClickCancel={ () => setView('list') }
                error={error}
                onClickSave={ handleSubmit } />
        }
      </Layout>
    </div>
  );
};

export default App;
