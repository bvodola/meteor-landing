import React, { Component } from 'react';

// http://simuladorconsorcio.com.br/consorcio-audi/

class ThreeSteps extends Component {

	render() {
		// Setting the page and template props in a less verbose way
		let {page, template} = this.props;
		
		return(
			<div className='three-steps'>

				<div className="top">
					<h1>{page.contents.title}</h1>
					<p>
						<img className='logo' src={page.contents.logo[0]} alt="Logo"/>
					</p>
				</div>
				

				<header>
					<div className="container">
						<div className='hero-shot'>
							<img src={page.contents.hero_shot[0]} alt="Hero Shot"/>
						</div>
						<h2 dangerouslySetInnerHTML={{__html: page.contents.header}}></h2>
						<div className='box row'>
							
							<div className='col-md-4'>
								<b className='number'>1.</b>
								<p>
									{template.fields.vehicle_price.display_name}
								</p>
								<div>
									<select className='price-select' name="" id="">
										<option value="30000">R$ 30.000</option>
									</select>
								</div>
							</div>
							<div className='col-md-4'>
							<b className='number'>2.</b>
							<p>
								{template.fields.number_of_months.display_name}
							</p>
							</div>
							<div className='col-md-4 cta-form'>
								<div className="row">
									<b className='number'>3.</b>
									<p>
										<span className="cta-form-title">
											{page.contents.cta_form_title}
										</span>
										<span className="cta-form-subtitle">
											{page.contents.cta_form_subtitle}
										</span>
									</p>
								</div>

								<input type="text" ref='name' placeholder={template.fields.name.display_name}/>
								<input type="email" ref='email' placeholder={template.fields.emai.display_name}/>
								<input type="text" ref='phone' placeholder={template.fields.phone.display_name}/>

								<button className='cta-button' ref='cta_button'>{page.contents.cta_text}</button>
							</div>
						</div>	
					</div>
				</header>
			</div>
		);
	}
}

export default ThreeSteps;