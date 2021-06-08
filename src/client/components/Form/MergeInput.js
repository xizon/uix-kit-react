import PropTypes from "prop-types";
import React, { Component } from 'react';


/*-- Apply Third-party plugins (import location should be in front of "global scripts and styles") --*/
import '@uixkit.react/components/_plugins/_lib-bootstrap.js';
import '@uixkit.react/components/_plugins/_lib-gsap.js';
import '@uixkit.react/components/_plugins/_lib-icons.js'; 

/*-- Apply global scripts and styles --*/
import '@uixkit.react/components/_utilities/styles/_all.scss';
import '@uixkit.react/components/_utilities/styles/rtl/_all.scss';
import { __ } from '@uixkit.react/components/_utilities/_all.js';

/*-- Apply this component styles --*/
import '@uixkit.react/components/Form/styles/_basic.scss';
import '@uixkit.react/components/Form/styles/_layout.scss';
import '@uixkit.react/components/Form/styles/_theme_material.scss';
import '@uixkit.react/components/Form/styles/rtl/_basic.scss';
import '@uixkit.react/components/Form/styles/rtl/_layout.scss';
import '@uixkit.react/components/Form/styles/rtl/_theme_material.scss';



export default class MergeInput extends Component {
	
	constructor(props) {
		super(props);
	}

  
    /**
     * Set the class names of different styles
     */
	uiSwitch(param) {
		
		let classes = '';
		
		//status
		if ( param.indexOf( 'error' ) >= 0 ) classes += ' is-error';
		if ( param.indexOf( 'success' ) >= 0 ) classes += ' is-success';
		
		//radius
		if ( param.indexOf( 'pill' ) >= 0 ) classes += ' is-pill';
		if ( param.indexOf( 'rounded' ) >= 0 ) classes += ' is-rounded';

		
		return classes;
	}
	
		

	
	render() {
		
		const { 
			btnType,
			type,
			ui,
			icon,
			disabled,
			required,
			value,
			label,
			name,
			id,
			maxLength,
			...attributes
		} = this.props;
		
		
		const typeRes = typeof(type) === 'undefined' ? 'text' : type;
		const uiRes = typeof(ui) === 'undefined' ? '' : ui;
		const nameRes = typeof(name) === 'undefined' ? ( typeof(label) !== 'undefined' ? __.toSlug( label ) : '' )  : name;
		const idRes = id ? id : 'app-control-' + __.GUID.create();
		const wrapperClassDisabled = disabled ? ' is-disabled' : '';
		const wrapperClassIcon = icon ? ' is-iconic' : '';
		const wrapperClassUi = this.uiSwitch(uiRes);
		
	
		return (
		  <>
			

				<div className={"uix-controls__merge" + wrapperClassDisabled + wrapperClassIcon+ wrapperClassUi}>
			      {icon || null}
				  <input 
			          className={(value && value.length > 0 ? 'is-active' : '')}
					  type={typeRes} 
			          id={idRes}
					  name={nameRes}
					  defaultValue={value || ''}
					  maxLength={maxLength || null}
			          disabled={disabled || null}
					  required={required || null}
                      {...attributes}
					/>
			        <button type={btnType || 'button'} className="uix-btn uix-btn__bg--primary"><span>{label || null}</span></button>
				  

				</div>
	
		  </>
		)
	}
}


//Configure your application to run in "development" mode.
if ( process.env.NODE_ENV === 'development' ) {
			
	MergeInput.propTypes = {
		btnType: PropTypes.string,
		type: PropTypes.string,	  
		ui: PropTypes.string,	  
		value: PropTypes.string,
		label: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
		name: PropTypes.string,
		id: PropTypes.string,
		maxLength: PropTypes.string,
		disabled: PropTypes.any,
		required: PropTypes.any,
		icon: PropTypes.object
		
	}

}

