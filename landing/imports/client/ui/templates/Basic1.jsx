import React from 'react';

const Basic1 = ({template, page}) => (
	<div className='basic1'>
		<header>
			<div className="container">
				<div className="row">
					<div className="box col-lg-6 col-md-12">
						<img className={template.contents.logo.class} src={page.contents.logo[0]} alt=""/>
						<h1 className={template.contents.header.class}>{page.contents.header}</h1>
						<h2 className={template.contents.subheader.class}>{page.contents.subheader}</h2>
						<div className="form">
							<select name="{}" id=""></select>
						</div>
					</div>
				</div>
			</div>
		</header>
	</div>
);

export default Basic1;