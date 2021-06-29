import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';

const Alerta = withReactContent(Swal);

export function success(props) {
  return Alerta.fire({
    position: 'top-right',
    background: '#4ACA61',
    timerProgressBar: true,
    showConfirmButton: false,
    timer: 1810,
    html: `<span style="color: #FFF; font-size: 1.5rem;font-weight: bold">${props}</span>`,
  });
}

export function danger(props) {
  return Alerta.fire({
    position: 'top-right',
    background: '#FD6161',
    timerProgressBar: true,
    showConfirmButton: false,
    timer: 1810,
    html: `<span style="color: #FFF; font-size: 1.5rem;font-weight: bold">${props}</span>`,
  });
}