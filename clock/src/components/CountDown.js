import React, { Fragment } from 'react';

const CountDown = ({ timerDays, timerHours, timerMinutes, timerSeconds }) => {
    return (
        <Fragment>
            <h1>Count down to 2023</h1>
            <section className="countdown">
                <section>
                    <p>{timerDays} Days</p>
                </section>
                <section>
                    <p>{timerHours} Hours</p>
                </section>
                <section>
                    <p>{timerMinutes} Minutes</p>
                </section>
                <section>
                    <p>{timerSeconds} Seconds</p>
                </section>
            </section>
        </Fragment>
    );
};

CountDown.defaultProps = {
    timerDays: 10,
    timerHours: 10,
    timerMinutes: 10,
    timerSeconds: 10,
};

export default CountDown;