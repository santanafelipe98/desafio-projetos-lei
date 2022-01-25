import React, { useCallback, useState } from 'react';
import TextArea from '../../components/TextArea';
import TextField from '../../components/TextField';
import Button from '../../components/Button';
import Error from '../../components/Error';

import './style.css';

export interface SubmitData {
    titulo: string;
    texto: string;
}

export interface NewProjetoLeiProps {
    error?:string;
    onClickCancel?(e:React.MouseEvent): void;
    onClickSave?(data: SubmitData): void;
}

const NewProjetoLei:React.FC<NewProjetoLeiProps> = props => {
    const [ titulo, setTitulo ] = useState('');
    const [ texto, setTexto ] = useState('');

    const handleTituloChange = useCallback((e) => {
        setTitulo(e.target.value);
    }, []);

    const handleTextoChange  = useCallback((e) => {
        setTexto(e.target.value);
    }, []);

    const handleSaveClick = useCallback((e) => {
        if (props.onClickSave)
            props.onClickSave({ titulo, texto });

    }, [props.onClickSave, titulo, texto]);

    return (
        <div className="NewProjetoLei">
            {
                props.error
                    && <Error>{props.error}</Error>
            }
            <div className="container mb-3">
                <TextField
                    className="mb-2"
                    label="Título"
                    placeholder="Título do projeto de lei"
                    value={titulo}
                    onChange={ handleTituloChange } />

                <TextArea
                    label="Texto"
                    value={texto}
                    onChange={ handleTextoChange } />
            </div>

            <div className="bottom">
                <Button
                    className="mr-2"
                    variant="secondary"
                    onClick={props.onClickCancel}>
                    Cancelar
                </Button>
                <Button
                    disabled={ titulo.length === 0 || texto.length === 0 }
                    onClick={handleSaveClick}>
                    Salvar
                </Button>
            </div>
        </div>
    )
};

export default NewProjetoLei;