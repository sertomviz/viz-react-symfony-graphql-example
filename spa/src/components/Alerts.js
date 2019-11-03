import React from 'react';
import {GET_ALERTS} from '../constants/graphConstants';
import { useQuery, useApolloClient } from '@apollo/react-hooks';

  /* -- handles showing and closing of notifications -- */
const Alerts = () => {

  const client = useApolloClient();

  const handleAlertClosing = (event) => {
    const target = Number(event.currentTarget.dataset.index);
    const data = {
      alerts: [...alerts.filter((item, index) => index !== target)],
    };
    client.writeData({ data });
    document.getElementById(`Notification_${target}`).style.display = "none";
  }

  const {alerts} = client.readQuery({ query: GET_ALERTS });
  const alertsDivs = [];
  alerts.forEach((item, index) => {
    const alert = (
      <div id={`Notification_${index}`} key={Symbol(index).toString()} className={`alert alert-${item.tag} fade show`}>
        <button type="button" className="close" onClick={handleAlertClosing} data-index={index}>
          <span aria-hidden="true">&times;</span>
        </button>
        {item.message}
      </div>
    );
    alertsDivs.push(alert);
  });

  return alertsDivs.length > 0 ? alertsDivs : null;
}

export default Alerts;
