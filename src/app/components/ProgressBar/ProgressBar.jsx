import ProgressBar from 'react-bootstrap/ProgressBar';

function Progress({variant1, variant2, variant3, animated1, animated2, animated3}) {
  return (
    <ProgressBar style={{height:"100%", fontSize:"20px"}}>
      <ProgressBar animated={animated1} variant={variant1} now={33} key={1} label={"Selecciona tu producto"} />
      <ProgressBar animated={animated2} variant={variant2} now={33} key={2} label={"Cofirma tu Reserva"} />
      <ProgressBar animated={animated3} variant={variant3} now={34} key={3} label={"Reserva Exitosa"} />
    </ProgressBar>
  );
}

export default Progress;