import React,{useContext} from 'react'
import AlertComtext from '../../context/alert/alertContext'

const Alerts = () => {
    const alertContext = useContext(AlertComtext);

    return (
        alertContext.alerts.length>0&& alertContext.alerts.map(alert=> 
            <div key={alert.id} className={`alert alert-${alert.type}`}>
                <i className="fas fa-info-circle"/> {alert.msg}
            </div>)
    )
}

export default Alerts
