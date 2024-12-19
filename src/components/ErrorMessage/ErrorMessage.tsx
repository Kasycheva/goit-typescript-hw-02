interface ErrorMessageProps {
  message: string;
}

const ErrorMessage: React.FC<ErrorMessageProps> = ({ message }) => (
  <div style={{ color: 'red', fontSize: '18px', textAlign: 'center' }}>
    <p>{message}</p>
  </div>
);

export default ErrorMessage;
