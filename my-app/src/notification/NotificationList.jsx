import React from "react";
import Notification from "./Notification";

const reservedNotifications = [
    {
        id: 1,
        message: "오늘 일정",
    },
    {
        id: 2,
        message: "점심 시간",
    },
    {
        id: 3,
        message: "저녁 시간",
    },
];

let timer;

class NotificationList extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            notifications: [],
        }
    }

    componentDidMount() {
        console.log('componentDidMount');
        const { notifications } = this.state;
        timer = setInterval(() => {
            if (notifications.length < reservedNotifications.length) {
                const index = notifications.length;
                notifications.push(reservedNotifications[index]);
                this.setState({
                    notifications: notifications,
                });
            } else {
                this.setState({
                    notifications: [],
                });
                clearInterval(timer);
            }
        }, 1000);
    }
    
    render() {
        return (
            <div>
                {this.state.notifications.map((notification)=> {
                    return <Notification 
                            key = {notification.id}
                            id = {notification.id}
                            message = {notification.message} />
                })}
            </div>
        );
    }
}

export default NotificationList;