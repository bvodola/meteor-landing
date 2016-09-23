import React, { Component } from 'react';
import { Link, withRouter } from 'react-router'
import { Helpers } from '../components/default/Helpers.jsx';
import { Leads } from '../../../models/leads.js';

class Basic1 extends Component {

	componentDidMount() {

		// Setting the Title Tag for the page
		document.title = 'Simulação de Consórcio Nacional Unifisa Audi';
		$('.phone-mask').mask('(00) 00000-0000');
	}

	handleSubmit(event) {
		event.preventDefault();
		let query = Helpers.getRefValues(this.refs);
		let self = this;
		Leads.insert(query, function(e,id) {
			if(e) console.log(e);
			else {
				self.props.router.push('/landing/page/confirmation');
			}
		});

	}

	render() {
		let page = this.props.page;
		let template = this.props.template;

		return(
			<div className='basic1'>
				<header>
					<div className="container">
						<div className="row">
							<div className="box col-lg-6 col-md-12">
								<img className={template.contents.logo.class} src={page.contents.logo[0]} alt=""/>
								<h1 className={template.contents.header.class}>{page.contents.header}</h1>
								<h2 className={template.contents.subheader.class}>{page.contents.subheader}</h2>
								<div className="form">

									<div className="form-group">
										<select ref='funding_type' className='form-control' defaultValue=''>
											<option value="" disabled>Você procura consórcio para que?</option>
											<option value="Meu primeiro bem">Meu primeiro bem</option>
											<option value="Trocar um bem">Trocar um bem</option>
											<option value="Investimento">Investimento</option>
										</select>
									</div>
									<div className="form-group">
										<input type='text' ref='name' placeholder='Nome' className='form-control' />
									</div>
									<div className="form-group">
										<input type='email' ref='email' placeholder='Email' className='form-control' />
									</div>							
									<div className="form-group">
										<input type='text' ref='phone' placeholder='Telefone' className='form-control phone-mask' />
									</div>
									<div className="form-group">
										<input type='text' ref='neighborhood' placeholder='Bairro' className='form-control' />
									</div>
									<div className="form-group">
										<select ref='contact_time' className='form-control' defaultValue=''>
											<option value="" disabled>Melhor horário para contato</option>
											<option value="09h até 12h">09h até 12h</option>
											<option value="12h até 14h">12h até 14h</option>
											<option value="14h até 18h">14h até 18h</option>
											<option value="18h até 21h">18h até 21h</option>
										</select>
									</div>
									<div className="form-group">
										<button onClick={this.handleSubmit.bind(this)} className="btn btn-primary">Simular Consórcio</button>
									</div>

								</div>
							</div>
						</div>
					</div>
				</header>
			</div>
		);
	}
	
}

export default withRouter(Basic1);