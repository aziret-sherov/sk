import {CloseIcon, Content, ModalContent, ModalOverlay, Navbar} from "./styles.ts";
import {NavLink} from "../Navigation/styles.ts";

interface Props {
  onClose: () => void;
}

const SlidingModal = ({ onClose }: Props) => {
  return (
    <>
      <ModalOverlay onClick={onClose}>
        <ModalContent>
          <Navbar>
            <CloseIcon onClick={onClose} />
          </Navbar>
          <Content>
              <NavLink href="#">Объекты</NavLink>
              <NavLink href="#">О компании</NavLink>
              <NavLink href="#">Контакты</NavLink>
          </Content>
        </ModalContent>
      </ModalOverlay>
    </>
  );
};

export default SlidingModal;
