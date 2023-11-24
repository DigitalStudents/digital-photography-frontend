import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { LuShare2 } from "react-icons/lu";
import { useParams } from "react-router-dom";
import { FacebookShareButton, FacebookIcon, TwitterShareButton, XIcon, WhatsappShareButton, WhatsappIcon, LinkedinShareButton, LinkedinIcon } from "react-share";

function Share({ title }) {
  const { productId } = useParams();
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="dark" onClick={handleShow}>
      <LuShare2 />
      </Button>

      <Modal show={show} onHide={handleClose} animation={false}>
        <Modal.Header closeButton>
          <Modal.Title>¡Comparte este producto!</Modal.Title>
        </Modal.Header>
        <Modal.Body style={{display: 'flex', justifyContent:'space-around'}}>
          <FacebookShareButton
            url={`http://127.0.0.1:5173/product/${productId}`}
            title={`Mira este producto ${title}`}
            quote={"Mira este producto"}
          >
            <FacebookIcon size={40} />
          </FacebookShareButton>
          <TwitterShareButton
            url={`http://127.0.0.1:5173/product/${productId}`}
            title={`Mira este producto ${title}`}
            quote={"Mira este producto"}
          >
            <XIcon size={40} />
          </TwitterShareButton>
          <WhatsappShareButton
            url={`http://127.0.0.1:5173/product/${productId}`}
            title={`Mira este producto ${title}`}
            quote={"Mira este producto"}
          >
            <WhatsappIcon size={40} />
          </WhatsappShareButton>
          <LinkedinShareButton
            url={`http://127.0.0.1:5173/product/${productId}`}
            title={`Mira este producto ${title}`}
            quote={"Mira este producto"}
          >
            <LinkedinIcon size={40} />
          </LinkedinShareButton>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cerrar
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default Share;
