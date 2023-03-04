import thankYou from '../../../assets/images/icon-thank-you.svg'

const StepFive = () => {
    return (
        <div className="container-step stepFive">

            <div className="finish-img">
                <img src={thankYou} alt="thank you" />
            </div>

            <div className="finish-title">
                <h2>Thank you</h2>
            </div>

            <div className="finish-description">
                <p>
                    Thanks for confirming your subscription! We hope
                    you have fun using our platform. If you ever need
                    support, please feel free to email us at
                    support@loremgaming.com.
                </p>
            </div>

        </div>
    )
}

export default StepFive