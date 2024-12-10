import React, { useEffect, useState } from "react";

const Yellow = "🟡";
const Red = "🔴";
const Green = "🟢";
const GreenEmpty = " ";
const YellowEmpty = " ";
const RedEmpty = " ";
const GreenEmptyTwo = "";
const YellowEmptyTwo = "";
const RedEmptyTwo = "";


const TrafficLight = () => {
	const [state, setState] = useState(Green);
	
	const changeState = () => {
		setState(YellowEmptyTwo)
		if(state === YellowEmptyTwo){
			setState(RedEmpty)
		}
		else if(state === RedEmpty){
		 	setState(Green)
		};
	};

	const changeStateWithTime = setTimeout( () => {
		changeState()
	}, 6000);

	useEffect( () => {
		changeStateWithTime
	}, [state]);


	const [color, setColor] = useState(GreenEmpty);

	const changeColor = () => {
		setColor(Yellow)
		if(color === Yellow){
			setColor(RedEmptyTwo)
		}
		else if(color === RedEmptyTwo){
			setColor(GreenEmpty)
		};
	};

	const changeColorWithTime = setTimeout( () => {
			changeColor()
		}, 6000);

	useEffect( () => {
		changeColorWithTime
	}, [state]);


	const [light, setLight] = useState(GreenEmptyTwo);
	
	const changeLight = () => {
		setLight(YellowEmpty)
		if(light === YellowEmpty){
			setLight(Red)
		}
		else if(light === Red){
			setLight(GreenEmptyTwo)
		};
	};

	const changeLightWithTime = setTimeout( () => {
		changeLight()
	}, 6000);

	useEffect( () => {
		changeLightWithTime
	}, [light]);


	const backToGreen = () => {
		if(state === RedEmpty){
			setState(Green)
		   };
		if(color === RedEmptyTwo){
			setColor(GreenEmpty)
		};
		if(light === Red){
			setLight(GreenEmptyTwo)
		};
	};


	return (<>
		<div className="trafficLightBackground">
			<div className="trafficLights">
				<div className="trafficLightsGreen">{state}</div>
				<div className="trafficLightsYellow">{color}</div>
				<div className="trafficLightsRed">{light}</div>
			</div>
		</div>	
		<button className="button" onClick={backToGreen}>Press me to move on</button>
	</>);
};

export default TrafficLight;
