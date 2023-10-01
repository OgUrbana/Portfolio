import { emailData } from '@/types';

const NotificationEmail = ({ name, email, project, contact }: emailData) => {
  return (
    <div>
      <p>Name: {name},</p>
      <p>Email: {email},</p>
      <p>Contact Info: {contact},</p>
      <p>Project Info: {project}</p>
    </div>
  );
};

export default NotificationEmail;
