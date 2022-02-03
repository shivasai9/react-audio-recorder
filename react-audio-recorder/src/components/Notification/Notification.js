import './Notification.css';

function Notification() {
  return (
    <div className="notification">
      <h3>Recording is in progress...</h3>
      <h3>Recording Stoped...</h3>
      <h3>Recording Paused...</h3>
      <h3>Recording Saved Successfully...</h3>
      <h3>Recording Saving is in progress...</h3>
    </div>
  );
}

export default Notification;
