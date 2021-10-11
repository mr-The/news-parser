import React from 'react'
import { Button, Header, Image, Label, Modal, Segment } from 'semantic-ui-react'

function ModalNews({ modalData, modalOpen, setModalOpen }) {
  const { title, description, image, createDate, url } = modalData

  return (
    <Modal onClose={() => setModalOpen(false)} open={modalOpen}>
      <Segment clearing>
        <Header as="h2">{title}</Header>
        <Label as="span" color="teal" ribbon="right" content={createDate} />
      </Segment>
      <Image fluid src={image} wrapped />
      <Modal.Content>
        <Modal.Description>
          <p>{description}</p>
        </Modal.Description>
      </Modal.Content>
      <Modal.Actions>
        <a href={url} target="_blank" rel="noreferrer">
          <Button
            floated="left"
            content="Оригинал"
            labelPosition="left"
            icon="arrow circle left"
            primary
          />
        </a>
        <Button secondary onClick={() => setModalOpen(false)}>
          Закрыть
        </Button>
      </Modal.Actions>
    </Modal>
  )
}

export default ModalNews
