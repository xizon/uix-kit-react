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



export default class PasswordInput extends Component {
	
	constructor(props) {
		super(props);

		this.state = {
		  type: this.props.type ? this.props.type : 'password'
		}
		
		this.showHide = this.showHide.bind(this);
        this.handleFocus = this.handleFocus.bind(this);
        this.handleBlurChange = this.handleBlurChange.bind(this);
		
	}
	
	showHide(event){
		event.preventDefault();
		event.stopPropagation();
		this.setState({
			type: this.state.type === 'input' ? 'password' : 'input'
		})  
	}
	
	
    handleFocus(event) {
		const el = __( event.target );
		
		el.closest( 'div' ).find( 'label, .uix-controls__bar' ).addClass( 'is-active' );
    }

    handleBlurChange(event) {
		const el = __( event.target );
		const val = event.target.value;
		

		//----
		//remove focus style
		if( val === '' || val === 'blank' ) {
			el.closest( 'div' ).find( 'label' ).removeClass( 'is-active' );
		}	

		//
		if( 
			val === '' || 
			val === 'blank' || 
			( val != '' && val != 'blank' ) 
		) {
			el.closest( 'div' ).find( '.uix-controls__bar' ).removeClass( 'is-active' );
		}	
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

		//sizes
		if ( param.indexOf( 'fullwidth' ) >= 0 ) classes += ' is-fullwidth';
		if ( param.indexOf( 'small' ) >= 0 ) classes += ' uix-controls__short-s';
		if ( param.indexOf( 'medium' ) >= 0 ) classes += ' uix-controls__short-m';
		if ( param.indexOf( 'large' ) >= 0 ) classes += ' uix-controls__short-l';


		
		return classes;
	}
	
		

	render() {
		
		const { 
			theme,
			ui,
			disabled,
			required,
			value,
			label,
			units,
			name,
			id,
			maxLength,
			iconLeft,
			iconRight,
			...attributes
		} = this.props;
		
		
		const uiRes = typeof(ui) === 'undefined' ? '' : ui;
		const nameRes = typeof(name) === 'undefined' ? ( typeof(label) !== 'undefined' ? __.toSlug( label ) : '' )  : name;
		const idRes = id ? id : 'app-control-' + __.GUID.create();
		const wrapperClassDisabled = disabled ? ' is-disabled' : '';
		const wrapperClassIconLeft = iconLeft ? ' is-iconic' : '';
		const wrapperClassIconRight = iconRight ? ' is-iconic is-reversed' : '';
		const wrapperClassUi = this.uiSwitch(uiRes);
		const wrapperClassTheme = theme === 'line' ? ' uix-controls--line' : '';
		
		return (
		  <>

				<div className={"uix-controls" + wrapperClassDisabled + wrapperClassIconLeft + wrapperClassIconRight + wrapperClassUi + wrapperClassTheme}>
			      {iconLeft || null}
			      {iconRight || null}
				  <input 
					  type={this.state.type}
					  className="js-uix-float-label" 
			          id={idRes}
					  name={nameRes}
					  defaultValue={value || ''}
					  maxLength={maxLength || null}
			          onFocus={this.handleFocus}
					  onBlur={this.handleBlurChange}
			          onChange={this.handleBlurChange}
			          disabled={disabled || null}
					  required={required || null}
                      {...attributes}
					/>
			      <span className="uix-controls__passwordSwitch" onClick={this.showHide}>{this.state.type === 'input' ? <><i className="fa fa-eye-slash" aria-hidden="true"></i></> : <><i className="fa fa-eye" aria-hidden="true"></i></>}</span>
				  <label htmlFor={idRes} className={(value && value.length > 0 ? 'is-active' : '')}>
					  {label || null}
					  {required ? <><span className="uix-controls__im">*</span></> : ''}
				  </label>
				  {theme === 'line' ? <><ins className="uix-controls__bar"></ins><ins className="uix-controls__basic-bar"></ins></> : ''}
				  {units || null}

				</div>
	
		  </>
		)
	}
}


//Configure your application to run in "development" mode.
if ( process.env.NODE_ENV === 'development' ) {
			
	PasswordInput.propTypes = {
		theme: PropTypes.string,
		ui: PropTypes.string,
		value: PropTypes.string,
		label: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
		units: PropTypes.string,
		name: PropTypes.string,
		id: PropTypes.string,
		maxLength: PropTypes.string,
		disabled: PropTypes.any,
		required: PropTypes.any,
		iconLeft: PropTypes.object,
		iconRight: PropTypes.object			   
		
	}

}
