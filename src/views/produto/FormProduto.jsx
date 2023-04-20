import axios from "axios";
import React from "react";
import { Button, Container, Divider, Form, Icon } from 'semantic-ui-react';


class FormProduto extends React.Component{

    state = {

		titulo: null,
		codigoDoProduto: null,
		Descrição: null,
		ValorUnitário: null,
		MínimoEmMinutos: null,
		MáximoEmMinutos: null
	} 
    salvar = () => {

		let produtoRequest = {

			titulo: this.state.titulo,
			codigoDoProduto: this.state.codigoDoProduto,
			Descrição: this.state.Descrição,
			ValorUnitário: this.state.ValorUnitário,
			MínimoEmMinutos: this.state.MínimoEmMinutos,
			MáximoEmMinutos: this.state.MáximoEmMinutos
		}
	
		axios.post("http://localhost:8082/api/produto", produtoRequest)
		.then((response) => {
			console.log('Produto cadastrado com sucesso.')
		})
		.catch((error) => {
			console.log('Erro ao incluir o um Produto.')
		})
	}

    render(){
        return(
            <div>

                <div style={{marginTop: '3%'}}>

                    <Container textAlign='justified' >

                        <h2> <span style={{color: 'darkgray'}}> Produto &nbsp;<Icon name='angle double right' size="small" /> </span> Cadastro </h2>

                        <Divider />

						<div style={{marginTop: '4%'}}>

							<Form>

								<Form.Group widths='equal'>

									<Form.Input
										required
										fluid
										label='título'
										maxLength="100"
                                        placeholder="Informe o título do produto"
										value={this.state.titulo}
			                            onChange={e => this.setState({titulo: e.target.value})}
									/>

									<Form.Input
										fluid
                                        required
                                        width={9} 
                                        placeholder="Informe o código do produto" 
										label='Cdigo do produto'
										value={this.state.codigoDoProduto}
			                            onChange={e => this.setState({codigoDoProduto: e.target.value})}>
                                        
									</Form.Input>

								</Form.Group>
                                <Form.Group>
                                <Form.TextArea  label='Descrição' 
                                placeholder='Informe a discrição do produto' 
                                width={16} 
								value={this.state.Descrição}
			                    onChange={e => this.setState({Descrição: e.target.value})}/>
                                   

                                </Form.Group>
								
								<Form.Group>

									<Form.Input
										fluid
                                        required
										label='Valor unitário'
                                        width={6}
										value={this.state.ValorUnitário}
			                            onChange={e => this.setState({ValorUnitário: e.target.value})}>
								
									</Form.Input>

									<Form.Input
										fluid
										label='Tempo de entrega Mínimo em Minutos'
                                        placeholder="30"
                                        width={6}
										value={this.state.MínimoEmMinutos}
			                            onChange={e => this.setState({MínimoEmMinutos: e.target.value})}>
										
                                            
                                    
									</Form.Input>

                                    <Form.Input
                                        fluid
                                        label='Tempo de entrega Máximo em Minutos'
                                        placeholder="40"
                                        width={6}
										value={this.state.MáximoEmMinutos}
			                            onChange={e => this.setState({MáximoEmMinutos: e.target.value})}
                                    >
                                     
                                            
                                     
                                    </Form.Input>

								</Form.Group>

								<Form.Group widths='equal' style={{marginTop: '4%'}}  className='form--empresa-salvar'>

									<Button
										type="button"
										inverted
										circular
										icon
										labelPosition='left'
										color='orange'
										onClick={this.listar}
										>
										<Icon name='reply' />
										Voltar
									</Button>

									<Container textAlign='right'>
										
										<Button
											inverted
											circular
											icon
											labelPosition='left'
											color='blue'
											floated='right'
											onClick={this.salvar}
										>
											<Icon name='save' />
											Salvar
										</Button>
										
									</Container>

								</Form.Group>

							</Form>
						</div>
                    </Container>
                </div>
			</div>
		)
	}
}

export default FormProduto;