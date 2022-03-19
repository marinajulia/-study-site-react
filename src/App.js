import React from 'react';
const BemVindo = (props) => {
    return (
        <div>
            <h3>Bem vindo {props.nome}</h3>
            <h3>Tenho {props.idade} anos</h3>
        </div>
    );
}
function Social() {
    return (
        <div>
            <h1>Ola mundo</h1>
            <BemVindo nome="Matheus" idade="12" />
        </div>
    )
}

export default Social;