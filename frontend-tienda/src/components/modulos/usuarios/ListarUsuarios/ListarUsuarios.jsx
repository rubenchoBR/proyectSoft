import React from 'react';
import Table from 'react-bootstrap/Table';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Button from 'react-bootstrap/Button';

const ListarUsuarios = () => {
    return (
        <div>
            <Table striped bordered hover size="sm">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Nombre de Usuario</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>001</td>
                        <td>Pedro</td>
                    </tr>
                    <tr>
                        <td>002</td>
                        <td>Neyla</td>
                    </tr>
                    <tr>
                        <td>003</td>
                        <td>Rubén</td>
                    </tr>
                </tbody>
            </Table>
            <ButtonGroup aria-label="Basic example">
                <Button variant="secondary">Consultar</Button>
                <Button variant="secondary">Nuevo</Button>
                <Button variant="secondary">Borrar</Button>
            </ButtonGroup>
        </div>
    )

}
export default ListarUsuarios;
