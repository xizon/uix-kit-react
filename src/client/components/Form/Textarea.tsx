import React, { Component } from 'react';

/*-- Apply Third-party plugins (import location should be in front of "GLOBAL STYLES") --*/
import '@/components/_plugins/_lib-bootstrap';
import '@/components/_plugins/_lib-icons';

/*-- Apply global scripts and styles --*/
import '@/components/_utils/styles/_all.scss';
import '@/components/_utils/styles/rtl/_all.scss';
import { __ } from '@/components/_utils/_all';

/*-- Apply this component styles --*/
import '@/components/Form/styles/_basic.scss';
import '@/components/Form/styles/_layout.scss';
import '@/components/Form/styles/_theme_material.scss';
import '@/components/Form/styles/rtl/_basic.scss';
import '@/components/Form/styles/rtl/_layout.scss';
import '@/components/Form/styles/rtl/_theme_material.scss';


declare module 'react' {
    interface HTMLAttributes<T> {
        children?: any;
    }
}

interface TextareaProps extends React.ComponentPropsWithoutRef<any> {
	theme?: string;
	ui?: string;
	value?: string;
	label?: string | object;
	name?: string;
	maxLength?: any;
	cols?: number;
	rows?: number;
	disabled?: any;
	required?: any;
	placeholder?: string;
	/** -- */
	id?: string;
};
type TextareaState = false;



export default class Textarea extends Component<TextareaProps, TextareaState> {

	uniqueID: string;
	
	constructor(props) {
		super(props);
	
		this.uniqueID = 'app-' + __.GUID.create();

        this.handleFocus = this.handleFocus.bind(this);
        this.handleBlurChange = this.handleBlurChange.bind(this);
		
	}

    handleFocus(event) {
		const el = __( event.target );
		
		el.closest( 'div' ).find( 'label, .poemkit-controls__bar' ).addClass( 'is-active' );
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
			el.closest( 'div' ).find( '.poemkit-controls__bar' ).removeClass( 'is-active' );
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
		
		//corners
		if ( param.indexOf( 'pill' ) >= 0 ) classes += ' is-pill';
		if ( param.indexOf( 'rounded' ) >= 0 ) classes += ' is-rounded';

		//size
		if ( param.indexOf( 'fullwidth' ) >= 0 ) classes += ' is-fullwidth';

		
		return classes;
	}
	
		

	render() {
		
		const { 
			theme,
			cols,
			rows,
			ui,
			disabled,
			required,
			placeholder,
			value,
			label,
			name,
			id,
			maxLength,
			...attributes
		} = this.props;
		
		
		const uiRes = typeof(ui) === 'undefined' ? '' : ui;
		const nameRes = typeof(name) === 'undefined' ? ( typeof(label) !== 'undefined' ? __.toSlug( label ) : '' )  : name;
		const idRes = id || this.uniqueID;
		const wrapperClassDisabled = disabled ? ' is-disabled' : '';
		const wrapperClassUi = this.uiSwitch(uiRes);
		const wrapperClassTheme = theme === 'line' ? ' poemkit-controls--line' : '';
		
		return (
		  <>

	
				<div className={"poemkit-controls poemkit-controls__textarea" + wrapperClassDisabled + wrapperClassUi + wrapperClassTheme}>

				  <textarea  
					  className="js-poemkit-float-label" 
			          id={idRes}
					  name={nameRes}
					  placeholder={placeholder || ''}
					  defaultValue={value || ''}
					  maxLength={maxLength || null}
			          onFocus={this.handleFocus}
					  onBlur={this.handleBlurChange}
			          onChange={this.handleBlurChange}
			          disabled={disabled || null}
					  required={required || null}
					  cols={cols || 20}
					  rows={rows || 2}
                      {...attributes}
					>
					</textarea>
				  <label htmlFor={idRes} className={(value && value.length > 0 ? 'is-active' : '')}>
					  {label || null}
					  {required ? <><span className="poemkit-controls__im">*</span></> : ''}
				  </label>
				  {theme === 'line' ? <><ins className="poemkit-controls__bar"></ins><ins className="poemkit-controls__basic-bar"></ins></> : ''}
	
				</div>
	
		  </>
		)
	}
}

