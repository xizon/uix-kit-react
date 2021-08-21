# @uixkit.react/components/Parallax

[Source](https://github.com/xizon/uix-kit-react/tree/main/src/client/components/Parallax)

## Version

=> 0.0.1


## Examples

```js
import React from 'react';
import Parallax from '@uixkit.react/components/Parallax/index.tsx';

//get project config
import { rootDirectory } from '@uixkit.react/config/websiteConfig.js';

export default () => {
  return (
    <>

      <h3>Background Parallax</h3>
      {/* ================================================================== */} 
			<Parallax img={`${rootDirectory}/assets/images/demo/spiral-galaxy-1920x1080.jpg`} heightClass="uix-height--100" fullyVisible={false} offsetTop={0} overlay={false} skew={0} speed={0.1}>
				<h2>Fulscreen + Vertically Centered Text</h2>
			</Parallax>



			<Parallax img={`${rootDirectory}/assets/images/demo/spiral-galaxy-1920x1080.jpg`} heightClass="uix-height--100" fullyVisible={false} offsetTop={150} overlay={false} skew={0} speed={0.2}>
				<h2>The top offset is 150px.</h2>
			</Parallax>


			<Parallax img={`${rootDirectory}/assets/images/demo/spiral-galaxy-1920x1080.jpg`} heightClass="uix-height--30" fullyVisible={false} offsetTop={0} overlay={false} skew={0} speed={0.1}>
				<h2>Has class "uix-height--30"</h2>
			</Parallax>


			<Parallax img={`${rootDirectory}/assets/images/demo/spiral-galaxy-1920x309.jpg`} heightClass={null} fullyVisible={false} offsetTop={150} overlay="rgba(0,0,0,.6)" skew={0} speed={0.3}>
				<div className="row uix-typo--color-white">
					<div className="col-12">
						<h2>
							Small Image 1920 x 309
							<p className="uix-typo--h4">Has Overlay Background</p>
						</h2>
					</div>
				</div>
				{/*<!-- .row end -->*/}
			</Parallax>


			<Parallax img={`${rootDirectory}/assets/images/demo/spiral-galaxy-1920x309.jpg`} heightClass={null} fullyVisible={false} offsetTop={0} overlay={false} skew={-3} speed={0.3}>
				<h2 className="uix-el--skew">Skew Parallax Effect</h2>
			</Parallax>



      <h3>HTML Element Parallax (not for background image)</h3>
      {/* ================================================================== */} 
			<Parallax parallaxElements={true} parallaxElementsTransition="all 0.4s cubic-bezier(0, 0, 0.34, 0.96) 0s" speed={-0.7}>
				<div className="uix-height--30 is-mobile-still" style={{backgroundColor: "#d2ff52", background: "linear-gradient(to bottom, #d2ff52 0%,#91e842 100%)"}}>
					<div className="uix-v-align--absolute uix-t-c">
						<h2>Element Parallax</h2>
						<p>Background without parallax</p>
					</div>
				</div>

			</Parallax>




      <h3>Cropped Parallax (for HTML Element Parallax)</h3>
      {/* ================================================================== */} 
			<div className="uix-height--30 uix-relative--inline uix-relative--inline-clip">
				<Parallax heightClass="mh-100" parallaxElements={true} parallaxElementsTransition="all 0.4s cubic-bezier(0, 0, 0.34, 0.96) 0s"speed={-0.07}>
					<img src={`${rootDirectory}/assets/images/demo/spiral-galaxy-1920x600.jpg`} alt="" style={{marginTop: "-20px"}}/>
					<div className="uix-v-align--table uix-t-c uix-overlay uix-overlay--black uix-overlay--cover position-absolute uix-dir--top">
						<div>
							<h2 className="uix-spacing--no">Parallax only works on inline image 1920 x 600</h2>
						</div>
					</div>
				</Parallax>
			</div>


			
      <h3>Compound Parallax</h3>
      {/* ================================================================== */} 
			<Parallax img={`${rootDirectory}/assets/images/demo/spiral-galaxy-1920x1080.jpg`} heightClass="uix-height--100" fullyVisible={false} offsetTop={150} overlay="rgba(0,0,0,.6)" skew={0} speed={0.4}>
				<Parallax parallaxElements={true} parallaxElementsTransition="all 0.4s cubic-bezier(0, 0, 0.34, 0.96) 0s" speed={-0.4}>
					<div className="uix-typo--color-white">
						<h2>
							Fulscreen + Parallax Element
							<p className="uix-typo--h4">Has Overlay Background</p>
						</h2>
					</div>

				</Parallax>
			</Parallax>




    </>
  );
}

```