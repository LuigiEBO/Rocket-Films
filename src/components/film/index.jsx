import { Container, Text, Tags} from "./styles";
import {FiStar} from "react-icons/fi"
import { Tag } from "../tags";
import { Link } from "react-router-dom";
export function Film() {
  return (
    <Container>
      <Link to="/details">
        <Text to="/details">
          <h2>Interestellar</h2>
          <FiStar /> <FiStar /> <FiStar /> <FiStar /> <FiStar />
          <p>
            Pragas nas colheitas fizeram a civilização humana regredir para uma
            sociedade agrária em futuro de data desconhecida. Cooper, ex-piloto
            da NASA, tem uma fazenda com sua família. Murphy, a filha de dez
            anos de Cooper, acredita que seu quarto está assombrado por um
            fantasma que tenta se...
          </p>
          <Tags>
            <Tag title="Drama" /> <Tag title="Ficção Científica" />
            <Tag title="Diversão" />
          </Tags>
        </Text>
      </Link>
    </Container>
  )
}