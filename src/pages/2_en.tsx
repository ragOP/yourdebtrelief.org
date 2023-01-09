import React, {useState, useEffect} from 'react';
import './styles.scss'

import { scrollTo } from '../utils';

import Head_img from '../assets/headline.png'
import Head_bg from '../assets/14_head.png'

export default function Second_EN() {

    useEffect(() => {
		window.document.title="Check Your Eligibility Now"
	}, [])

	const [quiz, setQuiz] = useState("Are you currently on Medicare or Medicaid?")
	const [step, setStep] = useState("process")
	const [result, setResult] = useState(true)
	const [min, setMin] = useState(3)
	const [second, setSecond] = useState<any>(0)

	const [time, setTime] = React.useState(+new Date())      
	
	const stepProcess = () => {
		if(step==="Reviewing Your Answers..."){
		setTimeout(() => {
			setStep("Matching With Best Options...")
			}, 1500);
		}
		if(step==="Matching With Best Options..."){
		setTimeout(() => {
			setStep("Confirming Eligibility...")
			}, 1500);
		}
		if(step==="Confirming Eligibility..."){
		setTimeout(() => {
			setStep("completed")
			}, 1500);
		}

		if(step==="completed"){
		const startTime:any = new Date();
		const Timer = setInterval(()=> {
			const nowTime:any = new Date();
			// setMin(min+1)
			setSecond((180-Math.round((nowTime-startTime)/1000))%60)
			setMin(Math.floor((180-Math.round((nowTime-startTime)/1000))/60))
		}, 1000)
		}
	}

	// React.useEffect(() => {
	//                 // getInfo()
	//                 console.log(time);
	//                 stepProcess()
	//                 const timer = setTimeout(() => setTime(+new Date()), 1000)
	//                 return () => clearTimeout(timer)
	//         }, [time]);


	useEffect(() => {
		stepProcess()
	}, [step])

	const topScroll = (id: any) => {
			// window.scrollTo(0, 0);
			// window.innerWidth < 1200 ? setIsMobile(false) : scrollTo({ id });
			scrollTo({ id });
		}

	const handleQuizP = () => {
		topScroll("btn");
		if(quiz === "Are you currently on Medicare or Medicaid?"){
		setQuiz("Do you make less than $50,000/year?")
		setResult(false)
		}else{
		setStep("Reviewing Your Answers...")
		}
	}

	const handleQuizN = () => {
		topScroll("btn");
		if(quiz === "Are you currently on Medicare or Medicaid?"){
		setQuiz("Do you make less than $50,000/year?")
		}else{
		setStep("Reviewing Your Answers...")
		}
	}
    return(
        <div>
			<div className='top-sticky'>USA Savings Journal</div>
			{step==="process"?
				<>
				<div className='main-container'>
					<div className='main-descrition'>
					{/* <div className='main-des-title'>Biden extiende el plan de seguro de salud gratuito para los estadounidenses<br /> que ganan <span style={{backgroundColor:"yellow"}}>menos de $ 50k / año</span></div> */}
					<img src = {Head_img} alt = "head" width = "100%" />
					<img src = {Head_bg} alt = "head" width = "80%" style = {{marginLeft:"10%"}} />
					<div className='mian-des-1-left'>Americans making less than $50,000 that is NOT on Medicaid or Medicare can activate their Free Health Benefits starting this week. All you have to do is take the free quiz below to see if you're eligible.</div>
					<div className='mian-des-1-left'>If you are, you can claim up to $1400/month in health benefits to completely cover the cost of health insurance, dental, vision, treatments, and more.</div>
					<div className='mian-des-1-left'>Just don't wait too long, because the deadline to claim your $2800 benefit ends January 15th.!</div>
					<div className='main-des-2'>Answer 2 simple questions below to <span style={{borderBottom:"2px red solid"}}>check eligibility</span> in just 30 seconds</div>
					</div>
					<div className='survey'>
					<div className='quiz' id='btn'>{quiz}</div>
					<div className='answer'>
						<div className='answer-btn' onClick={handleQuizP}>Yes</div>
						<div className='answer-btn' onClick={handleQuizN}>No</div>
					</div>
					</div>
				</div>
				</>:
				(
				step!=="process" && step!=="completed"?
					<div className='checking' style={{fontWeight:"700"}}>
					{step}
					</div>:
					<div className='checking'>
					{(result === true)?
						<>
						<div className='congrats'>Congratulations, YOU QUALIFY!</div>
						<div className='top-description'>Make a <span style={{fontWeight:"700", borderBottom:"2px solid"}}>quick call</span> to claim your health subsidy!</div>
						<div className='spots-count'>Spots remaining: 4</div>
						<div className='tap-direction'>👇 TAP BELOW TO CALL 👇</div>
						<div className='call-btn'>
							<a href = "tel:+18332464598">CALL NOW: (833)-246-4598</a>
						</div>
						<div className='sub-title'>We Have Reserved Your Spot</div>
						<div className='sub-description'>Due to high call volume, your official agent is waiting for only <span style={{fontWeight:"700"}}>3 minutes</span>, then your spot will not be reserved.</div>
						<div className='timer'>
							<div className='timer-cell'>{min}</div>
							<div className='timer-cell'>:</div>
							<div className='timer-cell'>{second}</div>
						</div>
						</>:
						<>
						<div className='congrats-false'>Sorry, We Couldn't Qualify You For $2800 In Health Benefits, But There Is Something Better For You!</div>
						<div className='top-description-false'>You Could Qualify For <span style={{fontWeight:"700"}}>Over $5,100 In Medicare Benefits!</span> </div>
						<div className='top-description-false'>Tap Below For The 60 Second Quiz To See How Much You Are Eligible For.</div>
						<div className='call-btn-false'>
                            <a href = "https://medicareplan.com/medicare?token=632846123-MVKQ-xduZii7gja9hFPsPJYQUs_k1stcmDFGjNWsgJHrStxyCufc2KWhnEKp23_j#medicare_flow/Medicare_Currently_Enrolled">Claim Up To $5,100 In Benefits</a>
						</div>
						<div className='sub-description-false'>Hurry! The window to claim your benefits could end in:</div>
						<div className='timer'>
						<div className='timer-cell'>{min}</div>
						<div className='timer-cell'>:</div>
						<div className='timer-cell'>{second}</div>
						</div>
					</>
					}
					
					</div>
				)
			}
			<div className='footer'>
				<div className='terms'>Terms & Conditions | Privacy Policy</div>
				<div className='copyright'>Copyright © 2022 - All right reserved USA Savings Journal.</div>
			</div>
		</div>
    )
} 