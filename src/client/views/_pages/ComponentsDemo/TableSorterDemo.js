import React from 'react';
import { __ } from '@uixkit.react/components/_utilities/_all.js';
import TableSorter from '@uixkit.react/components/TableSorter/index.js';



const data1 = {
	"headers": [
		{"type": false, "content": "Index" },
	    {"type": "number", "content": "Money" },
		{"type": "text", "content": "Name" },
		{"type": "number", "content": "No." },
		{"type": "date", "content": "Date1" },
		{"type": "date", "content": "Date2" }
	],
	"fields": [
		[
			{"cols": 1, "content": "1" },
			{"cols": 1, "content": "$55.134" },
			{"cols": 1, "content": "David Lin" },
			{"cols": 1, "content": "3453434"},
			{"cols": 1, "content": "2012-09-25T12:10:46+00:00"},
			{"cols": 1, "content": "May 22, 2003"}
			
		],
		[
			{"cols": 1, "content": "2" },
			{"cols": 1, "content": "$255.12" },
			{"cols": 1, "content": "Co Cheey" },
			{"cols": 1, "content": "-2324.343"},
			{"cols": 1, "content": "2013-09-10T12:10:46+00:00"},
			{"cols": 1, "content": "September 13, 2013"}
		],	
		[
			{"cols": 1, "content": "3" },
			{"cols": 1, "content": "$21.134" },
			{"cols": 1, "content": "Foristin" },
			{"cols": 1, "content": "-34789.34"},
			{"cols": 1, "content": "2018-09-24T12:10:46+00:00"},
			{"cols": 1, "content": "January 2, 2019"}
		],	
		[
			{"cols": 1, "content": "4" },
			{"cols": 1, "content": "$3454.134" },
			{"cols": 1, "content": "Alice" },
			{"cols": 1, "content": "+224.5"},
			{"cols": 1, "content": "2011-09-21T12:10:46+00:00"},
			{"cols": 1, "content": "December 1, 2018"}
		],	
		[
			{"cols": 1, "content": "5" },
			{"cols": 1, "content": "$224.0" },
			{"cols": 1, "content": "Wooli" },
			{"cols": 1, "content": "+33.6"},
			{"cols": 1, "content": "2011-02-26T12:10:46+00:00"},
			{"cols": 1, "content": "July 22, 2017"}
		],	
		[
			{"cols": 1, "content": "6" },
			{"cols": 1, "content": "$356.2" },
			{"cols": 1, "content": "Spiter Low" },
			{"cols": 1, "content": "278.23487"},
			{"cols": 1, "content": "2019-01-01T12:10:46+00:00"},
			{"cols": 1, "content": "July 28, 2017"}
		]
		
	]
};


export default () => {

	
    return (
	  <>
		    
		<main id="uix-maincontent">
		
				{/*<!-- Content 
				====================================================== -->*/}
				<section className="uix-spacing--s uix-spacing--no-bottom">
					<div className="container">
						<div className="row">
							<div className="col-12">
								<h1 className="uix-t-c">
									Table Sorter
									<a className="uix-typo--h3 align-middle" href="https://github.com/xizon/uix-kit-react/tree/main/src/client/components/TableSorter" target="_blank"><code><i className="fa fa-code" aria-hidden="true"></i></code></a>
								</h1>
							</div>
						</div>
						{/*<!-- .row end -->*/}

					</div>
					{/*<!-- .container end -->*/}

				</section>

		
		
		
			
			{/*<!-- Content   
			====================================================== -->*/}
			<section className="uix-spacing--s uix-spacing--no-bottom">
				<div className="container">
					<div className="row">
						<div className="col-12">
							<h3>Table Sorter</h3>
							<p>Users can filter and limit the data displayed within a long data table.</p>
							<hr />
							
							
						</div>
					</div>
					{/*<!-- .row end -->*/}

				</div>
				{/*<!-- .container end -->*/}

			</section>
			
		



		   {/*<!-- Content  
			====================================================== -->*/}
			<section className="uix-spacing--s">
				<div className="container">
						<div className="row">
							<div className="col-12">


		                        <TableSorter className="uix-table is-horizontal uix-table--alternant-row js-uix-table-sorter" data={data1} />
		
								
							</div>
						</div>
						{/*<!-- .row end -->*/}


				</div>
				{/*<!-- .container end -->*/}

			</section>   


            
		</main>
		
        

		
      </>
    );
};