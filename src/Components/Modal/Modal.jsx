import "./Modal.css";
import { Close } from "@mui/icons-material";
import { Tooltip } from "@mui/material";

export const Modal = ({ isOpen, onClose, card }) => {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <Tooltip title="Close">
          <button className="close-button" onClick={onClose}>
            <Close />
          </button>
        </Tooltip>
        <h1 className="font-bold">
          Capsule Serial:
          <span className="ml-3 font-medium">{card?.capsule_serial}</span>
        </h1>
        <h1 className="font-bold">
          Capsule ID:
          <span className="ml-3 font-medium">{card?.capsule_id}</span>
        </h1>
        <h1 className="font-bold">
          Capsule status:
          <span className="ml-3 font-medium">{card?.status}</span>
        </h1>
        <h1 className="font-bold">
          Type:
          <span className="ml-3 font-medium">{card?.type || "unknown"}</span>
        </h1>
        <h1 className="font-bold">
          Details:
          <span className="ml-3 font-medium">{card?.details || "unknown"}</span>
        </h1>
      </div>
    </div>
  );
};
