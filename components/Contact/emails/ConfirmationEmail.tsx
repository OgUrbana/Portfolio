const ConfirmationEmail = ({ name }: { name: string }) => {
  return (
    <div>
      <p>Hello {name},</p>
      <p>
        This is an automated email to let you know that I have received your
        email and will be in contact with you soon!
      </p>
    </div>
  );
};

export default ConfirmationEmail;
