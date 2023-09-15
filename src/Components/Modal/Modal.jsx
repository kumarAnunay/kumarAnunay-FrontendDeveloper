import "./Modal.css";
import { Close } from "@mui/icons-material";
import { Tooltip } from "@mui/material";

export const Modal = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <Tooltip title="Close">
          <button className="close-button" onClick={onClose}>
            <Close />
          </button>
        </Tooltip>
        {children}
      </div>
    </div>
  );
};
