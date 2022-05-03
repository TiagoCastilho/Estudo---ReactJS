import React from "react";
import { Container, ModalBody } from "./styled";

export default ({status, setStatus, children}) => {
    const handleModalClick = (e) => {
        if(e.target.classList.contains('modalbg')) {
            setStatus(false);
        }
    }

    return (
        <Container 
            className="modalbg"
            status={status} 
            onClick={handleModalClick}>
            <ModalBody>
                {children}
            </ModalBody>
        </Container>
    );
}