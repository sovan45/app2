// rfc automatically create this function 
import React,{useState} from 'react'

export default function About(props) {

	// define the  hook  here
	const[mystyle,setMyStyle]=useState({
		// initially  set Light Moode
		color: 'black',
		backgroundColor: 'white'
	})
	// Define  the new Hok here 
	const [btntext,setBtnText]=useState("Dark Mood Enable");

	// A arrow function
	const functionForcolorChnage =()=>{
		if(mystyle.color ==="white"){
			setMyStyle({
				color:'black',
				backgroundColor:'white'
			})
			setBtnText("Dark Mood Enabled");
		}
		else{
			setMyStyle({
				color:'white',
				backgroundColor:'black',
				border:'2px solid white'
			})
			setBtnText("Light Mood Enabled");
		}
	}


  return (
	<div className=" container " >
		<h1 style={{backgroundColor: props.mode ==='light'?'#ffc107':'#9ec5fe'}} >About Us</h1>
		<div className="accordion  " id="accordionExample">
			<div className="accordion-item">
				<h2 className="accordion-header">
				<button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne" style={mystyle}>
					Accordion Item #1
				</button>
				</h2>
				<div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
				<div className="accordion-body" style={mystyle} >
					<strong > This is the first item's accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classNamees that we use to style each element. These classNamees control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
				</div>
				</div>
			</div>
			<div className="accordion-item">
				<h2 className="accordion-header">
				<button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo" style={mystyle}>
					Accordion Item #2
				</button>
				</h2>
				<div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
				<div className="accordion-body" style={mystyle}>
					<strong>This is the second item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classNamees that we use to style each element. These classNamees control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
				</div>
				</div>
			</div>
			<div className="accordion-item">
				<h2 className="accordion-header">
				<button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree" style={mystyle}>
					Accordion Item #3
				</button>
				</h2>
				<div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
				<div className="accordion-body" style={mystyle}>
					<strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classNamees that we use to style each element. These classNamees control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
				</div>
				</div>
			</div>
		</div>
		<button onClick={functionForcolorChnage} type="button" className="btn btn-secondary my-3">{btntext}</button>
	</div>
  )
}
 