import { useEffect, useState } from "react";
import { ProjetoLei } from "../interfaces/ProjetoLei";

const useProjetosLei = () => {
    const [ data, setData ] = useState<ProjetoLei[]>([]);
    const [ isLoading, setIsLoading ] = useState(true);
    const [ _refresh, setRefresh ] = useState(1);

    const [ error, setError ] = useState('');

    useEffect(() => {
        fetch('http://localhost:3030/projetos_lei', {
                method: 'GET'
        }).then(resp => resp.json())
        .then(json => {
            setData(json.payload.sort((a:any, b:any) => b.id - a.id));
            setIsLoading(false);
        }).catch((err) => {
            setError(err.error);
        });
    }, [setData, setIsLoading, _refresh]);

    function refresh() {
        setRefresh(Math.random());
    }

    return {
        data,
        isLoading,
        error,
        refresh
    };
};

export default useProjetosLei;