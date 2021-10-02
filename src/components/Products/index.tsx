import Text from 'components/Text'

import {
  Box,
  ImageWrapper,
  SubItem,
  OthersProducts,
  Col,
  WrapperSubItem
} from './styles'

type ProductItemProps = {
  name: string
  image: string
}

export type ProductProps = {
  shirts: ProductItemProps[]
  bottons: ProductItemProps[]
  keychains: ProductItemProps[]
  stickers: ProductItemProps[]
  mugs: ProductItemProps[]
}

const Products = ({
  shirts,
  bottons,
  keychains,
  stickers,
  mugs
}: ProductProps) => (
  <Box>
    <ImageWrapper>
      {shirts.map(({ name, image }) => (
        <Col key={`key-shirt-${name}`}>
          <img src={image} />
          <Text>{name}</Text>
        </Col>
      ))}
    </ImageWrapper>
    <OthersProducts>
      <SubItem>
        <Text>Bottons</Text>
        <WrapperSubItem>
          {bottons.map(({ name, image }) => (
            <Col key={`key-botton-${name}`}>
              <img src={image} />
              <Text>{name}</Text>
            </Col>
          ))}
        </WrapperSubItem>
      </SubItem>
      <SubItem>
        <Text>Chaveiros</Text>
        <WrapperSubItem>
          {keychains.map(({ name, image }) => (
            <Col key={`key-keychains-${name}`}>
              <img src={image} />
              <Text>{name}</Text>
            </Col>
          ))}
        </WrapperSubItem>
      </SubItem>
      <SubItem>
        <Text>Adesivos</Text>
        <WrapperSubItem>
          {stickers.map(({ name, image }) => (
            <Col key={`key-stickers-${name}`}>
              <img src={image} />
              <Text>{name}</Text>
            </Col>
          ))}
        </WrapperSubItem>
      </SubItem>
      <SubItem>
        <Text>Canecas</Text>
        <WrapperSubItem>
          {mugs.map(({ name, image }) => (
            <Col key={`key-mugs-${name}`}>
              <img className="mug" src={image} />
              <Text>{name}</Text>
            </Col>
          ))}
        </WrapperSubItem>
      </SubItem>
    </OthersProducts>
  </Box>
)

export default Products
