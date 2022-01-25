import React, {
    useCallback
} from 'react';

import Button from '../../components/Button';
import Card from '../../components/Card/Card';
import { ProjetoLei } from '../../interfaces/ProjetoLei';

import './style.css';

export interface ListProjetoLeiProps {
    data: ProjetoLei[];
    isLoading?: boolean;
    onNewProjetoLeiClick?(e:React.MouseEvent): void;
}

const ListProjetoLei:React.FC<ListProjetoLeiProps> = props => {
    const renderCard = useCallback(item => (
        <Card
            className="mb-1"
            key={`${item.id}`}
            id={item.id}
            title={item.titulo}
            text={item.texto}  />
    ), []);

    return (
        <div className="ListProjetoLei">
            <div className="header">
                <Button
                    onClick={props.onNewProjetoLeiClick}>
                    Novo projeto
                </Button>
            </div>

            <div className="container">
                {
                    props.isLoading
                        ? <div className="loading">Carregando...</div>
                        : props.data.map(renderCard)
                }
            </div>
        </div>
    )
};

export default ListProjetoLei;