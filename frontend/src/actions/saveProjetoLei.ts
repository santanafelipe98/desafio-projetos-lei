import { ProjetoLei } from "../interfaces/ProjetoLei";

export const saveProjetoLei = async (projetoLei: ProjetoLei) => {
    return new Promise<ProjetoLei>((resolve, reject) => {
        fetch('http://localhost:3030/projetos_lei', {
            method: projetoLei.id ? 'PUT' : 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(projetoLei)
        }).then(res => res.json())
        .then(json => resolve(json.payload))
        .catch(() => reject(null))
    });
};
