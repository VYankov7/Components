import { useState } from "react";
import Modal from "../components/Modal";
import Button from "../components/Button";

function ModalPage() {
  const [showModal, setShowModal] = useState(false);

  const handleClick = () => {
    setShowModal(true)
  };

  const handleClose = () => {
    setShowModal(false)
  };

  const actionBar = <div>
    <Button onClick={handleClose} primary>I Accept</Button>
  </div>
  const modal = <Modal onClose={handleClose} actionBar={actionBar}>
    <p>
      Here is an important agreement for you to accept
    </p>
  </Modal>

  return (
  <div>
    <Button onClick={handleClick} primary>Open Modal</Button>
    {showModal && modal}

    <p>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam auctor porttitor leo, sed tristique ligula luctus ac. Nulla vehicula, leo non pulvinar pulvinar, sapien elit iaculis libero, non elementum purus augue at nisi. Sed ipsum nisi, auctor et velit eget, tempor efficitur massa. Vivamus semper tortor vel malesuada convallis. Suspendisse ultrices purus velit. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Mauris eu suscipit erat, eu varius nulla.
    </p>
    <p>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam auctor porttitor leo, sed tristique ligula luctus ac. Nulla vehicula, leo non pulvinar pulvinar, sapien elit iaculis libero, non elementum purus augue at nisi. Sed ipsum nisi, auctor et velit eget, tempor efficitur massa. Vivamus semper tortor vel malesuada convallis. Suspendisse ultrices purus velit. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Mauris eu suscipit erat, eu varius nulla.
    </p>
    <p>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam auctor porttitor leo, sed tristique ligula luctus ac. Nulla vehicula, leo non pulvinar pulvinar, sapien elit iaculis libero, non elementum purus augue at nisi. Sed ipsum nisi, auctor et velit eget, tempor efficitur massa. Vivamus semper tortor vel malesuada convallis. Suspendisse ultrices purus velit. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Mauris eu suscipit erat, eu varius nulla.
    </p>
    <p>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam auctor porttitor leo, sed tristique ligula luctus ac. Nulla vehicula, leo non pulvinar pulvinar, sapien elit iaculis libero, non elementum purus augue at nisi. Sed ipsum nisi, auctor et velit eget, tempor efficitur massa. Vivamus semper tortor vel malesuada convallis. Suspendisse ultrices purus velit. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Mauris eu suscipit erat, eu varius nulla.
    </p>
    <p>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam auctor porttitor leo, sed tristique ligula luctus ac. Nulla vehicula, leo non pulvinar pulvinar, sapien elit iaculis libero, non elementum purus augue at nisi. Sed ipsum nisi, auctor et velit eget, tempor efficitur massa. Vivamus semper tortor vel malesuada convallis. Suspendisse ultrices purus velit. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Mauris eu suscipit erat, eu varius nulla.
    </p>
    <p>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam auctor porttitor leo, sed tristique ligula luctus ac. Nulla vehicula, leo non pulvinar pulvinar, sapien elit iaculis libero, non elementum purus augue at nisi. Sed ipsum nisi, auctor et velit eget, tempor efficitur massa. Vivamus semper tortor vel malesuada convallis. Suspendisse ultrices purus velit. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Mauris eu suscipit erat, eu varius nulla.
    </p>
    <p>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam auctor porttitor leo, sed tristique ligula luctus ac. Nulla vehicula, leo non pulvinar pulvinar, sapien elit iaculis libero, non elementum purus augue at nisi. Sed ipsum nisi, auctor et velit eget, tempor efficitur massa. Vivamus semper tortor vel malesuada convallis. Suspendisse ultrices purus velit. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Mauris eu suscipit erat, eu varius nulla.
    </p>
    <p>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam auctor porttitor leo, sed tristique ligula luctus ac. Nulla vehicula, leo non pulvinar pulvinar, sapien elit iaculis libero, non elementum purus augue at nisi. Sed ipsum nisi, auctor et velit eget, tempor efficitur massa. Vivamus semper tortor vel malesuada convallis. Suspendisse ultrices purus velit. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Mauris eu suscipit erat, eu varius nulla.
    </p>
    <p>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam auctor porttitor leo, sed tristique ligula luctus ac. Nulla vehicula, leo non pulvinar pulvinar, sapien elit iaculis libero, non elementum purus augue at nisi. Sed ipsum nisi, auctor et velit eget, tempor efficitur massa. Vivamus semper tortor vel malesuada convallis. Suspendisse ultrices purus velit. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Mauris eu suscipit erat, eu varius nulla.
    </p>
    <p>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam auctor porttitor leo, sed tristique ligula luctus ac. Nulla vehicula, leo non pulvinar pulvinar, sapien elit iaculis libero, non elementum purus augue at nisi. Sed ipsum nisi, auctor et velit eget, tempor efficitur massa. Vivamus semper tortor vel malesuada convallis. Suspendisse ultrices purus velit. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Mauris eu suscipit erat, eu varius nulla.
    </p>
   </div>
  );
}

export default ModalPage;