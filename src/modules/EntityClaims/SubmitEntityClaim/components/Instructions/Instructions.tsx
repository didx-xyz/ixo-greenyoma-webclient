import * as React from 'react'
import { NavLink } from 'react-router-dom'
import ShortText from 'assets/icons/ShortText'
import DatePicker from 'assets/icons/DatePicker'
import LongText from 'assets/icons/LongText'
import Selection from 'assets/icons/Selection'
import QRCode from 'assets/icons/QRcode'
import QRCodeScan from 'assets/icons/QRcodeScan'
import Location from 'assets/icons/Location'
import UploadImage from 'assets/icons/UploadImage'
import UploadFile from 'assets/icons/UploadFile'
import UploadAudio from 'assets/icons/UploadAudio'
import UploadVideo from 'assets/icons/UploadVideo'
import Validation from 'assets/icons/Validation'
// When we add more types then add the relevant icons
/*
 */
import SelectPicture from 'assets/icons/SelectPicture'
import {
  Container,
  ContentWrapper,
  ListItems,
  ButtonWrapper,
  SubHeader,
} from './Instructions.styles'

interface Props {
  backLink: string
  listItems: { control: string; title: string }[]
  formLink: string
}

const Instructions: React.FunctionComponent<Props> = ({
  backLink,
  listItems,
  formLink,
}) => {
  const icons = {
    text: ShortText,
    textarea: LongText,
    checkboxes: Selection,
    imagecheckboxes: SelectPicture,
    radio: Selection,
    singledateselector: DatePicker,
    daterangeselector: DatePicker,
    qrcode: QRCode,
    qrcodescan: QRCodeScan,
    locationselector: Location,
    imageupload: UploadImage,
    avatarupload: UploadImage,
    documentupload: UploadFile,
    videoupload: UploadVideo,
    audioupload: UploadAudio,
    emailvalidation: Validation,
    phonevalidation: Validation,
  }

  return (
    <Container>
      <ContentWrapper>
        <h1>Submit a claim</h1>
        <SubHeader>
          Thank you for being interested in our project. In order to complete
          the claim you’ll need to complete the following:
        </SubHeader>
        <ListItems>
          {listItems.map(
            (item, index): JSX.Element => {
              return (
                <div key={index}>
                  {React.createElement(icons[item.control], {
                    fill: '#C3D0E5',
                  })}

                  {item.title}
                </div>
              )
            },
          )}
        </ListItems>
      </ContentWrapper>
      <ButtonWrapper>
        <NavLink className="close-button" to={backLink}>
          Come back later
        </NavLink>
        <NavLink className="start-button" to={formLink}>
          Start
        </NavLink>
      </ButtonWrapper>
    </Container>
  )
}

export default Instructions