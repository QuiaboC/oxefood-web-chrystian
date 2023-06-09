import axios from 'axios';
import React from "react";
import { Link } from "react-router-dom";
import { Button, Container, Divider, Icon, Table } from 'semantic-ui-react';

class ListComprador extends React.Component{

    state = {
 
        listaComprador: []
       
    }
 
    componentDidMount = () => {
       
        this.carregarLista();
       
    }
    carregarLista = () => {
 
     axios.get("http://localhost:8082/api/comprador")
     .then((response) => {
        
         this.setState({
             listaComprador: response.data
         })
     })
 
 };
 
 formatarData = (dataParam) => {
 
     if (dataParam == null || dataParam === '') {
         return ''
     }  
     let dia = dataParam.substr(8,2);
     let mes = dataParam.substr(5,2);
     let ano = dataParam.substr(0,4);
     let dataFormatada = dia + '/' + mes + '/' + ano;
 
     return dataFormatada
 };
 
 render(){
     return(
         <div>
 
             <div style={{marginTop: '3%'}}>
 
                 <Container textAlign='justified' >
 
                     <h2> Comprador </h2>
 
                     <Divider />
 
                     <div style={{marginTop: '4%'}}>
 
                         <Button
                             inverted
                             circular
                             icon
                             labelPosition='left'
                             color='orange'
                             floated='right'
                         >
                             <Icon name='clipboard outline' />
                             <Link to={'/form-comprador'}>Novo</Link>
                         </Button>
                         <br/><br/><br/>
                       
                       <Table color='orange' sortable celled>
 
                           <Table.Header>
                               <Table.Row>
                                   <Table.HeaderCell>Nome</Table.HeaderCell>
                                   <Table.HeaderCell>Endereco Comercial</Table.HeaderCell>
                                   <Table.HeaderCell>Endereco Residencial</Table.HeaderCell>
                                   <Table.HeaderCell>Comissao</Table.HeaderCell>
                                   <Table.HeaderCell>trabaho Home Office </Table.HeaderCell>
                                   <Table.HeaderCell>QTA Compras Medias em um mês</Table.HeaderCell>
                                   <Table.HeaderCell>Contratado em</Table.HeaderCell>
                                   <Table.HeaderCell textAlign='center' width={2}>Ações</Table.HeaderCell>
                               </Table.Row>
                           </Table.Header>
                      
                           <Table.Body>
 
                               { this.state.listaComprador.map(comprador => (
 
                                   <Table.Row>
                                       <Table.Cell>{comprador.nome}</Table.Cell>
                                       <Table.Cell>{comprador.enderecoComercial}</Table.Cell>
                                       <Table.Cell>{comprador.enderecoResidencial}</Table.Cell>
                                       <Table.Cell>{comprador.comissao}</Table.Cell>
                                       <Table.Cell>{comprador.trabahoHomeOffice}</Table.Cell>
                                       <Table.Cell>{comprador.qtdComprasMediasMe}</Table.Cell>
                                       <Table.Cell>{this.formatarData(comprador.contratadoEm)}</Table.Cell>
                                       <Table.Cell textAlign='center'>
                                          
                                           <Button
                                               inverted
                                               circular
                                               icon='edit'
                                               color='blue'
                                               itle='Clique aqui para editar os dados deste comprador' /> &nbsp;
  <Button
                                                    inverted
                                                    circular
                                                    icon='trash'
                                                    color='red'
                                                    title='Clique aqui para remover este comprador' />
 
                                            </Table.Cell>
                                        </Table.Row>
                                    ))}
 
                                </Table.Body>
                            </Table>
                        </div>
                    </Container>
                </div>
            </div>
        )
    }
 }
 export default ListComprador;
