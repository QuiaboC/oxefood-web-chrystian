import React from "react";
import { Button, Container, Divider, Form, Icon } from 'semantic-ui-react';


class FormCliente extends React.Component{

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
										label='Nome'
										maxLength="100"
                                        placeholder="Informe o título do produto"
									/>

									<Form.Input
										fluid
                                        required
                                        width={9} 
                                        placeholder="Informe o código do produto" 
										label='Codigo do produto'>
                                        
									</Form.Input>

								</Form.Group>
                                <Form.Group>
                                <Form.TextArea  label='Descrição' 
                                placeholder='Informe a discrição do produto' 
                                width={16} />
                                   

                                </Form.Group>
								
								<Form.Group>

									<Form.Input
										fluid
                                        required
										label='Valor unitário'
                                        width={6}>
								
									</Form.Input>

									<Form.Input
										fluid
										label='Tempo de entrega Mínimo em Minutos'
                                        placeholder="30"
                                        width={6}>
										
                                            
                                    
									</Form.Input>

                                    <Form.Input
                                        fluid
                                        label='Tempo de entrega Máximo em Minutos'
                                        placeholder="40"
                                        width={6}
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

export default FormCliente;