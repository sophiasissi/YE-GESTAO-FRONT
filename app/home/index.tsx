import { useRouter } from "expo-router";
import { Container, Logo } from "../home/styles";
import Logon from "../../assets/images/logo_escuro.png";

export default function Home() {
  // const router = useRouter();
  return (
    <Container>
      <Logo source={Logon} />
      
    </Container>
  );
}
