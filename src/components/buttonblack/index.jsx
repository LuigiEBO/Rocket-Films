import { Container } from "./styles";

export function ButtonBlack ({title, loading=false, icon: Icon, ...rest}) {
  return (
    <Container type="button" disabled={loading} {...rest}>
      {Icon && <Icon size={20}/>}
      {loading ? "Carregando..." : title}
    </Container>
  )
}