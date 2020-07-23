import React, { Component } from "react";
import css from "./Timer.module.css";

export default class Timer extends Component {
  state = {
    day: '',
    hour: '',
    minute: '',
    second: ''
  }

  setInt = setInterval(() => {
    const nowDate = Date.now();
    const { targetDate } = this.props;
    const time = targetDate - nowDate;

    this.updateTimer(time);

  }, 1000)

  updateTimer(time) {
    const days = this.pad(Math.floor(time / (1000 * 60 * 60 * 24)));
    const hours = this.pad(Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
    const mins = this.pad(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));
    const secs = this.pad(Math.floor((time % (1000 * 60)) / 1000));

    this.setState({
      day: days,
      hour: hours,
      minute: mins,
      second: secs
    })
  }

  pad(value) {
    return String(value).padStart(2, '0')
  }


  render() {
    const { day, hour, minute, second } = this.state;

    return (
      <div className={css.time}>
        <div className={css.timer}>
          <p className={css.number}>{day}<b className={css.colon}>:</b> <span className={css.span}>дн</span></p>
          <p className={css.number}>{hour}<b className={css.colon}>:</b> <span className={css.span}>год</span></p>
          <p className={css.number}>{minute}<b className={css.colon}>:</b> <span className={css.span}>хв</span></p>
          <p className={css.number}>{second} <span className={css.span}>сек</span></p>
        </div>
      </div>
    )
  }
}