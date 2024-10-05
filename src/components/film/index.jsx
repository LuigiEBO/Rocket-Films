import { Container, Text, Tags} from "./styles";
import {FiStar} from "react-icons/fi"
import { Tag } from "../tags";
import { Link } from "react-router-dom";
export function Film({ data, ...rest }) {
  
  return (
    <Container {...rest}>
      <Link to="/details">
        <Text to="/details">
          <h2>{data.name}</h2>
          <p>{data.rating} <FiStar/></p>
          <p>{data.description}</p>
          <Tags>
            {data.tags.map((tag) => (
              <Tag key={tag.id} title={tag.name} />
            ))}
          </Tags>
        </Text>
      </Link>
    </Container>
  )
}