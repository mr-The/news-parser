import React, { useState } from 'react'
import { Item, Label } from 'semantic-ui-react'
import ModalNews from './ModalNews'

const subText = (str = '') => {
  return str.substr(0, 500) + '...'
}

const Modal = (modalData, modalOpen, setModalOpen) => (
  <ModalNews
    modalData={modalData}
    modalOpen={modalOpen}
    setModalOpen={setModalOpen}
  />
)

const Post = ({ title, description, image, createDate, url }) => {
  const [modalOpen, setModalOpen] = useState(false)
  let modalData = {}

  modalData = { title, description, image, createDate, url }

  const clickPost = () => {
    setModalOpen(!modalOpen)
  }
  return (
    <>
      {modalOpen ? Modal(modalData, modalOpen, setModalOpen) : ''}
      <Item onClick={clickPost}>
        <Item.Image size="medium" src={image} />

        <Item.Content verticalAlign="top">
          <Item.Header as="a">{title}</Item.Header>
          <Item.Description>{subText(description)}</Item.Description>
          <Item.Extra>
            <Label icon="eye" color="teal" content={createDate} />
          </Item.Extra>
        </Item.Content>
      </Item>
    </>
  )
}

export default Post
