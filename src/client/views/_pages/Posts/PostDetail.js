import React, { Component } from 'react';
import {connect} from 'react-redux';
import { __ } from '@uixkit.react/components/_utilities/_all.js';
import { fetchDemoListDetail } from '@uixkit.react/actions/demoListDetailActions.js';
import Footer from '@uixkit.react/components/Footer/index.js';


class PostDetail extends Component {
	constructor(props) {

		//You are extending the React.Component class, and per the ES2015 spec, 
		//a child class constructor cannot make use of this until super() has 
		//been called; also, ES2015 class constructors have to call super() 
		//if they are subclasses.
		super(props);
		//console.log(this.props) //props will get logged.

   
	}

	
	//Static properties/methords are the properties of the class. 
	//@link to: `src/server/app.js`
	/*
	When requesting from the server, the program will look for the react component with 
	the `appSyncRequestFetching` function (this function is named by the developer) to complete the 
	initial update and rendering of the data(SSR).

	if ( typeof route.component.appSyncRequestFetching !== typeof undefined ) {
		console.log( 'route.component.appSyncRequestFetching: ' );
		console.log( route.component.appSyncRequestFetching );	
	}	
	*/
    static appSyncRequestFetching ({ dispatch, path }) {
        let currentID = path.split( '/' ).pop();
        return [ dispatch( fetchDemoListDetail( currentID ) ) ];
    }
    

    /**
     * componentDidMount() is invoked immediately after a component 
     * is mounted (inserted into the tree). 
     * Initialization that requires DOM nodes should go here. 
     * If you need to load data from a remote endpoint, this 
     * is a good place to instantiate the network request.
     */
    componentDidMount() {

		//Receive contentInformation redux from the parent page
		console.log('[detail of post]this.props:' );
		console.log(this.props);
		
		
		
		const { contentInformation } = this.props;

		// Request data
        contentInformation(fetchDemoListDetail( this.props.match.params.post_id ));
		
		
        
    }


	
  render() {
    // Bind data and display
    const preloadedState = this.props.currentData;
 
    if ( preloadedState == null ) {
        console.log( 'preloadedState: null' );
    } else {
        console.log( 'preloadedState: Return an Array' );
		
		
		//change page title
		//-------------
		if (typeof (document) !== "undefined") {
			
			// update page title
			document.title = preloadedState[0].name;
		}
		
		
    }
	  
	  
    
    return (
	  <>
   
		
            <main id="uix-maincontent">
		
				{/*
				<!-- Content   
				====================================================== -->	
				*/}
				<section className="uix-spacing--s">
					<div className="container">
							<div className="row">
								<div className="col-12">
										{ 
										( preloadedState != null ) ? preloadedState.map((item, i) => 

											  <div key={"detail"+i} style={{padding: "15px", margin: "10px", display: "inline-block", border: "1px solid #ddd", width: "420px", textAlign: "left", position: "relative"}}>

													<img src={item.flag} alt="" style={{width: "400px", display: "inline-block" }} />
													<hr />
													<p><strong>Name: </strong>{item.name}</p>
													<p><strong>Capital: </strong>{item.capital}</p>
													<p><strong>Population: </strong>{item.population}</p>
													<p><strong>Subregion: </strong>{item.subregion}</p>
													<p><strong>Languages: </strong></p>   
													<div>
														{item.languages.map((lanItem, k) => <span key={"lan"+k}>{lanItem.name}, </span>)}
													</div>

											  </div>  )
										 : ""
										}

								</div>
							</div>
							{/*<!-- .row end -->*/}


					</div>
					{/*<!-- .container end -->*/}
				</section>
		

            </main>


             <Footer />
          
      </>

    );
  }

}

    
// Subscribe to the required state in the reducers is bound 
// here (for details of the data structure: initState)
const mapStateToProps = (state) => {
    return {
        currentData: state.listDetailData.detail   //Receive redux
    }
};

// Bind the introduced Actions
const mapDispatchToProps = (dispatch) => {
    return {
        contentInformation: dispatch   //Throw redux
    }
};


// The most important step is to bind the required Reducer and Actions to the current page 
// through the connect function provided by react-redux

export default connect(
    mapStateToProps, 
    mapDispatchToProps
)(PostDetail);


